import { Title } from '@/components/common/Title'
import { TextBtn } from '@/components/common/TextBtn'

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
      <main className='mx-20px'>
        <Title title='THANKS' text='お問合せありがとうございました' />
        <div className='mx-auto mb-40px max-w-[600px]'>
          <div className='text-center text-16px md:text-20px'>
            お問い合わせありがとうございました。
            <br />
            内容を確認後、折り返しご連絡いたしますので、
            <br />
            今しばらくおまちください。
          </div>
        </div>
        <div className='mt-40px border-t-[1px] border-border pb-40px pt-40px text-center'>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
