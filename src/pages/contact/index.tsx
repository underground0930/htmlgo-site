import { useState } from 'react'
import Script from 'next/script'
import { useEffect } from 'react'

// libs
import { event } from 'libs/gtag'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import IconBtn from 'components/IconBtn'

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px`,
  list: `mb-40px`,
  listChild: `mb-25px`,
  label: `font-bold text-16px block border-l-5 pl-10px mb-10px`,
  'formrun-system-show': `text-14px text-[#f00] font-bold pt-5px`,
  input: `w-full block text-16px border-1 border-border p-8px`,
  textarea: `w-full block text-16px border-1 border-border p-8px resize-none`,
  submit: `block bg-[#000] w-[200px] mx-auto p-8px text-[#fff] font-bold disabled:opacity-30`,
  recaptcha: `flex items-center justify-center pb-40px`,
  back: `border-t-1 border-border text-center pt-40px pb-40px mt-40px`,
}

export default function Contact() {
  const [isInitFormRun, setIsInitFormRun] = useState(false)

  const initFormrun = () => {
    console.log('init formrun')
    window.Formrun._reset()
    window.Formrun.init('.formrun')
    setIsInitFormRun(true)
  }

  const resetRecapcha = () => {
    console.log('init Recapcha')
    window.grecaptcha.render('recaptchaMain')
  }

  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'contact', label, value })
  }

  useEffect(() => {
    if (window.Formrun) {
      initFormrun()
    }
    if (window.grecaptcha) {
      resetRecapcha()
    }
  }, [])

  return (
    <Layout>
      <HeadWrap
        title={'CONTACT | HTMLGO'}
        description={'お問い合わせ'}
        url={`https://htmlgo.site/contact/`}
      />
      <main className={className.main}>
        <Title title="CONTACT" text="お仕事のお問い合わせはこちらからどうぞ" />
        <div className={className.body}>
          <form className="formrun" action="https://form.run/api/v1/r/slpviahq150x5q8lxsyw5x8z" method="post">
            <ul className={className.list}>
              <li className={className.listChild}>
                <label className={className.label}>お名前 [必須]</label>
                <input className={className.input} name="お名前" type="text" data-formrun-required />
                {isInitFormRun && (
                  <div className={className['formrun-system-show']} data-formrun-show-if-error="お名前">
                    お名前を入力してください
                  </div>
                )}
              </li>
              <li className={className.listChild}>
                <label className={className.label}>メールアドレス [必須]</label>
                <input
                  className={className.input}
                  name="メールアドレス"
                  type="text"
                  data-formrun-type="email"
                  data-formrun-required
                />
                {isInitFormRun && (
                  <div
                    className={className['formrun-system-show']}
                    data-formrun-show-if-error="メールアドレス"
                  >
                    メールアドレスを正しく入力してください
                  </div>
                )}
              </li>
              <li className={className.listChild}>
                <label className={className.label}>お問い合わせ [必須]</label>
                <textarea
                  className={className.textarea}
                  name="お問い合わせ"
                  data-formrun-required
                  rows={14}
                ></textarea>

                {isInitFormRun && (
                  <div className={className['formrun-system-show']} data-formrun-show-if-error="お問い合わせ">
                    お問い合わせ入力してください
                  </div>
                )}
              </li>
            </ul>
            <div className={className.recaptcha}>
              <div
                id="recaptchaMain"
                className="g-recaptcha"
                data-sitekey="6Ldu_1UbAAAAABKzqC0VRtFsRoCmdI1ruAB_Pkb4"
                data-callback="successCallback"
                data-expired-callback="expiredCallback"
              ></div>
            </div>
            <button
              className={className.submit}
              id="contact__submit"
              disabled
              type="submit"
              data-formrun-error-text="未入力の項目があります"
              data-formrun-submitting-text="送信中..."
              onClick={() => {
                clickHandler('form_submit', '')
              }}
            >
              送信
            </button>
          </form>
        </div>
        <div className={className.back}>
          <IconBtn
            icon="faHome"
            link="/"
            color="#ffffff"
            onClick={() => {
              clickHandler('top', '/')
            }}
          />
        </div>
      </main>
      <Script id="inline-js">
        {`
          window.successCallback = () => {
            document.getElementById('contact__submit').removeAttribute('disabled')
          }

          window.expiredCallback = () => {
            document.getElementById('contact__submit').setAttribute('disabled', true)
          }
        `}
      </Script>
      <Script
        id="recaptcha-js"
        src="https://www.google.com/recaptcha/api.js"
        onLoad={() => {
          console.log('recaptcha-js is load')
        }}
      />
      <Script
        id="formrun-js"
        src="https://sdk.form.run/js/v2/formrun.js"
        onLoad={() => {
          console.log('formrun-js is load')
          initFormrun()
        }}
      />
    </Layout>
  )
}
