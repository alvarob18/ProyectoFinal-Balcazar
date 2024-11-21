import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.id === item.id && i.parentId === item.parentId
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id && i.parentId === item.parentId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1, parentId: item.parentId }];
    });
  };

  const updateQuantity = (itemId, quantity, parentId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.parentId === parentId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (itemId, parentId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === itemId && item.parentId === parentId)
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};