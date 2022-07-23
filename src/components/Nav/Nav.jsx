import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='min-h-screen max-h-max absolute shadow w-full max-w-lg z-10 bg-white'>
        <div className='w-3/4 max-w-xs m-auto mt-10'>
            <Link to={'/products'}>
            <h3 className='font-bold text-lg text-sky-400 my-10'>Productos</h3>
            </Link>
            <div className='flex flex-col m-auto'>
                <h2 className='font-bold text-lg'>Marcas</h2>
                <ul className='flex flex-col gap-3 px-8 mt-6'>
                    <Link to={'/products'}>
                    <li className='text-base hover:text-sky-400 cursor-pointer'>Adidas</li>
                    </Link>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Nike</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Puma</li>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Givova</li>
                </ul>
            </div>
            <div className='flex flex-col m-auto mt-8'>
                <h2 className='font-bold text-lg'>Categorias</h2>
                <ul className='flex flex-col gap-3 px-8 mt-6'>
                    <Link to={'/products/camisetas'}>
                    <li className='text-base hover:text-sky-400 cursor-pointer'>Camisetas</li>
                    </Link>
                    <Link to={'/products/shorts'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Shorts</li>
                    </Link>
                    <Link to={'/products/pantalones'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Pantalones</li>
                    </Link>
                    <Link to={'/products/camperas'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Camperas</li>
                    </Link>
                    <Link to={'/products/buzos'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Buzos</li>
                    </Link>
                    <Link to={'/products/accesorios'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Accesorios</li>
                    </Link>
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