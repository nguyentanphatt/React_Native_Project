import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        return {}
    };

    const removeFromCart = (itemName) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.name !== itemName)
        );
    };
    const removeAllCart = () => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.name === 'trontronvien')
        );
    };

    const totalAmount = () => {
        console.log(cartItems)
        if(cartItems === undefined) {
            return 0
        }

        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const calculateTax = () => {
        console.log(cartItems)
        if(cartItems === undefined) {
            return 0
        }

        let total = (cartItems.reduce((total, item) => total + item.price * item.quantity, 0))*0.1
        return Math.round(total);
    }
    const countProducts = () => {
        return cartItems.length;
    }
    const totalPlusTaxes = () => {
        return Math.round(totalAmount() + calculateTax())
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, totalAmount, removeFromCart, calculateTax, totalPlusTaxes, removeAllCart, countProducts }}>
            {children}
        </CartContext.Provider>
    );
};