import React from 'react'
// import logo
import logo from '../public/img/logo.png'
import Link from 'next/link'

function Navbar () {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-100 p-6'>
      <div className='flex items-center flex-shrink-0 mr-6'>
        <img src={logo} alt='Logo' className='h-8' />
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center'>
        <div className='text-md'>
          <a href='#' className='inline-block text-gray-600 hover:text-gray-900 mr-4'>
            Section 1
          </a>
          <a href='#' className='inline-block text-gray-600 hover:text-gray-900 mr-4'>
            Section 2
          </a>
          <a href='#' className='inline-block text-gray-600 hover:text-gray-900 mr-4'>
            Section 3
          </a>
          <a href='#' className='inline-block text-gray-600 hover:text-gray-900'>
            Section 4
          </a>
        </div>
      </div>
      <div className=''>
        <Link href='/developer' className='inline-block text-sm px-4 py-2 leading-none border rounded-full text-pink-600 border-pink-600 hover:border-transparent hover:text-gray-100 hover:bg-pink-600 mt-4 lg:mt-0'>Developer</Link>
      </div>
    </nav>
  )
}

export default Navbar
