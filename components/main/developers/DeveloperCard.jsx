import Image from "next/image";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const DeveloperCard = ({ developer }) => {
  return (
    <div
      className="border border-slate-700 w-full flex flex-col justify-between items-center text-center align-middle 
    //bg-slate-800
    rounded-3xl space-y-3 p-5"
    >
      <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto">
        <Image
          src={developer.avatar}
          fill
          className="object-cover"
          alt={developer.name}
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold leading-6">{developer.name}</h3>
        <h4 className="text-lg text-slate-400">{developer.designation}</h4>
      </div>
      <div className="flex flex-wrap space-y-2 space-x-3 w-full justify-center items-baseline">
        {developer.skills.map((skill, id) => (
          <h5
            key={id}
            className="bg-custom-gradient rounded-xl px-3 text-sm font-medium"
          >
            {skill}
          </h5>
        ))}
      </div>
      <div>
        <p className="text-sm">{developer.bio}</p>
      </div>
      <div className="text-slate-400 flex space-x-2 flex-wrap">
        {/* social icons */}
        <AiFillLinkedin size={30} />
        <AiFillGithub size={30} />
        <AiOutlineTwitter size={30} />
        <AiOutlineInstagram size={30} />
      </div>
    </div>
  );
};

export default DeveloperCard;
