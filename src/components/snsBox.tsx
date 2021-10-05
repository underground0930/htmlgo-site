import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

// styles
import styles from 'styles/components/SnsBox.module.scss'

// libs
import { event } from 'libs/gtag'

// components
import IconQiita from 'svgs/IconQiita.svg'
import IconZenn from 'svgs/IconZenn.svg'
import IconNote from 'svgs/IconNote.svg'

type Props = {
  category: string
}

const SnsBox = ({ category }: Props) => {
  const clickHandler = (label: string, value: string) => {
    event({ action: 'click', category, label, value })
  }

  return (
    <>
      <ul className={styles.snsBox}>
        <li className={styles.snsBoxChild}>
          <a
            href="https://github.com/underground0930"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              clickHandler('github', e.currentTarget.href)
            }}
          >
            <FontAwesomeIcon className={styles.github} icon={faGithubSquare} color="#24292e" />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a
            href="https://twitter.com/resistance_gowy"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              clickHandler('twitter', e.currentTarget.href)
            }}
          >
            <FontAwesomeIcon className={styles.twitter} icon={faTwitterSquare} color="#1DA1F2" />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a
            href="http://qiita.com/resistance_gowy"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              clickHandler('qiita', e.currentTarget.href)
            }}
          >
            <IconQiita className={styles.qiita} />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a
            href="https://zenn.dev/resistance_gowy"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              clickHandler('zenn', e.currentTarget.href)
            }}
          >
            <IconZenn className={styles.zenn} />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a
            href="https://note.com/resistance_gowy"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              clickHandler('note', e.currentTarget.href)
            }}
          >
            <IconNote className={styles.note} />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SnsBox
