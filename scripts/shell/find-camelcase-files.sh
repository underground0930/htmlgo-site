#!/bin/bash

# キャメルケース・パスカルケースのファイル名を検索するスクリプト
# Usage: ./find-camelcase-files.sh [directory]

# 検索対象ディレクトリ（引数で指定可能、デフォルトはカレントディレクトリ）
TARGET_DIR="${1:-.}"

echo "🔍 キャメルケース・パスカルケースのファイル名を検索中..."
echo "📁 検索対象ディレクトリ: $TARGET_DIR"
echo ""

# キャメルケース・パスカルケースのファイルを検索
# 除外ディレクトリ: node_modules, .git, .next, .husky, dist, build
CAMELCASE_FILES=$(find "$TARGET_DIR" -type f \
  \( -regex '.*[a-z][A-Z].*' -o -regex '.*/[A-Z][a-z].*' \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -not -path "*/.next/*" \
  -not -path "*/.husky/*" \
  -not -path "*/dist/*" \
  -not -path "*/build/*" \
  | sort)

# 結果の表示
if [ -z "$CAMELCASE_FILES" ]; then
  echo "✅ キャメルケース・パスカルケースのファイル名は見つかりませんでした。"
else
  echo "📋 見つかったファイル:"
  echo "$CAMELCASE_FILES" | nl -nln
  echo ""
  echo "📊 合計: $(echo "$CAMELCASE_FILES" | wc -l | tr -d ' ') ファイル"
fi

echo ""
echo "💡 使用方法:"
echo "  ./find-camelcase-files.sh          # カレントディレクトリを検索"
echo "  ./find-camelcase-files.sh src/     # 指定ディレクトリを検索"
