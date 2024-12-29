





// /pages/posts/[id].tsx

import { useState } from 'react';
import { notFound } from 'next/navigation';  // For 404 handling
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  projectLink: string;
}

const getPostById = (id: string): Post | null => {
  const posts: Post[] = [
    {
      title: 'Project 1 - Makeup Website',
      date: 'Nov 17, 2024',
      content: `Step into the world of glamour and creativity with our Makeup Website...`,
      imageUrl: '/images/makeup.jpg',
      projectLink: 'https://e-commerce-s-nine.vercel.app/',
    },
    {
      title: 'Project 2 - Travel Website',
      date: 'Nov 17, 2024',
      content: `Welcome to our Car Website, the ultimate online platform for car enthusiasts...`,
      imageUrl: '/images/car.jpg',
      projectLink: 'travel-repo-pi.vercel.app',
    },
    {
      title: 'Project 3 - Food Hub Website',
      date: 'Nov 19, 2024',
      content: `Welcome to our Food Hub Website, the ultimate destination for food lovers...`,
      imageUrl: '/images/d.png',
      projectLink: 'https://food-hub-website-seven.vercel.app/',
    },
    {
      title: 'Project 4 - Resume Builder Website',
      date: 'Nov 20, 2024',
      content: `Create the perfect resume with ease using our Resume Builder Website...`,
      imageUrl: '/images/r.jpg',
      projectLink: 'https://hackathon-4-xyz.vercel.app/',
    },
    {
      title: 'Project 5 - Blog Website',
      date: 'Nov 21, 2024',
      content: `Welcome to our Next.js Blog Website...`,
      imageUrl: '/images/next.webp',
      projectLink: 'https://next-js-15-blog.vercel.app/',
    },
    {
      title: 'Project 6 - Portfolio Website',
      date: 'Nov 22, 2024',
      content: `Welcome to my Personal Portfolio Website...`,
      imageUrl: '/images/p.png',
      projectLink: 'https://sakeenaxyz.vercel.app/',
    },
  ];

  return posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) || null;
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = [
    'Project 1 - Makeup Website',
    'Project 2 - Travel Website',
    'Project 3 - Food Hub Website',
    'Project 4 - Resume Builder Website',
    'Project 5 - Blog Website',
    'Project 6 - Portfolio Website',
  ];

  const paths = posts.map((post) => ({
    params: { id: post.toLowerCase().replace(/\s+/g, '-') },
  }));

  return {
    paths,
    fallback: false, // or true if you want to support new posts
  };
}

export default function PostDetail({ post }: { post: Post | null }) {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([
    { name: 'Ali', comment: 'This is an amazing project!' },
    { name: 'Peter', comment: 'Great job! Really inspiring.' },
    { name: 'Nobita', comment: 'Love the design and functionality!' },
  ]);

  if (!post) {
    return notFound(); // Return a 404 if the post is not found
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value;
    setComments([...comments, { name, comment }]);
    form.reset();
  };

  return (
    <div className="max-w-full mx-auto p-6 relative bg-gray-900 text-white">
      <article className="relative bg-gray-900 text-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-white">{post.title}</h2>
            <br />
            <p className="text-gray-300 text-sm">{post.date}</p>
            <div className="mt-6 text-gray-100">
              <p>{post.content}</p>
              <Link
                href={post.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 mt-4 inline-block font-semibold text-lg"
              >
                Visit Project..
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={500}
              height={500}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md border-4 border-yellow-400"
            />
          </div>
        </div>

        <div className="mt-8 p-6">
          <h3 className="text-2xl font-semibold text-white">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              className="w-full p-4 border-2 text-black border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-2"
              placeholder="Your Name"
              required
            />
            <textarea
              name="comment"
              className="w-full p-4 border-2 text-black border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Add your comment here..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-yellow-500 border-2 border-yellow-600 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Submit Comment
            </button>
          </form>

          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg shadow-sm mb-4 border-2 border-purple-600"
              >
                <p className="text-yellow-400 font-semibold">{comment.name}</p>
                <p className="text-gray-300">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
