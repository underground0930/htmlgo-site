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

const className = {
  btnWrap: 'text-center',
  text: 'py-20px text-center mb-30px',
  section: 'mb-40px pb-20px md:mb-80px md:pb-40px border-b-1 border-border',
}

export default function NotFound() {
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      <section className={className.section}>
        <Title title='Not Found' text='お探しのページは見つかりませんでした' />
        <div className={className.text}>
          お探しのページは見つかりませんでした。
          <br />
          URLが間違っているか、削除されている可能性があります。
        </div>
        <div className={className.btnWrap}>
          <TextBtn title='TOP' link='/' />
        </div>
      </section>
    </main>
  )
}
