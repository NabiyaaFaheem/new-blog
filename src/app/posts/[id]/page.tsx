

'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  projectLink: string;
}


import React from 'react';

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);


  const post: Post | null = getPostById(id);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([
    { name: 'Ali', comment: 'This is an amazing project!' },
    { name:'ahmed', comment: ' Really inspiring.' },
    { name: 'affan', comment: 'Love the design and functionality!' },
  ]);

  if (!post) {
    return notFound(); 
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
      <article className=" relative bg-gray-900 text-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Content */}
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

          {/* Right Section: Image */}
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

        {/* Comment Section */}
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

          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className=" bg-gray-900  p-4 rounded-lg shadow-sm mb-4 border-2 border-purple-600"
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


const getPostById = (id: string) => {
  const posts: Post[] = [
    {
      title: 'Project 1 - Ecommerce',
      date: 'Nov 11, 2024',
      content: `An eCommerce website offers a convenient platform for businesses to showcase and sell products online, with features like secure payment options, product search, and customer reviews, providing a seamless shopping experience for users.`,
      imageUrl: '/premium_photo-1684785618727-378a3a5e91c5.avif',
      projectLink: 'https://ecomm-khaki.vercel.app/',
    },
    {
      title: 'Project 2 - Travel Website',
      date: 'Nov 17, 2024',
      content: `Creating a captivating travel website is essential for inspiring wanderlust and helping travelers plan their adventures. With stunning visuals, interactive maps, and easy navigation, a well-designed travel site can guide users to explore new destinations, discover hidden gems, and book their next getaway seamlessly. By integrating useful features like weather updates, user reviews, and destination guides, you can enhance the travel experience and ensure your website becomes the go-to platform for anyone seeking their next journey. Whether you're a travel blogger or a business, an engaging, user-friendly website can truly elevate the travel experience.







`,
      imageUrl: '/photo-1500835556837-99ac94a94552.avif',
      projectLink: 'https://travel-repo-pi.vercel.app/',
    },    
    {
      title: 'Project 3 - Rent a car Website',
      date: 'Nov 19, 2024',
      content: `A well-designed car rental website is crucial for providing a seamless, hassle-free experience for users looking to rent a vehicle. By offering an easy-to-navigate platform with clear information on available cars, prices, and rental policies, you can ensure customers find exactly what they need. Adding features like real-time availability, location filters, and quick booking options can further enhance the user experience, making it easier for travelers or locals to secure the perfect vehicle for their needs. With an intuitive interface, secure payment options, and detailed vehicle descriptions, your car rental website can become the go-to service for anyone in need of a reliable ride.`,
      imageUrl: '/photo-1515569067071-ec3b51335dd0.avif',
      projectLink: 'https://hackathonn-kappa.vercel.app/',
    },
  {
  title: 'Project 4 - Resume Builder Website',
  date: 'Nov 20, 2024',
  content: `Create the perfect resume with ease using our Resume Builder Website. Designed for job seekers, professionals, and students, this platform helps you build a polished and professional resume in just a few simple steps. Whether your a seasoned expert or just starting your career, our tool simplifies the resume creation process and provides helpful templates and suggestions to highlight your skills and experience.

  Our website offers a variety of customizable resume templates that suit different industries and job types. You can easily choose a template, input your personal details, work experience, education, skills, and certifications, and watch your resume come to life. The platform also offers real-time previews, so you can instantly see how your resume looks as you make changes.

  Not only does our Resume Builder provide ready-made templates, but it also offers valuable tips for writing impactful resumes. With guidance on everything from writing effective bullet points to choosing the right keywords for Applicant Tracking Systems (ATS), we ensure your resume stands out to potential employers.

  Whether your crafting your first resume or updating your current one, our Resume Builder Website gives you the tools to create a professional resume that will impress hiring managers and increase your chances of landing the job you want.`,
  imageUrl: '/istockphoto-667532970-612x612.jpg',
  projectLink: 'https://my-hackathon-silk.vercel.app/',
},
{
  title: 'Project 5 - State agency',
  date: 'Nov 21, 2024',
  content: `A well-structured state agency website serves as a crucial resource for citizens, offering easy access to important services, information, and resources. With a user-friendly interface, clear navigation, and an organized layout, visitors can quickly find what they need, whether it’s applying for permits, renewing licenses, or accessing government services. By incorporating features like online forms, FAQ sections, and contact details, a state agency website can streamline processes, reduce waiting times, and improve communication with the public. Providing up-to-date news, policies, and resources ensures the site remains an effective tool for supporting the community and meeting their needs efficiently.
`,
  imageUrl: '/real-estate-agent-offer-house-260nw-363324191.webp',
  projectLink: 'https://html-agency-website.vercel.app/',
},

{
  title: 'Project 6 - portfolio',
  date: 'Nov 22, 2024',
  content: `Welcome to my **Personal Portfolio Website**, a creative space where I showcase my skills, projects, and experiences as a **web developer**. Designed with a clean, modern look, this portfolio reflects my passion for coding, design, and continuous learning. Whether you're a potential employer, client, or fellow developer, my portfolio provides an overview of my work, technical abilities, and personal journey in the world of development.

  On this website, you'll find a collection of **projects I have worked on, from small personal projects to professional web applications. Each project is accompanied by detailed descriptions, challenges faced, and solutions implemented, giving you a comprehensive understanding of my capabilities. 

  The portfolio is designed to be user-friendly and responsive, ensuring it looks great on any device, whether it's a desktop, tablet, or mobile phone. I have used Next.js for its optimized performance, smooth navigation, and SEO-friendly architecture, ensuring that my website is fast and easy to find.

  In addition to my projects, you can learn more about my skills, including technologies like JavaScript, React, Next.js, and Tailwind CSS. I have also included a contact form for anyone looking to get in touch for collaborations, job opportunities, or just to have a conversation about tech.

  Whether you are here to check out my work or just to get to know me better, my Personal Portfolio Website is the perfect way to see how I can help bring your next project to life.`,
  imageUrl: '/premium_photo-1669648891316-ea21653a6b4a.avif',
  projectLink: 'https://portfolio-blond-tau-37.vercel.app/',
},

  ];

  return posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) || null;
};


