type Props = {
  title?: string
  text?: string
}

// style

const Title = ({ title, text }: Props) => {
  return (
    <>
      <h2 className="text-center mb-3 md:mb-5">
        {title && <span className="block mb-1 font-bold text-xl md:text-2xl">{title}</span>}
        {text && <span className="block text-xs">{text}</span>}
      </h2>
    </>
  )
}

export default Title
