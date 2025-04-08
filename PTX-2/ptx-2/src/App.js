import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Signup from "./Pages/Signup";
import ContactUs from "./Pages/Contactus";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ScrollToTop from "./Components/ScrollToTop";
import LookBook1 from "./Pages/LookBook1";
import LookBook2 from "./Pages/LookBook2";
import Tshirts from "./Pages/Tshirts";
import Hoodies from "./Pages/Hoodies";
import Login from "./Pages/Login";
import Preloader from "./Components/Preloader";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";
import ProductDetails from "./Pages/ProductDetails";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Manufacturing from "./Pages/Manufacturing";
import QualityAssurance from "./Pages/QualityAssurance";
import Logistics from "./Pages/Logistics";
import Sourcing from "./Pages/Sourcing";
import Studio from "./Pages/Studio";
import Inquireform from "./Pages/Inquireform";
import Gallery from "./Pages/Gallery";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.pathname]);

  return (
    <div className="App">
      {loading ? (
        <Preloader /> // Show preloader when loading is f
      ) : (
        <>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<AboutUs/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Manufacturing" element={<Manufacturing />} />
        <Route path="/QualityAssurance" element={<QualityAssurance />} />
        <Route path="/Logistics" element={<Logistics />} />
        <Route path="/Sourcing" element={<Sourcing/>}/>
        <Route path="/Studio" element={<Studio />} />
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/inquireform" element={<Inquireform/>}/>
            <Route path="/Product" element={<Product />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Contactus" element={<ContactUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/LookBook-V1" element={<LookBook1 />} />
            <Route path="/LookBook-V2" element={<LookBook2 />} />
            <Route path="/Tshirts" element={<Tshirts />} />
            <Route path="/Hoodies" element={<Hoodies />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
