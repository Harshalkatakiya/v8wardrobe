'use client';
import Toast from '@/utils/react-toastify/toast';
import { useUserData } from "@/utils/useContext";
import Image from 'next/image';

const Cart = () => {
    const { cartItems, setCartItems, clearCart } = useUserData();
    const shippingCharge = 49.99;
    const handleDecrement = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    const handleIncrement = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const handleRemove = (itemId) => { setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId)); };
    const calculateSubtotal = () => { return cartItems.reduce((total, item) => total + parseInt(item.price) * item.quantity, 0); };
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal === 0 ? 0 : subtotal + shippingCharge; // Adding shipping charge if subtotal is not zero
    };
    const formatCurrency = (value) => {
        const formatter = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", });
        return formatter.format(value);
    };
    return (
        <>
            <div className="min-h-screen bg-gray-100 pt-8">
                <div className="container mx-auto max-w-5xl">
                    <h1 className="mb-8 text-center text-3xl font-bold">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/3">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row mb-8 bg-white rounded-lg overflow-hidden shadow-md">
                                    <Image height={192} width={128} src={item.imgSrc} alt={item.title} className="w-full md:w-40 h-48 object-cover" />
                                    <div className="flex flex-col justify-between md:ml-4 p-6 md:w-full">
                                        <div className="mb-4">
                                            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-4">
                                                <button className="text-blue-500" onClick={() => handleDecrement(item.id)}>-
                                                </button>
                                                <span className="text-xl">{item.quantity}</span>
                                                <button className="text-blue-500" onClick={() => handleIncrement(item.id)}>+
                                                </button>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <p className="text-lg">{formatCurrency(parseInt(item.price))}</p>
                                                <button onClick={() => handleRemove(item.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-red-500 cursor-pointer" >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0">
                            <div className="rounded-lg border bg-white p-6 shadow-md">
                                <div className="mb-4 flex justify-between">
                                    <p className="text-gray-700">Subtotal</p>
                                    <p className="text-gray-700">{formatCurrency(calculateSubtotal())}</p>
                                </div>
                                {calculateSubtotal() > 0 && (
                                    <div className="flex justify-between mb-4">
                                        <p className="text-gray-700">Shipping</p>
                                        <p className="text-gray-700">₹{shippingCharge}</p>
                                    </div>
                                )}
                                <hr className="my-4" />
                                <div className="flex justify-between">
                                    <p className="text-lg font-bold">Total</p>
                                    <div>
                                        <p className="mb-1 text-lg font-bold">{formatCurrency(calculateTotal())}</p>
                                        <p className="text-sm text-gray-700">including GST</p>
                                    </div>
                                </div>
                                <button className="mt-4 w-full rounded-md bg-red-500 py-2 font-medium text-white hover:bg-red-600" onClick={clearCart}>Clear Cart</button>
                                <button className="mt-4 w-full rounded-md bg-blue-500 py-2 font-medium text-blue-50 hover:bg-blue-600" onClick={() => Toast("Thank You for Purchasing an Order", "success")}>Check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;