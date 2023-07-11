import { ReactComponent as Logo } from "assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { navLinks } from "utils/data";
import { BsCart3} from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import MobileMenu from "components/mobile-menu/mobileMenu";


const NavbarHeader = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const openMobileMenu = ()=>{
        setToggleMenu(!toggleMenu)
    };

    return ( 
        <div className="relative">
        {/* Desktop sreen  */}
        <div className='hidden sm:flex bg-white py-5 px-11 items-center justify-between '>
            <div>
                <Logo className='w-[180px]' />
            </div>

            <div className=' text-[#274C5B] text-lg font-bold flex gap-6'>
                {navLinks.map((item)=>(
                    <NavLink key={item.id} to={item.link} id={item.id} className=''>
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className='flex border rounded-3xl h-[46px] items-center p-[2px] gap-2'>
                <div className='bg-[#274C5B] p-2 rounded-full text-white'>
                    <BsCart3 size={22} />
                </div>

                <p className='text-[#274C5B] text-sm font-bold mr-2 '>Cart(0)</p>
            </div>

        </div>

        {/* mobile screen */}
        <div className="flex sm:hidden bg-white p-3 items-center justify-between">
            <div>
                <Logo className='w-[130px]' />
            </div>

            <div className="text-current gap-4 flex">
                <BsCart3 size={28} />
                <HiMenuAlt3 size={28} onClick={openMobileMenu} />
            </div>

        </div>
        
        {toggleMenu&&
            <MobileMenu />
        }
        </div>
     );
}
 



export default NavbarHeader;
