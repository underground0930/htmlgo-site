import { z } from 'zod'

/**
 * フォームバリデーション用スキーマ定義
 * フロントエンド・バックエンド共通で使用
 */

// エラーメッセージの統一管理
const errorMessages = {
  min: '必須項目です',
  max: (max: number): [number, string] => [max, `最大${max}文字までにしてください`],
  email: 'メールアドレスの値が不正です',
  invalidRequest: 'リクエスト形式が不正です',
  required: '必須パラメータが不足しています',
} as const

// フォームデータのスキーマ定義
export const FormBodyDataSchema = z.object({
  username: z.string().trim().min(1).max(50),
  company: z.string().trim().max(50).optional(),
  email: z.email(errorMessages.email).trim().min(1).max(50),
  detail: z.string().trim().min(1).max(1000),
})

// reCAPTCHAトークンのスキーマ
export const TokenDataSchema = z.object({
  token: z.string().min(1, errorMessages.required),
})

// API リクエスト全体のスキーマ（フォーム + トークン）
export const ContactRequestSchema = z.object({
  ...FormBodyDataSchema.shape,
  ...TokenDataSchema.shape,
})

// 型定義の導出（スキーマから自動生成）
export type FormBodyData = z.infer<typeof FormBodyDataSchema>
export type TokenData = z.infer<typeof TokenDataSchema>
export type ContactRequestData = z.infer<typeof ContactRequestSchema>

// バリデーションエラー型（公開APIを使用）
export type ValidationError = {
  path: (string | number)[]
  message: string
  code: string
}

// API レスポンス型の統一
export type ApiResponse<T = unknown> =
  | {
      success: true
      data: T
      error: null
    }
  | {
      success: false
      data: null
      error: {
        type: 'validation' | 'recaptcha' | 'mail' | 'server'
        message: string
        details?: ValidationError[]
      }
    }

// Contact API専用のレスポンス型
export type ContactApiResponse = ApiResponse<{ message: string }>

// エラーメッセージのエクスポート（他の場所でも使用可能）
export { errorMessages }
