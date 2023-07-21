import {MdClose} from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "context/cart-context";

const CartModal = ({onClose}) => {

    const {cartItems} = useContext(CartContext);
    const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return ( 
        <div className=''>
            <div id="scroll" className='shadow-lg absolute top-0 right-0 w-[200px] h-full sm:w-[350px] overflow-auto bg-white'>
                <div className="flex justify-between items-center border-b p-3 bg-current text-white h-[56px] sm:h-[80px]">
                    <div></div>
                    <h2 className="text-sm sm:text-lg">Added to cart</h2>
                    <div className='p-1 sm:p-2 rounded-full bg-[#D4D4D4]'>
                        <MdClose onClick={onClose} className="cursor-pointer text-current " />
                    </div>  
                </div>

                {cartItems.map((items, index) => (
                    <div key={index}>
                        <div className="flex justify-center p-3 border-b gap-4">
                            <img src={items.image} alt="/" className='rounded-[10px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]' />
                            <div className="text-current ">
                                <p className="text-sm">{items.name}</p>
                                <p className="text-xs text-[#a0a096]">quantity: {items.quantity}</p>
                                <p className="text-xs text-[#a0a096]">size: {items.size.label}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}

                <div className="flex justify-center my-3 gap-1 text-current text-sm">
                    <p>Cart Subtotal ({totalItemsInCart} item{totalItemsInCart !== 1 ? 's' : ''}):</p>
                    <p>30,000</p>
                </div>

                <div className="flex flex-col xs:flex-row gap-2 justify-center mx-3 mb-3">
                    <button className="border rounded-md text-xs text-current p-2">
                        Remove from Cart
                    </button>
                    <button className="bg-current rounded-md text-xs text-white p-2">
                        Proceed to checkout ({totalItemsInCart} item{totalItemsInCart !== 1 ? 's' : ''})
                    </button>
                </div>
            </div>

        </div>
     );
}
 
export default CartModal;