import { Title } from '@/components/ui/title'
import { Button } from '@/components/ui/button'
import { Pager } from '@/components/ui/pager'
import { ArticlesList } from './articles-list'
import { Icons } from '@/components/utils/icons'
import { FeedObj } from '@/types/feed'

type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

export const ArticlesBody = ({ articles = [], page, pages }: Props) => {
  return (
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      <Title title='Articles' text='技術系やそれ以外の記事' />
      <div className='mb-10'>
        <Pager pages={pages} page={page} basePath='/articles' />
      </div>
      <ArticlesList articles={articles} />
      <Pager pages={pages} page={page} basePath='/articles' />
      <div className='mt-10 mb-10 text-center'>
        <Button component='link' href='/' iconName='home'>
          HOME
        </Button>
      </div>
    </main>
  )
}
