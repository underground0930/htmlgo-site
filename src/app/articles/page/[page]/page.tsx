import { Metadata } from 'next'

import { ArticlesBody } from '../../components/articles-body'
import { setMetaData } from '@/utils/set-metadata'
import { fetchArticles } from '../../libs/fetch-articles'

const description = '色々なブログの記事のフィードをまとめたものです'

/**
 * 動的にメタデータを生成
 * @param params ページパラメータ
 * @returns メタデータ
 */
export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
  const page = Number(params.page)
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
      images: '/img/ogp_new.png',
    }),
  }
}

/**
 * Articlesページ（ページネーション対応）
 * @param params ページパラメータ
 * @returns JSX要素
 */
export default async function ArticlesPage({ params }: { params: { page: string } }) {
  const result = await fetchArticles({ params })
  
  return (
    <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
  )
}
