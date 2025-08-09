import { useState, useEffect } from "react";
import axios from "axios";  // Import Axios for API requests
import "./ContactUs.style.css"; 
import Footer from "../Components/Footer";

export default function ContactUs() {
  
  useEffect(() => {
    document.title = "Contact Us | Pakistan Textile Exchange";
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
    const response = await axios.post("https://ptxapi.io/api/contactform", formData);
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
     <div className="background-color mt-5">
            <h1 className="text-center">CONTACT US</h1>
        </div>
<div className="container-fluid">
  <div className="row">
     <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
           <div className="contact-container pt-2">
       
      
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
    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
  <iframe
    title="Maguna Beach Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.027535944996!2d-117.78449572426776!3d33.54268794658636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd3940cb9f45%3A0x8c00c16a163f8ffb!2sLaguna%20Beach%2C%20CA%2092651%2C%20USA!5e0!3m2!1sen!2sus!4v1691767890987!5m2!1sen!2sus"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
  </div>
</div>
       

      <Footer />
    </>
  );
}
