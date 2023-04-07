'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import Script from 'next/script'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import TextBtn from '@/components/common/textBtn'
import Title from '@/components/common/title'

import { FormBodyData, FormBodyDataSchema, ResultType } from '@/types/contact'

import { InputText } from './InputText'

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px `,
  list: `mb-40px`,
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

const debug = true

export default function ContactBody() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const parentRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [serverInvalidErrors, setServerInvalidErrors] = useState<ErrorType>({})
  const [result, setResult] = useState<string>('')

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
    (key: string): string | undefined => {
      return frontInvalidErrors[key] || serverInvalidErrors[key]
    },
    [frontInvalidErrors, serverInvalidErrors],
  )

  const onChange = (e) => {
    console.log(e)
  }
  const onSubmit = async (data: FormBodyData) => {
    const recapcha = recaptchaRef.current
    const recaptchaValue = recapcha?.getValue()
    if (!recapcha || !recaptchaValue) return
    recapcha.reset()

    setLoading(true)
    setResult('')

    parentRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    await fetch('/contact/api', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        ...data,
        ...(debug ? { dev: true } : {}),
        recaptchaValue,
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
          alert('success')
          // location.href = '/contact/thanks'
          return
        }
        const { type, data } = result.error
        if (type === 'failed_mail') {
          setResult('メールの送信に失敗しました')
          return
        }
        if (type === 'invalid') {
          const err: ErrorType = {}
          for (let key in data) {
            err[data[key].path[0]] = data[key].message
          }
          setServerInvalidErrors(err)
          return
        }
      })
      .catch((error) => setResult('サーバーとの通信でエラーが発生しました'))
    setLoading(false)
  }

  useEffect(() => {
    if (window.grecaptcha) {
      window.contact_timer = window.setTimeout(window.onloadCallback, 200)
    }
    return () => {
      clearInterval(window.contact_timer)
      if (window.grecaptcha) {
        window.grecaptcha.reset(window.contact_grecaptcha_id)
      }
    }
  }, [])

  return (
    <>
      <main className={className.main} ref={parentRef}>
        <Title title='CONTACT' text='お仕事のお問い合わせはこちらからどうぞ' />
        {result && <div>{result}</div>}
        <div className={className.body}>
          <form
            className={`${loading ? 'opacity-50' : 'opacity-100'}`}
            onSubmit={handleSubmit((d) => onSubmit(d))}
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
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.RECAPTCHA_SITE_KEY as string}
                onChange={onChange}
              />
            </div>
            <button className={className.submit} type='submit'>
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
