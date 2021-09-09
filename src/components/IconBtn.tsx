import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAlignJustify } from '@fortawesome/free-solid-svg-icons'

// styles
import styles from 'styles/components/IconBtn.module.scss'

type Props = {
  title?: string
  link: string
  blank?: boolean
  color: string
  icon: 'faHome' | 'faAlignJustify'
}

const icons = {
  faHome: faHome,
  faAlignJustify: faAlignJustify,
}

const IconBtn = ({ title, link, blank = false, color, icon }: Props) => {
  return (
    <>
      {blank && (
        <a className={styles.iconBtn} href={link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className={styles.icon}
            icon={icons[icon]}
            title={title ? title : ''}
            style={{ color: color }}
          />
        </a>
      )}
      {!blank && (
        <Link href={link}>
          <a className={styles.iconBtn}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={icons[icon]}
              title={title ? title : ''}
              style={{ color: color }}
            />
          </a>
        </Link>
      )}
    </>
  )
}

export default IconBtn
