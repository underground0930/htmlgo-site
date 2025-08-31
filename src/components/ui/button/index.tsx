/**
 * ボタンコンポーネント
 * aタグ、Linkタグ、button要素でレンダリング出来る
 */

'use client'

import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import Link from 'next/link'

// components
import { ButtonIcon } from './button-icon'
import { type ColorVariants, type IconName } from '@/components/utils/icon'
import { ButtonLoadingSpinner } from './button-loading-spinner'

export const buttonVariants = tv({
  base: [
    'group inline-flex items-center justify-center gap-2',
    'font-medium text-center',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', // キーボードフォーカス時のみ
    'rounded-md',
    'cursor-pointer',
  ],
  variants: {
    variant: {
      // ボタンの種類（default, primary）
      default: [
        'bg-base text-white',
        'hover:bg-base/80',
        'focus-visible:ring-base/50', // default用のfocus-ring色
        'disabled:bg-gray-400', // button要素のdisabled時
        'data-[disabled=true]:bg-gray-400', // a要素のdisabled時
      ],
      primary: [
        'bg-blue-700 text-white',
        'hover:bg-blue-700/80',
        'focus-visible:ring-blue-300', // primary用のfocus-ring色
        'disabled:bg-gray-400', // button要素のdisabled時
        'data-[disabled=true]:bg-gray-400', // a要素のdisabled時
      ],
    },
    size: {
      // ボタンのサイズ（md, lg）
      md: 'text-sm px-4 py-2.5 min-w-[120px]',
      lg: 'text-base px-6 py-3 min-w-[140px]',
    },
    loading: {
      // ローディング時はクリックイベントを無効化し、focus-ringを削除
      true: 'pointer-events-none focus-visible:ring-0',
    },
    disabled: {
      // 無効時はクリックイベントを無効化し、focus-ringを削除
      true: 'pointer-events-none focus-visible:ring-0',
    },
  },
  defaultVariants: {
    // デフォルトのバリアント
    variant: 'default',
    size: 'md',
    disabled: false,
  },
})

// 共通プロパティ
type CommonVariantProps = VariantProps<typeof buttonVariants> & {
  icon?: IconName
  iconSize?: number
  iconColor?: ColorVariants
  hoverIcon?: IconName
  hoverIconColor?: ColorVariants
}

// button要素用プロパティ
// classNameはtailwind-variantsで管理するので渡さない
type ButtonElementProps = Omit<ComponentProps<'button'>, 'className'> & {
  component?: 'button'
  loading?: boolean
} & CommonVariantProps

// a要素用プロパティ
// classNameはtailwind-variantsで管理するので渡さない
type AnchorElementProps = Omit<ComponentProps<'a'>, 'className'> & {
  component: 'a'
  disabled?: boolean
} & CommonVariantProps

// Next.js Link用プロパティ
// classNameはtailwind-variantsで管理するので渡さない
type LinkElementProps = Omit<ComponentProps<typeof Link>, 'className'> & {
  component: 'link'
  disabled?: boolean
} & CommonVariantProps

// エクスポート用の統合型
export type Props = ButtonElementProps | AnchorElementProps | LinkElementProps

// ボタンコンポーネント
export const Button = (props: Props) => {
  const {
    component = 'button',
    variant,
    size,
    icon,
    iconColor,
    iconSize,
    hoverIcon,
    hoverIconColor,
    disabled,
    children,
  } = props

  // a要素でレンダリング（外部リンク）
  // aタグだけどdisabledも出来るようにする
  if (component === 'a') {
    const { ...rest } = props as AnchorElementProps
    const className = buttonVariants({ variant, size, disabled })
    return (
      <a
        {...rest}
        className={className}
        target='_blank' // 外部リンクなので_blankを指定
        rel='noopener noreferrer' // 外部リンクなのでnoopener noreferrerを指定
        data-disabled={disabled} // a要素のdisabled時のstyleを当てるのに必要
      >
        {children}
        {icon && (
          <ButtonIcon
            icon={icon}
            iconColor={iconColor}
            iconSize={iconSize}
            hoverIcon={hoverIcon}
            hoverIconColor={hoverIconColor}
          />
        )}
      </a>
    )
  }

  // Next.js Linkでレンダリング（内部リンク）
  // Linkタグだけどdisabledも出来るようにする
  if (component === 'link') {
    const { prefetch = false, ...rest } = props as LinkElementProps
    const className = buttonVariants({ variant, size, disabled })
    return (
      <Link
        {...rest}
        className={className}
        prefetch={prefetch} // Link要素のprefetchを指定
        data-disabled={disabled} // Link要素のdisabled時のstyleを当てるのに必要
      >
        {children}
        {icon && (
          <ButtonIcon
            icon={icon}
            iconSize={iconSize}
            iconColor={iconColor}
            hoverIcon={hoverIcon}
            hoverIconColor={hoverIconColor}
          />
        )}
      </Link>
    )
  }

  // button要素でレンダリング（デフォルト）
  // buttonのみloadingも出来るようにする
  const { loading, ...rest } = props as ButtonElementProps
  const className = buttonVariants({ variant, size, disabled, loading })
  return (
    <button {...rest} className={className} disabled={disabled || loading}>
      {children}
      {loading && <ButtonLoadingSpinner />}
      {!loading && icon && (
        <ButtonIcon
          icon={icon}
          iconSize={iconSize}
          iconColor={iconColor}
          hoverIcon={hoverIcon}
          hoverIconColor={hoverIconColor}
        />
      )}
    </button>
  )
}
