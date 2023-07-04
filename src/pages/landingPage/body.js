import NewsLetterImg from "assets/images/newsLetterImg.jpg";
import Image1 from "assets/images/img1.jpg";

const Body = () => {
    return (
       <div>    
            <div className='relative flex '>
                <img src={Image1} alt="farm pictures"  />
                <div className='absolute z-40'>
                    <p className='text-[#68A47F] italic'>100% Natural farm produce</p>
                    <h2 className='text-4xl text-[#274C5B] font-bold'>Choose the best healthier way of life</h2>
                    <button className='text-[#274C5B] bg-[#EFD372  ]'>
                        Explore Now
                    </button>
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