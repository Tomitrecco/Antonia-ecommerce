import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"



export default function ItemDetail({id, name, price, stock ,description ,category, img}) {
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
            <ItemCount initial={1} stock={stock} onadd={(quantity)=>console.log("Cantidad Agregada",quantity)}/>
        </footer>
        
    </article>
  )
}
