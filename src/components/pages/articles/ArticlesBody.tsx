import { FeedObj } from '@/types'
import { Pagenation, TextBtn, Title, ArticlesList } from '@/components'

type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  btnWrap: 'text-center mb-40px md:mb-80',
}

export function ArticlesBody({ articles = [], page, pages }: Props) {
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
