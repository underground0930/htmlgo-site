import React from 'react'

import { Title } from '@/components/ui/title'
import { Button } from '@/components/ui/button'
import { Pager } from '@/components/ui/pager'
import { ArticlesList } from '@/features/articles/components/articles-list'
import type { FeedObj } from '@/features/articles/types'

type Props = {
  articles: FeedObj[]
  page: number
  pages: number
}

export const PageContent = ({ articles, page, pages }: Props) => {
  return (
    <div className='max-w-(--content-width) md:mx-auto'>
      <Title title='Articles' text='技術系やそれ以外の記事' />
      <div className='mb-10'>
        <Pager pages={pages} page={page} basePath='/articles' />
      </div>
      <ArticlesList articles={articles} />
      <Pager pages={pages} page={page} basePath='/articles' />
      <div className='mt-10 mb-10 text-center'>
        <Button component='link' href='/' icon='home'>
          HOME
        </Button>
      </div>
    </div>
  )
}
