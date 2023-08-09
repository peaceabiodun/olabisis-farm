import Image14 from "assets/images/img14.jpg";
import Sidebar from "components/category-sidebar/category-sidebar";
import { BsHeart } from "react-icons/bs";
import { hotDeals, productCard } from "utils/data";
import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import { Link } from "react-router-dom";
import CategoryMobileNav from "components/category-mobile-nav/category-mobile-nav";



const CategoriesBody = ({productsInCategory}) => {
   const categoryProducts = productCard.filter((item)=> item.category === productsInCategory.category)
    return ( 
        <div>
            <div className="relative flex items-center justify-center">
                <img src={Image14} alt="fruits" />

                <div className="absolute text-sm xs:text-lg sm:text-2xl font-bold text-current">
                    <p>{productsInCategory.category}</p>
                </div>
            </div>
            <div className="flex justify-center md:justify-normal py-5 md:py-10 pl-2">
                <Sidebar />
                <div className=" grid grid-cols-1 xs:grid-cols-2 mdLg:grid-cols-3 xl:grid-cols-4 px-5 gap-3">
                    {categoryProducts.map((item) => (
                        <Link
                            key={item.id}
                            to={`/single-product/${item.id}`}
                            className=' border rounded-[12px] p-[6px] max-h-[285px] md:p-3 transition-transform transform hover:scale-105 hover:translate-x-[2px] hover:translate-y-[2px]'>
                            <div className="flex justify-between">
                                <button className='bg-current py-1 px-2 text-[8px] xs:text-[10px] text-white rounded-md'>{item.category}
                                </button>
                                <BsHeart size={14} className="text-current" />
                            </div>

                            <div className='p-[6px] sm:p-3'>
                                <img src={item.image} alt="items" className='rounded-lg shadow-lg w-[200px] h-[160px]' />
                            </div>
                            <p className='text-xs text-current mb-2'>{item.name}</p>
                            <div className='flex justify-between border-t pt-2'>
                                <p className='text-[10px] xs:text-xs text-current'>{item.amount}</p>
                                <div className='pl-2'>
                                    <StarIcon className='w-[40px] xs:w-[55px]' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="px-5 md:px-10 pb-5 md:pb-10 flex flex-col items-center ">
                <h2 className="text-current font-semibold text-lg sm:text-xl">Hot Deals</h2>
                <div id="scroll" className="flex gap-4 mt-5 w-full overflow-auto scroll-smooth lg:justify-center">
                    {hotDeals.map((item)=>(
                    <div key={item.id} className="relative flex items-center cursor-pointer">
                        <img src={item.image} alt="" className="max-w-[230px] max-h-[200px] rounded-lg" />

                        <div className="absolute flex flex-col items-center ">
                            <h2 className="text-sm bg-white rounded-md p-1 text-current">2 Days left</h2>
                            <div className="bg-white rounded-md p-3 m-3">
                                <h2 className="text-xs">{item.description}</h2>
                                <StarIcon className="w-[50px]" />
                                <div className="flex gap-2 text-xs">
                                    <p className="text-current ">{item.newPrice}</p>
                                    <p className="text-[#b5bfc4] line-through">{item.oldPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <CategoryMobileNav />
        </div>
     );
}
 
export default CategoriesBody;