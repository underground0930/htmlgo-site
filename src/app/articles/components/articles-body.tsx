import { Title } from '@/features/ui/title'
import { TextBtn } from '@/features/ui/text-btn'
import { ArticlesList } from './articles-list'

import { FeedObj } from '@/types/feed'

type Props = {
  articles: FeedObj[]
}

export const ArticlesBody: React.FC<Props> = ({ articles = [] }) => {
  return (
    <>
      <main className='mx-5 max-w-[800px] md:mx-auto'>
        <Title title='Articles' text='技術系やそれ以外の記事' />
        <ArticlesList articles={articles} />
        {/* <Pager pages={pages} page={page} /> */}
        <div className='mb-10 mt-10 text-center'>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
