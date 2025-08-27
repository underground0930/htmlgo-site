# Shell Scripts

このディレクトリには、プロジェクトで使用するシェルスクリプトを配置しています。

## 📁 スクリプト一覧

### `find-camelcase-files.sh`
キャメルケース・パスカルケースのファイル名を検索するスクリプト

**使用方法:**
```bash
# プロジェクトルートから実行
./scripts/shell/find-camelcase-files.sh          # カレントディレクトリを検索
./scripts/shell/find-camelcase-files.sh src/     # 指定ディレクトリを検索
```

**機能:**
- キャメルケース・パスカルケースのファイル名を検索
- `node_modules`, `.git`, `.next`, `.husky`, `dist`, `build` を除外
- 結果を番号付きで表示
- ファイル数の合計表示

## 🚀 新しいスクリプトの追加

1. このディレクトリにスクリプトファイルを作成
2. 実行権限を付与: `chmod +x scripts/shell/your-script.sh`
3. このREADMEに説明を追加

## 📝 命名規則

- ケバブケース（ハイフン区切り）を使用
- 拡張子は `.sh`
- 例: `find-camelcase-files.sh`, `setup-dev-env.sh`
