import { useState } from "react";
import { categories, productCard} from "utils/data";
import { BsSearch} from "react-icons/bs";
import { Link } from "react-router-dom";



const Sidebar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    if (searchInput.length > 0) {
        productCard.filter((product) => {
        return product.name.match(searchInput)
    })
    };

    return ( 
        <div className="hidden md:flex flex-col min-w-[230px] h-full p-3 border rounded-md ">
            <div className="flex items-center text-[#b9b3b3] text-sm font-light w-full bg-white border rounded-md pl-2">
                <BsSearch size={14} />
                <input 
                    type="text" 
                    placeholder="Search.."
                    className="w-full outline-none rounded-md p-2 "
                    value={searchInput}
                    onChange={handleSearchChange}    
                />
            </div>

            <div className="mt-3">
                <h2 className="text-current tex-[16px]">Categories</h2>
                <div className="mt-3 space-y-3">
                    {categories.map((item)=>(
                    <Link to={`/shop/${item.name}`} key={item.id} className="flex justify-between items-center hover:bg-[#e9e6e6] rounded-md cursor-pointer p-1 ">
                        <div className="flex gap-2 items-center">
                            <img src={item.image} alt="" className="w-6 h-6"/>
                            <p className="text-sm text-current ">{item.name}</p>
                        </div>
                        <p className="text-[10px] bg-[#D4D4D4] text-[#837e7e] px-1 py-[2px] rounded-full">30</p>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;