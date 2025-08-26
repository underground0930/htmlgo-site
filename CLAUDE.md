# CLAUDE.md

- このファイルは、Claude Code (claude.ai/code) がこのリポジトリでコードを作業する際のガイダンスを提供します。
- プロジェクト内の修正で、このファイルの内容を変更する必要がある時は、必ず修正すること。

## 開発コマンド

### コア開発
- `npm run dev` - 開発サーバーを起動（feed.jsonを自動生成し、.nextキャッシュをクリア）
- `npm run build` - 本番版をビルド（feed.jsonを自動生成）
- `npm start` - 本番サーバーを起動
- `npm run export` - 静的サイトをエクスポート

### コード品質
- `npm run lint` - ESLintを実行
- `npm run lint:fix` - ESLintを自動修正付きで実行
- `npm run format` - Prettierでコードを整形

### データ生成
- `node ./scripts/generateFeedJson.js` - 外部API（Qiita、Zenn）からfeed.jsonを生成

## プロジェクトアーキテクチャ

これは Next.js 15 を使用したポートフォリオ/ブログサイトで、TypeScript と Tailwind CSS、App Router を使用しています。

### コンテンツ管理
- **MicroCMS**: 作品/ポートフォリオコンテンツとaboutページデータのメインCMS
- **外部フィード**: ビルド時スクリプトでQiita・ZennのAPIから記事を集約

### 主要なアーキテクチャパターン
- **Server Components**: データ取得は全てサーバーコンポーネントで実行
- **パスエイリアス**: `@/*` は `src/*` にマップされ、よりクリーンなインポートを実現
- **完全なColocation構造**: ページ専用機能は該当ページ内に配置
- **型安全性**: 全ての外部APIに対して包括的なTypeScript型定義

### データフロー
1. ビルド/開発開始時に `generateFeedJson.js` で外部記事フィードを取得
2. MicroCMSクライアントでサーバー専用実行のCMSデータを処理
3. 分単位パラメータを使用したMicroCMSリクエストのカスタムキャッシュバスティング
4. コンタクトフォームはnodemailerとreCAPTCHA認証を使用したAPIルート

### 環境設定
- `MICROCMS_API_KEY` を含む `.env` ファイルが必要
- git hooks用のHuskyとpre-commit linting用のlint-stagedを使用


## 🎯 現在のディレクトリ構成 (2025年最適化版)

### 基本方針
- **Perfect Colocation**: 関連ファイルを可能な限り近くに配置
- **Zero Barrel Files**: 循環参照リスクを排除し、Tree Shakingを最適化
- **Feature-based + Page-based Hybrid**: 機能別とページ別のハイブリッド構成
- **Next.js 15 App Router**: 最新のベストプラクティスに準拠

### ディレクトリ構造の概要

```
src/
├── app/                          # Next.js 15 App Router + Perfect Colocation
│   ├── (root)/                   # トップページグループ
│   │   ├── page.tsx
│   │   ├── components/           # トップページ専用コンポーネント
│   │   └── libs/                 # トップページ専用ロジック
│   ├── {other-pages}/            # 他のページも同様の構造
│   │   ├── page.tsx
│   │   ├── components/           # ページ専用コンポーネント
│   │   ├── constants/            # ページ専用定数（必要に応じて）
│   │   ├── libs/                 # ページ専用ロジック（必要に応じて）
│   │   ├── types/                # ページ専用型定義（必要に応じて）
│   │   └── api/                  # API Routes（必要に応じて）
│   ├── loading.tsx               # グローバルローディング
│   ├── error.tsx                 # グローバルエラー
│   └── layout.tsx                # ルートレイアウト
├── components/ui/                # 3回以上使用される真の共通UIコンポーネント
├── features/                     # 将来の機能別コンポーネント用（現在は空）
├── constants/                    # グローバル共通定数のみ
├── libs/                         # グローバル共通ライブラリのみ
├── types/                        # グローバル共通型定義
├── utils/                        # グローバル共通ユーティリティ
├── hooks/                        # グローバル共通カスタムフック
└── styles/                       # グローバルスタイル
```

## 🔥 重要なコーディング規則

### ❌ 絶対禁止事項
1. **バレルファイル（index.ts）の作成・使用** - 循環参照リスクと Tree Shaking阻害
2. **PascalCase/camelCaseでのファイル命名** - kebab-case必須
3. **深すぎるネスト構造**（3階層まで）
4. **ページ間での不適切な依存関係**

### ✅ 必須事項
1. **直接インポートのみ使用**
2. **Colocation原則の徹底** - 機能は使用箇所の近くに配置
3. **kebab-case ファイル命名**
4. **相対インポートの活用**（同一機能内）

### インポートパターン

```tsx
// ✅ 正しい - 直接インポート
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

// ❌ 間違い - バレルファイル経由（禁止）
import { Button, Modal } from '@/components/ui'

// ✅ 正しい - ページコンポーネント（相対）
import { ContactForm } from './contact-form'

// ✅ 正しい - 同一ページ内の定数（相対）
import { errorText } from '../constants/contact'

// ✅ 正しい - クロス機能インポート（絶対）
import { setMetaData } from '@/utils/set-metadata'
```

### コンポーネント配置規則

#### ページ専用コンポーネント
```
app/contact/
├── page.tsx
├── components/          # contactページでのみ使用
│   ├── contact-form.tsx
│   └── input-field.tsx
├── constants/           # contactページ専用定数
│   └── contact.ts
├── libs/               # contactページ専用API
│   └── send-mail.ts
└── types/              # contactページ専用型
    └── contact.ts
```

#### 共通コンポーネント
```
components/ui/          # 複数ページで使用される純粋なUIコンポーネント
├── button.tsx
├── modal.tsx
└── input.tsx
```

### ファイル命名規則
- **ファイル名**: kebab-case (`user-profile.tsx`)
- **コンポーネント名**: PascalCase (`UserProfile`)
- **関数名**: camelCase (`fetchUserData`)
- **定数名**: UPPER_SNAKE_CASE (`API_ENDPOINT`)

### インポート順序
1. React関連
2. Next.js関連
3. サードパーティライブラリ
4. 内部モジュール（@/から始まる）
5. 相対インポート（./から始まる）

```tsx
import { useState } from 'react'
import { NextPage } from 'next'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { fetchUser } from '@/libs/fetch-user'

import { LocalComponent } from './local-component'
```

## パフォーマンス最適化

### Tree Shaking最適化
- バレルファイル禁止により完全なTree Shakingを実現
- 未使用コードの自動削除

### 動的インポート
```tsx
// 大きなコンポーネントの遅延読み込み
const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <LoadingSpinner />,
})
```

### バンドル最適化
- 直接インポートによりバンドルサイズを最小化
- ページ専用機能の完全分離

## デバッグとメンテナンス

### デバッグ支援
- 明確な依存関係により問題箇所の特定が容易
- 循環参照エラーの完全排除

### 拡張性
- 新機能追加時は該当ページ内に配置
- 機能削除時はページディレクトリごと削除可能

### チーム開発
- 機能の場所が明確で迷いがない
- コードレビューが効率的

## 🧩 コンポーネント設計哲学

### 📍 コロケーション優先原則

**「再利用目的で小さく作るわけではない」** - まず責務に基づいてatomicに分節し、コロケーションで開始。

#### 🔄 段階的共通化ルール

```
1回目: コロケーション（ページ内に配置）
2回目: 様子見（責務を慎重に検討）
3回目: グローバル化を検討（src/components/ui/ へ移動）
```

#### ⚠️ 早期共通化の落とし穴

- **❌ 安易な共通化**: 「コードが似てるから共通にしよう」
- **❌ 字面駆動**: 見た目の類似だけで判断
- **❌ 再利用駆動**: 最初から再利用を目的とした設計

#### ✅ 正しいアプローチ

- **責務ベース**: 各コンポーネントの本来の責任を分析
- **直交性重視**: 他の機能と独立して動作するか確認
- **段階的判断**: 使用頻度と責務の明確さで共通化を決定

### 🔧 具体的な判断基準

```typescript
// ❌ 避けるべき：字面の類似だけで共通化
const UserCard = ({ user, showEdit, showDelete, adminMode, guestMode }) => {
  // 条件分岐だらけの複雑なコンポーネント
}

// ✅ 推奨：責務が明確な小さなコンポーネント
const UserProfile = ({ user }) => { /* ユーザー情報表示のみ */ }
const UserActions = ({ user }) => { /* アクション操作のみ */ }
```

**1つのモジュールで if が多すぎる場合は分割を検討**

#### 📚 参考資料
- [再利用目的で小さく作るわけではない](https://scrapbox.io/mrsekut-p/%E5%86%8D%E5%88%A9%E7%94%A8%E7%9B%AE%E7%9A%84%E3%81%A7%E5%B0%8F%E3%81%95%E3%81%8F%E4%BD%9C%E3%82%8B%E3%82%8F%E3%81%91%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84)

---

