import type { Meta } from '@storybook/nextjs-vite'

import { ErrorText } from './error-text'

const meta = {
  title: 'UI/Form/ErrorText',
  component: ErrorText,
  parameters: {
    layout: 'centered',
  },
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
