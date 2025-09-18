import { z } from 'zod'
import { zodErrorMessages } from '@/libs/error-messages'

/**
 * フォームバリデーション用スキーマ定義
 * フロントエンド・バックエンド共通で使用
 */

// エラーメッセージの統一管理

// フォームデータのスキーマ定義
export const FormBodyDataSchema = z.object({
  username: z
    .string(zodErrorMessages.string())
    .trim()
    .min(...zodErrorMessages.required())
    .max(...zodErrorMessages.max(50)),
  company: z
    .string(zodErrorMessages.string())
    .trim()
    .max(...zodErrorMessages.max(50))
    .optional(),
  email: z
    .email(zodErrorMessages.email())
    .trim()
    .min(...zodErrorMessages.required())
    .max(...zodErrorMessages.max(50)),
  detail: z
    .string(zodErrorMessages.string())
    .trim()
    .min(...zodErrorMessages.required())
    .max(...zodErrorMessages.max(1000)),
})

// reCAPTCHAトークンのスキーマ
export const TokenDataSchema = z.object({
  token: z.string().min(...zodErrorMessages.required()),
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

// バリデーションエラー型（Zod 4の公式型を使用）
export type ValidationError = z.core.$ZodIssue[]

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
        type: 'validation'
        message: string
        details?: ValidationError
      }
    }
  | {
      success: false
      data: null
      error: {
        type: 'recaptcha' | 'mail' | 'server'
        message: string
      }
    }

// Contact API専用のレスポンス型
export type ContactApiResponse = ApiResponse<{ message: string }>
