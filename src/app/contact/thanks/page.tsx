import { Metadata } from 'next'

import { nextMetaData } from '@/libs/next-metadata'
import { PageContent } from './components/page-content'

const description = 'お問い合わせ頂きありがとうございました'

export const metadata: Metadata = {
  ...nextMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'CONTACT',
    description,
    url: '/contact/thanks',
    images: '/img/ogp-new.png',
  }),
}

export default function Page() {
  return <PageContent />
}
