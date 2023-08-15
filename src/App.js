import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom";
import LandingPage from "pages/landing-page";
import Shop from "pages/shop";
import SingleProductPage from "pages/single-product-page";
import CartProvider from "context/cart-context";
import Cart from "pages/cart-page/cart";
import ContactPage from "pages/contact-page";
import ShopCategories from "pages/shop/categories";
import CheckoutPage from "pages/checkout-page";
import Farms from "pages/farms";





function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productCategory" element={<ShopCategories />} />
          <Route path="/single-product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/farms" element={<Farms />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
