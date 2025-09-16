import type { Meta } from '@storybook/nextjs-vite'

import { LoadingSpinner } from './loading-spinner'

const meta = {
  title: 'UI/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoadingSpinner>

export default meta

export const Normal = {
  args: {},
}

export const WithText = {
  args: {
    text: 'ローディング中...',
  },
}
