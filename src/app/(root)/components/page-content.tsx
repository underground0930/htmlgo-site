import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

import { ServiceList } from '../components/service-list'

import { ArticlesList } from '@/features/articles/components/articles-list'
import type { FeedObj } from '@/features/articles/types'
import { WorksList } from '@/features/works/components/works-list'
import type { WorkIndex } from '@/features/works/types'

export const PageContent = ({ works, articles }: { works: WorkIndex[]; articles: FeedObj[] }) => {
  return (
    <div className='max-w-(--content-width) md:mx-auto'>
      {/* services */}
      <section className='border-border mb-8 border-b pb-5 md:mb-10 md:pb-8'>
        <Title title='Services' text='事業内容' />
        <ServiceList />
        <div className='text-center'>
          <Button component='link' href='/about'>
            to About
          </Button>
        </div>
      </section>
      {/* works */}
      <section className='border-border mb-8 border-b pb-5 md:mb-10 md:pb-8'>
        <Title title='Works' text='最新の実績や、自主制作' />
        <WorksList works={works} />
        <div className='text-center'>
          <Button component='link' href='/works'>
            More Works
          </Button>
        </div>
      </section>
      {/* articles */}
      <section className='border-border mb-8 border-b pb-5 md:mb-10 md:pb-8'>
        <Title title='Articles' text='最新の記事' />
        <ArticlesList articles={articles} />
        <div className='text-center'>
          <Button component='link' href='/articles'>
            More Articles
          </Button>
        </div>
      </section>
    </div>
  )
}
