import { ReactComponent as Logo } from "assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { navLinks } from "utils/data";
import { BsCart3 } from "react-icons/bs";


const NavbarHeader = () => {
    return ( 
        <div className='bg-white py-5 px-11 flex items-center justify-between '>
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
     );
}
 



export default NavbarHeader;
