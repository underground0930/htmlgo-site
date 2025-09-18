// エラーメッセージの管理

export const zodErrorMessages = {
  required: (): [number, string] => [1, '必須項目です'],
  min: (min: number): [number, string] => [min, `${min}文字以上入力してください`],
  max: (max: number): [number, string] => [max, `最大${max}文字まで入力してください`],
  email: () => 'メールアドレスの値が不正です',
  string: () => '文字列の値が不正です',
  number: () => '数値の値が不正です',
} as const
