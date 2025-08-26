# コーディング規約・ディレクトリ構成ガイドライン (2025年完全版)

## 概要

このドキュメントは Next.js 15 プロジェクトにおける **Perfect Colocation + Zero Barrel Files** アーキテクチャのコーディング規約を定義します。

## 基本方針

### 🎯 Perfect Colocation (完全な近接配置)
- **関連ファイルを可能な限り近くに配置**
- ページ専用機能は該当ページ内に配置
- 真の共通機能のみを src/ 直下に配置

### 🚫 Zero Barrel Files (バレルファイル完全排除)
- **index.ts ファイルの作成・使用を完全禁止**
- 循環参照リスクの排除
- Tree Shaking の完全最適化

### 🏗️ Feature-based + Page-based Hybrid
- ページ専用機能はページ内に配置
- 機能横断的な共通機能は features/ に配置

## ディレクトリ構成

### 最終的なディレクトリ構造

```
src/
├── app/                          # Next.js 15 App Router + Perfect Colocation
│   ├── (root)/                   # トップページグループ
│   │   ├── page.tsx              # トップページ
│   │   ├── components/           # トップページ専用コンポーネント
│   │   │   └── service-list.tsx
│   │   └── libs/                 # トップページ専用API関数
│   │       └── fetch-top-list.ts
│   ├── about/
│   │   ├── page.tsx
│   │   ├── components/           # aboutページ専用コンポーネント
│   │   │   └── about-sns-box.tsx
│   │   └── constants/            # aboutページ専用定数
│   │       └── about.ts
│   ├── articles/
│   │   ├── page.tsx
│   │   ├── components/           # articlesページ専用コンポーネント
│   │   │   ├── articles-body.tsx
│   │   │   └── articles-list.tsx
│   │   ├── constants/            # articlesページ専用定数
│   │   │   └── articles.ts
│   │   └── libs/                 # articlesページ専用API関数
│   │       └── fetch-articles.ts
│   ├── contact/
│   │   ├── page.tsx
│   │   ├── thanks/page.tsx
│   │   ├── api/route.ts          # API Route
│   │   ├── components/           # contactページ専用コンポーネント
│   │   │   ├── contact-body.tsx
│   │   │   └── input-text.tsx
│   │   ├── constants/            # contactページ専用定数
│   │   │   └── contact.ts
│   │   ├── libs/                 # contactページ専用API関数
│   │   │   ├── send-mail.ts
│   │   │   └── verify-recaptcha.ts
│   │   └── types/                # contactページ専用型定義
│   │       └── contact.ts
│   ├── works/
│   │   ├── page.tsx              # works一覧ページ
│   │   ├── components/           # works一覧専用コンポーネント
│   │   │   └── works-list.tsx
│   │   ├── constants/            # worksページ専用定数
│   │   │   └── works.ts
│   │   ├── libs/                 # works一覧専用API関数
│   │   │   └── fetch-works-index.ts
│   │   └── [slug]/               # works詳細動的ルート
│   │       ├── page.tsx          # works詳細ページ
│   │       ├── not-found.tsx
│   │       ├── components/       # works詳細専用コンポーネント
│   │       │   ├── works-detail-body.tsx
│   │       │   ├── works-detail-info.tsx
│   │       │   └── works-slider.tsx
│   │       └── libs/             # works詳細専用API関数
│   │           ├── fetch-works-detail.ts
│   │           └── fetch-works-paths.ts
│   ├── loading.tsx               # グローバルローディング
│   ├── error.tsx                 # グローバルエラー
│   └── layout.tsx                # ルートレイアウト
├── features/                     # 真の共通機能のみ
│   └── ui/                       # 純粋な共通UIコンポーネント
│       ├── category-icon.tsx
│       ├── footer.tsx
│       ├── header.tsx
│       ├── image-wrapper.tsx
│       ├── loading-spinner.tsx
│       ├── pager.tsx
│       ├── pager-child.tsx
│       ├── text-btn.tsx
│       └── title.tsx
├── constants/                    # グローバル共通定数のみ
│   └── microcms.ts              # MicroCMS設定（複数ページで使用）
├── libs/                        # グローバル共通ライブラリのみ
│   └── microcms-client.ts       # MicroCMSクライアント（複数ページで使用）
├── types/                       # グローバル共通型定義
│   ├── feed.ts                  # フィード型
│   └── microcms.ts              # MicroCMS型
├── utils/                       # グローバル共通ユーティリティ関数
│   ├── conversion-date.ts
│   ├── cut-text.ts
│   ├── is-empty-object.ts
│   ├── load-script.ts
│   ├── remove-html.ts
│   ├── set-metadata.ts
│   └── shuffle.ts
├── hooks/                       # グローバル共通カスタムフック
│   ├── use-debug-mode.tsx
│   └── use-page-view.tsx
└── styles/                      # グローバルスタイル
    └── globals.css
```

## ファイル命名規則

### ファイル名 - kebab-case 必須
```
✅ 正しい例:
- user-profile.tsx
- fetch-articles.ts
- contact-form.tsx
- works-detail-body.tsx

❌ 間違った例:
- UserProfile.tsx      (PascalCase)
- fetchArticles.ts     (camelCase)
- ContactForm.tsx      (PascalCase)
- worksDetailBody.tsx  (camelCase)
```

### コンポーネント名 - PascalCase
```tsx
// ファイル名: user-profile.tsx
export const UserProfile = () => {
  // コンポーネント実装
}
```

### 関数名 - camelCase
```tsx
// ファイル名: fetch-user-data.ts
export const fetchUserData = async () => {
  // 関数実装
}
```

### 定数名 - UPPER_SNAKE_CASE
```tsx
// ファイル名: api-constants.ts
export const API_BASE_URL = 'https://api.example.com'
export const MAX_RETRY_COUNT = 3
```

## Import 規則

### ❌ バレルファイル（index.ts）完全禁止

```tsx
// ❌ 絶対禁止 - バレルファイル経由のインポート
import { Button, Modal, Input } from '@/features/ui'
import { fetchUser, fetchPosts } from '@/libs'

// ✅ 必須 - 直接インポート
import { Button } from '@/features/ui/button'
import { Modal } from '@/features/ui/modal'
import { Input } from '@/features/ui/input'
import { fetchUser } from '@/libs/fetch-user'
import { fetchPosts } from '@/libs/fetch-posts'
```

### インポートパターン

#### 1. ページ内相対インポート（同一機能内）
```tsx
// app/contact/components/contact-body.tsx
import { InputText } from './input-text'                    // 同一ディレクトリ
import { errorText } from '../constants/contact'            // 親ディレクトリの定数
import { sendMail } from '../libs/send-mail'               // 親ディレクトリのAPI
import { FormBodyData } from '../types/contact'            // 親ディレクトリの型
```

#### 2. クロスページ・グローバルインポート（絶対パス）
```tsx
// 共通UIコンポーネント
import { Button } from '@/features/ui/button'
import { Modal } from '@/features/ui/modal'

// グローバルユーティリティ
import { setMetaData } from '@/utils/set-metadata'
import { conversionDate } from '@/utils/conversion-date'

// グローバル型
import { WorkIndex } from '@/types/microcms'
import { FeedObj } from '@/types/feed'

// 他ページのコンポーネント（必要な場合のみ）
import { ArticlesList } from '../articles/components/articles-list'
```

### インポート順序
```tsx
// 1. React関連
import { useState, useEffect } from 'react'
import { NextPage } from 'next'

// 2. サードパーティライブラリ
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// 3. グローバル内部モジュール（@/から始まる）
import { Button } from '@/features/ui/button'
import { setMetaData } from '@/utils/set-metadata'

// 4. 相対インポート（./から始まる）
import { ContactForm } from './contact-form'
import { errorText } from '../constants/contact'
```

## コンポーネント配置規則

### 配置判断フロー

```
コンポーネントを作成する時の判断フロー:

1. このコンポーネントは特定のページでのみ使用される？
   YES → app/[page]/components/ に配置

2. このコンポーネントは複数のページで使用される？
   YES → features/ui/ に配置

3. このコンポーネントは特定の機能領域に属する？
   YES → features/[feature]/ に配置
```

### ページ専用コンポーネント
```
app/contact/
├── page.tsx
├── components/          # このページでのみ使用
│   ├── contact-body.tsx    # メインフォーム
│   └── input-text.tsx      # フォーム用インプット
├── constants/
│   └── contact.ts          # フォーム設定
└── libs/
    └── send-mail.ts        # メール送信API
```

### 共通UIコンポーネント
```
features/ui/             # 複数ページで使用される純粋なUI
├── button.tsx          # 汎用ボタン
├── modal.tsx           # 汎用モーダル
├── input.tsx           # 汎用インプット
└── loading-spinner.tsx # ローディング表示
```

## API関数・ライブラリ配置規則

### ページ専用API関数
```
app/articles/
├── page.tsx
├── components/
└── libs/
    └── fetch-articles.ts  # articles ページでのみ使用
```

### グローバル共通ライブラリ
```
libs/
└── microcms-client.ts     # 複数ページで使用されるMicroCMSクライアント
```

## 定数・設定ファイル配置規則

### ページ専用定数
```
app/contact/
├── constants/
│   └── contact.ts         # contact ページ専用の設定・定数
```

### グローバル共通定数
```
constants/
└── microcms.ts           # 複数ページで使用されるMicroCMS設定
```

## 型定義配置規則

### ページ専用型定義
```
app/contact/
├── types/
│   └── contact.ts        # contact ページ専用の型定義
```

### グローバル共通型定義
```
types/
├── feed.ts              # フィード関連型（複数ページで使用）
└── microcms.ts          # MicroCMS関連型（複数ページで使用）
```

## 実装例

### ページコンポーネントの実装例
```tsx
// app/contact/page.tsx
import { ContactBody } from './components/contact-body'
import { setMetaData } from '@/utils/set-metadata'

const description = 'お仕事のお問い合わせはこちらから'

export const metadata = {
  ...setMetaData({
    title: 'Contact',
    url: 'contact/',
    description,
    images: '/img/ogp_new.png',
  }),
}

export default function ContactPage() {
  return <ContactBody />
}
```

### ページ専用コンポーネントの実装例
```tsx
// app/contact/components/contact-body.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

// グローバル共通UI
import { TextBtn } from '@/features/ui/text-btn'
import { Title } from '@/features/ui/title'

// ページ内相対インポート
import { InputText } from './input-text'
import { errorText } from '../constants/contact'
import { sendMail } from '../libs/send-mail'
import { FormBodyData } from '../types/contact'

export const ContactBody = () => {
  // コンポーネント実装
}
```

## パフォーマンス最適化

### Tree Shaking 最適化
- バレルファイル完全排除により未使用コードを自動削除
- 直接インポートによる最適なバンドルサイズ

### 動的インポート
```tsx
// 大きなコンポーネントの遅延読み込み
const WorksSlider = dynamic(() => import('./works-slider'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})
```

### コード分割
- ページ専用機能の完全分離により効率的なコード分割
- 必要な機能のみを読み込み

## 制限事項・注意点

### ❌ 絶対禁止事項
1. **バレルファイル（index.ts）の作成・使用**
2. **PascalCase/camelCase でのファイル命名**
3. **ページ間での不適切な直接依存**
4. **深すぎるネスト構造**（3階層まで）

### ✅ 必須事項
1. **kebab-case ファイル命名**
2. **直接インポートの使用**
3. **Colocation 原則の徹底**
4. **適切なディレクトリ配置**

### ⚠️ 注意事項
1. **相対インポートは同一機能内のみ**
2. **グローバル機能は本当に複数ページで使用される場合のみ**
3. **新機能追加時は適切な場所に配置**

## デバッグとメンテナンス

### デバッグ支援
- 明確な依存関係により問題の特定が容易
- 循環参照エラーの完全排除
- IDE の補完機能が正確に動作

### 拡張性
- 新機能は該当ページ内に追加
- 機能削除時はディレクトリごと削除可能
- 影響範囲が明確

### チーム開発
- 機能の場所が直感的
- コードレビューが効率的
- 新メンバーの理解が容易

## 移行・リファクタリング

### 既存プロジェクトからの移行
1. バレルファイルの特定と削除
2. ファイル名の kebab-case への変更
3. インポート文の直接インポートへの変更
4. 機能の適切な配置への移動

### 段階的移行
1. ファイル名の統一
2. バレルファイルの排除
3. Colocation の実施
4. 最適化の確認

---

**更新日**: 2025-01-XX  
**バージョン**: 2.0 (Perfect Colocation Edition)  
**対象**: Next.js 15 + TypeScript + Tailwind CSS  
**アーキテクチャ**: Perfect Colocation + Zero Barrel Files  
**メンテナンス**: development team