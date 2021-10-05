// styles
import styles from 'styles/page/Thanks.module.scss'

// libs
import { event } from 'libs/gtag'

// components
import HeadWrap from 'components/headWrap'
import Layout from 'components/layout'
import Title from 'components/title'
import IconBtn from 'components/IconBtn'

export default function Thanks() {
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category: 'contact-thanks', label, value })
  }
  return (
    <Layout>
      <HeadWrap
        title={'THANKS | HTMLGO'}
        description={'お問い合わせ'}
        url={`https://htmlgo.site/contact/thanks/`}
      />
      <main className={styles.main}>
        <Title>
          <span>THANKS</span>
          <span>お仕事のお問い合わせはこちらからどうぞ</span>
        </Title>
        <div className={styles.body}>
          <div className={styles.thanks}>
            お問い合わせありがとうございました。
            <br />
            内容を確認後、折り返しご連絡いたしますので、
            <br />
            今しばらくおまちください。
          </div>
        </div>
        <div className={styles.back}>
          <IconBtn
            icon="faHome"
            title="back to top"
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
