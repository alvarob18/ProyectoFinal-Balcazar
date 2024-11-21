import React from 'react';
import { useCart } from '../config/CartContext';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import BBDD from '../config/firebase'; 
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No hay productos en el carrito.',
      });
      return;
    }

    try {
      const orderData = {
        total: parseFloat(calculateTotal()),
        items: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        date: new Date().toISOString(),
      };

      const ordersCollection = collection(BBDD.db, 'orders');
      const orderDoc = await addDoc(ordersCollection, orderData);

      for (const item of cartItems) {
        const parentDocRef = doc(BBDD.db, 'indumentaria', item.parentId); 
        const itemRef = doc(parentDocRef, 'items', item.id); 

        const itemSnapshot = await getDoc(itemRef);
        if (!itemSnapshot.exists()) {
          console.error(`El ítem con ID ${item.id} no existe en la colección ${item.parentId}`);
          continue;
        }

        const currentStock = itemSnapshot.data().stock;
        await updateDoc(itemRef, {
          stock: currentStock - item.quantity,
        });
      }

      Swal.fire({
        icon: 'success',
        title: 'Compra realizada',
        text: `La orden ha sido generada con éxito. ID: ${orderDoc.id}`,
      });

      clearCart();
      navigate('/Indumentaria');

    } catch (error) {
      console.error('Error al procesar la orden:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al procesar la orden. Intente nuevamente.',
      });
    }
  };

  return (
    <div className="checkout-container">
      <h2>Resumen del Pedido</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={`../src/assets/images/${item.image}`} alt={item.alt} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <p>{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total a pagar: ${calculateTotal()}</h3>
          <button onClick={handleCheckout} className="btn btn-success">Confirmar Compra</button>
        </>
      )}
    </div>
  );
};

export default Checkout;