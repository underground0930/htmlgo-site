// フォームの入力データのチェックに使用

export const checkFormData = (e: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(e.target as HTMLFormElement)
  const data = Object.fromEntries(formData)
  console.log(data)
}
