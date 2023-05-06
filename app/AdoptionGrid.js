'use client'
import Image from 'next/image'

async function getData () {
  const res = await fetch('https://tdpomo.vercel.app/api/paesiadozioni')
  return res.json()
}

const AdoptionGrid = async () => {
  const countries = await getData()
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>Adoption laws around the world</h2>
          <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>Countries that allow same-sex couples to adopt</p>
        </div>
        <div className='mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8'>
          {countries.map((country) => (
            <div key={country.nome} className='group relative'>
              <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3'>
                <Image
                  className='group-hover:opacity-75 object-cover object-center'
                  src={`https://flagsapi.com/${country.flag}/flat/64.png`}
                  alt={country.nome}
                  width={64}
                  height={64}
                />
              </div>
              <div className='mt-3'>
                <h3 className='text-lg font-medium text-black'>
                  {country.nome}
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Year of introduction</dt>
                    <dd>
                      {country.anno ? `Introdotto nel ${country.anno}` : ''}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdoptionGrid
