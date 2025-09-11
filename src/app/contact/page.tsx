import { Metadata } from 'next'

import { ContactBody } from './components/contact-body'

import { nextMetaData } from '@/libs/next-metadata'

const description = 'お仕事のお問い合わせはこちらから'

export default function Page() {
  return <ContactBody />
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
