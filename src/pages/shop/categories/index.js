import NavbarHeader from "components/navbar-header/navbarHeader";
import CategoriesBody from "./categories-body";
import Footer from "components/page-footer/footer";
import { useParams } from "react-router-dom";
import { productCard } from "utils/data";

const ShopCategories = () => {
    const {productCategory} = useParams();
    const productsInCategory = productCard.find((item) => item.category === productCategory )
    return ( 
        <div>
            <NavbarHeader />
            {!productsInCategory ? 
            <div className="w-full h-[55vh] flex items-center justify-center text-current"> No products available </div>
            :
            <CategoriesBody productsInCategory={productsInCategory} />
            }
            <Footer />
            
        </div>
     );
}
 
export default ShopCategories;