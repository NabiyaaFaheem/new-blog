
'use client'
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset submission message
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-800 text-white py-16 px-6 lg:px-12">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-8 animate-fadeIn">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 animate-slideIn">
          Wed love to hear from you! Whether you have a question, feedback, or collaboration opportunity, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="flex items-center justify-center bg-gray-900 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-800">
            <FaPhoneAlt className="text-yellow-400 text-4xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Phone</h3>
              <p className="text-gray-300">+123-456-7890</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-900 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-800">
            <FaEnvelope className="text-yellow-400 text-4xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Email</h3>
              <p className="text-gray-300">contact@blogsphere.com</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-900 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-800">
            <FaMapMarkedAlt className="text-yellow-400 text-4xl mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Address</h3>
              <p className="text-gray-300">123 BlogSphere St., Tech City</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border-2 border-yellow-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border-2 border-yellow-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border-2 border-yellow-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              {isSubmitted ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;



























