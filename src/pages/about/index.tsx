// libs
import { event } from 'libs/gtag'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import SnsBox from 'components/snsBox'
import IconBtn from 'components/IconBtn'
import HistoryList from 'components/historyList'

const className = {
  main: 'mx-20px max-w-[800px] md:mx-auto',
  body: `mb-40px pb-30px`,
  img: `rounded-full w-[210px] h-[210px] mx-auto mb-40px overflow-hidden`,
  sns: `mb-45px`,
  title: `text-18px font-bold mt-40px mb-30px border-l-5 border-l-[#000] border-b-1 border-b-[#000]/30 pl-5px pb-5px`,
  text: `text-15px`,
  btnWrap: `border-t-1 border-border text-center pt-40px mb-40px`,
}

export default function About() {
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'about', label, value })
  }

  return (
    <Layout>
      <HeadWrap
        title={'ABOUT | HTMLGO'}
        description={'このサイトについて'}
        url={`https://htmlgo.site/about/`}
      />
      <main className={className.main}>
        <Title title="ABOUT" text="このサイトや主について説明しています" />
        <div className={className.body}>
          <div className={className.img}>
            <img src="/img/profile.jpg" width="210" height="210" alt="" />
          </div>
          <div className={className.sns}>
            <SnsBox category={'about'} />
          </div>
          <h3 className={className.title}>このサイトについて</h3>
          <p className={className.text}>
            このサイト主の「実績紹介」「WEB技術の記事」などをまとめたサイトです。
          </p>
          <h3 className={className.title}>プロフィール</h3>
          <p className={className.text}>
            <a
              href="https://twitter.com/resistance_gowy"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                clickHandler('profile_text_twitter', e.currentTarget.href)
              }}
            >
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
          <HistoryList
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
                heading: '2022年7月 - 2022年8月',
                text: 'ちょっと株式会社',
                link: 'https://chot-inc.com/',
              },
            ]}
          />
          <h3 className={className.title}>経験した技術・ツール</h3>
          <p className={className.text}>
            html / css / TypeScript / React / Next.js / Wordpress / Docker / Webpack / github / Backlog
          </p>
          <h3 className={className.title}>仕事道具</h3>
          <HistoryList
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
          <IconBtn
            icon="faHome"
            link="/"
            color="#ffffff"
            onClick={() => {
              clickHandler('top', '/')
            }}
          />
        </div>
      </main>
    </Layout>
  )
}
