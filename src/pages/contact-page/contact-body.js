import Image9 from "assets/images/img9.jpg";
import Image10 from "assets/images/img10.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const ContactBody = () => {
    return ( 
        <div>
            <div className="relative flex items-center justify-center">
                <img src={Image9} alt="" />

                <div className="absolute text-sm xs:text-lg sm:text-2xl font-bold text-current">
                    <p>Contact Us Today</p>
                </div>
            </div>

            <div className="flex p-5 sm:p-10 w-full justify-center items-center gap-5 ">
                <div>
                    <img src={Image10} alt="fruits" className="hidden sm:flex max-w-[300px] max-h-[300px] rounded-md" />
                </div>
                <div className="flex flex-col text-current">
                    <h2 className=" text-sm md:text-lg">We'd love to talk about how we can work together.</h2>
                    <div className="space-y-3 my-3">
                        <div className="flex gap-2 text-sm">
                            <BiSolidPhoneCall size={20} className="text-[#EFD372]"/>
                            <p>+2348188567422</p>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <FaLocationDot size={20} className="text-[#EFD372]"/>
                            <p className="">88 road, Ralph street, Ilorin, Kwara state.</p>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <CiMail size={20} className="text-[#EFD372]"/>
                            <p>abiodunpeace8@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactBody;