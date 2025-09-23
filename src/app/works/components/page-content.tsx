'use client'

/**
 * Works共通ページコンポーネント
 * ページネーション有無に関わらず、Worksページの共通レイアウトを提供
 */

import React, { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { Pager } from '@/components/ui/pager'
import { Select } from '@/components/ui/form/select'

import { WorksList } from '@/features/works/components/works-list'
import type { WorkIndex, WorksCategory } from '@/features/works/types'
import { useParameter } from '../hooks/use-parameter'

type Props = {
  works: WorkIndex[]
  page: number
  pages: number
  technologies: WorksCategory[]
  categories: WorksCategory[]
}

type SelectOption = {
  label: string
  value: string
}

export const PageContent = ({ works, page, pages, technologies, categories }: Props) => {
  const { category, technology, setCategory, setTechnology, queryParams } = useParameter()

  const categoryOptions = useMemo(
    () =>
      categories.map((c) => ({
        label: c.label,
        value: c.id,
      })),
    [categories],
  )
  const selectedCategory = categoryOptions.find((c) => c.value === category)

  const technologyOptions = useMemo(
    () =>
      technologies.map((t) => ({
        label: t.label,
        value: t.id,
      })),
    [technologies],
  )
  const selectedTechnology = technologyOptions.find((t) => t.value === technology)

  return (
    <div className='max-w-(--content-width) md:mx-auto'>
      <Title title='Works' text='最新の実績や、自主制作' />
      <div className='mx-auto mt-5 mb-5 flex max-w-[500px] flex-col gap-4 sm:mx-0 sm:grid sm:grid-cols-2'>
        <div className=''>
          <Select<SelectOption, false>
            id='categories'
            instanceId='categories'
            value={selectedCategory}
            isClearable
            onChange={(option) => {
              void setCategory(option?.value ?? null)
            }}
            options={categoryOptions}
          />
        </div>
        <div className=''>
          <Select<SelectOption, false>
            id='technologies'
            instanceId='technologies'
            value={selectedTechnology}
            isClearable
            onChange={(option) => {
              void setTechnology(option?.value ?? null)
            }}
            options={technologyOptions}
          />
        </div>
      </div>
      {pages > 0 && (
        <div className='mb-10'>
          <Pager pages={pages} page={page} basePath='/works' queryParams={queryParams} />
        </div>
      )}
      {works.length > 0 ? (
        <WorksList works={works} />
      ) : (
        <div className='py-20 text-center text-sm'>条件に該当する実績は見つかりませんでした</div>
      )}
      {pages > 0 && (
        <div className='mb-10'>
          <Pager pages={pages} page={page} basePath='/works' queryParams={queryParams} />
        </div>
      )}
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
