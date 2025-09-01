import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation(); // Ensure this is inside <Router>

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}