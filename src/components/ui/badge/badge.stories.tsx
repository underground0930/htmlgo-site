import type { Meta } from '@storybook/nextjs-vite'

import { Badge } from './badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badgeコンポーネント',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta

export const BadgeNormal = {
  args: {
    text: 'これはBadgeです',
  },
}
