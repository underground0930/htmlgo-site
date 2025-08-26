import { Metadata } from 'next'

import { ImageWrapper } from '@/components/common/image-wrapper'
import { TextBtn } from '@/components/common/text-btn'
import { Title } from '@/components/common/title'
import { AboutSnsBox } from '@/components/pages/about/about-sns-box'

import { setMetaData } from '@/utils'

const description = 'このサイトについて'

export const metadata: Metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ABOUT',
    description,
    url: '/about',
    images: '/img/ogp_new.png',
  }),
}

export default function About() {
  return (
    <>
      <main className='mx-5 max-w-[800px] md:mx-auto'>
        <Title title='About' text='このサイトや主について' />
        <div className='mb-10 pb-8'>
          <div className=''>
            <ImageWrapper
              cls='mx-auto mb-10 rounded-full'
              src='/img/profile.jpg'
              width={210}
              height={210}
            />
          </div>
          <div className='mb-11'>
            <AboutSnsBox />
          </div>
          <div>
            <section>
              <h3 className='mb-8 mt-10 border-b border-l-5 border-b-black/30 border-l-black pb-1 pl-2 text-lg font-bold'>
                プロフィール
              </h3>
              <div className='text-sm'>
                <p className='leading-[1.8]'>
                  <a
                    href='https://x.com/resistance_gowy'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='underline hover:text-link-active'
                  >
                    <strong>@resistance_gowy</strong>
                  </a>
                  (フロントエンドエンジニア)
                </p>
                <p className='leading-[1.8]'>東京都→埼玉県でフリーランスとして活動しています。</p>
                <p className='leading-[1.8]'>
                  最近は<strong>React</strong>、<strong>TypeScript</strong>、
                  <strong>Next.js</strong>
                  のお仕事をやっています。
                </p>
                <p className='leading-[1.8]'>
                  ギークというよりかは、周りと協調してプロジェクトを円滑に進めることが得意なタイプ。
                </p>
                <p className='leading-[1.8]'>
                  お仕事をしていて、「とてもやりやすい」と言って頂くことが多いのが強みです。
                </p>
                <p className='leading-[1.8]'>業務効率化のツールを作るのが最近の趣味です。</p>
              </div>
            </section>
            <section>
              <h3 className='mb-8 mt-10 border-b border-l-5 border-b-black/30 border-l-black pb-1 pl-2 text-lg font-bold'>
                経験した技術・ツール・サービス
              </h3>
              <div className='text-sm'>
                <p className='leading-[1.8]'>
                  React / TypeScript / Next.js / Tailwind CSS / Ruby on Rails / WordPress
                  / TanStack Query / microCMS
                </p>
              </div>
            </section>
            <section>
              <h3 className='mb-8 mt-10 border-b border-l-5 border-b-black/30 border-l-black pb-1 pl-2 text-lg font-bold'>
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
        <div className='mb-10 border-t border-border pt-10 text-center'>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
