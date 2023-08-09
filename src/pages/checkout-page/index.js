import NavbarHeader from "components/navbar-header/navbarHeader";
import Footer from "components/page-footer/footer";
import CheckoutBody from "./checkout-body";

const CheckoutPage = () => {
    return ( 
        <div>
            <NavbarHeader />
            <CheckoutBody />
            <Footer />
        </div>
     );
}
 
export default CheckoutPage;