import { NavLink } from "react-router-dom";
import { categories } from "utils/data";


const CategoryMobileNav = () => {
    return ( 
        <div className='bg-[#F2F4F7] md:hidden bottom-0 fixed w-full'>
            <div className='flex flex-row items-center justify-evenly py-3 px-2 '>
            {categories.map((item) => (
                <NavLink 
                    to={`/shop/${item.name}`} 
                    key={item.id} 
                    className={({isActive}) => isActive? 'bg-[#e3e8ee] p-2 rounded-full': ' p-2' }>
                <img className='rounded-full hover:bg-[#F6FBF6] w-7 h-7' src={item.image} alt="" />
                </NavLink>
            ))}
            </div> 
        </div>
     );
}
 
export default CategoryMobileNav;