# コーディング規約・ディレクトリ構成ガイドライン

## ディレクトリ構成

### 基本方針
- **Colocation + Feature-based Hybrid**: 関連ファイルを近くに配置し、機能別に整理する
- **App Router**: Next.js 13+ のApp Routerを使用
- ページ専用コンポーネントは該当ページの近くに配置
- 共通コンポーネントは`features/`以下に機能別配置

### ディレクトリ構造

```
src/
├── app/                          # Next.js App Router（ルーティングのみ）
│   ├── about/
│   │   ├── page.tsx
│   │   └── components/           # このページ専用コンポーネント
│   │       └── about-sns-box.tsx
│   ├── articles/
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── articles-body.tsx
│   │       └── articles-list.tsx
│   └── ...
├── features/                     # 機能別の共通コンポーネント
│   ├── ui/                      # UIコンポーネント
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── button.tsx
│   │   └── ...
│   ├── top/                     # トップページ関連
│   │   └── components/
│   │       └── service-list.tsx
│   └── shared/                  # その他共通機能
├── hooks/                       # カスタムフック
├── libs/                        # API・ユーティリティ
├── types/                       # 型定義
├── utils/                       # ヘルパー関数
└── styles/                      # スタイル
```

## ファイル命名規則

### ファイル名
- **kebab-case**: すべてのファイル名はケバブケースを使用
  - ✅ `user-profile.tsx`
  - ✅ `fetch-articles.ts`
  - ❌ `UserProfile.tsx`
  - ❌ `fetchArticles.ts`

### コンポーネント名
- **PascalCase**: React コンポーネント名はPascalCaseを使用
  ```tsx
  // ファイル名: user-profile.tsx
  export const UserProfile = () => {
    // ...
  }
  ```

## Import規則

### バレルファイル（index.ts）は使用禁止
- **理由**: 循環参照のリスク、バンドルサイズの増大、デバッグの困難さ
- **代替案**: 直接インポートを使用

```tsx
// ❌ バレルファイル経由（禁止）
import { Button, Modal } from '@/features/ui'

// ✅ 直接インポート（推奨）
import { Button } from '@/features/ui/button'
import { Modal } from '@/features/ui/modal'
```

### インポート順序
1. React関連
2. サードパーティライブラリ
3. 内部モジュール（@/から始まる）
4. 相対インポート

```tsx
import { useState } from 'react'
import { NextPage } from 'next'

import { Button } from '@/features/ui/button'
import { fetchUser } from '@/libs/api'

import { LocalComponent } from './local-component'
```

## コンポーネント配置規則

### ページ専用コンポーネント
- 該当ページディレクトリ内の`components/`フォルダに配置
- そのページでのみ使用されるコンポーネント

```
app/contact/
├── page.tsx
├── thanks/page.tsx
└── components/
    ├── contact-form.tsx    # contactページ専用
    └── input-field.tsx     # contactページ専用
```

### 共通コンポーネント
- `features/`以下に機能別で配置
- 複数ページで使用されるコンポーネント

```
features/
├── ui/                     # 基本UIコンポーネント
│   ├── button.tsx
│   ├── modal.tsx
│   └── input.tsx
└── shared/                 # その他共通機能
    └── analytics.tsx
```

### 相対インポートの使用
- 同一ディレクトリ内では相対インポートを使用
- 異なる機能間では絶対インポート（@/）を使用

```tsx
// 同一ディレクトリ内
import { InputField } from './input-field'

// 異なる機能から
import { Button } from '@/features/ui/button'
```

## コメント規則

### ファイルヘッダーコメント
```tsx
/**
 * ユーザープロフィールコンポーネント
 * 
 * @description ユーザーの基本情報を表示し、編集機能を提供する
 * @author your-name
 * @created 2025-01-01
 */
```

### 関数・コンポーネントコメント
```tsx
/**
 * ユーザープロフィールを表示するコンポーネント
 * 
 * @param user - 表示するユーザー情報
 * @param onEdit - 編集ボタンクリック時のコールバック
 * @returns ユーザープロフィールのJSX
 */
export const UserProfile = ({ user, onEdit }: Props) => {
  // ...
}
```

## 制限事項・注意点

### 禁止事項
- ❌ バレルファイル（index.ts）の作成・使用
- ❌ PascalCase/camelCaseでのファイル命名
- ❌ 深すぎるネストしたディレクトリ構造（3階層まで）

### 推奨事項
- ✅ 関連ファイルの近接配置（Colocation）
- ✅ 機能別のディレクトリ分割
- ✅ 直接インポートの使用
- ✅ 適切なコメントの記述

## パフォーマンス考慮事項

### 動的インポート
- 大きなコンポーネントは動的インポートを検討
```tsx
const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <LoadingSpinner />,
})
```

### Tree Shaking
- バレルファイルを避けることでTree Shakingを最適化
- 未使用コードの自動削除を促進

---

**更新日**: 2025-01-XX  
**バージョン**: 1.0  
**担当者**: development team
