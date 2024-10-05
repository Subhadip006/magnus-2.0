// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">Magnus 2.0</h1>
            <p className="mt-2 text-sm">
              © 2024 Magnus. All rights reserved. Join us for an exciting tournament experience!
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">
              Hall 11, Meghnad Hall of Residence<br />
              Durgapur, West Bengal, 713209<br />
              Phone: <a href="tel:+91999999999" className="hover:underline">+91 9999999999</a><br />
              Email: <a href="mailto:info@magnus2.0.com" className="hover:underline">info@magnus2.0.com</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-sm">
          Designed and Developed by Your Team Name
        </div>
      </div>
    </footer>
  );
};

export default Footer;
