// style
import styles from 'styles/components/Layout.module.scss'

// components
import Header from 'components/header'
import Footer from 'components/footer'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const layout = ({ preview, children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default layout
