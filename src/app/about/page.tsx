// components
import Title from '@/components/common/title'
import TextBtn from '@/components/common/textBtn'
import ImageBox from '@/components/common/ImageBox'
import AboutSnsBox from '@/components/pages/about/aboutSnsBox'
import AboutHistoryList from '@/components/pages/about/aboutHistoryList'

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px pb-30px`,
  img: `mx-auto mb-40px rounded-full`,
  sns: `mb-45px`,
  title: `text-18px font-bold mt-40px mb-30px border-l-5 border-l-[#000] border-b-1 border-b-[#000]/30 pl-5px pb-5px`,
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
            <ImageBox cls={className.img} src='/img/profile.jpg' width={210} height={210} />
          </div>
          <div className={className.sns}>
            <AboutSnsBox />
          </div>
          <h3 className={className.title}>このサイトについて</h3>
          <p className={className.text}>
            このサイト主の「実績紹介」「WEB技術の記事」などをまとめたサイトです。
          </p>
          <h3 className={className.title}>プロフィール</h3>
          <p className={className.text}>
            <a href='https://twitter.com/resistance_gowy' target='_blank' rel='noreferrer'>
              @resistance_gowy
            </a>
            <span>(フロントエンドエンジニア)</span>
          </p>
          <p className={className.text}>
            プロモーションサイト、コーポレートサイト、キャンペーンサイト等の様々なサイトを実装してきました。様々なデバイスに対応させること、更新性の高いサイトを作ることが得意です。ギークというよりかは、周りと協調してプロジェクトを円滑に進めることが得意なタイプ。お仕事をしていて、「とてもやりやすい」と言って頂くことが多いのが強みです。
          </p>
          <h3 className={className.title}>趣味</h3>
          <p className={className.text}>漫画、youtube、筋トレ、プール、散歩</p>
          <h3 className={className.title}>経歴</h3>
          <AboutHistoryList
            data={[
              {
                heading: '2009年 - 2010年',
                text: 'あとらす二十一',
                link: 'https://at21.jp/',
              },
              {
                heading: '2010年 - 2016年',
                text: 'SONICJAM Inc.',
                link: 'https://www.sonicjam.co.jp/',
              },
              {
                heading: '2016年 - 2022年6月',
                text: 'フリーランス',
              },
              {
                heading: '2022年7月 - 8月',
                text: 'ちょっと株式会社',
                link: 'https://chot-inc.com/',
              },
            ]}
          />
          <h3 className={className.title}>経験した技術・ツール</h3>
          <p className={className.text}>
            html5 / css3 / TypeScript / React / Next.js / Wordpress / Webpack
          </p>
          <h3 className={className.title}>仕事道具</h3>
          <AboutHistoryList
            data={[
              {
                heading: 'PC',
                text: 'MacBook Pro（14インチ、2021）',
              },
              {
                heading: 'PCモニター',
                text: 'EIZO EV2785-BK',
              },
              {
                heading: 'スマートフォン',
                text: 'iPhone 12 SE',
              },
            ]}
          />
        </div>
        <div className={className.btnWrap}>
          <TextBtn title='HOME' link='/' />
        </div>
      </main>
    </>
  )
}
