import React, {useState} from 'react'

const ItemDetail = ({item}) => {

    const [counter, setCounter] = useState(1)

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
    <div className='flex flex-col lg:grid sm:grid-cols-2 w-4/5 mx-auto mt-20'>
        <div className='w-full mx-auto'>
            <img src={item.image} alt={item.name} />
        </div>
        <div className='w-full sm:w-4/5 mx-auto flex flex-col justify-evenly'>
            <div className='flex flex-col gap-3'>
            <h3 className='italic font-medium text-sm'>{item.name.toUpperCase()}</h3>
            <p className='font-semibold'>$<span>{item.price * counter}</span></p>
            </div>
        <div className='flex gap-3 justify-center mt-10 w-full mx-auto flex-wrap'>
            {
                item.clothing_size.map((size) => {
                    return <button className='w-12 px-3 border-sky-300 border-2 text-sm rounded-lg'>{size}</button>
                })
            }
        </div>
        <div className='flex gap-4 justify-center items-center mt-12'>
            <button className='border-gray-300 border-2 rounded-md px-3' onClick={subtractCounter}>-</button>
            <p>{counter}</p>
            <button className='border-gray-300 border-2 rounded-md px-3' onClick={addCounter}>+</button>
        </div>
        <div className='flex justify-center mt-8'>
            <button className='border-sky-400 border-2 rounded-md w-full py-1 text-sm hover:border-sky-600'>Comprar</button>
        </div>
        </div>
    </div>
  )
}

export default ItemDetail