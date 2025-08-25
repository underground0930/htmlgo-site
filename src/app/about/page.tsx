import { Metadata } from 'next'

import { ImageWrapper } from '@/components/common/ImageWrapper'
import { TextBtn } from '@/components/common/TextBtn'
import { Title } from '@/components/common/Title'
import { AboutSnsBox } from '@/components/pages/about/AboutSnsBox'

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
      <main className='mx-20px max-w-[800px] md:mx-auto'>
        <Title title='About' text='このサイトや主について' />
        <div className='mb-40px pb-30px'>
          <div className=''>
            <ImageWrapper
              cls='mx-auto mb-40px rounded-full'
              src='/img/profile.jpg'
              width={210}
              height={210}
            />
          </div>
          <div className='mb-45px'>
            <AboutSnsBox />
          </div>
          <div className='cms-about-content'>
            <section>
              <h3 className='mb-30px mt-40px border-b border-l-5 border-b-black/30 border-l-black pb-5px pl-5px text-18px font-bold'>
                プロフィール
              </h3>
              <div className='text-15px'>
                <p>
                  <a
                    href='https://x.com/resistance_gowy'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <strong>@resistance_gowy</strong>
                  </a>
                  (フロントエンドエンジニア)
                </p>
                <p>東京都→埼玉県でフリーランスとして活動しています。</p>
                <p>
                  最近は<strong>React</strong>、<strong>TypeScript</strong>、
                  <strong>Next.js</strong>
                  のお仕事をやっています。
                </p>
                <p>
                  ギークというよりかは、周りと協調してプロジェクトを円滑に進めることが得意なタイプ。
                </p>
                <p>
                  お仕事をしていて、「とてもやりやすい」と言って頂くことが多いのが強みです。
                </p>
                <p>業務効率化のツールを作るのが最近の趣味です。</p>
              </div>
            </section>
            <section>
              <h3 className='mb-30px mt-40px border-b border-l-5 border-b-black/30 border-l-black pb-5px pl-5px text-18px font-bold'>
                経験した技術・ツール・サービス
              </h3>
              <div className='text-15px'>
                <p>
                  React / TypeScript / Next.js / Tailwind CSS / Ruby on Rails / WordPress
                  / TanStack Query / microCMS
                </p>
              </div>
            </section>
            <section>
              <h3 className='mb-30px mt-40px border-b border-l-5 border-b-black/30 border-l-black pb-5px pl-5px text-18px font-bold'>
                経歴
              </h3>
              <div className='text-15px'>
                <ul>
                  <li>
                    <strong>2009年 ~ 2010年</strong> : あとらす二十一
                  </li>
                  <li>
                    <strong>2010年 ~ 2016年</strong> : SONICJAM Inc.
                  </li>
                  <li>
                    <strong>2016年 ~ 2022年6月</strong> : フリーランス
                  </li>
                  <li>
                    <strong>2022年7月 ~ 9月</strong>: ちょっと株式会社
                  </li>
                  <li>
                    <strong>2022年9月</strong> ~ : フリーランス
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className='mb-40px border-t border-border pt-40px text-center'>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
