import { NextResponse } from 'next/server'

import { verifyRecaptcha } from '../libs/verify-recaptcha'
import { sendMail } from '../libs/send-mail'
import { FormBodyData, FormBodyDataSchema, TokenData } from '../schema'

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

  if (recaptchaResult !== 'recapcha_valid') {
    // 検証失敗 or エラーが発生
    const errorText =
      recaptchaResult === 'recapcha_invalid'
        ? 'bot判定されたため、送信に失敗しました。'
        : `bot判定検証中にエラーが発生したため、送信に失敗しました。`
    return NextResponse.json({
      success: false,
      error: {
        type: 'recapcha',
        data: errorText,
      },
    })
  }

  // メール送信処理
  const sendMailResult = await sendMail(validateResult.data)

  if (!sendMailResult) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'mail',
        data: `メールの送信に失敗しました。お手数ですが、再度お試しいただくか、しばらく時間を置いてからお試しください。`,
      },
    })
  }

  // メール送信成功
  return NextResponse.json({
    success: true,
    error: null,
  })
}
