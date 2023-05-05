import React from "react";

const AboutContent = ({ content }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl font-bold">{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
};

export default AboutContent;
