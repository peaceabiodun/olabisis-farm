import Image9 from "assets/images/img9.jpg";
import Image10 from "assets/images/img10.jpg";


const ContactBody = () => {
    return ( 
        <div>
            <div className="relative flex items-center justify-center">
                <img src={Image9} alt="" />

                <div className="absolute text-sm xs:text-lg sm:text-2xl font-bold text-current">
                    <p>Contact Us Today</p>
                </div>
            </div>

            <div className="flex p-5 sm:p-10 w-full justify-center gap-5 ">
                <div>
                    <img src={Image10} alt="fruits" className="w-[300px] h-[300px] rounded-md" />
                </div>
                <div>
                    <h2>We'd love to talk about how we can work together.</h2>
                </div>
            </div>
        </div>
    );
}
 
export default ContactBody;