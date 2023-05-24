import Image from 'next/image'
import Link from 'next/link'

export default function Developer () {
  return (
    <>
      <div className='flex items-center justify-between bg-gray-100 py-6 px-8'>
        <Link href='/' className='px-6 py-2 bg-gray-700 rounded-full text-gray-100 text-2xl font-bold hover:bg-gray-900'>Home</Link>
        <Image
          src='/img/logo.png'
          alt='Hero'
          width={200}
          height={200}
          className='object-cover'
        />
        <h2 className='text-base my-4 font-semibold text-indigo-600 tracking-wide uppercase'>Developer</h2>
      </div>
      <div className='bg-slate-200'>
        <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-3xl'>
              La nostra api offre una lista di personaggi famosi lgbt e una lista di paesi che hanno introdotto l'adozione per coppie gay
            </p>
          </div>
          <div className='my-10'>
            <div className='bg-white overflow-hidden shadow-xl sm:rounded-lg'>
              <div className='p-6 sm:px-20 bg-black border-b border-gray-200'>
                <div className='text-2xl'>
                  <code className='text-blue-300'>GET https://tdpomo.vercel.app/api/gayfamosi</code>
                  <Image
                    src='/img/gayfamosisnippet.png'
                    alt='gayfamosisnippet'
                    width={1000}
                    height={200}
                    className='object-cover my-4'
                  />
                  <code className='text-blue-300'>GET https://tdpomo.vercel.app/api/gayfamosi/[id]</code>
                  <br />
                  <br />
                  <code className='text-blue-300'>POST https://tdpomo.vercel.app/api/gayfamosi</code>
                  <p className='text-blue-100 ml-5 mt-2'>Inserire nel body il json dell'elemento che si vuole aggiungere</p>
                </div>
              </div>
              <div className='p-6 sm:px-20 bg-black border-b border-gray-200'>
                <div className='text-2xl'>
                  <code className='text-blue-300'>GET https://tdpomo.vercel.app/api/paesiadozioni</code>
                  <Image
                    src='/img/paesisnippet.png'
                    alt='gayfamosisnippet'
                    width={300}
                    height={300}
                    className='object-cover my-4'
                  />
                  <code className='text-blue-300'>GET https://tdpomo.vercel.app/api/paesiadozioni/[flag]</code>
                  <br />
                  <br />
                  <code className='text-blue-300'>POST https://tdpomo.vercel.app/api/paesiadozioni</code>
                  <p className='text-blue-100 ml-5 mt-2'>Inserire nel body il json dell'elemento che si vuole aggiungere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
