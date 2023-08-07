import Image8 from "assets/images/img8.jpg";
import GoatOutline from "assets/images/goat-outline.png";
import { categories, hotDeals, productCard } from "utils/data";
import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import { BsHeart} from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";



const Body = () => (
    <div>
        <div className="relative flex items-center justify-center">
            <img src={Image8} alt="fruits" />

            <div className="absolute text-sm xs:text-lg sm:text-2xl font-bold text-current">
                <p>Shop With us at Affordable Prices</p>
            </div>
        </div>

        <div className="p-5 md:p-10 flex flex-col items-center justify-center">
            <div className="flex items-center text-current ">
                <h2 className="font-semibold text-lg sm:text-xl">Shop by Categories</h2>
                <BsArrowRight className="ml-2 md:hidden "/>
            </div>
            <div id="scroll" className=" py-3 flex md:justify-center gap-4 overflow-x-auto scroll-smooth w-full">
                {categories.map((item) =>(
                <div key={item.id} className="bg-white shadow-md text-current text-xs p-3 border cursor-pointer rounded-md transition-transform transform hover:scale-105 hover:translate-x-1 hover:translate-y-1">
                    <img src={item.image} alt="" className="max-w-[60px] max-h-[60px]" />
                    <p className="mt-2 text-center">{item.name}</p>
                </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <h2 className="text-current font-semibold text-lg sm:text-xl">Daily Best Sells</h2>
            <div className=" grid grid-cols-2 xs:grid-cols-3 mdLg:grid-cols-4 p-5 md:p-10 gap-4">
                {productCard.map((item) => (
                    <Link
                        key={item.id}
                        to={`/single-product/${item.id}`}
                        className='bg-[#F9F8F8] rounded-[12px] p-[6px] md:p-3 transition-transform transform hover:scale-105 hover:translate-x-[2px] hover:translate-y-[2px]'>
                        <div className="flex justify-between">
                            <button className='bg-current py-1 px-2 text-[8px] xs:text-[10px] text-white rounded-md'>{item.category}
                            </button>
                            <BsHeart size={14} className="text-current" />
                        </div>

                        <div className='p-[6px] sm:p-3'>
                            <img src={item.image} alt="items" className='rounded-lg shadow-lg w-[150px] sm:w-[200px] h-[100px] sm:h-[160px]' />
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

        <div>
            <h2>Hot Deals</h2>
            <div className="flex gap-4">
                {hotDeals.map((item)=>(
                <div key={item.id} className="">
                    <img src={item.image} alt="" />
                </div>
                ))}
            </div>
        </div>
    </div>
)

export default Body;