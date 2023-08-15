import { useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import NumberPicker from "react-widgets/NumberPicker";
import { CartContext } from "context/cart-context";
import NavbarHeader from "components/navbar-header/navbarHeader";
import Footer from "components/page-footer/footer";
import {BsTrash3, BsCart3,  } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";



const Cart = () => {

    const navigate = useNavigate();
    const {cartItems, updateCartItemQuantity, removeItemFromCart} = useContext(CartContext);
    const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return ( 
        <div className=''>
            <NavbarHeader />
                <div className="p-5 md:p-10">
                    <div>
                        <h1 className="text-lg sm:text-xl text-current font-bold">Shopping Cart</h1>
                        <p className="text-[#525C60] text-xs">There are {totalItemsInCart} items in your shopping cart</p>
                    </div>

                    {cartItems.length === 0? 
                    <div className="w-full h-[50vh] flex items-center justify-center text-current text-xl"> 
                        Shopping Cart is Empty 
                    </div>
                    :
                    <div className="flex flex-col sm:flex-row w-full gap-4">
                        <div className="my-5 sm:w-[70%] h-full border rounded-md">
                            {cartItems.map((items, index) => (
                            <div key={index} className="flex justify-between border-b p-3">
                                <div className="flex gap-3">
                                    <img src={items.image} alt="/" className="w-[75px] h-[75px] xs:w-[100px] xs:h-[100px] border rounded-[8px]" />
                                    <div className="text-current">
                                        <p className="text-xs sm:text-sm">{items.name}</p>
                                        <NumberPicker 
                                            min={1}
                                            value={items.quantity}
                                            onChange={(newQuantity)=> updateCartItemQuantity(items.id, newQuantity)}
                                            className='mt-1 w-[90px] text-[10px] sm:text-xs mb-1'
                                        />
                                        <p className="text-[10px] sm:text-xs text-[#92a1a7]">{items.size.label}</p>
                                        <p className="text-xs sm:text-sm">{items.amount}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <BsTrash3 
                                        onClick={()=> removeItemFromCart(items.id)} 
                                        className="text-current cursor-pointer "
                                        size={18} 
                                    />
                                </div>
                            </div>
                            ))}

                        </div>

                        <div className="border my-5 rounded-md p-3 sm:w-[40%] h-[250px] text-xs sm:text-sm">
                            <div className="flex justify-between py-2 border-b">
                                <p className="text-current ">Subtotal:</p>
                                <p className="text-[#8d9ba0]">$00.00</p>
                            </div>

                            <div className="flex justify-between py-2 border-b">
                                <p className="text-current ">Discount:</p>
                                <p className="text-[#8d9ba0]">$00.00</p>
                            </div>

                            <div className="flex justify-between py-2 border-b">
                                <p className="text-current ">Shipping fee:</p>
                                <p className="text-[#8d9ba0]">$00.00</p>
                            </div>

                            <div className="flex justify-between py-2 ">
                                <p className="text-current ">Total:</p>
                                <p className="text-[#8d9ba0]">$00.00</p>
                            </div>
                                
                            <button onClick={()=>(navigate("/checkout"))} className="bg-current flex text-white text-xs sm:text-sm w-full py-1 px-2 rounded-md mt-2 justify-center">
                                Checkout
                                <BsCart3 className="ml-1" />
                            </button>
                        </div>

                    </div>
                     }
                    <button 
                        onClick={()=> navigate('/shop')} className="bg-[#EFD372] text-sm text-current py-1 px-2 rounded-md mt-5 flex justify-center items-center">
                        <MdArrowBackIosNew />
                        Back to shopping
                    </button>
                </div>
            <Footer />
            
        </div>
     );
}
 
export default Cart;