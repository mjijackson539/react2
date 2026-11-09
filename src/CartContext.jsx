import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((previousCart) => [...previousCart, item]);
  }

  function removeFromCart(index) {
    setCart((previousCart) =>
      previousCart.filter((item, itemIndex) => itemIndex !== index),
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
