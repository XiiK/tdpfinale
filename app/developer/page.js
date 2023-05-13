import Link from 'next/link'

export default function Developer () {
  return (
    <>
      <div className='flex items-center justify-center bg-gray-100 py-6'>
        <div className='flex items-center justify-center'>
          <Link href='/' className='text-gray-700 text-2xl font-bold hover:text-gray-900'>Home</Link>
        </div>
      </div>
      <div className='bg-slate-200'>
        <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>Developer</h2>
            <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>Page</p>
          </div>
          <div className='mt-16'>
            <p className='text-center text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl'>Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  )
}
