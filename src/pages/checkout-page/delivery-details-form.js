import { useContext } from "react"; 
import { CartContext } from "context/cart-context";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsArrowRightShort} from "react-icons/bs";


const DeliveryDetailsForm = ({onNext}) => {
    const {cartItems} = useContext(CartContext);

    const handleNextTab = (e) => {
        e.preventDefault();
        onNext();
    };
    return ( 
        <div className="my-5 ">
            <div className="flex justify-between text-current mb-3">
                <h2 className="text-sm sm:text-lg ">1. Delivery Details</h2>
                <div className="flex items-center text-sm gap-2 cursor-pointer ">
                    <p>English</p>
                    <BiSolidDownArrow size={12} />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-6">
                <form className="space-y-4 text-xs w-full">
                    <div className="w-full flex gap-4 ">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        required
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        required
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    />
                    </div>

                    <div className="w-full flex gap-4 ">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    />
                    <input
                        type="text"
                        name="phonenumber"
                        placeholder="Phone Number"
                        required
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    />
                    </div>

                    <input
                        type="text"
                        name="address"
                        placeholder="Delivery Address 1"
                        required
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Delivery Address 2 (optional)"
                        required
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    />
                    
                    <div className="w-full flex flex-col sm:flex-row gap-4 ">
                    <input
                        type="text"
                        name="postalcode"
                        placeholder="Postal Code (we do not ship to P.O. boxes)"
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    /> 
                    <input
                        type="text"
                        name="City"
                        placeholder="City"
                        required
                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm"
                    />
                    </div>

                    <div className=" text-current">
                        <h3 className="mb-4">Select Delivery Method</h3>

                        <div className="mb-2">
                        <input 
                            type="radio"
                            name="standard"
                            className="accent-current"
                        />
                        <label> Standard Delivery (this takes 2-6 days)</label>
                        </div>

                        <div>
                        <input 
                            type="radio"
                            name="express"
                            className="accent-current"
                        />
                        <label> Express Delivery (this takes 1-2 days)</label>
                        </div>
                    </div>
                </form>
                <div className="border rounded-md px-3 pb-3 sm:min-w-[40%]">
                    {cartItems.map((item, index) =>(
                    <div key={index} className="flex justify-between items-center text-xs mt-3">
                        <div className="flex gap-2">
                            <img src={item.image} alt="" className="w-[70px] h-[60px] border rounded-md" />
                            <div className=" flex flex-col gap-2 justify-center ">
                                <p className="text-current">{item.name}</p>
                                <p className="text-[#b1b1af]">{item.quantity} ({item.size.label})</p>
                            </div>
                        </div>
                        <p className="text-current">{item.amount}</p>
                    </div>
                    ))}
                    <div className="text-xs mt-3">
                        <div className="flex justify-between py-2 border-y">
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
                    </div>
                </div>
            </div>
            
            <button onClick={handleNextTab} className="flex items-center text-xs bg-current text-white my-3 py-1 px-2 rounded-md ">
                Continue 
                <BsArrowRightShort />
            </button>
        </div>
     );
}
 
export default DeliveryDetailsForm;