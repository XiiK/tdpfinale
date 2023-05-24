'use client'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper'

async function getData () {
  const res = await fetch('https://tdpomo.vercel.app/api/gayfamosi')
  return res.json()
}

const shuffle = (array) => {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

export default function SwiperPersone () {
  const [people, setPeople] = useState([])
  // console.log('people', people)
  useEffect(() => {
    getData().then((data) => {
      setPeople(data)
    })
  }, [])

  return (
    <div id='swiperPersone' className='bg-slate-200'>
      <div className='max-w-7xl mx-auto py-16 pb-10 px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>FAMA E OMOSESSUALITÀ</h2>
          <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>Persone famose della LGTBQ+</p>
          <p className='mt-5 mx-auto text-xl text-gray-500'>Scorri per visualizzare le celebrità LGBTQ+ del mondo del cinema, dello spettacolo e dello sport.</p>
        </div>
        <div className='mt-16'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true
            }}
            pagination={{
              clickable: true
            }}
            navigation
            modules={[Keyboard, Pagination, Navigation]}
            className='mySwiper'
          >
            {shuffle(people).map((person, index) => (
              <SwiperSlide key={index}>
                <div className='bg-gray-100 h-56 rounded-lg shadow-lg pr-24 pl-24 pb-12 flex justify-between items-center'>
                  <div className='mt-4'>
                    <h3 className='italic text-4xl font-medium text-gray-900'>{person.nome}</h3>
                    <p className='mt-2 text-xl text-gray-500'>{person.dataNascita} - {person.nazione}</p>
                    <p className='mt-2 text-xl text-gray-600 mb-2'>{person.categoria}</p>
                    <a href={person.url} className='mt-2 text-base text-indigo-600 '>{person.url}</a>
                  </div>
                  <img className='w-32 h-32 rounded-full' src={person.img || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpwco.com.sg%2Fwp-content%2Fuploads%2F2020%2F05%2FGeneric-Profile-Placeholder-v3-1200x1200.png&f=1&nofb=1&ipt=4abd22d6d7d601411eaf079f51a053c976a91466a9471048fde6dd6cab8ea54e&ipo=images'} alt={person.nome} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>

  )
}
