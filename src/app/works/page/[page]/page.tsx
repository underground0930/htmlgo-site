/**
 * Works一覧ページ（ページネーション対応）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { WorksPageComponent } from '../../components/works-page'
import { setMetaData } from '@/utils/set-metadata'

const description = '最新の実績や、自主制作'

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
      title: `WORKS - Page ${page}`,
      description,
      url: `/works/page/${page}/`,
      images: '/img/ogp-new.png',
    }),
  }
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const resolvedParams = await params
  return <WorksPageComponent params={resolvedParams} />
}
