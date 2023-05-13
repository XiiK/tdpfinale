import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-7 mt-12'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-sm'>
          &copy; 2023 Stefan Gherghina & Laura Marzo
        </p>
        <div className='flex space-x-4'>
          <a href='www.itis.pr.it' className='text-gray-300 hover:text-white'>
            ITIS Da vinci Parma
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
