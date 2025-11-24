import nodemailer from 'nodemailer'

import { FormSchema } from '../_schema'

const setMailText = (args: FormSchema): string => {
  const text = `
-------------------------------
お問い合わせ内容
-------------------------------
お名前: ${args.username}
会社名: ${args.company ?? ''}
メールアドレス: ${args.email}
お問い合わせ: ${args.detail}
`
  return text
}

export const sendMail = async ({
  username,
  company,
  email,
  detail,
  debug = false,
}: {
  username: string
  company?: string
  email: string
  detail: string
  debug?: boolean
}) => {
  const gmail = process.env.MAIL_ACCOUNT
  const pass = process.env.MAIL_PASSWORD
  const from = `"HTMLGO SITE" <${gmail ?? ''}>`
  const to = gmail
  const subject = '[HTMLGO]:ホームページよりお問い合わせがありました'
  const text = setMailText({ username, company, email, detail })

  const transporter = await (async () => {
    let account
    if (debug) {
      // テストのメールの設定
      account = await nodemailer.createTestAccount()
      const {
        user,
        pass,
        smtp: { host, port, secure },
      } = account
      return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
        logger: false,
        debug: false,
      })
    }
    // 本来使用するメールの設定
    return nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: gmail, pass },
    })
  })()

  return transporter
    .sendMail({ from, to, subject, text })
    .then((result) => {
      if (debug) {
        // こちらのURLで送信結果が見れる
        console.log('Message sent:', result.messageId)
        console.log('Preview URL:', nodemailer.getTestMessageUrl(result))
      }
      return true
    })
    .catch((error) => {
      console.error(error)
      return false
    })
}
