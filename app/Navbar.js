import React from 'react'

function Navbar () {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-100 p-6'>
      <div className='flex items-center flex-shrink-0 mr-6'>
        <img src='logo.png' alt='Logo' className='h-8' />
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center'>
        <div className='text-md'>
          <a href='#' className='inline-block text-gray-700 hover:text-gray-900 mr-4'>
            Section 1
          </a>
          <a href='#' className='inline-block text-gray-700 hover:text-gray-900 mr-4'>
            Section 2
          </a>
          <a href='#' className='inline-block text-gray-700 hover:text-gray-900 mr-4'>
            Section 3
          </a>
          <a href='#' className='inline-block text-gray-700 hover:text-gray-900'>
            Section 4
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
