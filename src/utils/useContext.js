'use client';
import useLocalStorage from "use-local-storage";
import { createContext, useContext, useEffect, useState } from 'react';
import Toast from './react-toastify/toast';
const UserContext = createContext();
export const useUserData = () => useContext(UserContext);

export function UserProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage("cartItems", "");
    //useEffect(() => { localStorage.setItem('cartItems', JSON.stringify(cartItems)); }, [cartItems]);
    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        Toast('Item Added Successfully', 'success');
    };
    const removeItemFromCart = (itemId) => { setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId)); };
    const clearCart = () => { setCartItems([]); };
    return (
        <UserContext.Provider value={{ cartItems, setCartItems, addItemToCart, removeItemFromCart, clearCart }}>
            {children}
        </UserContext.Provider>
    );
}