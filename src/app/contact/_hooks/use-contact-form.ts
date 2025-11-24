/**
 * お問い合わせフォーム用カスタムフック
 * フォームの状態管理、バリデーション、送信処理を管理
 * 新しいスキーマ形式に対応
 */

import { useCallback, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { FormBodyData, ContactApiResponse, ValidationError } from '../_schema'
import { FormBodyDataSchema } from '../_schema'

type FormDataType = FormBodyData & FieldValues

export const useContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [serverOtherError, setServerOtherError] = useState<string>('')
  const [serverInvalidErrors, setServerInvalidErrors] = useState<ValidationError[]>([])

  // フロントエンドバリデーションの制御フラグ
  const DISABLE_FRONTEND_VALIDATION = false // true にするとバリデーション無効

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: DISABLE_FRONTEND_VALIDATION
      ? undefined
      : async (values, context, options) => {
          const resolver = zodResolver(FormBodyDataSchema)
          const result = await resolver(values, context, options)
          return result
        },
  })

  const formatedFrontInvalidError = (key: string): string | false => {
    if (typeof errors[key]?.message === 'string') {
      return errors[key]?.message
    }
    return false
  }

  const formatedServerInvalidError = (key: string): string | false => {
    const result = serverInvalidErrors.find((error) => error.path[0] === key)
    return result ? result.message : false
  }

  const formatedInvalidError = (key: string) => {
    return formatedFrontInvalidError(key) || formatedServerInvalidError(key)
  }

  const submitForm = useCallback(async (data: FormDataType, token: string | null) => {
    setLoading(true)
    setServerOtherError('')
    setServerInvalidErrors([])

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
      if (error.type === 'validation') {
        setServerInvalidErrors(error.details)
      } else {
        setServerOtherError(error.message)
      }
    } catch (error) {
      console.error('Submit form error:', error)
      setServerOtherError('通信エラーが発生しました。しばらく時間を置いてからお試しください。')
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    setValue,
    watch,
    register,
    handleSubmit,
    loading,
    submitForm,
    formatedInvalidError,
    serverOtherError,
  }
}
