import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



export default function ItemDetail({id, name, price, stock ,description ,category, img}) {
    const [quantityAdded,setQuantityAdded]=useState(0)
    const {addItem}=useContext(CartContext)
    const handleOnAdd=(quantity)=>{
        setQuantityAdded(quantity)

        const item={
            id, name, price
        }
        addItem(item,quantity)
    }
    
  
    return (
    
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className='ItemImg' />
        </picture>
        <section>
            <p className='Category'>Categoria: {category}</p>
            <p className='Description'>Descripcion: {description}</p>
            <p className='Info'>Precio= ${price}</p> 
            <p className='Info'>Cantidad Disponible= {stock}</p>             
        </section>
        <footer className='ItemFooter'>
            {
                quantityAdded> 0?(
                    <Link to="/cart" className='Option'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onadd={handleOnAdd}/>

            )}
            
        </footer>
        
    </article>
  )
}
