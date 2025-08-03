'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRecaptchaV2 } from 'react-hook-recaptcha-v2'
import { zodResolver } from '@hookform/resolvers/zod'

import { TextBtn } from '@/components/common/TextBtn'
import { Title } from '@/components/common/Title'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

import { useDebugMode } from '@/hooks'
import { FormBodyData, FormBodyDataSchema, ResultType } from '@/types'
import { errorText, inputElements } from '@/const'

import { InputText } from './InputText'

type FormDataType = FormBodyData & FieldValues

type ErrorType = { [key: string]: string }

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

export const ContactBody: React.FC = () => {
  const { DebugModal, debug } = useDebugMode({ debug: false })
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
  useEffect(() => {
    const { current } = parentRef
    if (!current) return
    loading ? current.setAttribute('inert', '') : current.removeAttribute('inert')
  }, [loading])

  const frontInvalidErrors = useMemo(() => {
    const newErrors: ErrorType = {}
    for (const key in errors) {
      newErrors[key] = errors[key]?.message as string
    }
    return newErrors
  }, [errors])

  const getError = useCallback(
    (key: string): string | undefined =>
      frontInvalidErrors[key] || serverInvalidErrors[key],
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
            err[data[i].path[0]] = data[i].message
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
      <DebugModal />
      {loading && (
        <div className='fixed inset-0 z-[10] m-auto flex items-center justify-center bg-[#000] bg-opacity-50'>
          <LoadingSpinner />
        </div>
      )}
      <main className='mx-20px max-w-[800px] pt-20px md:mx-auto' ref={parentRef}>
        <Title title='Contact' text='お仕事のお問い合わせはこちらから' />
        {error && <div className='pb-30px text-16px font-bold text-[#f00]'>{error}</div>}
        <div className='mb-40px'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className='mb-40px'>
              {inputElements.map((elem, index) => {
                const { name, textarea, row, label } = elem
                return (
                  <li key={index} className='mb-25px'>
                    <InputText
                      name={name}
                      textarea={textarea}
                      label={label}
                      {...(row ? { row } : {})}
                      register={register}
                      getError={getError}
                    />
                  </li>
                )
              })}
            </ul>
            <div className='flex items-center justify-center pb-40px'>
              <div ref={recaptchaRef} />
            </div>
            <button
              className='mx-auto block w-[200px] bg-[#000] p-8px font-bold text-[#fff] disabled:opacity-30'
              type='submit'
              disabled={!token}
            >
              送信
            </button>
          </form>
        </div>
        <div className='mt-40px border-t-1 border-border pb-40px pt-40px text-center'>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
