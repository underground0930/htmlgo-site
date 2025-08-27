import { Metadata } from 'next'

import { ArticlesBody } from '../../components/articles-body'
import { setMetaData } from '@/utils/set-metadata'
import { fetchArticles } from '../../libs/fetch-articles'

const description = '色々なブログの記事のフィードをまとめたものです'

/**
 * Articlesページ（ページネーション対応）
 * @param params ページパラメータ
 * @returns JSX要素
 */
export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const resolvedParams = await params
  const result = await fetchArticles({ params: resolvedParams })

  return (
    <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
  )
}

/**
 * 動的にメタデータを生成
 * @param params ページパラメータ
 * @returns メタデータ
 */
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
