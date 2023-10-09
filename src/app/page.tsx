import { ServiceList } from '@/components/pages/top/ServiceList'

import { setMetaData } from '@/utils'
import { TextBtn, Title, ArticlesList, WorksList } from '@/components'
import { fetchTopList } from '@/libs'

const description = 'WEB技術を書き連ねるサイト'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'website',
      },
    },
    title: 'TOP',
    url: '',
    description,
    images: '/img/ogp_new.png',
  }),
}

const className = {
  btnWrap: 'text-center',
  section: 'mb-40px pb-20px md:mb-80px md:pb-40px border-b-1 border-border',
}

export default async function Home() {
  const { works, articles } = await fetchTopList()
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      {/* services */}
      <section className={className.section}>
        <Title title='SERVICES' text='事業内容' />
        <ServiceList />
        <div className={className.btnWrap}>
          <TextBtn title='to ABOUT' link='/about/' />
        </div>
      </section>
      {/* works */}
      <section className={className.section}>
        <Title title='WORKS' text='最新のお仕事の実績や、自主制作' />
        <WorksList works={works} />
        <div className={className.btnWrap}>
          <TextBtn title='MORE' link='/works/' />
        </div>
      </section>
      {/* articles */}
      <section className={className.section}>
        <Title title='ARTICLES' text='最新の記事' />
        <ArticlesList articles={articles} />
        <div className={className.btnWrap}>
          <TextBtn title='MORE' link='/articles/' />
        </div>
      </section>
    </main>
  )
}
