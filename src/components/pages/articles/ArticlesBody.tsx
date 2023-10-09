import { Title } from '@/components/common/Title'
import { TextBtn } from '@/components/common/TextBtn'
import { ArticlesList } from '@/components/pages/articles/ArticlesList'

import { FeedObj } from '@/types'

type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  btnWrap: 'text-center mb-40px',
}

export const ArticlesBody: React.FC<Props> = ({ articles = [], page, pages }) => {
  // MEMO: 現在は未使用
  // console.log(page, pages)
  return (
    <>
      <main className={className.main}>
        <Title title='ARTICLES' text='技術系やそれ以外の記事' />
        <ArticlesList articles={articles} />
        {/* <Pager pages={pages} page={page} /> */}
        <div className={className.btnWrap + ` mt-40px`}>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
