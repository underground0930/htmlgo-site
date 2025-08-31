'use client'

import type { ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import Link from 'next/link'

// components
import { ButtonLoadingSpinner } from './button-loading-spinner'

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-center',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'rounded-md',
    'cursor-pointer',
  ],
  variants: {
    variant: {
      default: ['bg-base text-white', 'hover:bg-base/90'],
      primary: ['bg-blue-700 text-white', 'hover:bg-blue-700/90'],
    },
    size: {
      md: 'text-sm px-4 py-2.5 min-w-[120px]',
      lg: 'text-base px-6 py-3 min-w-[140px]',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      disabled: true,
      class: 'bg-base/70',
    },
    {
      variant: 'primary',
      disabled: true,
      class: 'bg-blue-700/70',
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
  icon?: ReactNode
  iconRight?: ReactNode
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
  const { component = 'button', variant, size, icon, disabled, children } = props

  // a要素でレンダリング（外部リンク）
  if (component === 'a') {
    const { href, ...rest } = props as AnchorElementProps
    const className = buttonVariants({ variant, size, disabled })
    return (
      <a
        {...rest}
        href={href}
        className={className}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
        {icon && <span className='flex-shrink-0'>{children}</span>}
      </a>
    )
  }

  // Next.js Linkでレンダリング（内部リンク）
  if (component === 'link') {
    const { href, prefetch = false, ...rest } = props as LinkElementProps
    const className = buttonVariants({ variant, size, disabled })
    return (
      <Link {...rest} href={href} className={className} prefetch={prefetch}>
        {children}
        {icon && <span className='flex-shrink-0'>{children}</span>}
      </Link>
    )
  }

  // button要素でレンダリング（デフォルト）
  const { loading, ...rest } = props as ButtonElementProps
  const disabledValue = disabled || loading
  const className = buttonVariants({ variant, size, disabled })
  return (
    <button {...rest} className={className} disabled={disabledValue}>
      {children}
      {loading && <ButtonLoadingSpinner />}
      {!loading && icon && <span className='flex-shrink-0'>{icon}</span>}
    </button>
  )
}
