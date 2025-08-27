import { Metadata } from 'next'

import { WorksList } from '../../components/works-list'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { Pager } from '@/components/ui/pager'

import { fetchWorksIndex } from '../../libs/fetch-works-index'
import { setMetaData } from '@/utils/set-metadata'

const description = '最新の実績や、自主制作'

/**
 * 動的にメタデータを生成
 * @param params ページパラメータ
 * @returns メタデータ
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const page = Number(resolvedParams.page)
  return {
    ...setMetaData({
      meta: {
        openGraph: {
          type: 'article',
        },
      },
      title: `WORKS - Page ${page}`,
      description,
      url: `/works/page/${page}/`,
      images: '/img/ogp-new.png',
    }),
  }
}

/**
 * Worksページ（ページネーション対応）
 * @param params ページパラメータ
 * @returns JSX要素
 */
export default async function WorksPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const resolvedParams = await params
  const { works, page, pages } = await fetchWorksIndex({ params: resolvedParams })

  return (
    <main className='mx-5 max-w-[800px] md:mx-auto'>
      <Title title='Works' text='最新の実績や、自主制作' />
      {pages > 1 && <Pager pages={pages} page={page} basePath='/works' />}
      <WorksList works={works} />
      {pages > 1 && <Pager pages={pages} page={page} basePath='/works' />}
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
