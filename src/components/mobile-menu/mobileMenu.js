import { NavLink } from "react-router-dom";
import { navLinks } from "utils/data";
import { BsHeart} from "react-icons/bs";


const MobileMenu = () => {
    return ( 
        <div className='absolute z-30 top-0'>
            <div className="bg-current text-white flex justify-between">
                <p>My Wishlist</p>
                <div className="flex">
                    <BsHeart />
                    Login
                </div>
            </div>
            <div className="flex flex-col bg-white text-current ">
                {navLinks.map((item) =>(
                    <NavLink key={item.id} to={item.link}>
                        {item.title}
                    </NavLink>
                ))}

            </div>
        </div>
     );
}
 
export default MobileMenu;