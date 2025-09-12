import { z } from 'zod'

export type FormBodyData = {
  username: string
  company?: string
  email: string
  detail: string
}

export type TokenData = {
  token: string
}

const errorMessages = {
  min: '必須項目です',
  max: (max: number): [number, string] => [max, `最大${max}文字までにしてください`],
  email: 'メールアドレスの値が不正です',
}

export const FormBodyDataSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, errorMessages.min)
    .max(...errorMessages.max(100)),
  company: z
    .string()
    .trim()
    .max(...errorMessages.max(100))
    .optional(),
  email: z
    .email(errorMessages.email)
    .trim()
    .min(1, errorMessages.min)
    .max(...errorMessages.max(100)),
  detail: z
    .string()
    .trim()
    .min(1, errorMessages.min)
    .max(...errorMessages.max(3000)),
}) satisfies z.ZodType<FormBodyData>

export type ResultType =
  | {
      success: true
      error: null
    }
  | {
      success: false
      error: {
        type: 'invalid'
        data: z.core.$ZodIssue[]
      }
    }
  | {
      success: false
      error: {
        type: 'mail'
        data: string
      }
    }
  | {
      success: false
      error: {
        type: 'recapcha'
        data: string
      }
    }
