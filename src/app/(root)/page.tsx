import { Metadata } from 'next'

import { nextMetaData } from '@/libs/next-metadata'
import { fetchTopList } from './libs/fetch-top-list'

import { PageChild } from './components/page-child'

const description = 'WEB技術を書き連ねるサイト'

export default async function Page() {
  const { works, articles } = await fetchTopList()
  return <PageChild works={works} articles={articles} />
}

export const metadata: Metadata = {
  ...nextMetaData({
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
