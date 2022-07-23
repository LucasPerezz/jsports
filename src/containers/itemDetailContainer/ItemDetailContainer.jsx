import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from '../../firebase/firebase';
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app)
      const querySnapshot = await getDocs(collection(db, "products"))
      let listProducts = []
      querySnapshot.forEach((doc) => {
          listProducts.push({id: doc.id, ...doc.data()})
      })

      setDetail(listProducts.filter((item) => item.id === id))
  }

    fetchData()
}, [id])


  return (
    <div className='min-h-screen w-4/5 sm:w-3/4 max-w-screen-lg mx-auto flex flex-col justify-center'>
        {
          detail.map((item) => {
            return <ItemDetail item={item} key={id} />
          })
        }
    </div>
  )
}

export default ItemDetailContainer