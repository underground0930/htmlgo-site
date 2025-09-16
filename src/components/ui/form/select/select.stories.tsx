import type { Meta } from '@storybook/nextjs-vite'

import { Select } from './select'

const meta = {
  title: 'UI/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

export const Normal = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
}
