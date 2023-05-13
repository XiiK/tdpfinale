import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HeroSection () {
  return (
    <section className='flex items-center justify-center py-16 px-20 sm:px-6 lg:px-8 bg-slate-200'>
      <div className='max-w-3xl mx-auto lg:w-3/5'>
        <h1 className='text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-8'>
          Celebrating Love<br />
          and Family Diversity
        </h1>
        <p className='text-lg lg:text-xl text-gray-600 mb-12'>
          Our mission is to promote equal rights and opportunities for the LGBTQ+ community, including the right to adopt and raise children with love and care.
        </p>
        <Link href='/developer' className='inline-block text-xl px-6 py-4 leading-none border rounded-full text-white bg-pink-600 hover:border-pink-600 hover:text-pink-600 hover:bg-slate-200 mt-4 lg:mt-0 transition duration-700 transform hover:scale-110'>Developer</Link>
      </div>
      <div className='hidden lg:block lg:w-2/5 lg:ml-20'>
        <Image
          src='/img/hero-image.png'
          alt='Hero'
          width={350}
          height={350}
          className='rounded-lg shadow-xl'
        />
      </div>
    </section>
  )
}

export default HeroSection
