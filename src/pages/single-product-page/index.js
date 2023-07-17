import NavbarHeader from "components/navbar-header/navbarHeader";
import Footer from "components/page-footer/footer";
import { useParams } from "react-router-dom";
import { productCard } from "utils/data";
import ProductInfo from "./product-info";



const SingleProductPage = () => {
    const {id} = useParams();
    const productDetails = productCard.find((item) => item.id === id);

    return ( 
        <div>
            <NavbarHeader />
            {!productDetails ? 
                <div className="w-full h-[55vh] flex items-center justify-center text-current">No product Found </div> 
            : 
                <ProductInfo productDetails={productDetails} />
            }
            <Footer />
        </div>
     );
}
 
export default SingleProductPage;