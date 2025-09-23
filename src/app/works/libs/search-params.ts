import { parseAsString, createLoader } from 'nuqs/server'

// reference:
// https://nuqs.dev/docs/server-side

const categoriesSearchParams = {
  technology: parseAsString.withDefault(''),
  category: parseAsString.withDefault(''),
}

export const loadSearchParams = createLoader(categoriesSearchParams)
