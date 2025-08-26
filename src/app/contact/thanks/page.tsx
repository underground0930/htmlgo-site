import { Title } from '@/components/common/title'
import { TextBtn } from '@/components/common/text-btn'

import { setMetaData } from '@/utils'

const description = 'お問い合わせ頂きありがとうございました'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'CONTACT',
    description,
    url: '/contact/thanks',
    images: '/img/ogp_new.png',
  }),
}

export default function Thanks() {
  return (
    <>
      <main className='mx-5'>
        <Title title='THANKS' text='お問合せありがとうございました' />
        <div className='mx-auto mb-10 max-w-[600px]'>
          <div className='text-center text-base md:text-xl'>
            お問い合わせありがとうございました。
            <br />
            内容を確認後、折り返しご連絡いたしますので、
            <br />
            今しばらくおまちください。
          </div>
        </div>
        <div className='mt-10 border-t border-border pb-10 pt-10 text-center'>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
