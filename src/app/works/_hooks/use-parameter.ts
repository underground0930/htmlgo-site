import { useQueryState, parseAsString } from 'nuqs'
import { createSerializer } from 'nuqs'

const searchParams = {
  category: parseAsString,
  technology: parseAsString,
}

export const useParameter = () => {
  const [category, setCategory] = useQueryState('category', { shallow: false })
  const [technology, setTechnology] = useQueryState('technology', { shallow: false })
  const serialize = createSerializer(searchParams)
  const queryParams = serialize({ category, technology })

  return { category, technology, setCategory, setTechnology, queryParams }
}
