import { Metadata } from 'next'

import { nextMetaData } from '@/libs/next-metadata'
import { PageContent } from './_components/page-content'

const description = 'このサイトについて'

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
    title: 'ABOUT',
    description,
    url: '/about',
    images: '/img/ogp-new.png',
  }),
}
