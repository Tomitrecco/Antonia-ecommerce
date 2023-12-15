import React, { createContext, useState } from 'react'


export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0, 
  });
  
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    console.log('Agregando item:', item, 'Cantidad:', quantity);
    if (!isInCart(item.id)) {
      setCart(prev => {
        const updatedCart = [...prev, { ...item, quantity }];
        setTotalQuantity(prevTotalQuantity => prevTotalQuantity + quantity);
        updateTotal(updatedCart);
        return updatedCart;
      });
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    setCart(prev => {
      const removedItem = prev.find(item => item.id === itemId);
      const updatedCart = prev.filter(item => item.id !== itemId);
      setTotalQuantity(prevTotalQuantity => prevTotalQuantity - removedItem.quantity);
      updateTotal(updatedCart);
      return updatedCart;
    });
  };

  const updateTotal = (updatedCart) => {
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};







  