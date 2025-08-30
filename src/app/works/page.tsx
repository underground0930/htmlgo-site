/**
 * Works一覧ページ（1ページ目）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { WorksPageComponent } from './components/works-page'
import { setMetaData } from '@/utils/set-metadata'

const description = '最新の実績や、自主制作'

export default function Page() {
  return <WorksPageComponent />
}

export const metadata: Metadata = {
  ...setMetaData({
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
