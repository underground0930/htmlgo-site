/**
 * Articles一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageChild } from '../../components/page-child'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchArticles } from '../../libs/fetch-articles'

const description = '色々なブログの記事のフィードをまとめたものです'

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params
  const result = await fetchArticles({ params: { page: resolvedParams.page } })
  return <PageChild {...result} />
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const page = Number(resolvedParams.page)
  return {
    ...nextMetaData({
      meta: {
        openGraph: {
          type: 'article',
        },
      },
      title: `ARTICLES - Page ${page}`,
      description,
      url: `/articles/page/${page}/`,
      images: '/img/ogp-new.png',
    }),
  }
}
