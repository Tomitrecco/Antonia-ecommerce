// Checkout.jsx

import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection, doc, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase/client';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const orderData = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const productsRef = collection(db, 'products');
      const outOfStock = [];

      cart.forEach(async (cartItem) => {
        const productDoc = doc(productsRef, cartItem.id);
        const productSnapshot = await productDoc.get();

        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          const stockDb = productData.stockDb;

          if (stockDb >= cartItem.quantity) {
            batch.update(productDoc, { stock: stockDb - cartItem.quantity });
          } else {
            outOfStock.push({ id: cartItem.id, ...productData });
          }
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = await addDoc(collection(db, 'orders'), orderData);

        setOrderId(orderRef.id);
        clearCart();
      } else {
        console.error('Hay productos fuera de stock.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
