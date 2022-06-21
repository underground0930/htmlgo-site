import Link from 'next/link'

// style
import styles from 'styles/components/TextBtn.module.scss'

type Props = {
  title: string
  link: string
  blank?: boolean
  onClick?: () => void
}

const className = 'inline-block bgColor'

const TextBtn = ({ title, link, blank = false, onClick }: Props) => {
  return (
    <>
      {blank && (
        <a className={className} href={link} onClick={onClick}>
          {title}
        </a>
      )}
      {!blank && (
        <Link href={link}>
          <a className={className} onClick={onClick}>
            {title}
          </a>
        </Link>
      )}
    </>
  )
}

export default TextBtn
