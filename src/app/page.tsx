import { setMetaData } from '@/utils/setMetadata'

import { fetchTopList } from '@/libs/fetchTopList'

import TextBtn from '@/components/common/TextBtn'
import Title from '@/components/common/Title'
import ArticlesList from '@/components/pages/articles/List'
import WorksList from '@/components/pages/works/List'

import { baseURL, setBaseUrl } from '@/const/config'
const description = 'WEB技術を書き連ねるサイト'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'website',
      },
    },
    title: 'TOP',
    url: baseURL,
    description,
    images: setBaseUrl('/img/ogp_new.png'),
  }),
}

const className = {
  btnWrap: 'text-center',
  section: 'mb-40px pb-20px md:mb-80px md:pb-40px border-b-1 border-border',
}

export const revalidate = 60

export default async function Home() {
  const { works, articles } = await fetchTopList()
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      {/* works */}
      <section className={className.section}>
        <Title title='WORKS' text='最新のお仕事の実績や、自主制作' />
        <WorksList works={works} />
        <div className={className.btnWrap}>
          <TextBtn title='MORE' link='/works/' />
        </div>
      </section>
      {/* articles */}
      <section className={className.section}>
        <Title title='ARTICLES' text='最新の記事' />
        <ArticlesList articles={articles} />
        <div className={className.btnWrap}>
          <TextBtn title='MORE' link='/articles/' />
        </div>
      </section>
    </main>
  )
}
