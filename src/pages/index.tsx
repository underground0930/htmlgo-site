import React from 'react'
import { useSelector } from 'react-redux'

// store
import { RootState } from '../store'

// type
import { WorksPosts, FeedObj } from 'types/index'

// libs
import { event } from 'libs/gtag'

// components
import ViewSwitch from 'components/viewSwitch'
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import TextBtn from 'components/textBtn'
import WorksList from 'components/worksList'
import Panels from 'components/panels'
import { topGetStaticProps } from 'libs/getStaticProps'

type Props = {
  works: WorksPosts
  articles: FeedObj[]
}

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  btnWrap: 'text-center',
  section: 'mb-40px pb-20px md:mb-80px md:pb-40px border-b-1 border-border',
}

export default function Home({ works = [], articles = [] }: Props) {
  const type = useSelector((state: RootState) => state.panelType.value)

  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'top', label, value })
  }

  return (
    <Layout>
      <HeadWrap
        title={'TOP | HTMLGO'}
        description={'WEB技術を書き連ねるサイト'}
        url={`https://htmlgo.site/`}
        isTop={true}
      />
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
              onClick={() => {
                clickHandler('article-index', '/articles/')
              }}
            />
          </div>
        </section>
        {/* works */}
        <section className={className.section}>
          <Title title="WORKS" text="最新のお仕事の実績や、自主制作" />
          <WorksList works={works} clickHandler={clickHandler} />
          <div className={className.btnWrap}>
            <TextBtn
              title="MORE"
              link="/works/"
              onClick={() => {
                clickHandler('works-index', '/works/')
              }}
            />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const getStaticProps = topGetStaticProps
