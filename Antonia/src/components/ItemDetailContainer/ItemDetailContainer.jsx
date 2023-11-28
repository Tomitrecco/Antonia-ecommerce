import React, { useEffect, useState } from 'react'
import {getProductById} from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.modules.css"
import {useParams} from 'react-router-dom'


export default function ItemDetailContainer() {
    const [product, setProduct]= useState(null)
    const {itemId}= useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then(response=>{
                console.log('Producto obtenido:', response);
                setProduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
        
    },[itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
            
        </div>
    )   
  
}
