import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import NewsLetterImg from "assets/images/newsLetterImg.jpg";
import Image1 from "assets/images/img1.jpg";
import Image3 from "assets/images/img3.jpg";
import Image4 from "assets/images/img4.jpg";
import Image7 from "assets/images/img7.jpg";
import Image8 from "assets/images/img16.jpg";
import Farm from "assets/images/farm2.jpg";
import { BsFillArrowRightCircleFill} from "react-icons/bs";
import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import { BsHeart} from "react-icons/bs";
import { farmDetails, productCard, stats, testimonialDetails } from "utils/data";
import { Link, useNavigate } from "react-router-dom";


const Body = () => {
    let navigate = useNavigate();
    return (
       <div className=''>    
            <div className='relative flex items-center '>
                <img src={Image1} alt="farm pictures" className='hidden md:flex max-h-[100vh] w-full' />
                <img src={Image8} alt="farm pictures" className=' md:hidden object-cover w-full h-[90vh]' />
                <div className='absolute flex flex-col items-start  max-w-[450px] px-4 md:pl-[100px]'>
                    <p className='text-[#c4ffda] italic'>Choose the best healthier way of life</p>
                    <h2 className='text-xl xs:text-2xl md:text-4xl text-[#ffffff] font-bold'>Welcome to the world of Nature and Clean Breeds</h2>
                    <button onClick={()=>navigate('/shop')} className='text-[#274C5B] bg-[#EFD372] text-xs p-3 rounded-md my-2 flex items-center'>
                        Explore Now
                        <BsFillArrowRightCircleFill className='ml-2' />
                    </button>
                </div>
            </div> 

            <div className='bg-[#Ffffff] flex flex-col items-center p-5 mdLg:p-10 w-full space-y-4'>
                <p className='text-[#7EB693] font-Yellowtail text-lg '>What We Provide</p>
                <div className="grid xs:grid-cols-2 gap-5">
                {farmDetails.map((item)=>(
                <div key={item.id} className="border p-4 rounded-md flex flex-col justify-center max-w-[300px] h-[170px] items-center cursor-pointer transition-transform transform hover:scale-105 hover:translate-x-1 hover:translate-y-1">
                    <h2 className="text-sm font-bold text-current">{item.title}</h2>
                    <p className="text-[#b4b4b6] text-xs">{item.description}</p>
                </div>
                ))}
                </div>
                <button onClick={()=>navigate('/shop')} className='bg-current rounded-xl text-xs w-[200px] p-2 text-white'>
                    Shop Now
                </button>
                
            </div>

            <div className="relative flex flex-col items-end justify-center">
                <img src={Farm} alt="farm pictures" className="h-[60vh] md:h-[100vh] w-full " />

                <div className='absolute flex flex-col max-w-[800px] px-4 md:pr-[100px]'>
                    <h2 className='text-current mdLg:text-[#ffd642] text-xl font-semibold'>Feeding Africa</h2>
                    <p className="text-[#f8efef] py-2 text-xs xs:text-sm ">We grow commercial organic fresh vegetables for supply across the country. Some of our regular produce include, but not limited to, bell peppers, tomatoes, watermelons, cabbages, broccoli, cucumbers all in different varieties. Olabisi's farm also supports the livestock industry. We understand that the performance of livestock depends on the quality of forage and pasture it is fed. Therefore we produce and supply highly nutritional pasture crops to livestock farmers.</p>
                </div>
            </div>

          

            <div className=' flex flex-col items-center justify-center p-5 mdLg:p-10'>
                <h2 className='text-current font-semibold text-lg sm:text-xl'>Popular Products</h2>
               
                <div className=' grid grid-cols-2 md:grid-cols-3 mdLg:grid-cols-4 gap-3 my-5'>
                {productCard.map((item) =>(
                    <Link key={item.id}  to={`/single-product/${item.id}`} className='bg-[#F9F8F8] rounded-[12px] p-2 sm:p-3'>
                        <div className="flex justify-between">
                            <button className='bg-current py-1 px-2 text-[8px] xs:text-[9px] text-white rounded-md'> {item.category}
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
               
                <button className=' bg-current text-xs p-3 text-white rounded-lg flex items-center my-3'>
                    Load More 
                    < BsFillArrowRightCircleFill className='ml-2' />
                </button>
            </div>

            
            <div className='p-5 mdLg:p-10 flex justify-center gap-4 bg-current'>

                <div className='relative flex items-center'>
                    <img src={Image3} alt="fruits" className='w-[200px] md:w-[300px] h-[120px] md:h-[200px] rounded-lg' />
                    <div className='absolute flex flex-col items-start px-6 max-w-[200px]'>
                        <h3 className='text-[#7EB693] font-Yellowtail'>Offer</h3>
                        <p className='text-current my-1 text-xs sm:text-sm'>Get 10% off on fresh Vegetables and fruits</p>
                    </div>
                </div>
                <div className='relative flex items-center'>
                    <img src={Image4} alt="chickens" className='w-[200px] md:w-[300px] h-[120px] md:h-[200px] rounded-lg' />
                    <div className=' absolute flex flex-col items-start px-6 max-w-[200px] text-white'>
                        <h3 className='font-Yellowtail'>Offer</h3>
                        <p className='my-1 text-xs sm:text-sm'>Get 20% off on live chickens and turkeys</p>
                    </div>
                </div>
            </div>

            <div className='relative flex flex-col items-center justify-center'>
                <img src={Image7} alt="" className="w-full h-[95vh]" />
                <div className=" absolute z-30 flex flex-col justify-center items-center max-w-[650px]">
                    <h3 className='text-[#7EB693] font-Yellowtail text-lg'>Testimonial</h3>
                    <h2 className='text-current font-semibold text-sm md:text-xl my-1'>What Are Our Customer Saying ?</h2>

                    <Carousel showArrows={false} className="">
                        {testimonialDetails.map((item) =>(
                            <div key={item.id} className='flex flex-col justify-center items-center my-3 '>
                                <div  className='w-[70px] sm:w-[100px] h-[70px] sm:h-[100px]'>
                                    <img src={item.pic} alt="people" className='w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] rounded-full' />
                                </div>   
                                <StarIcon className='my-3 w-[50px]' />
                                <p className='text-[#525C60] font-[300] text-xs xs:text-sm px-3'>{item.comments}</p>
                                <h3 className="text-current mt-2 text-sm">{item.name}</h3>
                                <p className="text-xs font-[300] text-current">Customer</p>
                            </div>
                        ))}
                    </Carousel> 

                    <div className="flex gap-2 xs:gap-4 border-t p-3">
                    {stats.map((item) =>(
                    <div key={item.id} className="bg-[#F1F1F1] border-[3px] border-[#7EB693] w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full text-current flex flex-col items-center justify-center">
                        <h2 className="text-sm sm:text-2xl font-semibold">{item.stat}</h2>
                        <p className="text-xs text-center">{item.text}</p>
                    </div> ))} 
                    </div>
                </div>

            </div>

            <div className='bg-white w-full flex items-center justify-center relative p-5 mdLg:p-10'>
                <img src={NewsLetterImg} alt="news letter" className=' rounded-2xl w-[90%] md:w-[80%] h-[180px]' />
                <div className='absolute space-y-3 px-2'>
                    <h2 className='text-sm xs:text-lg md:text-2xl text-white'>Subscribe to our news letter</h2>
                    <div className='flex flex-col md:flex-row gap-2 text-sm'>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className='w-[180px] xs:w-[300px] h-[35px] md:h-[40px] rounded-lg text-[#ABABAB] text-xs xs:text-sm outline-none px-2'
                        />
                        <button className=' bg-[#274C5B] h-[35px] md:h-[40px] w-[180px] xs:w-[200px] rounded-lg text-white'>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Body;