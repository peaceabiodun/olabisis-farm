import Image8 from "assets/images/img8.jpg";
import { productCard } from "utils/data";
import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import { BsHeart} from "react-icons/bs";
import { Link } from "react-router-dom";



const Body = () => {
    return ( 
        <div>
            <div className="relative flex items-center justify-center">
                <img src={Image8} alt="fruits" />

                <div className="absolute text-sm xs:text-lg sm:text-2xl font-bold text-current">
                    <p>Shop With us at Affordable Prices</p>
                </div>
            </div>
 
            <div className="flex justify-center">
            <div className=" grid grid-cols-2 xs:grid-cols-3 mdLg:grid-cols-4 p-5 md:p-10 gap-4">
                {productCard.map((item) =>(
                    <Link 
                        key={item.id} 
                        to={`/single-product/${item.id}`}
                        className='bg-[#F9F8F8] rounded-[12px] p-[6px] md:p-3 '>
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
        </div>
     );
}
 
export default Body;