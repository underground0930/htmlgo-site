import { ServiceList } from '@/components/pages/top/ServiceList'
import { TextBtn } from '@/components/common/TextBtn'
import { Title } from '@/components/common/Title'
import { ArticlesList } from '@/components/pages/articles/ArticlesList'
import { WorksList } from '@/components/pages/works/WorksList'

import { setMetaData } from '@/utils'
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

export default async function Home() {
  const { works, articles } = await fetchTopList()
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      {/* services */}
      <section className='mb-40px border-b-1 border-border pb-20px md:mb-80px md:pb-40px'>
        <Title title='Services' text='事業内容' />
        <ServiceList />
        <div className='text-center'>
          <TextBtn title='to About' link='/about/' />
        </div>
      </section>
      {/* works */}
      <section className='mb-40px border-b-1 border-border pb-20px md:mb-80px md:pb-40px'>
        <Title title='Works' text='最新の実績や、自主制作' />
        <WorksList works={works} />
        <div className='text-center'>
          <TextBtn title='More Works' link='/works/' />
        </div>
      </section>
      {/* articles */}
      <section className='mb-40px border-b-1 border-border pb-20px md:mb-80px md:pb-40px'>
        <Title title='Articles' text='最新の記事' />
        <ArticlesList articles={articles} />
        <div className='text-center'>
          <TextBtn title='More Articles' link='/articles/' />
        </div>
      </section>
    </main>
  )
}
