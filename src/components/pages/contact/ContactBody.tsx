'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRecaptchaV2 } from 'react-hook-recaptcha-v2'

import { TextBtn, Title, InputText, LoadingSpinner } from '@/components'
import { useDebugMode } from '@/hooks'
import { FormBodyData, FormBodyDataSchema, ResultType } from '@/types'
import { errorText, inputElements } from '@/const'

const className = {
  main: 'pt-20px mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px `,
  list: `mb-40px`,
  loading: `fixed inset-0 z-[10] m-auto bg-opacity-50 bg-[#000] flex items-center justify-center`,
  error: 'text-16px pb-30px text-[#f00] font-bold',
  listChild: `mb-25px`,
  submit: `block bg-[#000] w-[200px] mx-auto p-8px text-[#fff] font-bold disabled:opacity-30`,
  recaptcha: `flex items-center justify-center pb-40px`,
  back: `border-t-1 border-border text-center pt-40px pb-40px mt-40px`,
}

type FormDataType = FormBodyData & FieldValues

type ErrorType = { [key: string]: string }

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

export function ContactBody() {
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
        <div className={className.loading}>
          <LoadingSpinner />
        </div>
      )}
      <main className={className.main} ref={parentRef}>
        <Title title='CONTACT' text='お仕事のお問い合わせはこちらからどうぞ' />
        {error && <div className={className.error}>{error}</div>}
        <div className={className.body}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className={className.list}>
              {inputElements.map((elem, index) => {
                const { name, textarea, row, label } = elem
                return (
                  <li key={index} className={className.listChild}>
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
            <div className={className.recaptcha}>
              <div ref={recaptchaRef}></div>
            </div>
            <button className={className.submit} type='submit' disabled={!token}>
              送信
            </button>
          </form>
        </div>
        <div className={className.back}>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
