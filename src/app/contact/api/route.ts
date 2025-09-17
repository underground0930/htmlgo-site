/**
 * お問い合わせAPI
 * フォームデータのバリデーション、reCAPTCHA検証、メール送信を行う
 */

import { NextResponse } from 'next/server'

import { verifyRecaptcha } from '../libs/verify-recaptcha'
import { sendMail } from '../libs/send-mail'
import { ContactRequestSchema, ContactApiResponse, ValidationError, errorMessages } from '../schema'

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  try {
    // Content-Typeチェック
    const contentType = request.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: {
            type: 'server',
            message: errorMessages.invalidRequest,
          },
        },
        { status: 400 },
      )
    }

    // リクエストボディの取得とパース
    let requestBody: unknown
    try {
      const requestBodyText = await request.text()
      requestBody = JSON.parse(requestBodyText)
    } catch {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: {
            type: 'server',
            message: errorMessages.invalidRequest,
          },
        },
        { status: 400 },
      )
    }

    // 全体的なバリデーション（フォーム + トークン）
    const validateResult = ContactRequestSchema.safeParse(requestBody)

    if (!validateResult.success) {
      const validationErrors: ValidationError[] = validateResult.error.issues.map((issue) => ({
        path: issue.path.filter(
          (p): p is string | number => typeof p === 'string' || typeof p === 'number',
        ),
        message: issue.message,
        code: issue.code,
      }))

      return NextResponse.json(
        {
          success: false,
          data: null,
          error: {
            type: 'validation',
            message: 'フォームの入力値に問題があります。',
            details: validationErrors,
          },
        },
        { status: 400 },
      )
    }

    const { token, ...formData } = validateResult.data

    // reCAPTCHA検証
    const recaptchaResult = await verifyRecaptcha(token)

    if (recaptchaResult !== 'recapcha_valid') {
      const errorMessage =
        recaptchaResult === 'recapcha_invalid'
          ? 'bot判定されたため、送信に失敗しました。'
          : 'bot判定検証中にエラーが発生したため、送信に失敗しました。'

      return NextResponse.json(
        {
          success: false,
          data: null,
          error: {
            type: 'recaptcha',
            message: errorMessage,
          },
        },
        { status: 400 },
      )
    }

    // メール送信処理
    const sendMailResult = await sendMail(formData)

    if (!sendMailResult) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: {
            type: 'mail',
            message:
              'メールの送信に失敗しました。お手数ですが、再度お試しいただくか、しばらく時間を置いてからお試しください。',
          },
        },
        { status: 500 },
      )
    }

    // メール送信成功
    return NextResponse.json({
      success: true,
      data: { message: 'お問い合わせを受け付けました。' },
      error: null,
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      {
        success: false,
        data: null,
        error: {
          type: 'server',
          message: '予期せぬエラーが発生しました。しばらく時間を置いてからお試しください。',
        },
      },
      { status: 500 },
    )
  }
}
