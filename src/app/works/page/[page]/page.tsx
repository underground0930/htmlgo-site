/**
 * Works一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageChild } from '../../components/page-child'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchWorksIndex } from '../../libs/fetch-works-index'

const description = '最新の実績や、自主制作'

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params
  const result = await fetchWorksIndex({ params: { page: resolvedParams.page } })
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
      title: `WORKS - Page ${page}`,
      description,
      url: `/works/page/${page}/`,
      images: '/img/ogp-new.png',
    }),
  }
}
