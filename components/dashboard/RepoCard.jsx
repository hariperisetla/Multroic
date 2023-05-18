import React from "react";

const RepoCard = ({ repo }) => {
  return (
    <div
      key={repo.id}
      className="m-4 p-4 border border-slate-700 shadow-lg rounded-lg"
    >
      <h2 className="text-lg font-medium truncate">{repo.name}</h2>
      {/* <p className="text-gray-500">{repo.description}</p> */}
      <div className="flex justify-between mt-4">
        <div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View on GitHub
          </a>
        </div>
        <div className="text-gray-500 text-sm">
          <span>{repo.language}</span>
          {repo.stargazers_count > 0 && (
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.66l-4.117 2.263.787-4.595L2.927 8.57l4.6-.67L10 3.337l2.473 4.563 4.6.67-3.743 3.758.786 4.596L10 15.66z"
                  clipRule="evenodd"
                />
              </svg>
              {repo.stargazers_count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
