import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

// Components (not split since they are small and used everywhere)
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import Preloader from "./Components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy-loaded Pages
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Signup = lazy(() => import("./Pages/Signup"));
const ContactUs = lazy(() => import("./Pages/Contactus"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const LookBook1 = lazy(() => import("./Pages/LookBook1"));
const LookBook2 = lazy(() => import("./Pages/LookBook2"));
const Login = lazy(() => import("./Pages/Login"));
const Services = lazy(() => import("./Pages/Services"));
const Inquireform = lazy(() => import("./Pages/Inquireform"));

const Blog1 = lazy(() => import("./Pages/Blog1"));
const Blog2 = lazy(() => import("./Pages/Blog2"));
const Blog3 = lazy(() => import("./Pages/Blog3"));
const Teams = lazy(() => import("./Pages/Teams"));
const Teaminfo = lazy(() => import("./Pages/Teaminfo"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const QualityPolicy = lazy(() => import("./Pages/QualityPolicy"));
const FactoryTour = lazy(() => import("./Pages/FactoryTour"));
const DyeingandFinishing = lazy(() => import("./Pages/DyeingandFinishing"));
const FabricDivision = lazy(() => import("./Pages/FabricDivision"));
const GarmentDivision = lazy(() => import("./Pages/GarmentDivision"));
const Sampling = lazy(() => import("./Pages/Sampling"));
const Cutting = lazy(() => import("./Pages/Cutting"));
const Stitching = lazy(() => import("./Pages/Stitching"));
const Finishing = lazy(() => import("./Pages/Finishing"));
const Laboratory = lazy(() => import("./Pages/Laboratory"));
const QualityAssurance = lazy(() => import("./Pages/QualityAssurance"));


function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  // refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.pathname]);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ScrollToTop />
          <Header />

          {/* Suspense handles lazy page loading */}
          <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Aboutus" element={<AboutUs />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/QualityAssurance" element={<QualityAssurance />} />
             
              <Route path="/team" element={<Teams />} />
              <Route path="/team/:slug" element={<Teaminfo />} />
              <Route path="/inquireform" element={<Inquireform />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Contactus" element={<ContactUs />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/LookBook-V1" element={<LookBook1 />} />
              <Route path="/LookBook-V2" element={<LookBook2 />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Blog2 />} />
              <Route path="/blog3" element={<Blog3 />} />
              <Route path="/quaitypolicy" element={<QualityPolicy />} />
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
          </Suspense>
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
