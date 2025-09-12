import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

import { ServiceList } from '../components/service-list'

import { ArticlesList, type FeedObj } from '@/features/articles'
import { WorksList, type WorkIndex } from '@/features/works'

export const PageContent = ({ works, articles }: { works: WorkIndex[]; articles: FeedObj[] }) => {
  return (
    <main className='mx-5 max-w-(--content-width) md:mx-auto'>
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
    </main>
  )
}
