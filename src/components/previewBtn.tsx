import Link from 'next/link'

const className = {
  root: `fixed left-0 top-0 z-100 bg-[#000] w-[160px] h-auto flex items-center justify-center`,
  link: `block text-12px px-10px py-12px decoration-none text-[#fff] font-bold`,
}

const PreviewBtn = () => {
  return (
    <div className={className.root}>
      <Link href="/api/exit-preview/" prefetch={false} className={className.link}>
        プレビューCookie削除
      </Link>
    </div>
  )
}

export default PreviewBtn
