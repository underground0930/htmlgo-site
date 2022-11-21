import React from 'react'

// const
import { ARTICLE_PER_PAGE, WORKS_PER_PAGE } from 'const/index'

// libs
import { client } from 'libs/client'

// type
import { WorksPosts, FeedObj } from 'types/index'

// libs
import { event } from 'libs/gtag'

// components
import ViewSwitch from 'components/viewSwitch'
import HeadWrap from 'components/headWrap'
import Title from 'components/title'
import TextBtn from 'components/textBtn'
import WorksList from 'components/worksList'
import Panels from 'components/panels'

type Props = {
  works: WorksPosts
  articles: FeedObj[]
}

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  btnWrap: 'text-center',
  section: 'mb-40px pb-20px md:mb-80px md:pb-40px border-b-1 border-border',
}

const clickHandler = (label: string, value: string): void => {
  event({ action: 'click', category: 'top', label, value })
}

export default async function Home() {
  const { works, articles } = await fetchData()
  const type = 'list'
  return (
    // <HeadWrap
    //   title={'TOP | HTMLGO'}
    //   description={'WEB技術を書き連ねるサイト'}
    //   url={`https://htmlgo.site/`}
    //   isTop={true}
    // />
    <main className={className.main}>
      {/* articles */}
      <section className={className.section}>
        <Title title="ARTICLES" text="最新の記事" />
        <ViewSwitch type={type} />
        <Panels articles={articles} type={type} clickHandler={clickHandler} />
        <div className={className.btnWrap}>
          <TextBtn
            title="MORE"
            link="/articles/"
            eventParams={{ action: 'click', category: 'top', label: 'article-index', value: '/articles/' }}
          />
        </div>
      </section>
      {/* works */}
      <section className={className.section}>
        <Title title="WORKS" text="最新のお仕事の実績や、自主制作" />
        {/* <WorksList works={works} clickHandler={clickHandler} /> */}
        <WorksList works={works} />
        <div className={className.btnWrap}>
          <TextBtn
            title="MORE"
            link="/works/"
            eventParams={{ action: 'click', category: 'top', label: 'works-index', value: '/works/' }}
          />
        </div>
      </section>
    </main>
  )
}

export async function fetchData() {
  const articles = (
    await import('public/feed.json')
      .then((response) => {
        return response.default
      })
      .catch((err) => {
        console.log(err)
        return []
      })
  ).slice(0, 4)

  const works: any = await client
    .get({
      endpoint: 'works',
      queries: { limit: 3, fields: 'id,title,slug,date,category,technology,slider' },
    })
    .catch((err) => {
      console.log('top err :' + err)
      return { contents: [] }
    })

  return {
    works: works.contents,
    articles,
  }
}
