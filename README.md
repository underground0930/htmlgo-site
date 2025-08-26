# HTMLGO SITE

> Next.js 15 ポートフォリオサイト  
> https://www.htmlgo.site/

## 📖 開発者向けドキュメント

**このプロジェクトの詳細な情報は [`CLAUDE.md`](./CLAUDE.md) をお読みください。**

- 🏗️ **プロジェクト概要・アーキテクチャ**
- 🚀 **開発環境のセットアップ**
- 📂 **ディレクトリ構成（Perfect Colocation）**
- 📝 **コーディング規約（Zero Barrel Files）**
- ⚡ **パフォーマンス最適化**
- 🔧 **開発・ビルドコマンド**

## 🤖 AI エージェント対応

このプロジェクトは **Claude Code** が `CLAUDE.md` を自動参照し、プロジェクトのルールや構成を理解できるよう最適化されています。

## 🚀 クイックスタート

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# 本番ビルド
npm run build
```

詳細な開発手順は [`CLAUDE.md`](./CLAUDE.md) を参照してください。

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

詳細な実装例は [`CLAUDE.md`](./CLAUDE.md) を参照してください。

---

**Architecture**: Perfect Colocation + Zero Barrel Files  
**Framework**: Next.js 15 + TypeScript + Tailwind CSS  
**Philosophy**: [責務駆動設計](https://scrapbox.io/mrsekut-p/%E5%86%8D%E5%88%A9%E7%94%A8%E7%9B%AE%E7%9A%84%E3%81%A7%E5%B0%8F%E3%81%95%E3%81%8F%E4%BD%9C%E3%82%8B%E3%82%8F%E3%81%91%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84)  
**Documentation**: [CLAUDE.md](./CLAUDE.md)
