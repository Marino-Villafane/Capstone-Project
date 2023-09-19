import React from 'react';
import { useState } from 'react';

function ContactUsFooter() {
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
  const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send a request to the server)
        console.log('Form data submitted:', formData);
console.log("Works up to here")

  return (
    
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to contact us:</p>
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Your Email" onChange={handleInputChange} />
          <textarea name="message" placeholder="Your Message" onChange={handleInputChange}></textarea>
          <button type="submit">Submit</button>
        </form>
    </div>
    
  );
}
}

export default ContactUsFooter;
