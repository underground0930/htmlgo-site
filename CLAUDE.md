# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server (automatically generates feed.json and clears .next cache)
- `npm run build` - Build production version (automatically generates feed.json)
- `npm start` - Start production server
- `npm run export` - Export static site

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

### Data Generation
- `node ./scripts/generateFeedJson.js` - Generate feed.json from external APIs (Qiita, Zenn)

## Project Architecture

This is a Next.js 14 portfolio/blog site using TypeScript and Tailwind CSS with the App Router.

### Content Management
- **MicroCMS**: Primary CMS for works/portfolio content and about page data
- **Newt**: Secondary CMS integration 
- **External Feeds**: Aggregates articles from Qiita and Zenn APIs via build-time scripts

### Key Architectural Patterns
- **Server Components**: Heavy use of server-only data fetching in `src/libs/fetch/`
- **Path Aliases**: `@/*` maps to `src/*` for cleaner imports
- **Component Structure**: Clear separation between common components and page-specific components
- **Type Safety**: Comprehensive TypeScript types in `src/types/` for all external APIs

### Data Flow
1. Build/dev startup runs `generateFeedJson.js` to fetch external article feeds
2. MicroCMS and Newt clients handle CMS data with server-only execution
3. Custom cache busting implemented for MicroCMS requests using minute-based parameters
4. Contact form uses API routes with nodemailer and reCAPTCHA verification

### Environment Configuration
- Requires `.env` file with `MICROCMS_API_KEY` and `NEWT_API_KEY`
- Uses Husky for git hooks and lint-staged for pre-commit linting
- SVG files are processed through @svgr/webpack for component imports

### File Structure Notes
- **Updated Structure (2025-01)**: Components now organized using Colocation + Feature-based approach
- **Shared Components**: `features/ui/` for shared UI components (previously `common/`)
- **Page Components**: `app/[page]/components/` for page-specific components
- **Naming Convention**: All files use kebab-case (e.g., `user-profile.tsx`)
- Utils contain pure functions for data transformation
- Hooks directory for custom React hooks including debug mode and page view tracking
- Constants are centralized in `src/const/` directory

## Coding Guidelines (Updated 2025-01)

### Directory Structure Rules
```
src/
├── app/                          # Next.js App Router (routing only)
│   ├── about/
│   │   ├── page.tsx
│   │   └── components/           # Page-specific components
├── features/                     # Feature-based shared components
│   ├── ui/                      # Shared UI components (Button, Modal, etc.)
│   └── shared/                  # Other shared features
├── hooks/                       # Custom React hooks
├── libs/                        # API clients and utilities
├── types/                       # TypeScript definitions
├── utils/                       # Helper functions
└── styles/                      # Global styles
```

### Critical Rules
- **NO BARREL FILES**: Index.ts files are PROHIBITED due to circular dependency risks
- **Direct Imports Only**: Always import specific files, never through index.ts
- **kebab-case Files**: All file names must use kebab-case (not PascalCase/camelCase)
- **Colocation**: Place components near where they're used

### Import Patterns
```tsx
// ✅ Correct - Direct imports
import { Button } from '@/features/ui/button'
import { Modal } from '@/features/ui/modal'

// ❌ Wrong - Barrel file imports (PROHIBITED)
import { Button, Modal } from '@/features/ui'

// ✅ Correct - Page components
import { ContactForm } from './contact-form'

// ✅ Correct - Cross-feature imports
import { UserAPI } from '@/libs/api/user-api'
```

### Component Placement
- **Page-specific**: Place in `app/[page]/components/`
- **Shared UI**: Place in `features/ui/`
- **Feature-specific**: Place in `features/[feature]/`
- **Max nesting**: 3 levels deep maximum

### File Naming
- **Files**: kebab-case (`user-profile.tsx`)
- **Components**: PascalCase (`UserProfile`)
- **Functions**: camelCase (`fetchUserData`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINT`)

For complete guidelines, see `CODING_GUIDELINES.md`
