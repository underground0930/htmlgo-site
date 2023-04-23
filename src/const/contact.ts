export const inputElements = [
  {
    name: 'username',
    label: 'お名前 [必須]',
  },
  {
    name: 'company',
    label: '会社名',
  },
  {
    name: 'email',
    label: 'メールアドレス [必須]',
  },
  {
    name: 'detail',
    textarea: true,
    label: 'お問い合わせ [必須]',
    row: 15,
  },
] as ReadonlyArray<{
  name: string
  label: string
  textarea?: boolean
  row?: number
}>

const commonErrorText =
  'お手数ですが、再度お試しいただくか、しばらく時間を置いてからお試しください。' as const satisfies string

export const errorText = {
  mail_failed: `メールの送信に失敗しました。${commonErrorText}`,
  recapcha_failed: 'bot判定されたため、データは送信されませんでした。',
  recapcha_error: `bot判定検証中にエラーが発生したため、データは送信されませんでした。${commonErrorText}`,
  server: `サーバーとの通信でエラーが発生したため、${commonErrorText}`,
} as const satisfies {
  [key: string]: unknown
}
