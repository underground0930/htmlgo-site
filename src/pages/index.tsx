import React from 'react'
import { useSelector } from 'react-redux'

// store
import { RootState } from '../store'

// type
import { WorksPosts, FeedObj } from 'types/index'

// style
import styles from 'styles/page/Home.module.scss'

// libs
import { client } from 'libs/client'
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
      <main className={styles.main}>
        {/* articles */}
        <section className={styles.section}>
          <Title>
            <span>ARTICLES</span>
            <span>最新の記事</span>
          </Title>
          <ViewSwitch type={type} />
          <Panels articles={articles} type={type} clickHandler={clickHandler} />
          <div className={`${styles.section__btn} ${styles.articles__btn}`}>
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
        <section className={styles.section}>
          <Title>
            <span>WORKS</span>
            <span>最新のお仕事の実績や、自主制作</span>
          </Title>
          <WorksList works={works} clickHandler={clickHandler} />
          <div className={styles.section__btn}>
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
