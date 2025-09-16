import { Metadata } from 'next'

import { nextMetaData } from '@/libs/next-metadata'

import { fetchWorksList } from '@/features/works/api/fetch-works-list'
import { fetchArticlesList } from '@/features/articles/api/fetch-articles'
import { PageContent } from './components/page-content'

const description = 'WEB技術を書き連ねるサイト'

export default async function Page() {
  const articlesResult = await fetchArticlesList({ page: 1 })
  const worksResult = await fetchWorksList({ page: 1, limit: 4 })
  return <PageContent {...worksResult} {...articlesResult} />
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
