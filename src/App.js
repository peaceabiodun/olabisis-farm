import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom";
import LandingPage from "pages/landing-page";
import Shop from "pages/shop";
import SingleProductPage from "pages/single-product-page/product-page";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product/:id" element={<SingleProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
