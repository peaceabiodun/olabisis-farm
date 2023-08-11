import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import DeliveryDetailsForm from "./delivery-details-form";
import PaymentDetailsForm from "./payment-details-form";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const tabs = [
    {id:1, tab: "Delivery Details"},
    {id:2, tab: "Payment Details"}
];

const CheckoutBody = () => {
    const [CheckoutTabs, setCheckoutTabs] = useState(tabs[0].tab);

    const handleTabChange = (tabId) => {
        setCheckoutTabs(tabId);
    };
    return ( 
        <div className="p-5 md:p-10">
            <div className="flex flex-col">
                <h1 className="text-xl text-current font-bold">Checkout</h1>

                <div className="flex justify-center mt-3">
                    {tabs.map((item) =>(
                    <div key={item.id} className="flex" >
                        <div onClick={() =>{setCheckoutTabs(item.tab)}} className={`flex flex-col items-center text-xs sm:text-sm cursor-pointer ${item.tab === CheckoutTabs? 'text-[#ebc950]' : 'text-[#b1b1af]'} `}>
                            <AiFillCheckCircle className='' />
                            <p className="whitespace-nowrap">{item.tab}</p>
                        </div>

                        {item.id === 1 && <div className="border w-[80px] h-[1px] bg-[#e9e9e7]"></div>}

                    </div>
                    ))}
                </div>
                
                <Link to={'/cart'} className="flex gap-2 text-sm text-current items-center mt-3 cursor-pointer ">
                    <MdArrowBackIosNew />
                    <p>Back to Cart</p>
                </Link>

                <div>  
                    {CheckoutTabs === tabs[0].tab &&      
                        <DeliveryDetailsForm onNext={() => handleTabChange(tabs[1].id)} />
                    }

                    {CheckoutTabs === tabs[1].tab &&      
                        <PaymentDetailsForm />
                    }
                </div>
            </div>
        </div>
     );
}
 
export default CheckoutBody;