import { useContext } from 'react'
import cart from './assets/cart.svg'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.modules.css'
export default function CartWidget() {
  const {totalQuantity}=useContext(CartContext)
  console.log('Total Quantity:', totalQuantity);
  return (
    <div className='CartButton'>
    <Link to='/cart' className='CartWidget' style={{display:'block'}}>
      <img className='Cartimg' src={cart} alt="cart" />
      {totalQuantity}
    </Link>
    </div> 

  )
}
