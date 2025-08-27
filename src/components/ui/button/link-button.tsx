'use client'

import Link from 'next/link'
import { buttonVariants } from './variants'
import type { LinkButtonProps } from './types'

/**
 * リンクボタンコンポーネント（Next.js Link版）
 *
 * @description
 * ページ遷移が必要な場合に使用
 * Next.jsのLinkコンポーネントまたは外部リンク用のa要素を内部で使い分け
 *
 * @example
 * ```tsx
 * import { LinkButton } from '@/components/ui/button'
 * import { FaExternalLinkAlt, FaArrowLeft, FaHome } from 'react-icons/fa'
 *
 * // 基本的な内部リンク
 * <LinkButton href="/about" variant="primary">
 *   詳細を見る
 * </LinkButton>
 *
 * // 外部リンクでアイコン付き
 * <LinkButton
 *   href="https://example.com"
 *   external
 *   variant="outline"
 *   iconRight={<FaExternalLinkAlt />}
 * >
 *   外部サイト
 * </LinkButton>
 *
 * // ナビゲーション用（戻るボタン）
 * <LinkButton href="/back" variant="ghost" icon={<FaArrowLeft />}>
 *   戻る
 * </LinkButton>
 *
 * // ホームボタン
 * <LinkButton href="/" variant="default" icon={<FaHome />}>
 *   ホーム
 * </LinkButton>
 * ```
 */
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
