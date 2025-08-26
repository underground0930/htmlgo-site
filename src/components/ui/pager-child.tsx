import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  page: number
  basePath: string
  isActive?: boolean
  children: React.ReactNode
}

/**
 * ページャーの子コンポーネント
 * @param page ページ番号
 * @param basePath ベースパス（例: '/works', '/articles'）
 * @param isActive 現在のページかどうか
 * @param children 表示内容
 */
export const PagerChild: React.FC<Props> = ({ page, basePath, isActive, children }) => {
  const linkClass = twMerge(
    'w-7 h-7 block bg-main text-white leading-7 text-sm',
    isActive && 'bg-[#ddd] text-[#222] font-bold',
  )
  
  /**
   * ページ番号に応じたリンクを生成
   * @param pageNum ページ番号
   * @returns リンクパス
   */
  const generateLink = (pageNum: number): string => {
    if (pageNum === 1) {
      return basePath === '/articles' ? '/articles/' : basePath
    }
    return `${basePath}/page/${pageNum}/`
  }

  return (
    <li className='mx-1.5 inline-block h-5 w-5'>
      <Link className={linkClass} href={generateLink(page)}>
        {children}
      </Link>
    </li>
  )
}
