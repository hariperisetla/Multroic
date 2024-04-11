import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutImage = ({ img, imgAuthor, imgAuthorLink, side }) => {
  return (
    <div>
      <div className="w-full h-96 relative">
        <Image
          src={img}
          fill
          placeholder="blur"
          alt={`Group of Friends Playing video game - Photo by ${imgAuthor}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
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
