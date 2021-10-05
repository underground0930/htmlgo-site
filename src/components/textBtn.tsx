import Link from 'next/link'

// style
import styles from 'styles/components/TextBtn.module.scss'

type Props = {
  title: string
  link: string
  blank?: boolean
  onClick?: () => void
}

const TextBtn = ({ title, link, blank = false, onClick }: Props) => {
  return (
    <>
      {blank && (
        <a className={styles.textBtn} href={link} onClick={onClick}>
          {title}
        </a>
      )}
      {!blank && (
        <Link href={link}>
          <a className={styles.textBtn} onClick={onClick}>
            {title}
          </a>
        </Link>
      )}
    </>
  )
}

export default TextBtn
