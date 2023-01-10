import React from 'react'

// libs
import { fetchTopList } from '@/libs/fetchTopList'

// components
import Title from '@/components/common/title'
import TextBtn from '@/components/common/textBtn'
import WorksList from '@/components/pages/works/worksList'
import ArticlesList from '@/components/pages/articles/articlesList'

const className = {
  btnWrap: 'text-center',
  section: 'mb-40px pb-20px md:mb-80px md:pb-40px border-b-1 border-border',
}

export default async function Home() {
  const { works, articles } = await fetchTopList()
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      {/* articles */}
      <section className={className.section}>
        <Title title='ARTICLES' text='最新の記事' />
        <ArticlesList articles={articles} />
        <div className={className.btnWrap}>
          <TextBtn title='MORE' link='/articles/' />
        </div>
      </section>
      {/* works */}
      <section className={className.section}>
        <Title title='WORKS' text='最新のお仕事の実績や、自主制作' />
        <WorksList works={works} />
        <div className={className.btnWrap}>
          <TextBtn title='MORE' link='/works/' />
        </div>
      </section>
    </main>
  )
}
