import { NuqsAdapter } from 'nuqs/adapters/next/app'

type Props = {
  children: React.ReactNode
}

export const NuqsProvider = (props: Props) => {
  return <NuqsAdapter>{props.children}</NuqsAdapter>
}
