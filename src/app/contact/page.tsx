import { ContactBody } from './components/contact-body'

import { setMetaData } from '@/utils/set-metadata'

const description = 'お仕事のお問い合わせはこちらから'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'CONTACT',
    description,
    url: '/contact',
    images: '/img/ogp_new.png',
  }),
}

export default function Contact() {
  return <ContactBody />
}
