
'use client';
import { useState } from 'react';

interface PostProps {
  title: string;
  date: string;
  excerpt: string;
  postId: string;
}

const Post: React.FC<PostProps> = ({ title, date, excerpt, postId }) => {
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment = (e.target as HTMLFormElement).comment.value;
    if (comment.trim()) {
      setComments([...comments, comment]);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <article className="bg-gray-800 p-6 mb-8 shadow-lg rounded-lg border border-gray-700">
      {/* Post Header */}
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>

      {/* Post Excerpt */}
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <a
        href={`#${postId}`}
        className="text-blue-400 hover:text-blue-500 font-medium mt-4 inline-block transition-colors duration-200"
      >
        Read More
      </a>

      {/* Comments Section */}
      <div id={postId} className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Comments</h3>
        
        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <textarea
            name="comment"
            className="w-full p-3 bg-gray-900 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            placeholder="Write your comment here..."
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
            aria-label="Submit Comment"
          >
            Submit Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="mt-6 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 p-4 rounded-md text-gray-300"
              >
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default Post;
