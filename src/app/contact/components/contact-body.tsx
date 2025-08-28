'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRecaptchaV2 } from 'react-hook-recaptcha-v2'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Icons } from '@/components/utils/icons'

import { useDebugMode } from '@/hooks/use-debug-mode'
import { FormBodyData, FormBodyDataSchema, ResultType } from '../types/contact'
import { errorText, inputElements } from '../constants/contact'

import { InputText } from './input-text'

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
  useEffect(() => {
    const { current } = parentRef
    if (!current) return
    if (loading) {
      current.setAttribute('inert', '')
    } else {
      current.removeAttribute('inert')
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <ul className='mb-10'>
              {inputElements.map((elem, index) => {
                const { name, textarea, row, label } = elem
                return (
                  <li key={index} className='mb-6'>
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
          <Button component='link' href='/' icon={<Icons.home />}>
            HOME
          </Button>
        </div>
      </main>
    </>
  )
}
