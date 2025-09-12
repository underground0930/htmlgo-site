import { Metadata } from 'next'

import { PageChild } from './components/page-child'

import { nextMetaData } from '@/libs/next-metadata'

const description = 'お仕事のお問い合わせはこちらから'

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
    title: 'CONTACT',
    description,
    url: '/contact',
    images: '/img/ogp-new.png',
  }),
}
