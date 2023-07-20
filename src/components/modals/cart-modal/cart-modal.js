import {MdClose} from "react-icons/md";
import Tomato1  from "assets/images/tomato1.jpg";

const CartModal = ({onClose}) => {
    return ( 
        <div className='w-screen h-screen fixed z-30 flex sm:bg-[rgba(49,49,49,0.8)] top-0 sm:justify-center sm:items-center '>
            <div className='bg-[#ffffff] border sm:rounded-[12px] w-full h-full fixed sm:w-[70%] md:w-[50%] sm:h-[65%]'>

                <div className="flex justify-between border-b p-3 text-current">
                    <div></div>
                    <h2 className="text-sm sm:text-lg">Chicken has been Added to cart</h2>
                    <div className='p-1 sm:p-2 rounded-full bg-[#e2e2dd]'>
                        <MdClose onClick={onClose} className="cursor-pointer  " />
                    </div>  
                </div>
                <div className="flex justify-center m-3 ">
                    <img src={Tomato1} alt="/" className='rounded-[10px]' />
                </div>

                <div className="flex justify-center mb-3 gap-1 text-current text-sm">
                    <p>Cart Subtotal (1 item):</p>
                    <p>30,000</p>
                </div>

                <div className="flex flex-col xs:flex-row gap-2 justify-center mx-3">
                    <button className="border rounded-md text-xs text-current p-2">
                        Remove from Cart
                    </button>
                    <button className="bg-current rounded-md text-xs text-white p-2">
                        Proceed to checkout (1 item)
                    </button>
                </div>

            </div>

        </div>
     );
}
 
export default CartModal;