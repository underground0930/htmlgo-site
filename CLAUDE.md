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
- Components organized by usage: `common/` for shared, `pages/` for page-specific
- Utils contain pure functions for data transformation
- Hooks directory for custom React hooks including debug mode and page view tracking
- Constants are centralized in `src/const/` directory