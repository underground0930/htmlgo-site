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
      primary: ['bg-blue-600 text-white', 'hover:bg-blue-700'],
    },
    size: {
      md: 'text-sm px-4 py-2.5 min-w-[120px] [&>svg]:w-4 [&>svg]:h-4',
      lg: 'text-base px-6 py-3 min-w-[140px] [&>svg]:w-5 [&>svg]:h-5',
    },
    disabled: {
      true: 'pointer-events-none cursor-default',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      disabled: true,
      class: 'bg-gray-300 text-gray-500 hover:bg-gray-300',
    },
    {
      variant: 'primary',
      disabled: true,
      class: 'bg-blue-200 text-blue-400 hover:bg-blue-200',
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

export const Button = (props: Props) => {
  const { component = 'button', variant, size, icon, disabled, children } = props
  const className = buttonVariants({ variant, size, disabled })

  // a要素でレンダリング（外部リンク）
  if (component === 'a') {
    const { href, ...rest } = props as AnchorElementProps
    return (
      <a
        {...rest}
        href={href}
        className={className}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
        {icon && <span className='flex-shrink-0'>{icon}</span>}
      </a>
    )
  }

  // Next.js Linkでレンダリング（内部リンク）
  if (component === 'link') {
    const { href, prefetch = false, ...rest } = props as LinkElementProps
    return (
      <Link {...rest} href={href} className={className} prefetch={prefetch}>
        {children}
        {icon && <span className='flex-shrink-0'>{icon}</span>}
      </Link>
    )
  }

  // button要素でレンダリング（デフォルト）
  const { loading, ...rest } = props as ButtonElementProps
  return (
    <button {...rest} className={className} disabled={disabled || loading}>
      {children}
      {loading && <ButtonLoadingSpinner />}
      {!loading && icon && <span className='flex-shrink-0'>{icon}</span>}
    </button>
  )
}
