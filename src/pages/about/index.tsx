// style
import styles from 'styles/page/About.module.scss'

// libs
import { event } from 'libs/gtag'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import SnsBox from 'components/snsBox'
import IconBtn from 'components/IconBtn'
import HistoryList from 'components/historyList'

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
      <main className={styles.main}>
        <Title title="ABOUT" text="このサイトや主について説明しています" />
        <div className={styles.body}>
          <div className={styles.img}>
            <img src="/img/profile.jpg" width="210" height="210" alt="" />
          </div>
          <div className={styles.sns}>
            <SnsBox category={'about'} />
          </div>
          <h3 className={styles.title}>このサイトについて</h3>
          <p className={styles.text}>このサイト主の「実績紹介」「WEB技術の記事」などをまとめたサイトです。</p>
          <h3 className={styles.title}>プロフィール</h3>
          <p className={styles.text}>
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
          <p className={styles.text}>
            プロモーションサイト、コーポレートサイト、キャンペーンサイト等の様々なサイトを実装してきました。様々なデバイスに対応させること、更新性の高いサイトを作ることが得意です。ギークというよりかは、周りと協調してプロジェクトを円滑に進めることが得意なタイプ。お仕事をしていて、「とてもやりやすい」と言って頂くことが多いのが強みです。
          </p>
          <h3 className={styles.title}>趣味</h3>
          <p className={styles.text}>漫画、youtube、筋トレ、プール、散歩</p>
          <h3 className={styles.title}>経歴</h3>
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
                heading: '2016年 -',
                text: 'フリーランス',
              },
            ]}
          />
          <h3 className={styles.title}>経験した技術・ツール</h3>
          <p className={styles.text}>
            html / css / TypeScript / Vue.js / React / Next.js / Wordpress / Docker / Webpack / github /
            Backlog
          </p>
          <h3 className={styles.title}>仕事道具</h3>
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
        <div className={styles.back}>
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
