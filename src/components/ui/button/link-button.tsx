'use client'

import type { ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'
import Link from 'next/link'
import { buttonVariants } from './variants'

/**
 * LinkButtonコンポーネントのプロパティ型定義
 */
export type LinkButtonProps = {
  /** リンク先URL */
  href: string
  /** 外部リンクの場合true */
  external?: boolean
  /** リンクのプリフェッチを無効にする */
  prefetch?: boolean
} & Omit<VariantProps<typeof buttonVariants>, 'disabled'> & {
    /** ボタンに表示するテキスト */
    children: ReactNode
    /** ボタン内に表示するアイコン（左側） */
    icon?: ReactNode
    /** ボタン内に表示するアイコン（右側） */
    iconRight?: ReactNode
    /** 追加のクラス名 */
    className?: string
  }

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  external = false,
  prefetch = false,
  variant,
  size,
  icon,
  iconRight,
  className,
  children,
  ...props
}) => {
  const buttonClass = buttonVariants({ variant, size, className })

  if (external) {
    return (
      <a
        href={href}
        className={buttonClass}
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      >
        {icon}
        {children}
        {iconRight}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClass} prefetch={prefetch} {...props}>
      {icon}
      {children}
      {iconRight}
    </Link>
  )
}
