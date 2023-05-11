import DeveloperCard from "@/components/main/developers/DeveloperCard";
import React from "react";

const Developers = () => {
  const developers = [
    {
      id: 1,
      name: "Jane Smith",
      skills: ["React", "JavaScript", "CSS"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      github: "https://github.com/jsmith",
      linkedin: "https://www.linkedin.com/in/jsmith",
    },
    {
      id: 2,
      name: "John Doe",
      skills: ["Python", "Django", "HTML"],
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      github: "https://github.com/jdoe",
      linkedin: "https://www.linkedin.com/in/jdoe",
    },
    // Add more developers here
  ];
  return (
    <div className="flex-grow container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Meet Our Developers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

Developers.layout = "MainL";

export default Developers;
