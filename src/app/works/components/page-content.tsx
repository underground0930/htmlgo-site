/**
 * Works共通ページコンポーネント
 * ページネーション有無に関わらず、Worksページの共通レイアウトを提供
 */

import React from 'react'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { Pager } from '@/components/ui/pager'
import { Select } from '@/components/ui/form/select'

import { WorksList } from '@/features/works/components/works-list'
import type { WorkIndex } from '@/features/works/types'

type Props = {
  works: WorkIndex[]
  page: number
  pages: number
}

export const PageContent = ({ works, page, pages }: Props) => {
  return (
    <div className='max-w-(--content-width) md:mx-auto'>
      <Title title='Works' text='最新の実績や、自主制作' />
      {/* <div className='mt-5 mb-5 flex w-[400px] gap-4'>
        <div className='w-1/2'>
          <Select
            options={[
              {
                label: 'すべて',
                value: 'all',
              },
              {
                label: '実績',
                value: 'works',
              },
              {
                label: '自主制作',
                value: 'self',
              },
            ]}
          />
        </div>
        <div className='w-1/2'>
          <Select
            options={[
              {
                label: 'すべて',
                value: 'all',
              },
              {
                label: '実績',
                value: 'works',
              },
              {
                label: '自主制作',
                value: 'self',
              },
            ]}
          />
        </div>
      </div> */}

      <div className='mb-10'>
        <Pager pages={pages} page={page} basePath='/works' />
      </div>
      <WorksList works={works} />
      <div className='mb-10'>
        <Pager pages={pages} page={page} basePath='/works' />
      </div>
      <footer className='mt-10 pb-10'>
        <div className='text-center'>
          <Button component='link' href='/' icon='home'>
            HOME
          </Button>
        </div>
      </footer>
    </div>
  )
}
