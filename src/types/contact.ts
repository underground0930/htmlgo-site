import { z, ZodIssue } from 'zod'

export type FormBodyData = {
  username: string
  company?: string
  email: string
  detail: string
}

const errorMessages = {
  min: '必須項目です',
  max: (max: number) => `最大${max}文字までにしてください`,
  email: 'メールアドレスの値が不正です',
}

export const FormBodyDataSchema = z.object({
  username: z.string().trim().min(1, errorMessages.min).max(100, errorMessages.max(100)),
  company: z.string().trim().max(150, errorMessages.max(150)).optional(),
  email: z
    .string()
    .email(errorMessages.email)
    .trim()
    .min(1, errorMessages.min)
    .max(150, errorMessages.max(150)),
  detail: z.string().trim().min(1, errorMessages.min).max(3000, errorMessages.max(3000)),
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
        data: ZodIssue[]
      }
    }
  | {
      success: false
      error: {
        type: 'failed_mail'
        data: null
      }
    }
