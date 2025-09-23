/**
 * Works一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { nextMetaData } from '@/libs/next-metadata'
import { parsePageNumber } from '@/utils/parse-page-number'
import { fetchWorksList } from '@/features/works/api/fetch-works-list'

import { loadSearchParams } from '../../libs/search-params'
import { PageContent } from '../../components/page-content'
import { fetchWorksTechnologies } from '@/features/works/api/fetch-works-technologies'
import { fetchWorksCategories } from '@/features/works/api/fetch-works-categories'

const description = '最新の実績や、自主制作'

type Props = PageProps<'/works/page/[page]'>

export default async function Page(props: Props) {
  const params = await props.params
  const { technology, category } = await loadSearchParams(props.searchParams)
  const result = await fetchWorksList({
    page: parsePageNumber(params.page),
    limit: 12,
    technology,
    category,
  })
  const { contents: technologies } = await fetchWorksTechnologies()
  const { contents: categories } = await fetchWorksCategories()

  if (result.works.length === 0 && result.page > 0) {
    redirect('/works')
  }

  return <PageContent {...result} technologies={technologies} categories={categories} />
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const page = parsePageNumber(params.page)
  return {
    ...nextMetaData({
      meta: {
        openGraph: {
          type: 'article',
        },
      },
      title: `WORKS - Page ${page}`,
      description,
      url: `/works/page/${page}/`,
      images: '/img/ogp-new.png',
    }),
  }
}
