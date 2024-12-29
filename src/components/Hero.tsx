
"use client";


import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToPosts = () => {
    const element = document.getElementById("posts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-4 md:px-6 lg:px-12 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug lg:leading-tight animate-fadeIn mt-36">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">BlogSphere</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200 animate-slideIn">
            Dive into creativity and innovation with our blog platform. Build your dreams with cutting-edge technologies.
          </p>
          <div className="mt-6">
            <button
              onClick={scrollToPosts}
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white py-3 px-5 md:py-4 md:px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-2 animate-bounce"
            >
              <span>Explore Posts</span>
              <FaArrowDown />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
          <div className="relative z-10">
            {/* <Image
              src="/istockphoto-691772064-612x612"
              alt="Hero"
              height={1000}
              width={1000}
              className="w-10/12 md:w-8/12 lg:w-full max-w-xs md:max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
            /> */}
          </div>
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          className="absolute top-0 left-0 w-full h-full opacity-10"
        >
          <circle cx="400" cy="300" r="300" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff9a9e", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#fad0c4", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
