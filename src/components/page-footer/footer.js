import { ReactComponent as LogoIcon } from "assets/icons/logo-icon.svg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";


const Footer = () => {

    return ( 
        <div >
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[#274C5B] text-[#f1f1fa] py-10 px-5 gap-8 sm:gap-4'>

                <div className='space-y-3 '>
                    <h2 className='text-[#7EB693] text-sm '>Contact Us</h2>
                    <div className="font-[300] text-xs">
                        <p className=''>Email</p>
                        <p className=''>abiodunpeace8@gmail.com</p>
                    </div>
                    <div className="font-[300] text-xs">
                        <p className=''>Phone</p>
                        <p className=''>+2348188567422</p>
                    </div>
                    
                </div>

                <div className='space-y-3'>
                    <h2 className='text-[#7EB693] text-sm' >Location</h2>
                    <p className="font-[300] text-xs">88 road, Ralph street, Ilorin, Kwara state.</p>
                </div>

                <div className='space-y-3'>
                    <div className="flex items-center">
                        <LogoIcon className="w-6 h-6" />
                        <p className="text-[#EFD372] text-sm">Olabisi's Farm</p>
                    </div>
                    <p className="font-[300] text-xs">Get the best farm produce in your neighbourhood</p>
                    <div className='flex gap-3'>
                        <div className=''>
                            <BsInstagram size={18} />
                        </div>
                        <div className=''>
                            <BsFacebook  size={18} />
                        </div>
                        <div className=''>
                            <BsTwitter  size={18} />
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <h2 className='text-[#7EB693] text-sm'>Utility Pages</h2>
                    <div className="font-[300] text-xs">
                        <p>Licences</p>
                        <p>Farms</p>
                        <p>Logistics</p>
                    </div>
                </div>

            </div>

            <div className='bg-white border-t p-4 flex flex-col sm:flex-row items-center sm:justify-between text-[10px] sm:text-xs text-current'>
                <div className='flex gap-1'>
                    <p className=''>Copyright©</p>
                    <p className=''>Olabisi's farm</p>
                </div>
                <div className='flex gap-1'>
                    <p  className=''>Designed by</p>
                    <p className=''>VictorFlow Templates</p>
                </div>
                <div className='flex gap-1'>
                    <p className=''>Implemented by</p>
                    <p  className='' >Peace Abiodun</p>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;