import type { Meta } from '@storybook/nextjs-vite'

import { ErrorText } from './error-text'

const meta = {
  title: 'UI/Badge',
  component: ErrorText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorText>

export default meta

export const Normal = {
  args: {
    text: 'これはErrorTextです',
  },
}

export const NoError = {
  args: {
    error: '',
  },
}
