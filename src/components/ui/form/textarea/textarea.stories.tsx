import type { Meta } from '@storybook/nextjs-vite'

import { Textarea } from './textarea'

const meta = {
  title: 'UI/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta

export const Normal = {
  args: {},
}

export const WithPlaceholder = {
  args: {
    placeholder: 'これはPlaceholderです',
  },
}

export const WithRows = {
  args: {
    rows: 6,
    placeholder: 'rowsを6に指定しました',
  },
}

export const WithError = {
  args: {
    error: 'エラーが発生しました',
    placeholder: 'これはPlaceholderです',
  },
}
