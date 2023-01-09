import React from 'react'

// const
import { ARTICLE_PER_PAGE, WORKS_PER_PAGE } from 'const/index'

// libs
import { client } from 'libs/client'

// type
import type { FeedObj } from 'types/feed'
import type { MicroCMSResponse } from 'types/microcms'

// components
import Title from 'components/title'
import TextBtn from 'components/textBtn'
import WorksList from 'components/worksList'
import Panels from 'components/panels'

const className = {
  btnWrap: 'text-center',
  section: 'mb-40px pb-20px md:mb-80px md:pb-40px border-b-1 border-border',
}

export default async function Home() {
  const { works, articles } = await fetchData()
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      {/* articles */}
      <section className={className.section}>
        <Title title='ARTICLES' text='最新の記事' />
        <Panels articles={articles} />
        <div className={className.btnWrap}>
          <TextBtn
            title='MORE'
            link='/articles/'
            eventParams={{
              action: 'click',
              category: 'top',
              label: 'article-index',
              value: '/articles/',
            }}
          />
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

export async function fetchData() {
  const articles: FeedObj[] = (
    await import('public/feed.json')
      .then((response) => {
        return response.default
      })
      .catch((err) => {
        console.log(err)
        return []
      })
  ).slice(0, 4)

  const works = await client
    .get<MicroCMSResponse>({
      endpoint: 'works',
      queries: { limit: 3, fields: 'id,title,slug,date,category,technology,slider' },
    })
    .then((result) => result.contents)
    .catch((err) => {
      console.log('top err :' + err)
      return { contents: [] }
    })

  return {
    works,
    articles,
  }
}
