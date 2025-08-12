import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for API requests
import "./ContactUs.style.css";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Image from "../../public/Images/Image";

export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us | Pakistan Textile Exchange";
  }, []);

 useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: true,     // whether animation should happen only once
      });
    }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ptxapi.io/api/contactform",
        formData
      );
      if (response.data.success) {
        setStatus({
          type: "success",
          message: "✅ Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus({
          type: "error",
          message: "❌ Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "❌ An error occurred. Please try again later.",
      });
    }
  };

  return (
    <>
       <div
        className="container-fluid p-0 mt-5 position-relative"
        data-aos="fade-up"
        fetchPriority="high"
        style={{ textAlign: "center" }}
      >
        {/* Banner Image */}
        <div className="col-12">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image w-100"
            fetchPriority="high"
            style={{ display: "block" ,  }}
          />
        </div>

        {/* Text Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
         CONTACT
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="fade-up">
            <div className="contact-container ">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-groups">
                  <input
                    type="text"
                    name="name"
                    placeholder="FULL NAME"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-groups">
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-groups">
                  <textarea
                    name="message"
                    placeholder="MESSAGE"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
              {status.message && (
                <p className={`status-message ${status.type}`}>
                  {status.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3 " data-aos="fade-up">
            <h5 className="fw-bold">HEAD OFFICE</h5>
            <div className="d-flex align-items-start mb-4">
              <i className="fas fa-map-marker-alt fa-2x text-dark me-3 mt-1"></i>
              <div>
                <strong>Address</strong>
                <p className="mb-0">
                  2023 South Pacific Coast Hwy, Laguna Beach, CA 92651
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-5">
              <i className="fas fa-envelope fa-2x text-dark me-3 mt-1"></i>
              <div>
                <strong>Call Us / Email</strong>
                <p className="mb-0">+1 949 283 9554</p>
                <p className="mb-0">david@paktex.com</p>
              </div>
            </div>

            <h5 className="fw-bold">BRANCH OFFICE</h5>
            <div className="d-flex align-items-start mb-4">
              <i className="fas fa-map-marker-alt fa-2x text-dark me-3"></i>
              <div>
                <strong>Address</strong>
                <p className="mb-0">
                  B-131, PCSIR Society,
Scheme-33, Gulzar e Hijri, Karachi, Sindh, Pakistan
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <i className="fas fa-envelope fa-2x text-dark me-3"></i>
              <div>
                <strong>Call Us / Email</strong>
                <p className="mb-0">(+92334) 388-1110</p>
                <p className="mb-0">sales@paktex.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<br/>
      <Footer />
    </>
  );
}
