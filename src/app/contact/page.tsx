import { Metadata } from 'next'

import { ContactBody } from './components/contact-body'

import { setMetaData } from '@/utils/set-metadata'

const description = 'お仕事のお問い合わせはこちらから'

export default function Contact() {
  return <ContactBody />
}

export const metadata: Metadata = {
  ...setMetaData({
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
