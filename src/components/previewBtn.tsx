import Link from 'next/link'
import styles from 'styles/components/PreviewBtn.module.scss'

const PreviewBtn = () => {
  return (
    <div className={styles.root}>
      <Link href="/api/exit-preview/" prefetch={false}>
        プレビューCookie削除
      </Link>
    </div>
  )
}

export default PreviewBtn
