import { setMetaData } from '@/utils'
import { ContactBody } from '@/components'
import { setBaseUrl } from '@/const'

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
