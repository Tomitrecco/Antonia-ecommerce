import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.modules.css';


const CartItem = ({ id, name, quantity, price, img }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="CartItem">
      <h3>{name}</h3>
      <div className="CartItemDetails">
        
        <p>Cantidad: {quantity}</p>
        <p>Precio por unidad: ${price}</p>
        
      </div>
      <button onClick={handleRemoveItem} className='buttondel'>Eliminar</button>
    </div>
  );
}

export default CartItem;