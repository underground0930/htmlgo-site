const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const _import = require("eslint-plugin-import");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

const {
    fixupPluginRules,
} = require("@eslint/compat");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            React: "readonly",
            JSX: "readonly",
        },

        parser: tsParser,

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "next/core-web-vitals",
        "prettier",
    ),

    plugins: {
        import: fixupPluginRules(_import),
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        "no-empty-pattern": 1,
        "react/jsx-curly-brace-presence": "error",

        "@typescript-eslint/no-misused-promises": [2, {
            checksVoidReturn: {
                attributes: false,
            },
        }],

        "import/order": ["error", {
            groups: [
                "builtin",
                "external",
                "internal",
                ["parent", "sibling"],
                "object",
                "type",
                "index",
            ],

            "newlines-between": "always",
            pathGroupsExcludedImportTypes: ["builtin"],

            pathGroups: [{
                pattern: "@/utils/**",
                group: "internal",
                position: "before",
            }, {
                pattern: "@/libs/**",
                group: "internal",
                position: "before",
            }, {
                pattern: "@/hooks/**",
                group: "internal",
                position: "before",
            }, {
                pattern: "@/components/**",
                group: "internal",
                position: "before",
            }, {
                pattern: "@/const/**",
                group: "internal",
                position: "before",
            }, {
                pattern: "@/types/**",
                group: "internal",
                position: "before",
            }, {
                pattern: "@/styles/**",
                group: "internal",
                position: "before",
            }, {
                pattern: "@/svgs/**",
                group: "internal",
                position: "before",
            }],
        }],
    },
}, globalIgnores([
    "**/.eslintrc.js",
    "**/prettier.config.js",
    "**/next.config.js",
    "**/tailwind.config.js",
    "**/tailwind.custom.js",
    "**/tsconfig.json",
    "**/postcss.config.js",
    "**/build/",
    "**/bin/",
    "**/obj/",
    "**/out/",
    "**/.next/",
    "**/scripts/",
])]);
