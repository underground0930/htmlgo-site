import { useMemo } from 'react'

// type
import { FeedObj } from '@/types/feed'

// components
import Pagenation from '@/components/common/pagenation'
import ArticlesList from '@/components/pages/articles/articlesList'
import Title from '@/components/common/title'
import TextBtn from '@/components/common/textBtn'

type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  btnWrap: 'text-center mb-40px md:mb-80',
}

export default function ArticlesBody({ articles = [], page, pages }: Props) {
  const title = useMemo(
    () => (page === 1 ? '' : `${page}ページ目 | `) + `ARTICLES | HTMLGO`,
    [page],
  )

  return (
    <>
      <main className={className.main}>
        <Title title='ARTICLES' text='技術系やそれ以外の記事' />
        <ArticlesList articles={articles} />
        <Pagenation pages={pages} page={page} />
        <div className={className.btnWrap + ` mt-40px`}>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
