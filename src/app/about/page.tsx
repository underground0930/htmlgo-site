import { Metadata } from 'next'

import { Image } from '@/components/utils/image'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { SnsList } from './components/sns-list'

import { nextMetaData } from '@/libs/next-metadata'

const description = 'このサイトについて'

export default function Page() {
  return (
    <main className='mx-5 max-w-(--content-width) md:mx-auto'>
      <Title title='About' text='このサイトや主について' />
      <div className='mb-10 pb-8'>
        <div className='mb-10 flex justify-center'>
          <Image circle src='/img/about/profile.jpg' width={210} height={210} />
        </div>
        <div className='mb-11'>
          <SnsList />
        </div>
        <div>
          <section>
            <h3 className='mt-8 mb-6 border-b border-l-5 border-b-black/30 border-l-black pb-1 pl-2 text-lg font-bold'>
              プロフィール
            </h3>
            <div className='leading-default text-sm'>
              <p>
                <a
                  href='https://x.com/resistance_gowy'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='hover:text-link-active underline'
                >
                  <strong>@resistance_gowy</strong>
                </a>
                (フロントエンドエンジニア)
              </p>
              <p>東京都→埼玉県でフリーランスとして活動しています。</p>
              <p>
                最近は<strong>React</strong>、<strong>TypeScript</strong>、<strong>Next.js</strong>
                のお仕事をやっています。
              </p>
              <p>
                ギークというよりかは、周りと協調してプロジェクトを円滑に進めることが得意なタイプ。
              </p>
              <p>お仕事をしていて、「とてもやりやすい」と言って頂くことが多いのが強みです。</p>
              <p>業務効率化のツールを作るのが最近の趣味です。</p>
            </div>
          </section>
          <section>
            <h3 className='mt-8 mb-6 border-b border-l-5 border-b-black/30 border-l-black pb-1 pl-2 text-lg font-bold'>
              経験した技術・ツール・サービス
            </h3>
            <div className='leading-default text-sm'>
              React / TypeScript / Next.js / Tailwind CSS / WordPress / TanStack Query / microCMS
            </div>
          </section>
          <section>
            <h3 className='mt-8 mb-6 border-b border-l-5 border-b-black/30 border-l-black pb-1 pl-2 text-lg font-bold'>
              経歴
            </h3>
            <div className='text-sm'>
              <ul>
                <li className='mb-3'>
                  <strong>2009年 ~ 2010年</strong> : あとらす二十一
                </li>
                <li className='mb-3'>
                  <strong>2010年 ~ 2016年</strong> : SONICJAM Inc.
                </li>
                <li className='mb-3'>
                  <strong>2016年 ~ 2022年6月</strong> : フリーランス
                </li>
                <li className='mb-3'>
                  <strong>2022年7月 ~ 9月</strong>: ちょっと株式会社
                </li>
                <li className='mb-3'>
                  <strong>2022年9月</strong> ~ : フリーランス
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className='border-border mb-10 border-t pt-10 text-center'>
        <Button component='link' href='/' icon='home'>
          HOME
        </Button>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  ...nextMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ABOUT',
    description,
    url: '/about',
    images: '/img/ogp-new.png',
  }),
}
