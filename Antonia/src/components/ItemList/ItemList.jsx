import React from 'react'
import Item from '../Item/Item'
import "./ItemList.modules.css"


export default function ItemList({products}) {
  return (
    <div className='ListGroup'>
        {products.map(prod=> <Item key={prod.id}{...prod}/>)}
    </div>
  )
}
