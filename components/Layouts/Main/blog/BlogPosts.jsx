import React from "react";

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Improving Your Coding Skills",
      author: "John Doe",
      date: "May 1, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "The Future of Open Source Gaming",
      author: "Jane Smith",
      date: "June 15, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Building a Multiplayer Game with WebSockets",
      author: "Mark Johnson",
      date: "July 8, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "How to Use React Hooks for State Management",
      author: "Sara Lee",
      date: "August 21, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Introduction to Game Design Patterns",
      author: "David Kim",
      date: "September 10, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "The Impact of Virtual Reality on Gaming",
      author: "Catherine Chen",
      date: "October 5, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      title: "Creating Accessible Games for All",
      author: "Michael Smith",
      date: "November 18, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      title: "Debugging Tips for JavaScript Developers",
      author: "Emily Jones",
      date: "December 4, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 9,
      title: "Using CSS Grid for Responsive Web Design",
      author: "Ryan Lee",
      date: "January 15, 2024",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 10,
      title: "The Ethics of Video Game Development",
      author: "Katie Lee",
      date: "February 28, 2024",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  By <span className="font-medium">{post.author}</span> on{" "}
                  <time dateTime={post.date}>{post.date}</time>
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <p>{post.excerpt}</p>
                </div>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-purple-950 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
