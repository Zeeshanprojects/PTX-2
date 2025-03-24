import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Signup from './Pages/Signup';
import ContactUs from './Pages/Contactus';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ScrollToTop from './Components/ScrollToTop';
import LookBook1 from './Pages/LookBook1';
import LookBook2 from './Pages/LookBook2';
import Tshirts from './Pages/Tshirts';
import Hoodies from './Pages/Hoodies';
import Login from './Pages/Login';
import Preloader from './Components/Preloader'; // Import Preloader
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';



function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    setLoading(true); // Show preloader when route changes
    setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000);
  }, [location.pathname]);

  return (
    <div className="App">
      {loading ? (
        <Preloader /> // Show preloader when loading is true
      ) : (
        <>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Contactus" element={<ContactUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/LookBook-V1" element={<LookBook1 />} />
            <Route path="/LookBook-V2" element={<LookBook2 />} />
            <Route path="/Tshirts" element={<Tshirts />} />
            <Route path="/Hoodies" element={<Hoodies />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/ProductDetails/:id' element={<ProductDetails />} />

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
