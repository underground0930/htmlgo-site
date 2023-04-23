// MEMO:参考 これでないとエラーになる
// https://nextjs.org/docs/basic-features/eslint#lint-staged

const path = require('path')

module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': [
    'tsc --noEmit --incremental false --pretty false',
    (filenames) =>
      `next lint --ignore-path .prettierignore --fix --file ${filenames
        .map((file) => path.relative(process.cwd(), file))
        .join(' --file ')}`,
    'prettier --write',
  ],
}
