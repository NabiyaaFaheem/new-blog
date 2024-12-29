
import React from "react";
import { FaUsers, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 text-white py-16 px-6 lg:px-12">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-8 animate-fadeIn">
          About BlogSphere
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 animate-slideIn">
          BlogSphere is your ultimate platform for exploring creativity, innovation, and cutting-edge technologies. We aim to deliver high-quality content that inspires and empowers users to create, share, and grow in the world of blogging and tech.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-800">
            <div className="text-4xl mb-4 text-yellow-400">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Community-Driven</h3>
            <p className="text-gray-300">
              Our platform fosters a vibrant community where ideas flourish, and creativity thrives. Connect with like-minded individuals and collaborate on exciting projects.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-800">
            <div className="text-4xl mb-4 text-yellow-400">
              <FaProjectDiagram />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Innovative Projects</h3>
            <p className="text-gray-300">
              Explore a variety of innovative projects shared by our members. Get inspired, share your work, and collaborate with others to push the boundaries of creativity.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-800">
            <div className="text-4xl mb-4 text-yellow-400">
              <FaLaptopCode />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Tech Expertise</h3>
            <p className="text-gray-300">
              Stay updated with the latest in technology and development. From web design to backend programming, we offer insightful resources to help you grow as a developer.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slideInUp">Join Our Community</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Become a part of BlogSphere and start exploring, learning, and creating. Whether you re a beginner or an experienced creator, there s a place for you here.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-3 px-5 rounded-lg shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;














