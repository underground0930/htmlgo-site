export const useDebugMode = ({
  debug = false,
  isRight = false,
}: {
  debug: boolean
  isRight?: boolean
}) => {
  const DebugModal = () => {
    if (debug === true) {
      const positionVal = isRight ? 'right-0' : 'left-0'
      return (
        <div
          className={`border-red fixed ${positionVal} top-0 z-20 flex h-[100px] w-[100px] items-center border-2 bg-[#fff] p-2 text-[#f00]`}
        >
          debugging
        </div>
      )
    }
    return <></>
  }
  return { DebugModal, debug }
}
