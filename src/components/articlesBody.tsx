import React from 'react'
import { useSelector } from 'react-redux'

// store
import { RootState } from '../store'

// type
import { FeedObj } from 'types/index'

// libs
import { event } from 'libs/gtag'

// components
import ViewSwitch from 'components/viewSwitch'
import Pagenation from 'components/pagenation'
import Panels from 'components/panels'
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import IconBtn from 'components/IconBtn'

type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

const className = {
  main: 'mx-20px',
  btnWrap: 'text-center mb-40px md:mb-80',
}

export default function ArticlesBody({ articles = [], page, pages }: Props) {
  const type = useSelector((state: RootState) => state.panelType.value)
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'articles', label, value })
  }
  return (
    <Layout>
      <HeadWrap
        title={(page === 1 ? '' : `${page}ページ目 | `) + `ARTICLES | HTMLGO`}
        description={'色々なブログの記事のフィードをまとめたものです'}
        url={`https://htmlgo.site/articles/`}
      />
      <main className={className.main}>
        <Title title="ARTICLES" text="技術系やそれ以外の記事" />
        <ViewSwitch type={type} />
        <Panels articles={articles} type={type} clickHandler={clickHandler} />
        <Pagenation pages={pages} page={page} />
        <div className={className.btnWrap + ` mt-40px`}>
          <IconBtn
            icon="faHome"
            link="/"
            color="#ffffff"
            onClick={() => {
              clickHandler('top', '/')
            }}
          />
        </div>
      </main>
    </Layout>
  )
}
