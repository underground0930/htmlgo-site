/**
 * お問い合わせフォーム用カスタムフック
 * フォームの状態管理、バリデーション、送信処理を管理
 */

import { useCallback, useMemo, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { FormBodyData, ResultType } from '../schema'
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

  const submitForm = useCallback(async (data: FormDataType, token: string | null) => {
    if (!token) return

    setLoading(true)
    setCommonError('')
    setServerInvalidErrors({})

    try {
      const response = await fetch('/contact/api', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          ...data,
          token,
        }),
      })

      if (!response.ok && response.status !== 304) {
        throw new Error('response')
      }

      const result = (await response.json()) as ResultType

      if (result.success) {
        window.location.href = '/contact/thanks'
        return
      }

      const { type, data: errorData } = result.error
      if (type === 'invalid') {
        const err: ErrorType = {}
        for (let i = 0; i < errorData.length; i++) {
          const pathKey = errorData[i].path[0]
          if (typeof pathKey === 'string') {
            err[pathKey] = errorData[i].message
          }
        }
        setServerInvalidErrors(err)
        return
      }

      setCommonError(errorData)
    } catch {
      setCommonError('予期せぬエラーが発生しました。')
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    register,
    handleSubmit,
    loading,
    commonError,
    getError,
    submitForm,
  }
}
