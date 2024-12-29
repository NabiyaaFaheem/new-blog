
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              BlogSphere is a creative platform where ideas come to life. We share content about tech, design, and development to inspire our readers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About</a></li>
              <li><a href="#posts" className="hover:text-yellow-500">Posts</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter and stay updated on the latest posts and updates.</p>
            <div className="flex">
              <input
                type="email"
                className="w-full p-3 bg-gray-800 text-white rounded-l-lg focus:outline-none"
                placeholder="Your Email"
              />
              <button className="bg-yellow-500 text-black px-6 rounded-r-lg hover:bg-yellow-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2024 BlogSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
