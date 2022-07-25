import React, { useContext, useState } from 'react'
import { CartContext } from '../../cartContext/UseCartContext'

const ItemDetail = ({item}) => {

    const [counter, setCounter] = useState(1)
    const { addToCart } = useContext(CartContext)


    const subtractCounter = () => {
        if (counter > 1 ) {
            setCounter(counter - 1)
        }
    }

    const addCounter = () => {
        if (counter < item.stock) {
            setCounter(counter + 1)
        }
    }




  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2 w-4/5 mx-auto mt-20'>
        <div className='w-full mx-auto'>
            <img src={item.image} alt={item.name} className='mx-auto'/>
        </div>
        <div className='w-full sm:w-4/5 mx-auto flex flex-col justify-evenly mt-6 gap-7'>
            <div className='flex flex-col gap-3'>
            <h3 className='italic font-normal text-sm lg:text-xl'>{item.name.toUpperCase()}</h3>
            <p className='font-semibold text-lg lg:text-2xl'>$<span>{item.price * counter}</span></p>
            </div>
        <div className='flex gap-4 justify-center items-center mt-12'>
            <button className='border-black border-2 rounded-sm px-3 bg-black text-white' onClick={() => subtractCounter()}>-</button>
            <p>{counter}</p>
            <button className='border-black border-2 rounded-sm px-3 bg-black text-white' onClick={() => addCounter()}>+</button>
        </div>
        <div className='flex justify-center mt-8'>
            <button className='bg-sky-400 border-2 rounded-md w-full text-sm hover:bg-sky-600 text-white py-2' onClick={() => addToCart(item, counter)}>COMPRAR</button>
        </div>
        </div>
    </div>
  )
}

export default ItemDetail