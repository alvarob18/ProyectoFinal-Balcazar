import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
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
                  onClick={() => updateQuantity(item.id, item.quantity - 1, item.parentId)}
                  className="btn-cart"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1, item.parentId)}
                  className="btn-cart"
                  disabled={item.quantity >= item.stock}
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