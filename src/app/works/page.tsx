import {Metadata} from 'next'

import { WorksList } from './components/works-list'
import { TextBtn } from '@/features/ui/text-btn'
import { Title } from '@/features/ui/title'

import { fetchWorksIndex } from '@/libs'
import { setMetaData } from '@/utils'

const description = '最新の実績や、自主制作'

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
    images: '/img/ogp_new.png',
  }),
}

export default async function Works() {
  const { works } = await fetchWorksIndex()

  return (
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      <Title title='Works' text='最新の実績や、自主制作' />
      <WorksList works={works} />
      <footer className='mt-10 border-t border-border pb-10 pt-10'>
        <div className='text-center'>
          <TextBtn title='Home' link='/' />
        </div>
      </footer>
    </main>
  )
}
