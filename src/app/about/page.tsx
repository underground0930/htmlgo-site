import { ImageWrapper } from '@/components/common/ImageWrapper'
import { TextBtn } from '@/components/common/TextBtn'
import { Title } from '@/components/common/Title'
import { AboutSnsBox } from '@/components/pages/about/AboutSnsBox'

import { setMetaData } from '@/utils'

const description = 'このサイトについて'

export const metadata = {
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

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px pb-30px`,
  img: `mx-auto mb-40px rounded-full`,
  sns: `mb-45px`,
  title: `text-18px font-bold mt-40px mb-30px border-l-5 border-l-[#000] border-b-1 border-b-[#000]/30 pl-5px pb-5px`,
  link: `font-bold`,
  text: `text-15px`,
  btnWrap: `border-t-1 border-border text-center pt-40px mb-40px`,
}

export default function About() {
  return (
    <>
      <main className={className.main}>
        <Title title='ABOUT' text='このサイトや主について説明しています' />
        <div className={className.body}>
          <div className=''>
            <ImageWrapper
              cls={className.img}
              src='/img/profile.jpg'
              width={210}
              height={210}
            />
          </div>
          <div className={className.sns}>
            <AboutSnsBox />
          </div>
          <div className='cms-about-content'>
            <section>
              <h3 className={className.title}>このサイトについて</h3>
              <div className={className.text}>
                <p>
                  このサイトは私のポートフォリオサイトです。制作実績や技術記事などを掲載しています。
                </p>
                <p>
                  Next.js、TypeScript、Tailwind
                  CSSを使用して構築されており、定期的にアップデートを行っています。
                </p>
              </div>
            </section>
            <section>
              <h3 className={className.title}>制作者について</h3>
              <div className={className.text}>
                <p>Web開発を中心に活動しているエンジニアです。</p>
                <p>
                  フロントエンド技術を軸に、ユーザビリティとパフォーマンスを重視したWebサイト・アプリケーションの開発を行っています。
                </p>
              </div>
            </section>
            <section>
              <h3 className={className.title}>技術スタック</h3>
              <div className={className.text}>
                <p>主に以下の技術を使用しています：</p>
                <ul>
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                  <li>CSS / Tailwind CSS</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className={className.btnWrap}>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
