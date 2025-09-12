/**
 * reCAPTCHAの検証を行う
 * @param recaptchaValue - reCAPTCHAトークン（undefined/null可）
 * @returns 検証結果: 'recapcha_valid' | 'recapcha_invalid' | 'recapcha_error'
 */
export const verifyRecaptcha = async (
  recaptchaValue: string | undefined | null,
): Promise<'recapcha_valid' | 'recapcha_invalid' | 'recapcha_error'> => {
  // トークンが存在しない場合は即座に無効として返す
  if (!recaptchaValue) return 'recapcha_invalid'
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
      return result.success ? 'recapcha_valid' : 'recapcha_invalid' // reCAPTCHA 検証成功 or 検証失敗
    })
    .catch(
      (e) => {
        console.error(e)
        return 'recapcha_error'
      }, // reCAPTCHA 検証中にエラーが発生
    )
}
