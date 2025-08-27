/**
 * Articles一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { ArticlesPageComponent } from '../../components/articles-page'
import { setMetaData } from '@/utils/set-metadata'

const description = '色々なブログの記事のフィードをまとめたものです'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const page = Number(resolvedParams.page)
  return {
    ...setMetaData({
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

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const resolvedParams = await params
  return <ArticlesPageComponent params={resolvedParams} />
}
