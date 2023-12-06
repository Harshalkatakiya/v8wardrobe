'use client';
import { createContext, useContext } from 'react';
import useLocalStorage from "use-local-storage";
import Toast from './react-toastify/toast';
const UserContext = createContext();
export const useUserData = () => useContext(UserContext);

export function UserProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        Toast('Item Added Successfully', 'success');
    };
    const removeItemFromCart = (itemId) => { setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId)); };
    const clearCart = () => { setCartItems([]); };
    const cartItemsArray = Array.isArray(cartItems) ? cartItems : [];
    return (
        <UserContext.Provider value={{ cartItems: cartItemsArray, setCartItems, addItemToCart, removeItemFromCart, clearCart }}>
            {children}
        </UserContext.Provider>
    );
}