import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='min-h-screen max-h-max absolute shadow w-full max-w-lg z-10 bg-white'>
        <div className='w-3/4 max-w-xs m-auto mt-10'>
            <Link to={'/'}>
            <h3 className='font-bold text-lg text-sky-400 mt-8 mb-5'>Home</h3>
            </Link>
            <Link to={'/products'}>
            <h3 className='font-bold text-lg text-sky-400 mt-8 mb-5'>Nuestros productos</h3>
            </Link>
            <div className='flex flex-col m-auto'>
                <h2 className='font-bold text-lg text-sky-400'>Marcas</h2>
                <ul className='flex flex-col gap-3 px-8 mt-6'>
                    <Link to={'/products/all/adidas'}>
                    <li className='text-base hover:text-sky-400 cursor-pointer'>Adidas</li>
                    </Link>
                    <Link to={'/products/all/nike'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Nike</li>
                    </Link>
                    <Link to={'/products/all/puma'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Puma</li>
                    </Link>
                    <Link to={'/products/all/givova'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Givova</li>
                    </Link>
                </ul>
            </div>
            <div className='flex flex-col m-auto mt-8'>
                <h2 className='font-bold text-lg text-sky-400'>Categorias</h2>
                <ul className='flex flex-col gap-3 px-8 mt-6'>
                    <Link to={'/products/camisetas/all'}>
                    <li className='text-base hover:text-sky-400 cursor-pointer'>Camisetas</li>
                    </Link>
                    <Link to={'/products/shorts/all'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Shorts</li>
                    </Link>
                    <Link to={'/products/pantalones/all'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Pantalones</li>
                    </Link>
                    <Link to={'/products/camperas/all'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Camperas</li>
                    </Link>
                    <Link to={'/products/buzos/all'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Buzos</li>
                    </Link>
                    <Link to={'/products/accesorios/all'}>
                    <li className='text-base hover:text-sky-400 ursor-pointer'>Accesorios</li>
                    </Link>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Nav