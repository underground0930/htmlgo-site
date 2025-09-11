'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRecaptchaV2 } from 'react-hook-recaptcha-v2'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { InputWithRHF } from '@/components/ui/form/input'
import { Label } from '@/components/ui/form/label'
import { ErrorText } from '@/components/ui/form/error-text'

import { useDebugMode } from '@/hooks/use-debug-mode'
import { FormBodyData, FormBodyDataSchema, ResultType } from '../types/contact'
import { errorText, inputElements } from '../constants/contact'

type FormDataType = FormBodyData & FieldValues

type ErrorType = { [key: string]: string }

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

export const ContactBody = () => {
  const { debug } = useDebugMode({ debug: false })
  const [token, setToken] = useState<string | null>(null)
  const parentRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [serverInvalidErrors, setServerInvalidErrors] = useState<ErrorType>({})
  const { recaptchaRef } = useRecaptchaV2({
    sitekey,
    callback: (token) => setToken(token),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: debug ? undefined : zodResolver(FormBodyDataSchema),
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

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    if (!token) return
    setLoading(true)
    setError('')

    parentRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    await fetch('/contact/api', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        ...data,
        ...(debug ? { debug: true } : {}),
        token,
      }),
    })
      .then((response) => {
        if (response.ok || response.status === 304) {
          return response.json()
        }
        throw Error('response')
      })
      .then((result: ResultType) => {
        if (result.success) {
          location.href = '/contact/thanks'
          return
        }
        const { type, data } = result.error
        if (type === 'invalid') {
          const err: ErrorType = {}
          for (let i = 0; i < data.length; i++) {
            const pathKey = data[i].path[0]
            if (typeof pathKey === 'string') {
              err[pathKey] = data[i].message
            }
          }
          setServerInvalidErrors(err)
          return
        }
        setError(errorText[type])
      })
      .catch(() => setError(errorText['server']))
      .finally(() => setLoading(false))
  }

  return (
    <>
      {loading && (
        <div className='bg-opacity-50 fixed inset-0 z-10 m-auto flex items-center justify-center bg-black'>
          <LoadingSpinner />
        </div>
      )}
      <main className='mx-5 max-w-[800px] md:mx-auto' ref={parentRef}>
        <Title title='Contact' text='お仕事のお問い合わせはこちらから' />
        {error && <div className='pb-8 font-bold text-[#f00]'>{error}</div>}
        <div className='mb-10'>
          <form
            inert={loading}
            onSubmit={(e) => {
              e.preventDefault()
              void handleSubmit(onSubmit)()
            }}
          >
            <div className='mb-10 space-y-6'>
              {/* お名前 */}
              <div>
                <Label htmlFor='username' required>
                  お名前
                </Label>
                <InputWithRHF<FormDataType>
                  id='username'
                  name='username'
                  register={register}
                  error={!!getError('username')}
                  placeholder='お名前を入力してください'
                />
                <ErrorText error={getError('username')} />
              </div>

              {/* 会社名 */}
              <div>
                <Label htmlFor='company'>会社名</Label>
                <InputWithRHF<FormDataType>
                  id='company'
                  name='company'
                  register={register}
                  error={!!getError('company')}
                  placeholder='会社名を入力してください（任意）'
                />
                <ErrorText error={getError('company')} />
              </div>

              {/* メールアドレス */}
              <div>
                <Label htmlFor='email' required>
                  メールアドレス
                </Label>
                <InputWithRHF<FormDataType>
                  id='email'
                  name='email'
                  type='email'
                  register={register}
                  error={!!getError('email')}
                  placeholder='example@example.com'
                />
                <ErrorText error={getError('email')} />
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <Label htmlFor='detail' required>
                  お問い合わせ内容
                </Label>
                <textarea
                  id='detail'
                  rows={15}
                  className='border-border block w-full resize-none rounded-[4px] border p-2 text-base outline-[#EAC7C8] focus:bg-[#FBF6F5]'
                  placeholder='お問い合わせ内容を詳しくお聞かせください'
                  {...register('detail')}
                />
                <ErrorText error={getError('detail')} />
              </div>
            </div>
            <div className='flex items-center justify-center pb-10'>
              <div ref={recaptchaRef} />
            </div>
            <div className='flex items-center justify-center'>
              <Button variant='primary' size='lg' disabled={!token} type='submit'>
                送信
              </Button>
            </div>
          </form>
        </div>
        <div className='border-border mt-10 border-t pt-10 pb-10 text-center'>
          <Button component='link' href='/' icon='home'>
            HOME
          </Button>
        </div>
      </main>
    </>
  )
}
