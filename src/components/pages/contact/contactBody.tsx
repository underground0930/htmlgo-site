'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecaptchaV2 } from 'react-hook-recaptcha-v2'

import useRecaptcha from '@/hooks/useReCaptcha'
import useDebugMode from '@/hooks/useDebugMode'

import TextBtn from '@/components/common/textBtn'
import Title from '@/components/common/title'

import { errorText } from '@/const/contact'

import { FormBodyData, FormBodyDataSchema, ResultType } from '@/types/contact'

import { InputText } from './InputText'

const className = {
  main: 'pt-20px mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px `,
  list: `mb-40px`,
  error: 'text-16px pb-30px text-[#f00] font-bold',
  listChild: `mb-25px`,
  submit: `block bg-[#000] w-[200px] mx-auto p-8px text-[#fff] font-bold disabled:opacity-30`,
  recaptcha: `flex items-center justify-center pb-40px`,
  back: `border-t-1 border-border text-center pt-40px pb-40px mt-40px`,
}

const inputElements = [
  {
    name: 'username',
    label: 'お名前 [必須]',
  },
  {
    name: 'company',
    label: '会社名',
  },
  {
    name: 'email',
    label: 'メールアドレス [必須]',
  },
  {
    name: 'detail',
    textarea: true,
    label: 'お問い合わせ [必須]',
    row: 15,
  },
]

type ErrorType = { [key: string]: string }

const targetId = 'rechapchaTarget'
const scriptId = 'rechapchaScriptId'
const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

export default function ContactBody() {
  const { DebugModal, debug } = useDebugMode({ debug: false })
  const parentRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [serverInvalidErrors, setServerInvalidErrors] = useState<ErrorType>({})
  const { recaptchaRef, recaptchaToken } = useRecaptchaV2({
    sitekey,
    targetId,
    scriptId,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: debug ? undefined : zodResolver(FormBodyDataSchema) })

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

  const onSubmit = async (data: FormBodyData) => {
    if (!recaptchaToken) return
    setLoading(true)
    setError('')

    parentRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    await fetch('/contact/api', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        ...data,
        ...(debug ? { dev: true } : {}),
        token: recaptchaToken,
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
          for (let key in data) {
            err[data[key].path[0]] = data[key].message
          }
          setServerInvalidErrors(err)
          return
        }
        setError(errorText[type])
      })
      .catch((error) => setError(errorText['server']))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <DebugModal />
      <main className={className.main} ref={parentRef}>
        <Title title='CONTACT' text='お仕事のお問い合わせはこちらからどうぞ' />
        {error && <div className={className.error}>{error}</div>}
        <div className={className.body}>
          <form
            className={`${loading ? 'opacity-50' : 'opacity-100'}`}
            onSubmit={handleSubmit((d) => {
              const { username, company, email, detail } = d
              onSubmit({ username, company, email, detail })
            })}
          >
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
              <div id={targetId} ref={recaptchaRef}></div>
            </div>
            <button
              className={className.submit}
              type='submit'
              disabled={recaptchaToken ? false : true}
            >
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
