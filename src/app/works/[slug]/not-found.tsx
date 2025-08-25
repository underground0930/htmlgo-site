import { TextBtn } from '@/components/common/TextBtn'
import { Title } from '@/components/common/Title'

import { setMetaData } from '@/utils'

const description = 'お探しのページは見つかりませんでした'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: '404 | WORKS',
    description,
    url: '/404',
    images: '/img/ogp_new.png',
  }),
}

export default function NotFound() {
  return (
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      <section className='mb-10 border-b border-border pb-5 md:mb-20 md:pb-10'>
        <Title title='Not Found' text='お探しのページは見つかりませんでした' />
        <div className='mb-8 py-5 text-center'>
          お探しのページは見つかりませんでした。
          <br />
          URLが間違っているか、削除されている可能性があります。
        </div>
        <div className='text-center'>
          <TextBtn title='TOP' link='/' />
        </div>
      </section>
    </main>
  )
}
