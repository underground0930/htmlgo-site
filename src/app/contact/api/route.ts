import { NextResponse } from 'next/server'

import { verifyRecaptcha } from '@/libs/contact/verifyRecaptcha'
import { sendMail } from '@/libs/contact/sendMail'

import { FormBodyDataSchema } from '@/types/contact'

export async function POST(request: Request) {
  const requestBodyText = await request.text()
  const requestBody = JSON.parse(requestBodyText)
  const { username, email, company, detail, token, dev } = requestBody

  // フォームの入力値のバリデート ////////////////////////////////////
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

  // recapchaのテスト ////////////////////////////////////

  const recaptchaResult = await verifyRecaptcha(token)

  if (recaptchaResult === 0) {
    // 検証中にエラーが発生
    return NextResponse.json({
      success: false,
      error: {
        type: 'recapcha_error',
        data: null,
      },
    })
  } else if (recaptchaResult === 2) {
    // botとして検出
    return NextResponse.json({
      success: false,
      error: {
        type: 'recapcha_failed',
        data: null,
      },
    })
  }

  // メール送信処理  ////////////////////////////////////
  const sendMailResult = await sendMail({ dev, ...validateResult.data })

  const result = sendMailResult
    ? { success: true, error: null }
    : {
        success: false,
        error: {
          type: 'mail_failed',
          data: null,
        },
      }
  return NextResponse.json(result)
}
