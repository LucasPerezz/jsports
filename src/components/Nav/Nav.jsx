import React from 'react'

const Nav = () => {
  return (
    <div className='min-h-screen max-h-max absolute shadow w-full max-w-lg z-10 bg-white'>
        <div className='w-3/4 max-w-xs m-auto mt-10'>
            <div className='flex flex-col m-auto'>
                <h2 className='font-bold text-lg'>Marcas</h2>
                <ul className='flex flex-col gap-3 px-8 mt-6'>
                    <li className='text-base hover:text-sky-400 cursor-pointer'>Adidas</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Nike</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Puma</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Givova</li>
                </ul>
            </div>
            <div className='flex flex-col m-auto mt-8'>
                <h2 className='font-bold text-lg'>Categorias</h2>
                <ul className='flex flex-col gap-3 px-8 mt-6'>
                    <li className='text-base hover:text-sky-400 cursor-pointer'>Camisetas</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Shorts</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Pantalones</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Camperas</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Buzos</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Accesorios</li>
                </ul>
            </div>
            <div className='flex flex-col m-auto mt-8'>
                <h2 className='font-bold text-lg'>Equipos</h2>
                <ul className='flex flex-col gap-3 px-8 mt-6'>
                    <li className='text-base hover:text-sky-400 cursor-pointer'>Seleccion Argentina</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Boca Juniors</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>River Plate</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav