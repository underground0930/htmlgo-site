/**
 * Works共通ページコンポーネント
 * ページネーション有無に関わらず、Worksページの共通レイアウトを提供
 */

import React from 'react'
import { WorksList } from './works-list'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { Pager } from '@/components/ui/pager'
import { fetchWorksIndex } from '../libs/fetch-works-index'

/**
 * Works共通ページのプロパティ型定義
 */
type WorksPageProps = {
  /**
   * ページパラメータ（オプショナル）
   * 指定されない場合は1ページ目を表示
   */
  params?: { page: string }
}

/**
 * Works共通ページコンポーネント
 *
 * @param params - ページパラメータ
 * @returns Works一覧ページのJSX
 */
export async function WorksPageComponent({ params }: WorksPageProps) {
  const { works, page, pages } = await fetchWorksIndex({ params })

  return (
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      <Title title='Works' text='最新の実績や、自主制作' />
      <div className='mb-10'>
        <Pager pages={pages} page={page} basePath='/works' />
      </div>
      <WorksList works={works} />
      <div className='mb-10'>
        <Pager pages={pages} page={page} basePath='/works' />
      </div>
      <footer className='border-border mt-10 border-t pt-10 pb-10'>
        <div className='text-center'>
          <Button component='link' href='/'>
            Home
          </Button>
        </div>
      </footer>
    </main>
  )
}
