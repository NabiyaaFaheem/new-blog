

'use client';
import React, { useState } from "react";
import Image from "next/image";

const Travel = () => {
  const [comments, setComments] = useState([
    { name: "John", text: "These travel tips are fantastic! Can't wait to explore new places!" },
    { name: "Emily", text: "Traveling is my passion, and this article has inspired me so much!" },
    { name: "Michael", text: "Great recommendations! Looking forward to more amazing destination ideas!" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { name: "🌍", text: newComment.trim() }]);
      setNewComment("");
    }
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center py-6 rounded-md shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Wanderlust Chronicles: Travel Blog
        </h1>
        <p className="mt-2 text-lg italic text-gray-200">
          Explore. Dream. Discover.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto bg-gray-800 mt-10 p-8 rounded-lg shadow-xl">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-teal-400 mb-4">
              Top 5 Travel Destinations to Visit in 2024
            </h2>
            <p className="text-gray-200 leading-relaxed mb-6">
              Traveling is not just a leisure activity; its a way to experience new cultures, cuisines, and landscapes. Here are some of the top destinations that promise adventure, relaxation, and unforgettable memories.
            </p>
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">
              Must-Visit Destinations:
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-3">
              <li><strong>Paris, France:</strong> Experience the romance of the Eiffel Tower and indulge in French cuisine.</li>
              <li><strong>Bali, Indonesia:</strong> A tropical paradise known for its serene beaches and vibrant culture.</li>
              <li><strong>Kyoto, Japan:</strong> Discover ancient temples, stunning gardens, and traditional tea ceremonies.</li>
              <li><strong>Rome, Italy:</strong> Immerse yourself in history with iconic landmarks like the Colosseum and Vatican City.</li>
              <li><strong>Banff, Canada:</strong> Explore breathtaking mountain landscapes and crystal-clear lakes.</li>
            </ul>
            <p className="text-gray-200 leading-relaxed mt-6">
              Whether its a cultural adventure in Europe or a relaxing beach trip in Asia, these destinations cater to every kind of traveler. Start planning your dream vacation today!
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/images/travel.jpg"
              alt="Travel Destinations"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            Comments
          </h3>

          {/* Existing Comments */}
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md ${
                  index % 2 === 0
                    ? "bg-gray-700 border-teal-400"
                    : "bg-gray-800 border-blue-500"
                }`}
              >
                <p className="text-gray-100">
                  <strong className="text-teal-300">{comment.name}:</strong> {comment.text}
                </p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form className="mt-8" onSubmit={handleAddComment}>
            <textarea
              className="w-full p-4 border-2 text-black border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Travel;
