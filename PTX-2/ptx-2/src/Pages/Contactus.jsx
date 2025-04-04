import { useEffect } from "react";
import React from "react";
import "./ContactUs.style.css"; // Make sure to use this CSS file
import Footer from "../Components/Footer";

export default function ContactUs() {
  useEffect(()=>{
    document.title="Contact - Pakistan Textile Exchnage"
  })
  return (
    <>
   
     <div className="contact-container pt-5">
      <h1 className="text-center">Contact Us</h1>
      <form className="contact-form">
        <div className="form-groups">
       
          <input type="text" placeholder="FULL NAME" required />
        </div>
        <div className="form-groups">
      
          <input type="email" placeholder="EMAIL" required />
        </div>
        <div className="form-groups">
   
          <textarea placeholder="MESSAGE" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
   
  );
}
