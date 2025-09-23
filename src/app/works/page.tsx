/**
 * Works一覧ページ（1ページ目）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageContent } from './components/page-content'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchWorksList } from '@/features/works/api/fetch-works-list'
import { loadSearchParams } from './libs/search-params'

const description = '最新の実績や、自主制作'

type Props = PageProps<'/works'>

export default async function Page(props: Props) {
  const { technology, category } = await loadSearchParams(props.searchParams)
  const result = await fetchWorksList({ technology, category })
  return <PageContent {...result} />
}

export const metadata: Metadata = {
  ...nextMetaData({
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
