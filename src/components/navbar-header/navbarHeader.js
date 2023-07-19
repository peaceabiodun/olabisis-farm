import { ReactComponent as LogoIcon } from "assets/icons/logo-icon.svg";
import { NavLink } from "react-router-dom";
import { navLinks } from "utils/data";
import { BsCart3} from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState, useEffect } from "react";
import MobileMenu from "components/mobile-menu/mobileMenu";


const NavbarHeader = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const openMobileMenu = ()=>{
        setToggleMenu(!toggleMenu)
    };

    return ( 
        <div className="relative">
        {/* Desktop sreen  */}

        <div className='hidden sm:flex bg-current py-5 px-6 md:px-11 items-center justify-between '>
            <div className="flex items-center">
                <LogoIcon className='w-[26px] h-8 ' />
                <p className="text-white text-[16px] md:text-lg ml-1">Olabisi's Farm</p>
            </div>

            <div className=' text-white text-[16px] md:text-lg font-bold flex gap-6'>
                {navLinks.map((item)=>(
                    <NavLink key={item.id} to={item.link} id={item.id} className=''>
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <div className='flex border rounded-3xl h-[40px] items-center p-[2px] gap-2'>
                <div className='bg-white p-2 rounded-full text-current'>
                    <BsCart3 size={20} />
                </div>

                <p className='text-white text-sm font-bold mr-2 '>Cart(0)</p>
            </div>

        </div>

        {/* mobile screen */}
        <div className="flex sm:hidden bg-current p-4 items-center justify-between">
            <div className="flex items-center">
                <LogoIcon className='w-[26px] h-6' />
                <p className="text-white">Olabisi's Farm</p>
            </div>

            <div className="text-white gap-4 flex">
                <BsCart3 size={22} />
                <HiMenuAlt3 size={22} onClick={openMobileMenu} />
            </div>

        </div>
        
        {toggleMenu&&
            <MobileMenu onClose={openMobileMenu} />
        }
        </div>
     );
}
 



export default NavbarHeader;
