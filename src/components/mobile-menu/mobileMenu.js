import { NavLink } from "react-router-dom";
import { navLinks } from "utils/data";
import { BsHeart} from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";


const MobileMenu = ({onClose}) => {
    return ( 
        <div className='fixed z-40 top-0 bottom-0 bg-white w-[60%] h-full text-sm'>
            <div className="bg-current text-white flex items-center justify-between h-[56px] px-4">
                <div className="flex items-center gap-2">
                    <BsHeart />
                    My Wishlist
                </div>
                <div onClick={onClose} >
                   <MdOutlineArrowForwardIos />
                </div>
            </div>
            <div className="flex flex-col bg-white text-current p-4 gap-4 ">
                {navLinks.map((item) =>(
                    <NavLink key={item.id} to={item.link}>
                        {item.title}
                    </NavLink>
                ))}


            </div>

            <div className="p-4 text-current">
                <h2 className="pb-2">Language Translate</h2>
                <div className="flex gap-2 py-4 border-y">
                    <p>ARB</p>
                    <p>YRB</p>
                    <p>IGB</p>
                    <p>HSA</p>
                </div>
            </div>

        </div>
     );
}
 
export default MobileMenu;