import { NextResponse } from 'next/server'

import { verifyRecaptcha } from '../libs/verify-recaptcha'
import { sendMail } from '../libs/send-mail'
import { FormBodyData, FormBodyDataSchema, TokenData } from '../types/contact'

type RequestBodyData = Partial<FormBodyData & TokenData>

export async function POST(request: Request) {
  const requestBodyText = await request.text()
  const requestBody = JSON.parse(requestBodyText) as RequestBodyData
  const { username, email, company, detail, token } = requestBody

  // フォームの入力値のバリデート
  const validateResult = FormBodyDataSchema.safeParse({
    username,
    email,
    company,
    detail,
  })

  if (!validateResult.success) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'invalid',
        data: validateResult.error.issues,
      },
    })
  }

  // reCAPTCHA検証
  const recaptchaResult = await verifyRecaptcha(token)

  if (recaptchaResult === 'error') {
    // 検証中にエラーが発生
    return NextResponse.json({
      success: false,
      error: {
        type: 'recapcha_error',
        data: null,
      },
    })
  } else if (recaptchaResult === 'invalid') {
    // botとして検出
    return NextResponse.json({
      success: false,
      error: {
        type: 'recapcha_failed',
        data: null,
      },
    })
  }

  // メール送信処理
  const sendMailResult = await sendMail(validateResult.data)

  if (sendMailResult) {
    return NextResponse.json({
      success: true,
      error: null,
    })
  } else {
    return NextResponse.json({
      success: false,
      error: {
        type: 'mail_failed',
        data: null,
      },
    })
  }
}
