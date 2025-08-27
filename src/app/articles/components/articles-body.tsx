import { Title } from '@/components/ui/title'
import { LinkButton } from '@/components/ui/button'
import { Pager } from '@/components/ui/pager'
import { ArticlesList } from './articles-list'

import { FeedObj } from '@/types/feed'

type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

/**
 * Articles本体コンポーネント
 * @param articles 記事リスト
 * @param page 現在のページ
 * @param pages 総ページ数
 */
export const ArticlesBody: React.FC<Props> = ({ articles = [], page, pages }) => {
  return (
    <>
      <main className='mx-5 max-w-[800px] md:mx-auto'>
        <Title title='Articles' text='技術系やそれ以外の記事' />
        <div className='mb-10'>
          <Pager pages={pages} page={page} basePath='/articles' />
        </div>
        <ArticlesList articles={articles} />
        <Pager pages={pages} page={page} basePath='/articles' />
        <div className='mt-10 mb-10 text-center'>
          <LinkButton href='/'>HOME</LinkButton>
        </div>
      </main>
    </>
  )
}
