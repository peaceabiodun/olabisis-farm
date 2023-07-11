import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import NewsLetterImg from "assets/images/newsLetterImg.jpg";
import Image1 from "assets/images/img1.jpg";
import Image3 from "assets/images/img3.jpg";
import Image4 from "assets/images/img4.jpg";
import Image6 from "assets/images/img6.jpg";
import Image7 from "assets/images/img7.jpg";
import Farm from "assets/images/farm.jpg";
import { BsFillArrowRightCircleFill} from "react-icons/bs";
import { ReactComponent as StarIcon} from 'assets/icons/Star.svg';
import { productCard, stats, testimonialDetails } from "utils/data";



const Body = () => {
    return (
       <div className=''>    
            <div className='relative flex items-center '>
                <img src={Image1} alt="farm pictures" className='h-[90vh] w-full' />
                <div className='absolute z-40 flex flex-col items-start max-w-[450px] pl-[100px]'>
                    <p className='text-[#c4ffda] italic'>Choose the best healthier way of life</p>
                    <h2 className='text-4xl text-[#ffffff] font-bold'>Welcome to the world of Nature and Clean Breeds</h2>
                    <button className='text-[#274C5B] bg-[#EFD372] text-xs p-3 rounded-md my-2 flex items-center'>
                        Explore Now
                        <BsFillArrowRightCircleFill className='ml-2' />
                    </button>
                </div>
            </div> 

            <div className='bg-[#Ffffff] flex justify-center p-10 gap-4 w-full'>
                <div className='w-full flex justify-end'>
                    <img src={Image6} alt="fishes" className='' />
                </div>
                <div className='text-current'>
                    <p className='text-[#7EB693] font-Yellowtail text-lg mb-2'>About us</p>
                    <p className='text-sm font-bold w-[80%]'>Olabisis's Farms engages in commercial production and sales of vegetables, Crop produce, livestocks, poultry and Fish Feeds. We also provide pasture grounds for livestock grazing.  
                    </p>

                    <p className='bg-[#ECECEC] p-2 text-xs my-3 rounded-xl w-[40%] text-center'>100% Natural Product Sales</p>
                    <p className='text-xs pl-4 font-[300] w-[70%]'>We grow and sell diffrent kinds of fresh vegetables, crops, fish feeds and delivery to all states in Nigeria.</p>

                    <p className='bg-[#ECECEC] p-2 text-xs my-3 rounded-xl w-[40%] text-center'>Cat fish / livestock / Poultry</p>
                    <p className='text-xs pl-4 font-[300] w-[70%]'>We breed and sell and deliver diffrent species and sizes of Cat fish, livestock and Poultry birds such as Goats, Cattles, sheeps buffalos, chickens and turkeys . </p>

                    <p className='bg-[#ECECEC] p-2 text-xs my-3 rounded-xl w-[40%] text-center'>Constructions</p>
                    <p className='text-xs pl-4 font-[300] w-[70%]'>We help individuals, small businesses and big companies construct well structured fish ponds, livestock cages an structures. </p>

                    <button className='bg-current rounded-xl my-3 text-xs w-[40%] p-2 text-white'>
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="relative flex flex-col items-end justify-center">
                <img src={Farm} alt="farm pictures" className="h-[100vh] w-full " />

                <div className='absolute flex flex-col max-w-[800px] pr-[100px]'>
                    <h2 className='text-[#c4ffda] text-xl font-semibold'>Feeding Africa</h2>
                    <p className="text-[#f8efef] ">We grow commercial organic fresh vegetables for supply across the country. Some of our regular produce include, but not limited to, bell peppers, tomatoes, watermelons, cabbages, broccoli, cucumbers all in different varieties. Olabisi's farm also supports the livestock industry. We understand that the performance of livestock depends on the quality of forage and pasture it is fed. Therefore we produce and supply highly nutritional pasture crops to livestock farmers.</p>
                </div>
            </div>

          

            <div className=' flex flex-col items-center justify-center p-10'>
                <h3 className='text-[#7EB693] font-Yellowtail text-lg'>Categories</h3>
                <h2 className='text-current font-semibold text-xl'>Our Products</h2>

               
                <div className=' grid grid-cols-4 gap-3 my-5'>
                {productCard.map((item) =>(
                    <div key={item.id} className='bg-[#F9F8F8] rounded-[12px] p-3'>
                        <button className='bg-current py-1 px-2 text-[10px] text-white rounded-md'>{item.category}</button>
                        <div className='p-3'>
                            <img src={item.image} alt="items" className='rounded-lg shadow-lg w-[200px] h-[160px]' />
                        </div>
                        <p className='text-xs text-current mb-2'>{item.name}</p>
                        <div className='flex justify-between border-t pt-2'>
                            <p className='text-xs text-current'>{item.amount}</p>
                            <div className='pl-2'>
                                <StarIcon className='w-[55px]' />
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
               
                <button className=' bg-current text-xs p-3 text-white rounded-lg flex items-center my-3'>
                    Load More 
                    < BsFillArrowRightCircleFill className='ml-2' />
                </button>
            </div>

            
            <div className='p-10 flex justify-center gap-4 bg-current'>

                <div className='relative flex items-center'>
                    <img src={Image3} alt="fruits" className='w-[300px] h-[200px] rounded-lg' />
                    <div className='absolute flex flex-col items-start px-6 max-w-[200px]'>
                        <h3 className='text-[#7EB693] font-Yellowtail'>Offer</h3>
                        <p className='text-current my-1'>Get 10% off on fresh Vegetables and fruits</p>
                    </div>
                </div>
                <div className='relative flex items-center'>
                    <img src={Image4} alt="chickens" className='w-[300px] h-[200px] rounded-lg' />
                    <div className=' absolute flex flex-col items-start px-6 max-w-[200px] text-white'>
                        <h3 className='font-Yellowtail'>Offer</h3>
                        <p className='my-1'>Get 20% off on live chickens and turkeys</p>
                    </div>
                </div>
            </div>

            <div className='relative flex flex-col items-center justify-center'>
                <img src={Image7} alt="" className="w-full h-[95vh]" />
                <div className=" absolute z-30 flex flex-col justify-center items-center max-w-[700px] p-6">
                    <h3 className='text-[#7EB693] font-Yellowtail text-lg'>Testimonial</h3>
                    <h2 className='text-current font-semibold text-xl my-1'>What Are Our Customer Saying ?</h2>

                    <Carousel showArrows={false} className="">
                        {testimonialDetails.map((item) =>(
                            <div key={item.id} className='flex flex-col justify-center items-center my-3 '>
                                <div  className='w-[100px] h-[100px]'>
                                    <img src={item.pic} alt="people" className='w-[100px] h-[100px] rounded-full' />
                                </div>   
                                <StarIcon className='my-3' />
                                <p className='text-[#525C60] font-[300]'>{item.comments}</p>
                                <h3 className="text-current mt-2">{item.name}</h3>
                                <p className="text-xs font-[300] text-current">Customer</p>
                            </div>
                        ))}
                    </Carousel> 

                    <div className="flex gap-4 border-t py-3">
                    {stats.map((item) =>(
                    <div key={item.id} className="bg-[#F1F1F1] border-[3px] border-[#7EB693] w-[120px] h-[120px] rounded-full text-current flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-semibold">{item.stat}</h2>
                        <p className="text-xs">{item.text}</p>
                    </div> ))} 
                    </div>
                </div>

            </div>

            <div className='bg-white w-full flex items-center justify-center relative'>
                <img src={NewsLetterImg} alt="news letter" className=' rounded-2xl w-[80%]' />
                <div className='absolute space-y-3'>
                    <h2 className='text-2xl text-white'>Subscribe to our news letter</h2>
                    <div className='flex gap-2 text-sm'>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className='w-[300px] h-[40px] rounded-lg text-[#ABABAB] outline-none px-2'
                        />
                        <button className=' bg-[#274C5B] h-[40px] w-[200px] rounded-lg text-white'>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Body;