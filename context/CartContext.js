import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((item) => item.name === newItem.name);
            if (itemExists) {
                return prevItems.map((item) =>
                    item.name === newItem.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...newItem, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemName) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.name !== itemName)
        );
    };

    const totalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, totalAmount, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};