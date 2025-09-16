/**
 * Articles一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageContent } from '../../components/page-content'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchArticlesList } from '@/features/articles/api/fetch-articles'

const description = '色々なブログの記事のフィードをまとめたものです'

type Props = {
  params: Promise<{ page: string }>
}

export default async function Page(props: Props) {
  const params = await props.params
  const result = await fetchArticlesList({ page: Number(params.page) })
  return <PageContent {...result} />
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  return {
    ...nextMetaData({
      meta: {
        openGraph: {
          type: 'article',
        },
      },
      title: `ARTICLES - Page ${params.page}`,
      description,
      url: `/articles/page/${params.page}`,
      images: '/img/ogp-new.png',
    }),
  }
}
