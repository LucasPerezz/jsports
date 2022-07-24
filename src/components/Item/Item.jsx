import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product, id}) => {
  return (
    <div className='bg-white w-full h-80 p-2 lg:h-96 lg:p-3 flex flex-col justify-around shadow' key={id}>
    <Link to={`/products/${product.clothing_type}/${product.brand}/${product.id}`}>
        <img src={product.image} alt="" className='w-2/3 mx-auto'/>
                <div className='flex flex-col w-3/4 mx-auto gap-5 mt-10'>
                    <h3 className='font-medium text-xs lg:text-lg'>{product.name.toUpperCase()}</h3>
                    <p className='font-bold text-sm lg:text-xl text-sky-500'><span>$</span>{product.price}</p>
                </div>
    </Link>
    </div>
  )
}

export default Item