import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialMediaFooter() {
  return (
    <footer>
      <div className="social-media-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Yory Ecommerce Store. All rights
        reserved.
      </p>
    </footer>
  );
}

export default SocialMediaFooter;
