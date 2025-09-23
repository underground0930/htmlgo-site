import { ComponentPropsWithoutRef } from 'react'

import { PagerChild } from './pager-child'

type Props = Omit<ComponentPropsWithoutRef<'ul'>, 'className'> & {
  pages: number
  page: number
  basePath: string
  range?: number
  queryParams?: string
}

export const Pager = ({ pages, page, basePath, range = 1, queryParams, ...props }: Props) => {
  // ページ番号の配列を生成する関数
  const generatePageNumbers = (): (number | 'ellipsis')[] => {
    const pageNumbers: (number | 'ellipsis')[] = []

    // 総ページ数が少ない場合は全て表示
    if (pages <= range * 2 + 3) {
      return Array.from({ length: pages }, (_, i) => i + 1)
    }

    // 最初のページ
    pageNumbers.push(1)

    // 現在のページ周辺の計算
    const startRange = Math.max(2, page - range)
    const endRange = Math.min(pages - 1, page + range)

    // 最初のページと表示範囲の間に省略記号が必要か
    if (startRange > 2) {
      pageNumbers.push('ellipsis')
    }

    // 現在のページ周辺を追加
    for (let i = startRange; i <= endRange; i++) {
      pageNumbers.push(i)
    }

    // 表示範囲と最後のページの間に省略記号が必要か
    if (endRange < pages - 1) {
      pageNumbers.push('ellipsis')
    }

    // 最後のページ（総ページ数が1以上の場合）
    if (pages > 1) {
      pageNumbers.push(pages)
    }

    return pageNumbers
  }

  const pageNumbers = generatePageNumbers()

  return (
    <ul {...props} className='border-border flex items-center justify-center gap-2 border-y py-5'>
      {page > 1 && (
        <PagerChild page={page - 1} basePath={basePath} queryParams={queryParams}>
          &lt;
        </PagerChild>
      )}
      {pageNumbers.map((pageNum, index) => {
        if (pageNum === 'ellipsis') {
          return (
            <li key={`ellipsis-${index}`} className='mx-1.5 h-5 w-5'>
              <span className='block h-7 w-7 text-sm leading-7 text-[#222]'>...</span>
            </li>
          )
        }
        return (
          <PagerChild
            page={pageNum}
            basePath={basePath}
            key={pageNum}
            isActive={pageNum === page}
            queryParams={queryParams}
          >
            {pageNum}
          </PagerChild>
        )
      })}
      {page < pages && (
        <PagerChild page={page + 1} basePath={basePath} queryParams={queryParams}>
          &gt;
        </PagerChild>
      )}
    </ul>
  )
}
