import React from "react";
import { useState } from "react";

function ContactUsFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send a request to the server)
    console.log("Form data submitted:", formData);
  };
  console.log("Works up to here");

  return (
    <footer className="contact-us">
      <h5>Contact Us</h5>
      <p style={{fontSize:0.75 + 'em'}}>
        If you have any questions or need assistance, feel free to contact us:
      </p>
      <form style={{fontSize:0.75 + 'em'}} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInputChange}
          style={{fontSize:0.75 + 'em'}}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleInputChange}
          style={{fontSize:0.75 + 'em'}}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleInputChange}
          style={{fontSize:0.75 + 'em'}}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </footer>
  );
}

export default ContactUsFooter;
