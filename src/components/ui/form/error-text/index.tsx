type Props = {
  error: string
} & React.HTMLAttributes<HTMLDivElement>

export function ErrorText({ error, ...props }: Props) {
  if (!error) return null

  return (
    <div
      {...props}
      className={'text-medium mt-1 flex items-center gap-1 text-[10px] text-[#DA3333]'}
    >
      {error}
    </div>
  )
}
