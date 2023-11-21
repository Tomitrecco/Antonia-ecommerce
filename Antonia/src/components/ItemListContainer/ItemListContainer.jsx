import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {getProducts} from "../../asyncMock"

export default function ItemListContainer({greeting}) {
  const [products, setProducts]=useState([])

  useEffect(()=>{
    getProducts()
    .then(response=>{
      setProducts(response)
    })
    .catch(error=>{
      console.error(error);
    })
  }, [])
  
  
  
  return (
    <div>
        <h2>{greeting}</h2>
        <ItemList products={products}/>



    </div>
  )
}
