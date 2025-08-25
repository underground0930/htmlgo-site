import { Title } from '@/components/common/Title'
import { TextBtn } from '@/components/common/TextBtn'
import { ArticlesList } from '@/components/pages/articles/ArticlesList'

import { FeedObj } from '@/types'

type Props = {
  articles: FeedObj[]
}

export const ArticlesBody: React.FC<Props> = ({ articles = [] }) => {
  return (
    <>
      <main className='mx-20px max-w-[800px] md:mx-auto'>
        <Title title='Articles' text='技術系やそれ以外の記事' />
        <ArticlesList articles={articles} />
        {/* <Pager pages={pages} page={page} /> */}
        <div className='mb-40px mt-40px text-center'>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
