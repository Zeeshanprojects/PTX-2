import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "./Signup.style.css";
import "react-phone-input-2/lib/style.css";
import Footer from "../Components/Footer";

export default function Signup() {
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="space"></div>
      <div className="text-container pt-5">
        <h1>Create Account</h1>
        <p>Already have an account? Sign in here</p>
      </div>
      <div className="page-container ">
        {/* Centered Heading */}

        {/* Signup Container */}
        <div className="signup-container">
          <form className="signup-form">
            <p className="text-muted">Step 1 of 2</p>
            <h6 className="fw-bold">Primary Contact Details</h6>
  
            <div className="space"></div>
            <h4 className="fw-bold">Primary Contact</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <p>First Name</p>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <p>Last Name</p>
                  <input type="text" className="form-control" required />
                </div>
              </div>
            </div>
            <br />
            <p>Title</p>
            <input type="text" className="full-width" />
            <br />
            <p>Phone Number</p>
            <PhoneInput
        country={"pk"} // Set default country (Pakistan in this case)
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputStyle={{ width: "100%" ,height:"45px"}} // Make input full width
     
      />
            {/* Checkbox & Text */}
            <br />
            <div className="checkbox-container">
              <input type="checkbox" id="marketing" className="mb-1" />
              <label >
                I agree to receive marketing emails
              </label>
            </div>
            <h4>Account Credentials</h4>
            {/* Email */}
            <p>Email Address</p>
            <input type="email" className="full-width" required />
            <p className="text-muted">
              Used for account login and order notifications
            </p>
         
            <p>Conform Email Address</p>
            <input type="email" className="full-width" required />
          </form>
          <div className="buttons-container ">
            
          <button type="button " className="btn btn-light text-muted">Cancel</button>
          <button type="button" className="btn btn-light text-muted">Next</button>
          </div>
          
        </div>
      </div>
      <Footer/>
    </>
  );
}
