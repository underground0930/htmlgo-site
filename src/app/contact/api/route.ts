import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import { sendMail } from '@/libs/sendMail'

import { FormBodyData, FormBodyDataSchema, ResultType } from '@/types/contact'

export async function POST(request: Request) {
  // わかりやすいように3秒止める
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const requestBodyText = await request.text()
  const requestBody = JSON.parse(requestBodyText)
  const { username, email, company, detail, dev } = requestBody

  const validateResult = FormBodyDataSchema.safeParse({
    username,
    email,
    company,
    detail,
  })

  // フォームの入力値のバリデート
  if (!validateResult.success) {
    return NextResponse.json({
      success: false,
      error: {
        type: 'invalid',
        data: validateResult.error.issues,
      },
    })
  }

  // メール送信処理
  const result = await sendMail({ dev, ...validateResult.data })

  return NextResponse.json(result)
}
