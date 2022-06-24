type Props = {
  title?: string
  text?: string
}

// style

const Title = ({ title, text }: Props) => {
  return (
    <>
      <h2 className="text-center mb-24px md:mb-40px leading-[1.55]">
        {title && <span className="block mb-1 font-bold text-20px md:text-30px">{title}</span>}
        {text && <span className="block text-13px">{text}</span>}
      </h2>
    </>
  )
}

export default Title
