
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight, FaHeart, FaPlane } from "react-icons/fa";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const NewPost = () => {
  const posts: Post[] = [
    {
      id: "1",
      title: "Ecommerce Website",
      date: "Nov 17, 2024",
      excerpt:
        "An eCommerce website offers a convenient platform for businesses to showcase and sell products online, with features like secure payment options, product search, and customer reviews.",
      image: "/premium_photo-1684785618727-378a3a5e91c5.avif",
    },
    {
      id: "2",
      title: "Travel Website",
      date: "Nov 18, 2024",
      excerpt:
        "A travel website inspires exploration by offering stunning visuals, interactive maps, and easy navigation, helping users discover destinations, plan trips, and book getaways seamlessly.",
      image: "/photo-1500835556837-99ac94a94552.avif",
    },
    {
      id: "3",
      title: "Rent A Car Website",
      date: "Nov 19, 2024",
      excerpt:
        "A car rental website offers a seamless experience for booking vehicles, featuring real-time availability, easy navigation, and secure payment options.",
      image: "/photo-1515569067071-ec3b51335dd0.avif",
    },
    {
      id: "4",
      title: "Resume Builder Website",
      date: "Nov 20, 2024",
      excerpt:
        "Create professional resumes in minutes with this easy-to-use platform, helping you land your dream job with a standout resume.",
      image: "/istockphoto-667532970-612x612.jpg",
    },
    {
      id: "5",
      title: "Next.js 15 State Agency Website",
      date: "Nov 21, 2024",
      excerpt:
        "A state agency website provides citizens with streamlined access to services, resources, and public support, ensuring efficient communication.",
      image: "/real-estate-agent-offer-house-260nw-363324191.webp",
    },
    {
      id: "6",
      title: "Portfolio Website",
      date: "Nov 22, 2024",
      excerpt:
        "Showcase your work and accomplishments with this personalized portfolio website, perfect for designers, developers, and creatives.",
      image: "/premium_photo-1669648891316-ea21653a6b4a.avif",
    },
  ];

  return (
    <div id="posts" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Latest Posts
        </h2>

        {/* Category Buttons */}
        <div className="mt-12 flex justify-center gap-6 mb-12">
          <Link
            href="/lifestyle"
            className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105"
          >
            <FaHeart className="mr-3 text-xl" />
            Fitness
          </Link>
          <Link
            href="/travelling"
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105"
          >
            <FaPlane className="mr-3 text-xl" />
            Traveling
          </Link>
        </div>

        {/* Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group bg-gradient-to-br from-gray-800 via-gray-700 to-black border-2 border-gray-600 text-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-blue-400 group-hover:text-teal-400 transition-colors duration-300">
                  <span className="font-semibold">Read More</span>
                  <FaArrowCircleRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewPost;
