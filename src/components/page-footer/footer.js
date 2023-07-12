import { ReactComponent as Logo } from "assets/images/logo.svg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";


const Footer = () => {

    return ( 
        <div >
            <div className='grid grid-cols-2 sm:grid-cols-3 text-[#274C5B] pt-5 pb-10'>

                <div className='flex flex-col text-right px-5 md:px-8 space-y-4'>
                    <h2 className='text-sm md:text-lg'>Contact Us</h2>
                    <div>
                        <p className='text-xs sm:text-sm'>Email</p>
                        <p className='font-[300] text-[10px] sm:text-sm'>abiodunpeace8@gmail.com</p>
                    </div>
                    <div >
                        <p className='text-xs sm:text-sm'>Phone</p>
                        <p className='font-[300] text-[10px] sm:text-sm'>+2348188567422</p>
                    </div>
                    <div>
                        <p className='text-xs sm:text-sm'>Address</p>
                        <p className='font-[300] text-[10px] sm:text-sm'>88 road, Ralph street, Ilorin, Kwara state.</p>
                    </div>
                </div>

                <div className='border-l sm:border-r flex flex-col sm:items-center space-y-4 px-5'>
                    <Logo className='w-[125px] md:w-[170px] h-6' />
                    <p className='font-[300] text-xs sm:text-sm'>Get the best farm produce in your neighbourhood</p>
                    <div className='flex gap-2'>
                        <div className='bg-[#EFF6F1] py-[6px] px-2 xs:py-3 xs:px-3 flex items-center rounded-full cursor-pointer'>
                            <BsInstagram size={16} />
                        </div>
                        <div className='bg-[#EFF6F1] py-[6px] px-2 xs:py-3 xs:px-3 rounded-full cursor-pointer'>
                            <BsFacebook  size={16}/>
                        </div>
                        <div className='bg-[#EFF6F1] py-[6px] px-2 xs:py-3 xs:px-3 rounded-full cursor-pointer'>
                            <BsTwitter  size={16} />
                        </div>
                    </div>
                </div>

                <div className='hidden sm:flex flex-col text-left px-8 space-y-4'>
                    <h2 className='text-lg'>Utility Pages</h2>
                    <div className='text-sm font-[300] space-y-3'>
                        <p>Licences</p>
                        <p>Farms</p>
                        <p>Logistics</p>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center border-t text-[8px] whitespace-nowrap sm:text-[10px] font-sans p-2'>
                <div className='border-r flex'>
                    <p className='text-[#525C60] mr-1'>Copyright©</p>
                    <p className='font-medium mr-2'>Olabisi's farm</p>
                </div>
                <div className='border-r hidden xs:flex ml-2'>
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