// components
import Header from 'components/header'
import Footer from 'components/footer'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const className = {
  wrapper: ``,
  container: ``,
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={className.wrapper}>
        <div className={className.container}>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default layout
