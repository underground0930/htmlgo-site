/**
 * Works一覧ページ（1ページ目）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageContent } from './components/page-content'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchWorksList } from '@/features/works/api/fetch-works-list'
import { loadSearchParams } from './libs/search-params'
import { fetchWorksTechnologies } from '@/features/works/api/fetch-works-technologies'
import { fetchWorksCategories } from '@/features/works/api/fetch-works-categories'

const description = '最新の実績や、自主制作'

type Props = PageProps<'/works'>

export default async function Page(props: Props) {
  const { technology, category } = await loadSearchParams(props.searchParams)
  const result = await fetchWorksList({ technology, category })
  const { contents: technologies } = await fetchWorksTechnologies()
  const { contents: categories } = await fetchWorksCategories()
  return <PageContent {...result} technologies={technologies} categories={categories} />
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
