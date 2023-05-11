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
    <div className="space-y-8 pb-10">
      <h1 className="text-5xl leading-relaxed text-center font-extrabold bg-custom-gradient text-transparent bg-clip-text">
        Blog
      </h1>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 px-10 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border overflow-hidden shadow rounded-lg divide-y divide-gray-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-bold bg-custom-gradient text-transparent bg-clip-text">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm">
                  By <span className="font-medium">{post.author}</span> on{" "}
                  <time dateTime={post.date}>{post.date}</time>
                </p>
                <div className="mt-4 text-sm">
                  <p>{post.excerpt}</p>
                </div>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <button className="custom-button">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
