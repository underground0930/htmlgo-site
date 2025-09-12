/**
 * Works一覧ページ（1ページ目）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageChild } from './components/page-child'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchWorksIndex } from './libs/fetch-works-index'

const description = '最新の実績や、自主制作'

export default async function Page() {
  const result = await fetchWorksIndex({ params: { page: '1' } })
  return <PageChild {...result} />
}

export const metadata: Metadata = {
  ...nextMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'WORKS',
    description,
    url: '/works',
    images: '/img/ogp-new.png',
  }),
}
