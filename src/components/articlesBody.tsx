// type
import { FeedObj } from 'types/feed'

// components
import Pagenation from 'components/pagenation'
import Panels from 'components/panels'
import HeadWrap from 'components/headWrap'
import Title from 'components/title'
import TextBtn from 'components/textBtn'

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
  return (
    <>
      <HeadWrap
        title={(page === 1 ? '' : `${page}ページ目 | `) + `ARTICLES | HTMLGO`}
        description='色々なブログの記事のフィードをまとめたものです'
        url='https://htmlgo.site/articles/'
      />
      <main className={className.main}>
        <Title title='ARTICLES' text='技術系やそれ以外の記事' />
        <Panels articles={articles} />
        <Pagenation pages={pages} page={page} />
        <div className={className.btnWrap + ` mt-40px`}>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
