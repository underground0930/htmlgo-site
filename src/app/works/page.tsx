import { Metadata } from 'next'

import { WorksList } from './components/works-list'
import { TextBtn } from '@/components/ui/text-btn'
import { Title } from '@/components/ui/title'
import { Pager } from '@/components/ui/pager'

import { fetchWorksIndex } from './libs/fetch-works-index'
import { setMetaData } from '@/utils/set-metadata'

const description = '最新の実績や、自主制作'

export default async function Works() {
  const { works, page, pages } = await fetchWorksIndex()

  return (
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      <Title title='Works' text='最新の実績や、自主制作' />
      <div className='mb-10'>
        <Pager pages={pages} page={page} basePath='/works' />
      </div>
      <WorksList works={works} />
      <Pager pages={pages} page={page} basePath='/works' />
      <footer className='border-border mt-10 border-t pt-10 pb-10'>
        <div className='text-center'>
          <TextBtn title='Home' link='/' />
        </div>
      </footer>
    </main>
  )
}

export const metadata: Metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'WORKS',
    description,
    url: '/works',
    images: '/img/ogp-new.png',
  }),
}
