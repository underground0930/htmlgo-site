export const verifyRecaptcha = async (
  recaptchaValue: string,
): Promise<'valid' | 'invalid' | 'error'> => {
  return await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${
      process.env.RECAPTCHA_SECRET_KEY ?? ''
    }&response=${recaptchaValue}`,
    {
      method: 'POST',
    },
  )
    .then((response) => {
      if (response.ok || response.status === 304) {
        return response.json()
      }
      throw new Error('response')
    })
    .then((result: { success: boolean }) => {
      return result.success ? 'valid' : 'invalid' // reCAPTCHA 検証成功 or 検証失敗
    })
    .catch(
      () => 'error', // reCAPTCHA 検証中にエラーが発生
    )
}
