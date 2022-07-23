import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../firebase/firebase.js';
import Item from '../../components/Item/Item.jsx';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { clothing_type } = useParams()

    
    useEffect(() => {
            const fetchData = async () => {
                const db = getFirestore(app)
                const querySnapshot = await getDocs(collection(db, "products"))
                let listProducts = []
                querySnapshot.forEach((doc) => {
                    listProducts.push({id: doc.id, ...doc.data()})
                })
                if (clothing_type === undefined) {
                    setProducts(listProducts)
                } else {
                    const filter = listProducts.filter((item) => item.clothing_type === clothing_type)
                    setProducts(filter)
                }
            }
            fetchData()
        }, [clothing_type])

        console.log(clothing_type)
  return (
    <div className='min-h-screen w-full'>
        <div className='w-full sm:w-4/5 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 place-items-center mt-12 lg:gap-10'>
            {
                products.map((product) => {
                    return <Item product={product} key={product.id} />
                })
            }            
        </div>
    </div>
  )
}

export default ItemListContainer