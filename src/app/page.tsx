import { Metadata } from 'next'

import { ServiceList } from '@/components/pages/top/service-list'
import { TextBtn } from '@/components/common/text-btn'
import { Title } from '@/components/common/title'
import { ArticlesList } from '@/components/pages/articles/articles-list'
import { WorksList } from '@/components/pages/works/works-list'

import { setMetaData } from '@/utils'
import { fetchTopList } from '@/libs'

const description = 'WEB技術を書き連ねるサイト'

export const metadata: Metadata = {
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
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      {/* services */}
      <section className='mb-8 border-b border-border pb-5 md:mb-20 md:pb-8'>
        <Title title='Services' text='事業内容' />
        <ServiceList />
        <div className='text-center'>
          <TextBtn title='to About' link='/about/' />
        </div>
      </section>
      {/* works */}
      <section className='mb-8 border-b border-border pb-5 md:mb-20 md:pb-8'>
        <Title title='Works' text='最新の実績や、自主制作' />
        <WorksList works={works} />
        <div className='text-center'>
          <TextBtn title='More Works' link='/works/' />
        </div>
      </section>
      {/* articles */}
      <section className='mb-8 border-b border-border pb-5 md:mb-20 md:pb-8'>
        <Title title='Articles' text='最新の記事' />
        <ArticlesList articles={articles} />
        <div className='text-center'>
          <TextBtn title='More Articles' link='/articles/' />
        </div>
      </section>
    </main>
  )
}
