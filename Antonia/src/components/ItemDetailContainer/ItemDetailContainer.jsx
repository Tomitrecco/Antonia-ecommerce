import React, { useEffect, useState } from 'react'
import {getProductById} from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.modules.css"
import {useParams} from 'react-router-dom'
import { db } from '../../firebase/client'
import { doc, getDoc } from 'firebase/firestore'


export default function ItemDetailContainer() {
    const [product, setProduct]= useState(null)
    const {itemId}= useParams()

useEffect(() => {
    const fetchProduct = async () => {
        try {
        const productDoc = await getDoc(doc(db, 'products', itemId));
        if (productDoc.exists()) {
            const productData = productDoc.data();
            setProduct({ id: productDoc.id, ...productData });
        } else {
            console.error('No se encontró el producto con el ID:', itemId);
        }
        } catch (error) {
        console.error('Error obteniendo el producto:', error);
        }
    };
    
    fetchProduct();
}, [itemId]);
    
return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
            
    </div>
    )   
  
}

