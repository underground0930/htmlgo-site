/**
 * お問い合わせフォーム用カスタムフック
 * フォームの状態管理、バリデーション、送信処理を管理
 * 新しいスキーマ形式に対応
 */

import { useCallback, useMemo, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { FormBodyData, ContactApiResponse, ValidationError } from '../schema'
import { FormBodyDataSchema } from '../schema'

type FormDataType = FormBodyData & FieldValues
type ErrorType = { [key: string]: string }

export const useContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [commonError, setCommonError] = useState<string>('')
  const [serverInvalidErrors, setServerInvalidErrors] = useState<ErrorType>({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(FormBodyDataSchema),
  })

  console.log(errors)

  const frontInvalidErrors = useMemo(() => {
    const newErrors: ErrorType = {}
    for (const key in errors) {
      newErrors[key] = errors[key]?.message as string
    }
    return newErrors
  }, [errors])

  const getError = useCallback(
    (key: string): string | undefined => frontInvalidErrors[key] || serverInvalidErrors[key],
    [frontInvalidErrors, serverInvalidErrors],
  )

  const processValidationErrors = useCallback((validationErrors: ValidationError[]) => {
    const errorMap: ErrorType = {}
    for (const error of validationErrors) {
      const fieldName = error.path[0]
      if (typeof fieldName === 'string') {
        errorMap[fieldName] = error.message
      }
    }
    setServerInvalidErrors(errorMap)
  }, [])

  const submitForm = useCallback(
    async (data: FormDataType, token: string | null) => {
      if (!token) {
        setCommonError('reCAPTCHAの認証が必要です。')
        return
      }

      setLoading(true)
      setCommonError('')
      setServerInvalidErrors({})

      try {
        const response = await fetch('/contact/api', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            token,
          }),
        })

        const result = (await response.json()) as ContactApiResponse

        if (result.success) {
          // 成功時の処理
          window.location.href = '/contact/thanks'
          return
        }

        // エラー処理の統一化
        const { error } = result

        switch (error.type) {
          case 'validation':
            // バリデーションエラーの処理
            if (error.details) {
              processValidationErrors(error.details)
            } else {
              setCommonError(error.message)
            }
            break

          case 'recaptcha':
          case 'mail':
          case 'server':
            // その他のエラーはcommonErrorとして表示
            setCommonError(error.message)
            break

          default:
            setCommonError('予期せぬエラーが発生しました。')
        }
      } catch (error) {
        console.error('Submit form error:', error)
        setCommonError('通信エラーが発生しました。しばらく時間を置いてからお試しください。')
      } finally {
        setLoading(false)
      }
    },
    [processValidationErrors],
  )

  return {
    register,
    handleSubmit,
    loading,
    commonError,
    getError,
    submitForm,
  }
}
