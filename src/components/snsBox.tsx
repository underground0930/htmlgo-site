import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

// styles
import styles from 'styles/components/SnsBox.module.scss'

// components
import IconQiita from 'svgs/IconQiita.svg'
import IconZenn from 'svgs/IconZenn.svg'
import IconNote from 'svgs/IconNote.svg'

type Props = {}

const SnsBox = ({}: Props) => {
  return (
    <>
      <ul className={styles.snsBox}>
        <li className={styles.snsBoxChild}>
          <a href="https://github.com/underground0930" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={styles.github} icon={faGithubSquare} color="#24292e" />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a href="https://twitter.com/resistance_gowy" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={styles.twitter} icon={faTwitterSquare} color="#1DA1F2" />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a href="http://qiita.com/resistance_gowy" target="_blank" rel="noreferrer">
            <IconQiita className={styles.qiita} />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a href="https://zenn.dev/resistance_gowy" target="_blank" rel="noreferrer">
            <IconZenn className={styles.zenn} />
          </a>
        </li>
        <li className={styles.snsBoxChild}>
          <a href="https://note.com/resistance_gowy" target="_blank" rel="noreferrer">
            <IconNote className={styles.note} />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SnsBox
