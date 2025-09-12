import { Metadata } from 'next'

import { nextMetaData } from '@/libs/next-metadata'
import { PageChild } from './components/page-child'

const description = 'このサイトについて'

export default function Page() {
  return <PageChild />
}

export const metadata: Metadata = {
  ...nextMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ABOUT',
    description,
    url: '/about',
    images: '/img/ogp-new.png',
  }),
}
