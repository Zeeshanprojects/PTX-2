import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import Preloader from "./Components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages (Normal Imports)
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Signup from "./Pages/Signup";
import ContactUs from "./Pages/Contactus";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LookBook1 from "./Pages/LookBook1";
import LookBook2 from "./Pages/LookBook2";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Inquireform from "./Pages/Inquireform";
import Blog1 from "./Pages/Blog1";
import Blog2 from "./Pages/Blog2";
import Blog3 from "./Pages/Blog3";
import Teams from "./Pages/Teams";
import Teaminfo from "./Pages/Teaminfo";
import Gallery from "./Pages/Gallery";
import QualityPolicy from "./Pages/QualityPolicy";
import FactoryTour from "./Pages/FactoryTour";
import DyeingandFinishing from "./Pages/DyeingandFinishing";
import FabricDivision from "./Pages/FabricDivision";
import GarmentDivision from "./Pages/GarmentDivision";
import Sampling from "./Pages/Sampling";
import Cutting from "./Pages/Cutting";
import Stitching from "./Pages/Stitching";
import Finishing from "./Pages/Finishing";
import Laboratory from "./Pages/Laboratory";
import QualityAssurance from "./Pages/QualityAssurance";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  // Preloader effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ScrollToTop />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/qualityassurance" element={<QualityAssurance />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/team/:slug" element={<Teaminfo />} />
            <Route path="/inquireform" element={<Inquireform />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/lookbook-v1" element={<LookBook1 />} />
            <Route path="/lookbook-v2" element={<LookBook2 />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/blog3" element={<Blog3 />} />
            <Route path="/qualitypolicy" element={<QualityPolicy />} />
            <Route path="/factorytour" element={<FactoryTour />} />
            <Route path="/dyeingandfinishing" element={<DyeingandFinishing />} />
            <Route path="/fabricdivision" element={<FabricDivision />} />
            <Route path="/garmentdivision" element={<GarmentDivision />} />
            <Route path="/sampling" element={<Sampling />} />
            <Route path="/cutting" element={<Cutting />} />
            <Route path="/stitching" element={<Stitching />} />
            <Route path="/finishing" element={<Finishing />} />
            <Route path="/laboratory" element={<Laboratory />} />
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
