import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to install if not done
import Footer from '../Components/Footer';

export default function Inquireform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
    description: ''
  });

  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ptxapi.io/api/inquireform', formData);
      if (response.data.success) {
        setStatus('Your inquiry has been sent successfully.');
        setFormData({ name: '', email: '', requirement: '', description: '' }); // Clear form
      } else {
        setStatus('Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="contact-container pt-5">
        <h1 className="text-center">INQUIRE FORM</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-groups">
            <input
              type="text"
              name="name"
              placeholder="NAME"
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
            <input
              type="text"
              name="requirement"
              placeholder="REQUIREMENT"
              required
              value={formData.requirement}
              onChange={handleChange}
            />
          </div>
          <div className="form-groups">
            <textarea
              name="description"
              placeholder="DESCRIPTION"
              rows="5"
              required
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark">Send</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
      <Footer />
    </>
  );
}
