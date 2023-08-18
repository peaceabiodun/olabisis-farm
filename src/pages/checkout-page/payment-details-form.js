import { useState } from "react";
import { BiSolidDownArrow, BiTransfer } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";




const PaymentDetailsForm = () => {
    
    const payDetails = [
        {
            id:1, 
            icon: <BsCreditCard2Back size={30} className="text-[#7EB693]" />, 
            payment_type:"Debit Card", 
            description:"Send funds securely from your bank accounts using your card details", 
            onClick: ()=> setActive("card")
        },
        {
            id:2, 
            icon: <BiTransfer size={30} className="text-[#7EB693]" />, 
            payment_type:"Bank Transfer", 
            description:"Send funds securely from your bank accounts by transfering to our account ", 
            onClick: ()=> setActive("transfer")
        },
        {
            id:3, 
            icon: <FaMoneyBillWave size={30} className="text-[#7EB693]" />, 
            payment_type:"Pay on Delivery", 
            description:"you can pay our delivery Agents when you get your orders", 
            onClick: ()=> setActive("delivery")
        },
    ];

    
    const [active, setActive] = useState(null);  
    const [index, setIndex] = useState(null);
    const [cvvValue, setCvvValue] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleChangeDate =(e)=>{
        const selectedDate = e.target.value;
        const dateParts = selectedDate.split('-');
        const year = dateParts[0].slice(2);
        const month = dateParts[1]; 
        const formattedDate = `${month}/${year}`;
        setExpiryDate(formattedDate);
    }

    const handleCvvChange =(e)=>{
        const newCvvValue = e.target.value;
        if(newCvvValue.length <=3){
            setCvvValue(newCvvValue)
        }
    };

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
                <h2 className="text-xs sm:text-sm text-current">Select payment method</h2>

                {payDetails.map((item) =>(
                <div 
                    key={item.id} 
                    onClick={()=> {item.onClick()
                    setIndex(item.id)}
                    }>
                    <div  className="flex gap-3 border rounded-md my-2 p-2 cursor-pointer">
                        {item.icon}
                        <div className="text-current">
                            <p className="text-xs sm:text-sm">{item.payment_type}</p>
                            <p className="text-[10px] sm:text-xs">{item.description}</p>
                        </div>

                    </div>

                   {index === item.id ? 
                    <>
                        {active === "card" ? 
                            <form className="w-full xs:w-[80%] my-6 space-y-3 text-[10px] sm:text-xs pl-4">
                                <input 
                                    type="text"
                                    name="card-number"
                                    placeholder="Card Number"
                                    className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm shadow-md"             
                                />

                                <div className="flex gap-3 w-full">
                                    <input 
                                        type="month"
                                        name="expiry-date"
                                        placeholder="Expiry Date"
                                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm shadow-md"
                                    />
                                    <input 
                                        type="text"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={cvvValue}
                                        onChange={handleCvvChange}
                                        maxLength={3}
                                        className="w-full h-[35px] border outline-none text-[#b1b1af] p-2 rounded-sm shadow-md"
                                    />
                                </div>

                                <button className="bg-current h-[35px] px-2 rounded-sm text-[#ffffff]">
                                    Confirm Payment
                                </button>
                            </form> 
                        : 
                        active === "transfer" ? 
                            <div className="my-6 space-y-3 text-[10px] sm:text-xs text-[#b1b1af] ml-4">
                                <div className="flex gap-2">
                                    <p>Bank Name:</p>
                                    <p className="text-current">UBA</p>
                                </div>
                                <div className="flex gap-2">
                                    <p>Account Name:</p>
                                    <p className="text-current">Olabisi's Group of Farms</p>
                                </div>
                                <div className="flex gap-2">
                                    <p>Account Number:</p>
                                    <p className="text-current">2133455829</p>
                                </div>

                               
                                <p className="font-[300] text-current">click to confirm payment when transfer has been made</p>
                                <button className="bg-current h-[35px] px-2 rounded-sm text-[#ffffff] ">
                                    Confirm Payment
                                </button>
                            </div> 
                        : 
                            <div className="my-6 text-[10px] sm:text-xs text-[#b1b1af] ml-4 max-w-[400px] space-y-3">
                                <p> Note: This payment method is only availabele for purchases above 5,000 naira. If you are paying of cash to any of our delivery agents, ensure you sign the cash agrrement document before handing over the cash to our delivery agent. 
                                </p>
                                <button className="bg-current h-[35px] px-2 rounded-sm text-[#ffffff] ">
                                    I am paying on Delivery
                                </button>
                            </div> 
                            
                        }

                    </> : null
                    }
                </div>
                ))}

                    
            </div>
        </div>
     );
}
 
export default PaymentDetailsForm;


//     {showDetails === payDetails[1].payment_type && 
    
//     }