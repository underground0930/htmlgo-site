import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  FaHome,
  FaUser,
  FaSave,
  FaEdit,
  FaTrash,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaDownload,
  FaUpload,
  FaSearch,
  FaCog,
  FaHeart,
  FaStar,
} from 'react-icons/fa'

import { Button } from './button'
import { LinkButton } from './link-button'

const meta = {
  title: 'UI/Button Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ButtonとLinkButtonの全バリアント・サイズ・アイコンの組み合わせ一覧',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// 全バリアント一覧
export const AllVariants: Story = {
  name: '全バリアント一覧',
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>Button（フォーム・イベント用）</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='default'>default</Button>
          <Button variant='primary'>primary</Button>
          <Button variant='secondary'>secondary</Button>
          <Button variant='outline'>outline</Button>
          <Button variant='ghost'>ghost</Button>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>LinkButton（ナビゲーション用）</h3>
        <div className='flex flex-wrap gap-3'>
          <LinkButton href='#' variant='default'>
            default
          </LinkButton>
          <LinkButton href='#' variant='primary'>
            primary
          </LinkButton>
          <LinkButton href='#' variant='secondary'>
            secondary
          </LinkButton>
          <LinkButton href='#' variant='outline'>
            outline
          </LinkButton>
          <LinkButton href='#' variant='ghost'>
            ghost
          </LinkButton>
        </div>
      </div>
    </div>
  ),
}

// 全サイズ一覧
export const AllSizes: Story = {
  name: '全サイズ一覧',
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>Button サイズ</h3>
        <div className='flex items-center gap-3'>
          <Button variant='primary' size='sm'>
            small
          </Button>
          <Button variant='primary' size='md'>
            medium
          </Button>
          <Button variant='primary' size='lg'>
            large
          </Button>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>LinkButton サイズ</h3>
        <div className='flex items-center gap-3'>
          <LinkButton href='#' variant='primary' size='sm'>
            small
          </LinkButton>
          <LinkButton href='#' variant='primary' size='md'>
            medium
          </LinkButton>
          <LinkButton href='#' variant='primary' size='lg'>
            large
          </LinkButton>
        </div>
      </div>
    </div>
  ),
}

// 角丸一覧
export const AllRounded: Story = {
  name: '角丸一覧',
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>角丸バリエーション</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='primary' rounded='none'>
            none
          </Button>
          <Button variant='primary' rounded='sm'>
            sm
          </Button>
          <Button variant='primary' rounded='md'>
            md
          </Button>
          <Button variant='primary' rounded='lg'>
            lg
          </Button>
          <Button variant='primary' rounded='full'>
            full
          </Button>
        </div>
      </div>
    </div>
  ),
}

// アイコン付きバリエーション
export const WithIcons: Story = {
  name: 'アイコン付きバリエーション',
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>左側アイコン</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='primary' icon={<FaUser />}>
            ユーザー
          </Button>
          <Button variant='secondary' icon={<FaSave />}>
            保存
          </Button>
          <Button variant='outline' icon={<FaEdit />}>
            編集
          </Button>
          <Button variant='ghost' icon={<FaCog />}>
            設定
          </Button>
          <LinkButton href='#' variant='primary' icon={<FaHome />}>
            ホーム
          </LinkButton>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>右側アイコン</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='primary' iconRight={<FaArrowRight />}>
            次へ
          </Button>
          <Button variant='outline' iconRight={<FaDownload />}>
            ダウンロード
          </Button>
          <LinkButton
            href='#'
            variant='primary'
            iconRight={<FaExternalLinkAlt />}
            external
          >
            外部リンク
          </LinkButton>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>両側アイコン</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='secondary' icon={<FaSave />} iconRight={<FaArrowRight />}>
            保存して続行
          </Button>
          <Button variant='outline' icon={<FaUpload />} iconRight={<FaArrowRight />}>
            アップロード
          </Button>
        </div>
      </div>
    </div>
  ),
}

// サイズ別アイコンサイズ
export const IconSizes: Story = {
  name: 'サイズ別アイコンサイズ',
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>アイコンサイズはボタンサイズに連動</h3>
        <div className='flex items-center gap-3'>
          <Button variant='primary' size='sm' icon={<FaHome />}>
            小 (12px)
          </Button>
          <Button variant='primary' size='md' icon={<FaHome />}>
            中 (16px)
          </Button>
          <Button variant='primary' size='lg' icon={<FaHome />}>
            大 (20px)
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 実践的な使用例
export const PracticalExamples: Story = {
  name: '実践的な使用例',
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>フォームエリア</h3>
        <div className='flex gap-3'>
          <Button variant='outline' icon={<FaArrowLeft />}>
            戻る
          </Button>
          <Button variant='primary' icon={<FaSave />}>
            保存
          </Button>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>ナビゲーション</h3>
        <div className='flex gap-2'>
          <LinkButton href='#' variant='ghost' icon={<FaHome />}>
            ホーム
          </LinkButton>
          <LinkButton href='#' variant='ghost' icon={<FaUser />}>
            プロフィール
          </LinkButton>
          <LinkButton href='#' variant='ghost' icon={<FaCog />}>
            設定
          </LinkButton>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>カードアクション</h3>
        <div className='flex items-center justify-between rounded-lg border p-4'>
          <span>記事のタイトル</span>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' icon={<FaEdit />}>
              編集
            </Button>
            <Button variant='secondary' size='sm' icon={<FaTrash />}>
              削除
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>状態表示</h3>
        <div className='flex gap-3'>
          <Button variant='primary' loading disabled>
            送信中...
          </Button>
          <Button variant='secondary' disabled>
            無効ボタン
          </Button>
          <Button variant='primary' icon={<FaHeart />}>
            いいね
          </Button>
          <Button variant='outline' icon={<FaStar />}>
            お気に入り
          </Button>
        </div>
      </div>
    </div>
  ),
}

// react-iconsのアイコン一覧
export const IconLibrary: Story = {
  name: 'react-icons 使用例',
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>よく使用されるアイコン</h3>
        <div className='grid grid-cols-3 gap-3'>
          <Button variant='outline' size='sm' icon={<FaHome />}>
            ホーム
          </Button>
          <Button variant='outline' size='sm' icon={<FaUser />}>
            ユーザー
          </Button>
          <Button variant='outline' size='sm' icon={<FaSave />}>
            保存
          </Button>
          <Button variant='outline' size='sm' icon={<FaEdit />}>
            編集
          </Button>
          <Button variant='outline' size='sm' icon={<FaTrash />}>
            削除
          </Button>
          <Button variant='outline' size='sm' icon={<FaPlus />}>
            追加
          </Button>
          <Button variant='outline' size='sm' icon={<FaSearch />}>
            検索
          </Button>
          <Button variant='outline' size='sm' icon={<FaDownload />}>
            DL
          </Button>
          <Button variant='outline' size='sm' icon={<FaUpload />}>
            UP
          </Button>
          <Button variant='outline' size='sm' icon={<FaCog />}>
            設定
          </Button>
          <Button variant='outline' size='sm' icon={<FaArrowLeft />}>
            戻る
          </Button>
          <Button variant='outline' size='sm' icon={<FaArrowRight />}>
            次へ
          </Button>
        </div>
      </div>
    </div>
  ),
}
