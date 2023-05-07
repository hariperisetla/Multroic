import React from "react";

const DeveloperCard = ({ developer }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={developer.avatar}
            alt={developer.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {developer.title}
          </div>
          <a
            href={developer.website}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {developer.name}
          </a>
          <p className="mt-2 text-gray-500">{developer.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
