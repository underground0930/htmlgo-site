import { setMetaData } from '@/utils/setMetadata'

import ContactBody from '@/components/pages/contact/Body'

import { setBaseUrl } from '@/const/config'

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
    url: setBaseUrl('/contact'),
    images: setBaseUrl('/img/ogp_new.png'),
  }),
}

export default function Contact() {
  return <ContactBody />
}
