// reference
// url:https://zenn.dev/catnose99/articles/19a05103ab9ec7

export default function Loading() {
  return (
    <main className='mx-20px max-w-[800px] md:mx-auto'>
      <div className='mt-100px flex items-center justify-center'>
        <div className='h-6 w-6 animate-ping rounded-full bg-linkActive'></div>
      </div>
    </main>
  )
}
