import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const UseCartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty) => {
    if (isInTheCart(product.id)) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            item.qty += qty;
            item.total += product.price * qty;
          }

          return item;
        })
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          qty: qty,
          total: product.price * qty,
        },
      ]);
    }
  };

  const isInTheCart = (productID) => {
    return cart.find((item) => item.id === productID);
  };

  const removeItem = (productID) => {
    setCart(cart.filter((item) => item.id !== productID));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPriceCart = () => {
    return cart.reduce((acum, value) => acum + value.price, 0);
  };

  const productQuantity = () => {
    return cart.reduce((acum, value) => acum + value.qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalPriceCart,
        productQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
