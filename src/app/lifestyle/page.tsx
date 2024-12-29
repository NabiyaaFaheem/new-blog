
'use client'
import React, { useState } from "react";

const Fitness = () => {
  // State to store comments
  const [comments, setComments] = useState([
    { name: "Ali", text: "This workout routine is so motivating! Can’t wait to start it." },
    { name: "Hassan", text: "The tips on meal prep are amazing. I need to try those." },
    { name: "Zara", text: "Great article! I love how fitness is emphasized not only for the body but also for the mind." },
  ]);

  // State for new comment input
  const [newComment, setNewComment] = useState("");

  // Handle form submission
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { name: "😊", text: newComment.trim() }]); // Add new comment to state
      setNewComment(""); 
    }
  };

  return (
    <div className="relative bg-gray-800 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-4 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold">Fitness and Wellness in 2024</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-black mt-8 p-6 rounded-lg shadow-xl">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              <strong>Staying Fit in 2024</strong>: Embrace Your Health Journey
            </h2>
            <p className="text-gray-100 leading-relaxed mb-4">
              In 2024, fitness isnt just about looking good  its about feeling good, both mentally and physically. Whether you re into strength training, yoga, or running, there s a workout for everyone. And with advancements in fitness tech and wellness practices, getting fit is easier and more accessible than ever.
            </p>
            <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
              Key Components of a Holistic Fitness Routine:
            </h3>
            <ul className="list-disc list-inside text-gray-100 space-y-2">
              <li><strong>Strength Training:</strong> Building muscle not only enhances physical strength but also improves metabolism and supports joint health.</li>
              <li><strong>Cardiovascular Exercise:</strong> Activities like running, cycling, and swimming help boost heart health and endurance.</li>
              <li><strong>Flexibility and Mobility:</strong> Yoga and stretching exercises prevent injuries and improve overall body flexibility.</li>
              <li><strong>Mindfulness in Fitness:</strong> Integrating mindfulness and breathing techniques into workouts reduces stress and enhances performance.</li>
              <li><strong>Rest and Recovery:</strong> Sleep and recovery periods allow muscles to repair and grow, which is essential for progress.</li>
            </ul>
            <p className="text-gray-100 leading-relaxed mt-4">
              Fitness is a lifestyle, not a temporary fix. Make it a habit, and it will transform your life. Whether you aim to lose weight, gain muscle, or simply improve mental clarity, staying consistent and motivated is the key to success.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
           
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Comments</h3>

          {/* Existing Comments */}
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-sm ${
                  index % 2 === 0
                    ? "border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
                    : "bg-gray-900 text-white"
                }`}
              >
                <p>
                  <strong>{comment.name}:</strong> {comment.text}
                </p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form className="mt-6 space-y-4" onSubmit={handleAddComment}>
            <textarea
              className="w-full p-4 border-2 text-black border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Fitness;









