import ContactBody from '@/components/pages/contact/contactBody'

import { setBaseUrl } from '@/const/config'

const description = 'お問い合わせはこちらからお願いします'

export const metadata = {
  title: 'CONTACT',
  description,
  openGraph: {
    url: setBaseUrl('/contact'),
    description,
    images: setBaseUrl('/img/ogp_new.png'),
  },
  twitter: {
    title: description,
    images: setBaseUrl('/img/ogp_new.png'),
  },
}

export default function Contact() {
  return <ContactBody />
}
