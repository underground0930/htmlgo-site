import ReactSelect, { Props as ReactSelectProps } from 'react-select'
import { tv, type VariantProps } from 'tailwind-variants'

const selectVariants = tv({
  base: 'cursor-pointer',
})

type CommonVariantProps = VariantProps<typeof selectVariants>

type Props = ReactSelectProps & CommonVariantProps

export const Select = (props: Props) => {
  const className = selectVariants()
  return <ReactSelect {...props} className={className} />
}
