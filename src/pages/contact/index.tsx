import { useState } from 'react'
import Script from 'next/script'
import { useEffect } from 'react'

// styles
import styles from 'styles/page/Contact.module.scss'

// libs
import { event } from 'libs/gtag'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import IconBtn from 'components/IconBtn'

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
      <main className={styles.main}>
        <Title>
          <span>CONTACT</span>
          <span>お仕事のお問い合わせはこちらからどうぞ</span>
        </Title>
        <div className={styles.body}>
          <form className="formrun" action="https://form.run/api/v1/r/slpviahq150x5q8lxsyw5x8z" method="post">
            <ul className={styles.list}>
              <li className={styles.listChild}>
                <label className={styles.label}>お名前 [必須]</label>
                <input className={styles.input} name="お名前" type="text" data-formrun-required />
                {isInitFormRun && (
                  <div className={styles['formrun-system-show']} data-formrun-show-if-error="お名前">
                    お名前を入力してください
                  </div>
                )}
              </li>
              <li className={styles.listChild}>
                <label className={styles.label}>メールアドレス [必須]</label>
                <input
                  className={styles.input}
                  name="メールアドレス"
                  type="text"
                  data-formrun-type="email"
                  data-formrun-required
                />
                {isInitFormRun && (
                  <div className={styles['formrun-system-show']} data-formrun-show-if-error="メールアドレス">
                    メールアドレスを正しく入力してください
                  </div>
                )}
              </li>
              <li className={styles.listChild}>
                <label className={styles.label}>お問い合わせ [必須]</label>
                <textarea
                  className={styles.textarea}
                  name="お問い合わせ"
                  data-formrun-required
                  rows={14}
                ></textarea>

                {isInitFormRun && (
                  <div className={styles['formrun-system-show']} data-formrun-show-if-error="お問い合わせ">
                    お問い合わせ入力してください
                  </div>
                )}
              </li>
            </ul>
            <div className={styles.recaptcha}>
              <div
                id="recaptchaMain"
                className="g-recaptcha"
                data-sitekey="6Ldu_1UbAAAAABKzqC0VRtFsRoCmdI1ruAB_Pkb4"
                data-callback="successCallback"
                data-expired-callback="expiredCallback"
              ></div>
            </div>
            <button
              className={styles.submit}
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
        <div className={styles.back}>
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
