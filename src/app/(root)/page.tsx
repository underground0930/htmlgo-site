import { Metadata } from 'next'

import { ServiceList } from './components/service-list'
import { LinkButton } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { ArticlesList } from '../articles/components/articles-list'
import { WorksList } from '../works/components/works-list'

import { setMetaData } from '@/utils/set-metadata'
import { fetchTopList } from './libs/fetch-top-list'

const description = 'WEB技術を書き連ねるサイト'

export default async function Home() {
  const { works, articles } = await fetchTopList()
  return (
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      {/* services */}
      <section className='border-border mb-8 border-b pb-5 md:mb-20 md:pb-8'>
        <Title title='Services' text='事業内容' />
        <ServiceList />
        <div className='text-center'>
          <LinkButton href='/about/'>to About</LinkButton>
        </div>
      </section>
      {/* works */}
      <section className='border-border mb-8 border-b pb-5 md:mb-20 md:pb-8'>
        <Title title='Works' text='最新の実績や、自主制作' />
        <WorksList works={works} />
        <div className='text-center'>
          <LinkButton href='/works/'>More Works</LinkButton>
        </div>
      </section>
      {/* articles */}
      <section className='border-border mb-8 border-b pb-5 md:mb-20 md:pb-8'>
        <Title title='Articles' text='最新の記事' />
        <ArticlesList articles={articles} />
        <div className='text-center'>
          <LinkButton href='/articles/'>More Articles</LinkButton>
        </div>
      </section>
    </main>
  )
}

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
    images: '/img/ogp-new.png',
  }),
}
