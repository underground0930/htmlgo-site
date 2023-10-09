import { ContactBody } from '@/components/pages/contact/ContactBody'

import { setMetaData } from '@/utils'

const description = 'お問い合わせはこちらからお願いします'

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
