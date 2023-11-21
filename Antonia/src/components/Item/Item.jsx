import React from 'react'
import "./Item.modules.css"

export default function Item({id, name, img, price, stock}) {
  return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className='ItemImg' />
        </picture>
        <section>
            <p className='Info'>Precio= ${price}</p> 
            <p className='Info'>Cantidad Disponible= {stock}</p>             
        </section>
        <footer className='ItemFooter'>
        
        </footer>
    </article>
  )
}
