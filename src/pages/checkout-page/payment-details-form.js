import { useState } from "react";
import { BiSolidDownArrow, BiTransfer } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";

const payDetails = [
    {id:1, icon: <BsCreditCard2Back size={30} className="text-[#7EB693]" />, payment_type:"Debit Card", description:"Send funds securely from your bank accounts using your card details" },
    {id:1, icon: <BiTransfer size={30} className="text-[#7EB693]" />, payment_type:"Bank Transfer", description:"Send funds securely from your bank accounts by transfering to our account " },
    {id:1, icon: <FaMoneyBillWave size={30} className="text-[#7EB693]" />, payment_type:"Pay on Delivery", description:"you can pay our delivery Agents when you get your orders" },
]
const PaymentDetailsForm = () => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const handleShow = ()=>{
        setShowPaymentForm(!showPaymentForm)
    }

    return ( 
        <div className="my-5 ">
            <div className="flex justify-between text-current mb-3">
                <h2 className="text-sm sm:text-lg ">2. Payment Details</h2>
                <div className="flex items-center text-sm gap-2 cursor-pointer ">
                    <p>English</p>
                    <BiSolidDownArrow size={12} />
                </div>
            </div>

            <div>
                <h2 className="text-sm text-current">Select payment method</h2>
                {payDetails.map((item) =>(
                <div key={item.id}>
                    <div onClick={handleShow} className="flex gap-3 border rounded-md my-2 p-2 cursor-pointer">
                        {item.icon}
                        <div className="text-current">
                            <p className="text-sm">{item.payment_type}</p>
                            <p className="text-xs">{item.description}</p>
                        </div>

                    </div>

                    {showPaymentForm &&
                    <form>
                        <div className="flex">
                            <input 
                                type="number"
                                name="card number"
                                placeholder="Card Number"
                                className=""
                            />
                            <input 
                                type="number"
                                name="card number"
                                placeholder="Card Number"
                                className=""
                            />
                        </div>
                    </form>
                    }
                </div>
                ))}

                
            </div>
        </div>
     );
}
 
export default PaymentDetailsForm;