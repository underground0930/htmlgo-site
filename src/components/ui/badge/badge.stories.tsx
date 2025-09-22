import type { Meta } from '@storybook/nextjs-vite'

import { Badge } from './badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>

export default meta

export const BadgeNormal = {
  args: {
    text: 'カテゴリー',
  },
}
