import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-24 mt-12'>
        <hr className='w-4/5 mx-auto'/>
        <div className='my-9 flex items-center justify-center'>
            <ul className='flex w-3/4 mx-auto justify-evenly'>
                <li className='text-neutral-400 text-xs font-normal lg:text-sm'>Home</li>
                <li className='text-neutral-400 text-xs font-normal lg:text-sm'>Productos</li>
                <li className='text-neutral-400 text-xs font-normal lg:text-sm'>Adidas</li>
                <li className='text-neutral-400 text-xs font-normal lg:text-sm'>Nike</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer