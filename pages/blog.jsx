import BlogPosts from "@/components/main/blog/BlogPosts";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <BlogPosts />
    </div>
  );
};
Blog.layout = "MainL";

export default Blog;
