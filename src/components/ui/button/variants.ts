import { tv } from 'tailwind-variants'

/**
 * ボタンコンポーネントのバリアント定義
 *
 * @description 実際に使用されているバリアントのみを定義
 * シンプルで保守しやすい設計
 */
export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-center',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'rounded-md',
    // アイコンのスタイル
    '[&>svg]:flex-shrink-0',
  ],
  variants: {
    variant: {
      default: ['bg-base text-white', 'hover:bg-base/90', 'focus-visible:ring-base'],
      primary: [
        'bg-blue-600 text-white',
        'hover:bg-blue-700',
        'focus-visible:ring-blue-600',
      ],
    },
    size: {
      md: 'text-sm px-4 py-2.5 min-w-[120px] [&>svg]:w-4 [&>svg]:h-4',
      lg: 'text-base px-6 py-3 min-w-[140px] [&>svg]:w-5 [&>svg]:h-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})
