import Link from 'next/link'

// style
import styles from 'styles/components/TextBtn.module.scss'

type Props = {
  title: string
  link: string
  blank?: boolean
}

const TextBtn = ({ title, link, blank = false }: Props) => {
  return (
    <>
      {blank && (
        <a className={styles.textBtn} href={link}>
          {title}
        </a>
      )}
      {!blank && (
        <Link href={link}>
          <a className={styles.textBtn}>{title}</a>
        </Link>
      )}
    </>
  )
}

export default TextBtn
