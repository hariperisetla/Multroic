import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutImage = ({ img, imgAuthor, imgAuthorLink, side }) => {
  return (
    <div>
      <div className="w-full h-96 relative">
        <Image
          src={img}
          alt={`Group of Friends Playing video game - Photo by ${imgAuthor}`}
          fill
          className="object-cover "
        />
      </div>
      <p
        className={`text-base pt-3 ${
          side === "left" ? "text-left" : "text-right"
        }`}
      >
        Photo by{" "}
        <Link className="underline font-bold" href={imgAuthorLink}>
          {imgAuthor}
        </Link>
      </p>
    </div>
  );
};

export default AboutImage;
