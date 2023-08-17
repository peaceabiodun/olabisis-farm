import { ReactComponent as LogoIcon } from "assets/icons/logo-icon.svg";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "utils/data";
import { BsCart3} from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState, useContext } from "react";
import MobileMenu from "components/mobile-menu/mobileMenu";
import { CartContext } from "context/cart-context";


const NavbarHeader = () => {

    const {cartItems} = useContext(CartContext);
    const [toggleMenu, setToggleMenu] = useState(false);
    const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
                    <NavLink key={item.id} to={item.link} id={item.id} className='font-[400]'>
                        {item.title}
                    </NavLink>
                ))}
            </div>

            <Link to="/cart" className='flex border rounded-3xl h-[40px] items-center p-[2px] gap-2'>
                <div className='bg-white p-2 rounded-full text-current'>
                    <BsCart3 size={20} />
                </div>

                <p className='text-white text-sm font-bold mr-2 '>Cart({totalItemsInCart})</p>
            </Link>

        </div>

        {/* mobile screen */}
        <div className="flex sm:hidden bg-current p-4 items-center justify-between">
            <div className="flex items-center">
                <LogoIcon className='w-[26px] h-6' />
                <p className="text-white">Olabisi's Farm</p>
            </div>

            <div className="text-white gap-4 flex">
                <Link to="/cart">
                    <BsCart3 size={22} />
                    <span className="bg-white text-current absolute w-4 h-4 rounded-full top-2 ml-3 flex text-center justify-center text-[10px]">{totalItemsInCart}</span>
                </Link>
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
