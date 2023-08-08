import React from "react";
import { useAuth } from "@/context/UserContext";

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <main className="container mx-auto px-5 md:px-10 flex-grow space-y-10">
      <div className="mx-auto py-4">
        {currentUser && (
          <>
            <h1 className="text-xl md:text-2xl font-semibold">
              Welcome, {currentUser.displayName || "User"}
            </h1>
            <p className="text-zinc-400">Your open-source gaming hub</p>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Getting Started */}
        <div className="bg-zinc-800 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
          <p className="text-zinc-400">
            Explore open-source projects, collaborate, and showcase your work.
            Let&apos;s get started!
          </p>
          <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">
            Start Exploring
          </button>
        </div>

        {/* Recommended Repositories */}
        <div className="bg-zinc-800 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Recommended Repositories
          </h2>
          <ul className="list-disc pl-6 text-zinc-400">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-300 cursor-pointer hover:underline">
            See More
          </p>
        </div>

        {/* Create Your First Project */}
        <div className="bg-zinc-800 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Create Your First Project
          </h2>
          <p className="text-zinc-400">
            Share your ideas, collaborate with others, and contribute to the
            open-source community.
          </p>
          <button className="mt-4 bg-green-900 text-white py-2 px-4 rounded hover:bg-green-800">
            Create Project
          </button>
        </div>

        {/* Explore Categories */}
        <div className="bg-zinc-800 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Explore Categories</h2>
          <ul className="list-disc pl-6 text-zinc-400">
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-300 cursor-pointer hover:underline">
            View All Categories
          </p>
        </div>

        {/* Community Spotlight */}
        <div className="bg-zinc-800 p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Community Spotlight</h2>
          <p className="text-zinc-400">
            Meet a featured contributor and learn about their journey in the
            open-source world.
          </p>
          <div className="flex items-center mt-4">
            {/* <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt="Contributor Avatar"
              /> */}
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-zinc-300">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Dashboard.layout = "DashboardL";

export default Dashboard;
