import { ReactComponent as Logo } from "assets/images/logo.svg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return ( 
        <div >
            <div className='grid grid-cols-3'>
                <div>
                    <h2>Contact Us</h2>
                    <div>
                        <p>Email</p>
                        <p>abiodunpeace8@gmail.com</p>
                    </div>
                    <div>
                        <p>Phone</p>
                        <p>+2348188567422</p>
                    </div>
                    <div>
                        <p>Address</p>
                        <p>88 road, borklyn street, USA</p>
                    </div>
                </div>

                <div className='border-x'>
                    <Logo />
                    <p>Get the best farm produce in your neighbourhood</p>
                    <div className='flex'>
                        <div>
                            <BsInstagram />
                        </div>
                        <div>
                            <BsFacebook />
                        </div>
                        <div>
                            <BsTwitter />
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Utility Pages</h2>
                    <div>
                        <p>Licences</p>
                        <p>Farms</p>
                        <p>Logistics</p>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center border-t text-xs font-sans p-2'>
                <div className='border-r flex'>
                    <p className='text-[#525C60] mr-1'>Copyright ©</p>
                    <p className='font-medium mr-2'>Olabisi's farm</p>
                </div>
                <div className='border-r flex ml-2'>
                    <p  className='text-[#525C60] mr-1'>Designed by</p>
                    <p className='font-medium mr-2'>VictorFlow Templates</p>
                </div>
                <div className='flex ml-2'>
                    <p className='text-[#525C60] mr-1'>Implemented by</p>
                    <p  className='font-medium' >Peace Abiodun</p>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;