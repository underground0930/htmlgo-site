/**
 * Articles一覧ページ（1ページ目）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { ArticlesPageComponent } from './components/articles-page'
import { setMetaData } from '@/utils/set-metadata'

const description = '色々なブログの記事のフィードをまとめたものです'

export default async function Articles() {
  return <ArticlesPageComponent />
}

export const metadata: Metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ARTICLES',
    description,
    url: '/articles',
    images: '/img/ogp-new.png',
  }),
}
