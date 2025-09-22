/**
 * お問い合わせAPI
 * フォームデータのバリデーション、reCAPTCHA検証、メール送信を行う
 */

import { NextResponse } from 'next/server'

import { verifyRecaptcha } from '../libs/verify-recaptcha'
import { sendMail } from '../libs/send-mail'
import { FormBodyDataSchema, ContactApiResponse, ValidationError } from '../schema'

// エラーの cause 型定義
type ErrorCause =
  | {
      status: number
      type: 'recaptcha' | 'mail' | 'bad_request'
      details: null
    }
  | {
      status: number
      type: 'validation'
      details: ValidationError[]
    }

class ApiError extends Error {
  public readonly cause: ErrorCause

  constructor(message: string, cause: ErrorCause) {
    super(message)
    this.cause = cause
    this.name = 'ApiError'
  }
}

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  try {
    // Content-Typeチェック
    const contentType = request.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      throw new ApiError('リクエスト形式が不正です', {
        status: 400,
        type: 'bad_request',
        details: null,
      })
    }

    // リクエストボディの取得とパース
    let requestBody: unknown
    try {
      const requestBodyText = await request.text()
      requestBody = JSON.parse(requestBodyText)
    } catch {
      throw new ApiError('リクエスト形式が不正です', {
        status: 400,
        type: 'bad_request',
        details: null,
      })
    }

    // 全体的なバリデーション（フォーム + トークン）
    const validateResult = FormBodyDataSchema.safeParse(requestBody)

    if (validateResult.error) {
      const details = validateResult.error.issues
      throw new ApiError('フォームの入力値に問題があります。', {
        status: 400,
        type: 'validation',
        details,
      })
    }

    const { token, ...formData } = validateResult.data

    // reCAPTCHA検証
    const recaptchaResult = await verifyRecaptcha(token)
    if (recaptchaResult !== 'recapcha_valid') {
      const message =
        recaptchaResult === 'recapcha_invalid'
          ? 'bot判定されたため、送信に失敗しました。'
          : 'bot判定検証中にエラーが発生したため、送信に失敗しました。'
      throw new ApiError(message, {
        status: 400,
        type: 'recaptcha',
        details: null,
      })
    }

    // メール送信処理
    const sendMailResult = await sendMail(formData)

    if (!sendMailResult) {
      throw new ApiError(
        'メールの送信に失敗しました。お手数ですが、再度お試しいただくか、しばらく時間を置いてからお試しください。',
        { status: 500, type: 'mail', details: null },
      )
    }

    // メール送信成功
    return NextResponse.json({
      success: true,
      data: { message: 'お問い合わせを受け付けました。' },
      error: null,
    })
  } catch (error) {
    if (error instanceof ApiError) {
      const { status, type, details } = error.cause
      const responseBody: ContactApiResponse =
        type === 'validation'
          ? {
              success: false,
              data: null,
              error: {
                type,
                message: error.message,
                details: details,
              },
            }
          : {
              success: false,
              data: null,
              error: {
                type,
                message: error.message,
                details: null,
              },
            }
      return NextResponse.json(responseBody, { status })
    }

    // 予期せぬエラーの場合
    return NextResponse.json(
      {
        success: false,
        data: null,
        error: {
          type: 'unexpected',
          message: '予期せぬエラーが発生しました。しばらく時間を置いてからお試しください。',
          details: null,
        },
      },
      { status: 500 },
    )
  }
}
