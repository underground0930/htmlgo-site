'use client'

import type { ReactNode, ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import Link from 'next/link'
import { buttonVariants } from './variants'

/**
 * LinkButtonコンポーネントのプロパティ型定義
 *
 * external=trueの場合はa要素のプロパティ、falseの場合はNext.js Linkのプロパティを継承
 */
export type LinkButtonProps = {
  /** リンク先URL */
  href: string
  /** 外部リンクの場合true */
  external?: boolean
  /** リンクのプリフェッチを無効にする */
  prefetch?: boolean
  /** ボタンに表示するテキスト */
  children: ReactNode
  /** ボタン内に表示するアイコン（左側） */
  icon?: ReactNode
  /** ボタン内に表示するアイコン（右側） */
  iconRight?: ReactNode
} & VariantProps<typeof buttonVariants> &
  // a要素の属性（href, children, className以外）
  Omit<ComponentProps<'a'>, 'href' | 'children' | 'className'>

export const LinkButton: React.FC<LinkButtonProps> = ({
  external = false,
  prefetch = false,
  variant,
  size,
  icon,
  iconRight,
  children,
  href,
  ...props
}) => {
  const buttonClass = buttonVariants({ variant, size })

  if (external) {
    return (
      <a
        {...props}
        href={href}
        className={buttonClass}
        target='_blank'
        rel='noopener noreferrer'
      >
        {icon}
        {children}
        {iconRight}
      </a>
    )
  }

  return (
    <Link {...props} href={href} className={buttonClass} prefetch={prefetch}>
      {icon}
      {children}
      {iconRight}
    </Link>
  )
}
