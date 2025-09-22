import type { Meta } from '@storybook/nextjs-vite'

import { Label } from './label'

const meta = {
  title: 'UI/Form/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>

export default meta

export const Normal = {
  args: {
    children: '名前',
  },
}

export const Required = {
  args: {
    children: '名前',
    required: true,
  },
}
