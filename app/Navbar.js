import React from 'react'
// import logo
import Link from 'next/link'
import Image from 'next/image'

function Navbar () {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-100 p-6'>
      <div className='flex items-center w-60'>
        <Image
          src='/img/logo.png'
          alt='Hero'
          width={200}
          height={200}
          className='object-cover'
        />
      </div>
      <div className='mx-auto w-full flex-1 block lg:flex lg:items-center lg:w-auto justify-center'>
        <div className='text-md'>
          <a href='#heroSection' className='inline-block text-gray-600 hover:text-gray-900 mr-4'>
            API
          </a>
          <a href='#adoptionGrid' className='inline-block text-gray-600 hover:text-gray-900 mr-4'>
            Adozioni
          </a>
          <a href='#swiperPersone' className='inline-block text-gray-600 hover:text-gray-900 mr-4'>
            VIP Gay
          </a>
          <a href='#swiperGames' className='inline-block text-gray-600 hover:text-gray-900'>
            Personaggi Gay
          </a>
        </div>
      </div>
      <div className='w-60 flex justify-center hover:scale-125 transition-60 duration-200'>
        <Link href='/developer' className='inline-block text-sm px-4 py-2 leading-none border rounded-full text-pink-600 border-pink-600 hover:border-transparent hover:text-gray-100 hover:bg-pink-600 mt-4 lg:mt-0'>Developer</Link>
      </div>
    </nav>
  )
}

export default Navbar
