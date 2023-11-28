import cart from './assets/cart.svg'
export default function CartWidget() {
  return (
    <div className='CartWidget'>
    <img className='cart' src={cart} alt='carrito'/>
    0
    </div>

  )
}
