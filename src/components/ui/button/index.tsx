/**
 * Button Components
 *
 * @description
 * 統一されたボタンコンポーネント群
 * - Button: フォーム送信やクリックイベント用
 * - LinkButton: ページ遷移用
 *
 * @example
 * ```tsx
 * import { Button, LinkButton } from '@/components/ui/button'
 *
 * // フォーム用ボタン
 * <Button variant="primary" onClick={handleSubmit}>送信</Button>
 *
 * // ナビゲーション用ボタン
 * <LinkButton href="/about">詳細</LinkButton>
 * ```
 */

// コンポーネントのエクスポート
export { Button } from './button'
export { LinkButton } from './link-button'

// バリアント設定のエクスポート
export { buttonVariants } from './variants'

// 型定義のエクスポート
export type { ButtonProps, LinkButtonProps, ButtonVariants } from './types'
