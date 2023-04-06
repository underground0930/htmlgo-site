'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Script from 'next/script'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import TextBtn from '@/components/common/textBtn'
import Title from '@/components/common/title'

import { FormBodyData, FormBodyDataSchema, ResultType } from '@/types/contact'

import { Input } from './Input'

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px `,
  list: `mb-40px`,
  listChild: `mb-25px`,
  submit: `block bg-[#000] w-[200px] mx-auto p-8px text-[#fff] font-bold disabled:opacity-30`,
  recaptcha: `flex items-center justify-center pb-40px`,
  back: `border-t-1 border-border text-center pt-40px pb-40px mt-40px`,
}

const debug = true

export default function ContactBody() {
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [serverInvalidErrors, setServerInvalidErrors] = useState<{
    [key: string]: string
  }>({})
  const [result, setResult] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: debug ? undefined : zodResolver(FormBodyDataSchema) })

  useEffect(() => {
    if (!formRef.current) return

    if (loading) {
      formRef.current.setAttribute('inert', '')
      return
    }
    formRef.current.removeAttribute('inert')
  }, [loading])

  const frontInvalidErrors = useMemo(() => {
    const newErrors: { [key: string]: string } = {}
    for (let key in errors) {
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

  const submit = async (data: FormBodyData) => {
    setLoading(true)
    formRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    await fetch('/contact/api', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        ...data,
        ...(debug ? { dev: true } : {}),
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
          const err: { [key: string]: string } = {}
          for (let key in data) {
            err[data[key].path[0]] = data[key].message
          }
          setServerInvalidErrors(err)
          return
        }
      })
      .catch((error) => setResult('エラーが発生しました'))
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

  const inputElements = [
    {
      name: 'username',
      type: 'text',
      label: 'お名前 [必須]',
    },
    {
      name: 'company',
      type: 'text',
      label: '会社名',
    },
    {
      name: 'email',
      type: 'email',
      label: 'メールアドレス [必須]',
    },
    {
      name: 'detail',
      type: 'textarea',
      label: 'お問い合わせ [必須]',
      row: 15,
    },
  ]

  return (
    <>
      <main className={className.main}>
        <Title title='CONTACT' text='お仕事のお問い合わせはこちらからどうぞ' />
        {result && <div>{result}</div>}
        <div className={className.body}>
          <form
            className={`${loading ? 'opacity-50' : 'opacity-100'}`}
            onSubmit={handleSubmit((d) => submit(d))}
            ref={formRef}
          >
            <ul className={className.list}>
              {inputElements.map((elem, index) => {
                const { name, type, row, label } = elem
                return (
                  <li key={index} className={className.listChild}>
                    <Input
                      name={name}
                      type={type}
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
              <div id='recaptchaMain'></div>
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
      <Script id='inline-js'>
        {`
          window.onloadCallback = ()=>{
            console.log('onloadCallback')
            window.contact_grecaptcha_id = window.grecaptcha.render('recaptchaMain', {
              sitekey: "6Ldu_1UbAAAAABKzqC0VRtFsRoCmdI1ruAB_Pkb4",
              callback: () => {
                document.getElementById('contact__submit')?.removeAttribute('disabled')
              },
              'expired-callback': () => {
                document.getElementById('contact__submit')?.setAttribute('disabled', 'true')
              },
            })
          }
        `}
      </Script>
      <Script
        id='recaptcha-js'
        src='https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit'
        async
        defer
      />
    </>
  )
}
