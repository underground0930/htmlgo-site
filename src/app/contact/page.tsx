import { Metadata } from 'next'

import { PageContent } from './components/page-content'

import { nextMetaData } from '@/libs/next-metadata'

const description = 'お仕事のお問い合わせはこちらから'

export default function Page() {
  return <PageContent />
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
