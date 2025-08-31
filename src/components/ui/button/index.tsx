'use client'

import type { ComponentProps, ReactNode } from 'react'
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
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'rounded-md',
    'cursor-pointer',
  ],
  variants: {
    variant: {
      default: ['bg-base text-white', 'hover:bg-base/80'],
      primary: ['bg-blue-700 text-white', 'hover:bg-blue-700/80'],
    },
    size: {
      md: 'text-sm px-4 py-2.5 min-w-[120px]',
      lg: 'text-base px-6 py-3 min-w-[140px]',
    },
    loading: {
      true: 'pointer-events-none',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      disabled: true,
      class: 'bg-gray-400',
    },
    {
      variant: 'primary',
      disabled: true,
      class: 'bg-gray-400',
    },
  ],
  defaultVariants: {
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
  children: ReactNode
}

// button要素用プロパティ
type ButtonElementProps = Omit<ComponentProps<'button'>, 'className'> & {
  component?: 'button'
  loading?: boolean
} & CommonVariantProps

// a要素用プロパティ
type AnchorElementProps = Omit<ComponentProps<'a'>, 'className'> & {
  component: 'a'
  disabled?: boolean
} & CommonVariantProps

// Next.js Link用プロパティ
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
  } = props

  // a要素でレンダリング（外部リンク）
  if (component === 'a') {
    const { children, ...rest } = props as AnchorElementProps
    const className = buttonVariants({ variant, size, disabled })
    return (
      <a {...rest} className={className} target='_blank' rel='noopener noreferrer'>
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
  if (component === 'link') {
    const { prefetch = false, children, ...rest } = props as LinkElementProps
    const className = buttonVariants({ variant, size, disabled })
    return (
      <Link {...rest} className={className} prefetch={prefetch}>
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
  const { loading, children, ...rest } = props as ButtonElementProps
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
