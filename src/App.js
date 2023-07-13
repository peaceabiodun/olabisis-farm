import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom";
import LandingPage from "pages/landing-page";
import Shop from "pages/shop";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </Router>
  );
}

export default App;
