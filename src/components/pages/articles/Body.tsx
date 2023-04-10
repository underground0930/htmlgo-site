import Pagenation from '@/components/common/Pagenation'
import TextBtn from '@/components/common/TextBtn'
import Title from '@/components/common/Title'
import ArticlesList from '@/components/pages/articles/List'

import { FeedObj } from '@/types/feed'

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
