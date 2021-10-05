import React, { useState, useEffect } from 'react'

// type
import { FeedObj, PanelType } from 'types/index'

// style
import styles from 'styles/page/Articles.module.scss'

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

export default function ArticlesBody({ articles = [], page, pages }: Props) {
  const [type, setType] = useState<PanelType>('')

  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'articles', label, value })
  }

  useEffect(() => {
    const ft = localStorage.getItem('panelType')
    if (ft && ['tile', 'list', 'text'].includes(ft)) {
      setType(ft as PanelType)
      return
    }
    setType('tile')
  }, [])

  useEffect(() => {
    localStorage.setItem('panelType', type)
  }, [type])

  return (
    <Layout>
      <HeadWrap
        title={page === 1 ? '' : `(${page}) | ` + `ARTICLES | HTMLGO`}
        description={'色々なブログの記事のフィードをまとめたものです'}
        url={`https://htmlgo.site/articles/`}
      />
      <main className={styles.main}>
        <Title>
          <span>ARTICLES</span>
          <span>技術系やそれ以外の記事</span>
        </Title>
        <ViewSwitch type={type} setType={setType} />
        <Panels articles={articles} type={type} clickHandler={clickHandler} />
        <Pagenation pages={pages} page={page} />
        <div className={styles.back}>
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
