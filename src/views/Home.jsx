import React from 'react'
import banner from '../assets/banner-argentina.webp'
import adidas from '../assets/adidas-logo.png'
import nike from '../assets/nike-logo.png'
import puma from '../assets/puma-logo.png'
import newBalance from '../assets/new-balance-logo.png'
import camisetas from '../assets/camiseta-argentina.webp'
import shorts from '../assets/short-argentina.webp'
import buzos from '../assets/buzo-city.jpg'
import camperas from '../assets/parka-river2.jpg'

const Home = () => {
  return (
    <div className='w-full max-w-8xl min-h-screen max-h-max m-auto'>
        <div className='max-h-max min-w-full relative'>
            <div className='absolute flex flex-col top-1/4 left-20 lg:w-2/5 w-2/4 gap-3'>
              <h3 className='hidden sm:block text-white font-bold text-3xl sm:text-xl xl:text-4xl'>EL SENTIMIENTO DE UN PAIS</h3>
              <h3 className='text-white font-bold text-sm text-left sm:hidden'>EL SENTIMIENTO DE UN PAIS</h3>
              <p className='text-white font-bold text-xs text-left sm:hidden -mt-2'>Llegó la nueva camiseta de Argentina para Qatar 2022. Comprala ahora y empezá a vivir el Mundial.</p>
              <p className='hidden sm:block text-white font-light text-lg sm:text-sm xl:text-xl'>Llegó la nueva camiseta de Argentina para Qatar 2022. Comprala ahora y empezá a vivir el Mundial.</p>
              <p className='hidden sm:block text-white underline text-xs lg:text-xl lg:mt-3 cursor-pointer'>Comprar ya.</p>
            </div>
            <img src={banner} alt="argentina" className='w-full sm:h-auto h-36 object-cover bg-no-repeat bg-center'/>
        </div>
        <div className='sm:w-10/12 w-full min-h-max sm:h-64 my-8 mx-auto grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 place-items-center sm:my-24'>
            <div className='w-2/4 sm:w-2/5 flex flex-col items-center justify-center'>
                <img src={adidas} alt="" className='w-full' />
            </div>
            <div className='w-2/4 sm:w-2/5 flex flex-col items-center justify-center'>
                <img src={nike} alt="" className='w-full' />
            </div>
            <div className='w-2/4 sm:w-2/5 flex flex-col items-center justify-center'>
                <img src={puma} alt="" className='w-full' />
            </div>
            <div className='w-2/4 sm:w-2/5 flex flex-col items-center justify-center'>
                <img src={newBalance} alt="" className='w-full' />
            </div>
        </div>
        <div className='sm:w-10/12 sm:gap-4 grid grid-cols-2 sm:grid-cols-2 min-h-max mx-auto place-items-center mt-12'>
            <div className='w-4/4 h-48 sm:h-full sm:min-w-3xl shadow relative mb-2 sm:mb-4'>
                <img src={camisetas} alt="" className='object-cover w-full h-full brightness-50'/>
                <p className='absolute bottom-8 ml-7 text-white font-bold text-xl lg:text-3xl'>Camisetas</p>
            </div>
            <div className='w-4/4 h-48 sm:h-full max-w-3xl shadow relative mb-2 sm:mb-4'>
                <img src={shorts} alt="" className='object-cover w-full h-full brightness-50'/>
                <p className='absolute bottom-8 ml-7 text-white font-bold text-xl lg:text-3xl'>Shorts</p>
            </div>
            <div className='w-4/4 h-48 sm:h-full max-w-3xl shadow relative mb-2 sm:mb-4'>
                <img src={buzos} alt="" className='object-cover h-full brightness-50'/>
                <p className='absolute bottom-8 ml-7 text-white font-bold text-xl lg:text-3xl'>Buzos</p>
            </div>
            <div className='w-4/4 h-48 sm:h-full max-w-3xl shadow relative mb-2 sm:mb-4'>
                <img src={camperas} alt="" className='object-cover h-full brightness-50'/>
                <p className='absolute bottom-8 ml-7 text-white font-bold text-xl lg:text-3xl'>Camperas</p>
            </div>
        </div>

    </div>
  )
}

export default Home