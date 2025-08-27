'use client'

import { tv, type VariantProps } from 'tailwind-variants'
import Link from 'next/link'
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'

/**
 * ボタンコンポーネントのバリアント定義
 *
 * @description Tailwind Variantsを使用して、色、サイズ、角丸などのスタイルバリアントを管理
 * tailwind-mergeによる自動競合解決機能を活用
 */
const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-sm text-center',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'min-w-[120px] px-4 py-2.5',
    // アイコンのスタイル
    '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:flex-shrink-0',
  ],
  variants: {
    variant: {
      default: ['bg-base text-white', 'hover:bg-base/90', 'focus-visible:ring-base'],
      primary: [
        'bg-blue-600 text-white',
        'hover:bg-blue-700',
        'focus-visible:ring-blue-600',
      ],
      secondary: [
        'bg-gray-600 text-white',
        'hover:bg-gray-700',
        'focus-visible:ring-gray-600',
      ],
      outline: [
        'border border-base text-base bg-transparent',
        'hover:bg-base hover:text-white',
        'focus-visible:ring-base',
      ],
      ghost: ['text-base bg-transparent', 'hover:bg-base/10', 'focus-visible:ring-base'],
    },
    size: {
      sm: 'text-xs px-3 py-2 min-w-[100px] [&>svg]:w-3 [&>svg]:h-3',
      md: 'text-sm px-4 py-2.5 min-w-[120px] [&>svg]:w-4 [&>svg]:h-4',
      lg: 'text-base px-6 py-3 min-w-[140px] [&>svg]:w-5 [&>svg]:h-5',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: 'md',
  },
})

/**
 * ボタンコンポーネントの型定義
 */
type ButtonVariants = VariantProps<typeof buttonVariants>

/**
 * 基本ボタンプロパティ（button要素用）
 */
type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonVariants & {
    /** ボタン内に表示するアイコン（左側） */
    icon?: ReactNode
    /** ボタン内に表示するアイコン（右側） */
    iconRight?: ReactNode
    /** ローディング状態 */
    loading?: boolean
  }

/**
 * リンクボタンプロパティ（Next.js Link用）
 */
type LinkButtonProps = {
  /** リンク先URL */
  href: string
  /** 外部リンクの場合true */
  external?: boolean
  /** リンクのプリフェッチを無効にする */
  prefetch?: boolean
} & Omit<ButtonVariants, 'disabled'> & {
    /** ボタンに表示するテキスト */
    children: ReactNode
    /** ボタン内に表示するアイコン（左側） */
    icon?: ReactNode
    /** ボタン内に表示するアイコン（右側） */
    iconRight?: ReactNode
    /** 追加のクラス名 */
    className?: string
  }

/**
 * ボタンコンポーネント（button要素版）
 *
 * @description
 * フォームの送信やクリックイベントが必要な場合に使用
 * forwardRefによりref参照をサポート
 *
 * @example
 * ```tsx
 * import { Button } from '@/components/ui/button'
 * import { FaUser, FaSave, FaArrowRight } from 'react-icons/fa'
 *
 * // 基本的な使用方法
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   送信
 * </Button>
 *
 * // 左側アイコン付き
 * <Button variant="outline" icon={<FaUser />}>
 *   ユーザー登録
 * </Button>
 *
 * // 右側アイコン付き
 * <Button variant="primary" iconRight={<FaArrowRight />}>
 *   次へ進む
 * </Button>
 *
 * // 両側アイコン付き
 * <Button variant="secondary" icon={<FaSave />} iconRight={<FaArrowRight />}>
 *   保存して続行
 * </Button>
 *
 * // ローディング状態（アイコンは自動でスピナーに切り替わる）
 * <Button loading disabled>
 *   送信中...
 * </Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      icon,
      iconRight,
      loading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={buttonVariants({ variant, size, rounded, className })}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className='h-4 w-4 animate-spin' fill='none' viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
        )}
        {!loading && icon}
        {children}
        {!loading && iconRight}
      </button>
    )
  },
)
Button.displayName = 'Button'

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
const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  external = false,
  prefetch = false,
  variant,
  size,
  rounded,
  icon,
  iconRight,
  className,
  children,
  ...props
}) => {
  const buttonClass = buttonVariants({ variant, size, rounded, className })

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

export { Button, LinkButton, buttonVariants }
export type { ButtonProps, LinkButtonProps, ButtonVariants }
