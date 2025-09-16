/**
 * Articles一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageContent } from '../../components/page-content'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchArticlesList } from '@/features/articles/api/fetch-articles'
import { parsePageNumber } from '@/utils/parse-number'

const description = '色々なブログの記事のフィードをまとめたものです'

type Props = {
  params: Promise<{ page: string }>
}

export default async function Page(props: Props) {
  const { page } = await props.params
  const result = await fetchArticlesList({ page: parsePageNumber(page) })
  return <PageContent {...result} />
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { page } = await props.params
  const pageNumber = parsePageNumber(page)
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
