import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom";
import LandingPage from "pages/landing-page";
import Shop from "pages/shop";
import SingleProductPage from "pages/single-product-page";
import CartProvider from "context/cart-context";




function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single-product/:id" element={<SingleProductPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
