'use client'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { InputWithRHF } from '@/components/ui/form/input'
import { TextareaWithRHF } from '@/components/ui/form/textarea'
import { Label } from '@/components/ui/form/label'
import { ErrorText } from '@/components/ui/form/error-text'

import { useContactForm } from '../hooks/use-contact-form'
import { useRecaptcha } from '../hooks/use-recaptcha'
import type { FormBodyData } from '../schema'

export const PageContent = () => {
  const {
    register,
    handleSubmit,
    loading,
    submitForm,
    setValue,
    formatedInvalidError,
    serverOtherError,
  } = useContactForm()
  const { token, recaptchaRef } = useRecaptcha()
  setValue('token', token ?? '')

  const onSubmit = (data: FormBodyData) => void submitForm(data, token)

  return (
    <>
      {loading && (
        <div className='fixed inset-0 z-10 m-auto flex h-full w-full items-center justify-center bg-white'>
          <LoadingSpinner />
        </div>
      )}

      <div className='max-w-(--content-width) md:mx-auto'>
        <Title title='Contact' text='お仕事のお問い合わせはこちらから' />
        {serverOtherError && <div className='text-error pb-8 font-bold'>{serverOtherError}</div>}
        <div className='mb-10'>
          <form
            noValidate // ブラウザのバリデーションを無効化（ZodとReact Hook Formで制御）
            inert={loading}
            onSubmit={(e) => {
              e.preventDefault()
              void handleSubmit(onSubmit)(e)
            }}
          >
            <div className='mb-10 space-y-6'>
              {/* お名前 */}
              <div>
                <Label htmlFor='username' required>
                  お名前
                </Label>
                <InputWithRHF
                  name='username'
                  register={register}
                  error={!!formatedInvalidError('username')}
                  placeholder='お名前を入力してください'
                />
                <ErrorText error={formatedInvalidError('username')} />
              </div>
              {/* 会社名 */}
              <div>
                <Label htmlFor='company'>会社名</Label>
                <InputWithRHF
                  name='company'
                  register={register}
                  error={!!formatedInvalidError('company')}
                  placeholder='会社名を入力してください（任意）'
                />
                <ErrorText error={formatedInvalidError('company')} />
              </div>
              {/* メールアドレス */}
              <div>
                <Label htmlFor='email' required>
                  メールアドレス
                </Label>
                <InputWithRHF
                  name='email'
                  type='email'
                  register={register}
                  error={!!formatedInvalidError('email')}
                  placeholder='example@example.com'
                />
                <ErrorText error={formatedInvalidError('email')} />
              </div>
              {/* お問い合わせ内容 */}
              <div>
                <Label htmlFor='detail' required>
                  お問い合わせ内容
                </Label>
                <TextareaWithRHF
                  name='detail'
                  register={register}
                  error={!!formatedInvalidError('detail')}
                  rows={10}
                  placeholder='お問い合わせ内容を詳しくお聞かせください'
                />
                <ErrorText error={formatedInvalidError('detail')} />
              </div>
            </div>
            <div className='mb-10'>
              <div className='flex items-center justify-center'>
                <div ref={recaptchaRef} />
              </div>
              {formatedInvalidError('token') && (
                <div className='text-center'>
                  <ErrorText error={formatedInvalidError('token')} />
                </div>
              )}
            </div>
            <div className='flex items-center justify-center'>
              <Button variant='primary' size='lg' disabled={loading} type='submit'>
                送信
              </Button>
            </div>
          </form>
        </div>
        <div className='border-border mt-10 border-t pt-10 pb-10 text-center'>
          <Button component='link' href='/' icon='home'>
            HOME
          </Button>
        </div>
      </div>
    </>
  )
}
