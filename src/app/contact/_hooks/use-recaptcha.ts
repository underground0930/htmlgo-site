/**
 * reCAPTCHA v2用カスタムフック
 * reCAPTCHAの初期化とトークン管理を行う
 */

import { useState } from 'react'
import { useRecaptchaV2 } from 'react-hook-recaptcha-v2'

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

export const useRecaptcha = () => {
  const [token, setToken] = useState<string | null>(null)

  const { recaptchaRef } = useRecaptchaV2({
    sitekey,
    callback: (token) => setToken(token),
  })

  return {
    token,
    recaptchaRef,
  }
}
