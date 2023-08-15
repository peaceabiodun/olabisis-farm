import Image1 from "assets/images/img18.jpg";
import Image2 from "assets/images/img15.jpg";



const FarmBody = () => {
    return ( 
        <div>
            <img src={Image1} alt="" className="w-full  max-h-[100vh]" />
            <div className="my-3 border border-current"></div>
            <div className="my-3 border border-current"></div>

            <div className="bg-white text-sm text-current p-10 w-[100%] sm:w-[80%]">
                <p>Olabisis's Farms engages in commercial production and sales of vegetables, Crop produce, livestocks, poultry and Fish Feeds. We also provide pasture grounds for livestock grazing. We grow and sell diffrent kinds of fresh vegetables, crops, fish feeds and delivery to all states in Nigeria.We breed and sell and deliver diffrent species and sizes of Cat fish, livestock and Poultry birds such as Goats, Cattles, sheeps buffalos, chickens and turkeys. We help individuals, small businesses and big companies construct well structured fish ponds, livestock cages an structures.
                </p>
            </div>

            <div className="my-3 border border-current"></div>
            <div className="my-3 border border-current"></div>

            <img src={Image2} alt="" className="w-full  max-h-[100vh]"  />
        </div>
     );
}
 
export default FarmBody;