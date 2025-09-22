/**
 * Articles一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { nextMetaData } from '@/libs/next-metadata'
import { fetchArticlesList } from '@/features/articles/api/fetch-articles'
import { parsePageNumber } from '@/utils/parse-page-number'

import { PageContent } from '../../components/page-content'

const description = '色々なブログの記事のフィードをまとめたものです'

type Props = PageProps<'/articles/page/[page]'>

export default async function Page(props: Props) {
  const params = await props.params
  const result = await fetchArticlesList({ page: parsePageNumber(params.page) })
  if (result.articles.length === 0 && result.page > 0) {
    notFound()
  }

  return <PageContent {...result} />
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const pageNumber = parsePageNumber(params.page)
  return {
    ...nextMetaData({
      meta: {
        openGraph: {
          type: 'article',
        },
      },
      title: `ARTICLES - Page ${pageNumber}`,
      description,
      url: `/articles/page/${pageNumber}`,
      images: '/img/ogp-new.png',
    }),
  }
}
