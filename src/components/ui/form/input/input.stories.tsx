import type { Meta } from '@storybook/nextjs-vite'

import { Input } from './input'

const meta = {
  title: 'UI/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta

export const Normal = {
  args: {
    value: 'これはInputです',
  },
}

export const WithPlaceholder = {
  args: {
    placeholder: 'これはPlaceholderです',
  },
}

export const NoError = {
  args: {
    error: 'エラーが発生しました',
  },
}
