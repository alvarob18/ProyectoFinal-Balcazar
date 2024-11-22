import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeItem, addToCart }) => {
  const handleIncrement = (item, parentId) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (cartItem) {
      if (cartItem.quantity < item.stock) {
        updateQuantity(item.id, cartItem.quantity + 1, parentId);
      } else {
        console.warn('No puedes agregar más de este producto: Stock limitado.');
      }
    } else {
      if (item.stock > 0) {
        addToCart({ ...item, quantity: 1, parentId });
      } else {
        console.warn('El producto está fuera de stock.');
      }
    }

    console.log('Stock disponible:', item.stock);
    console.log('Cantidad actual en carrito:', cartItem ? cartItem.quantity : 0);
  };

  const handleDecrement = (item, parentId) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (cartItem) {
      if (cartItem.quantity > 1) {
        updateQuantity(item.id, cartItem.quantity - 1, parentId);
      } else {
        console.warn('Cantidad mínima alcanzada. Removiendo ítem.');
        removeItem(item.id, parentId); // Elimina el ítem si la cantidad llega a 0
      }
    } else {
      console.warn('El producto no está en el carrito.');
    }

    console.log('Cantidad actual en carrito:', cartItem ? cartItem.quantity : 0);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={`../assets/images/${item.image}`} alt={item.alt} className="cart-item-image" />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">Precio: ${item.price}</p>
              <div className="cart-controls">
                <button
                  onClick={() => handleDecrement(item, item.parentId)}
                  className="btn-cart"
                >
                  -
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item, item.parentId)}
                  className="btn-cart"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id, item.parentId)}
                className="btn-cart-remove"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;