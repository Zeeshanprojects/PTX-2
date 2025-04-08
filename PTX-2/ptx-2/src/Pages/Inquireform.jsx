import React from 'react'
import Footer from '../Components/Footer'
export default function Inquireform() {
  return (
   <>
     <div className="contact-container pt-5">
         <h1 className="text-center">INQUIRE FORM</h1>
         <form className="contact-form">
           <div className="form-groups">
          
             <input type="text" placeholder=" NAME" required />
           </div>
           <div className="form-groups">
         
             <input type="email" placeholder="EMAIL" required />
           </div>
           <div className="form-groups">
         
         <input type="text" placeholder="REQUIREMENT" required />
       </div>
           <div className="form-groups">
      
             <textarea placeholder="DESCRIPTION" rows="5" required></textarea>
           </div>
           <button type="submit" className="btn btn-dark">Send</button>
         </form>
       </div>
       <Footer/>
   </>
  )
}
