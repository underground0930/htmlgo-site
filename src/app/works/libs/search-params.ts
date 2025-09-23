import { parseAsString, createLoader } from 'nuqs'

// reference:
// https://nuqs.dev/docs/server-side

export const categoriesSearchParams = {
  technology: parseAsString.withDefault(''),
  category: parseAsString.withDefault(''),
}

export const loadSearchParams = createLoader(categoriesSearchParams)
