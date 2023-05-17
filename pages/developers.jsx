import DeveloperCard from "@/components/main/developers/DeveloperCard";
import React from "react";

const Developers = () => {
  const developers = [
    {
      id: 1,
      name: "Jane Smith",
      skills: ["React", "JavaScript", "CSS"],
      designation: "UI Designer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      github: "https://github.com/jsmith",
      linkedin: "https://www.linkedin.com/in/jsmith",
    },
    {
      id: 2,
      name: "John Doe",
      skills: ["Python", "Django", "HTML"],
      designation: "Frontend Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      github: "https://github.com/jdoe",
      linkedin: "https://www.linkedin.com/in/jdoe",
    },
    {
      id: 3,
      name: "Jane Doe",
      skills: ["JavaScript", "React", "Node.js"],
      designation: "Full-stack Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://randomuser.me/api/portraits/women/82.jpg",
      github: "https://github.com/janedoe",
      linkedin: "https://www.linkedin.com/in/janedoe",
    },
    {
      id: 4,
      name: "Bob Smith",
      skills: ["Java", "Spring Boot", "MySQL"],
      designation: "Backend Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      github: "https://github.com/bobsmith",
      linkedin: "https://www.linkedin.com/in/bobsmith",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      skills: ["Swift", "iOS", "Firebase"],
      designation: "Mobile Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://randomuser.me/api/portraits/women/61.jpg",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://www.linkedin.com/in/sarahjohnson",
    },

    // Add more developers here
  ];
  return (
    <div className="flex-grow container mx-auto my-8">
      <h1 className="text-5xl font-extrabold bg-custom-gradient text-transparent bg-clip-text text-center mb-8">
        Meet Our Developers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

Developers.layout = "MainL";

export default Developers;
