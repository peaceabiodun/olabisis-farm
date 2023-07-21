import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider =({children})=> {
    const [cartItems, setCartItems] = useState([]);

    const addToCart =(productToAdd)=>{
         //Check if the item already exists in the cart
        const itemIndex= cartItems.findIndex((item) => item.id === productToAdd.id);
       
        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity += productToAdd.quantity;
            setCartItems(updatedCartItems)
        }else{
            setCartItems((prevItems) => [...prevItems, productToAdd]);
        }
    };

    return(
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;