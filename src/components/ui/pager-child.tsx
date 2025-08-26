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
    'w-7 h-7 flex items-center justify-center bg-main text-white text-sm hover:bg-[#ddd] hover:text-[#222]',
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
    <li className=''>
      <Link className={linkClass} href={generateLink(page)}>
        {children}
      </Link>
    </li>
  )
}
