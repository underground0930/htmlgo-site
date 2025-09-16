/**
 * Works一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageContent } from '../../components/page-content'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchWorksList } from '@/features/works/api/fetch-works-list'
import { parsePageNumber } from '@/utils/parse-number'

const description = '最新の実績や、自主制作'

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params
  const result = await fetchWorksList({ page: parsePageNumber(page), limit: 12 })

  if (result.works.length === 0 && result.page > 0) {
    notFound()
  }

  return <PageContent {...result} />
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
