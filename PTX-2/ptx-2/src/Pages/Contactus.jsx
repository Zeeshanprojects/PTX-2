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
     <div className="background-color">
            <h1 className="text-center">CONTACT US</h1>
        </div>
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
              rows="5"
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
      <Footer />
    </>
  );
}
