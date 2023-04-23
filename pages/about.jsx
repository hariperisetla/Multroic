import React from "react";
import { AboutImg1 } from "@/assets/img/Img";
import Image from "next/image";
import Link from "next/link";
import aboutContent from "../data/main/about.json";
import { AboutImage } from "@/components/Layouts/Main/About";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold py-5 text-center text-purple-950">
        About Multroic
      </h1>
      <div className="container max-w-7xl mx-auto leading-loose font-medium text-justify space-y-24 text-xl">
        {aboutContent.map((content) => (
          <div key={content.id}>
            {content.id % 2 === 0 ? (
              <div key={content.id} className="grid grid-cols-2 gap-10">
                <AboutImage
                  img={content.img}
                  imgAuthor={content.imgAuthor}
                  imgAuthorLink={content.imgAuthorLink}
                  side={"left"}
                />
                <div className="space-y-5">
                  <h3 className="text-3xl font-bold">{content.title}</h3>
                  <p>{content.description}</p>
                </div>
              </div>
            ) : (
              <div key={content.id} className="grid grid-cols-2 gap-10">
                <div className="space-y-5">
                  <h3 className="text-3xl font-bold">{content.title}</h3>
                  <p>{content.description}</p>
                </div>
                <AboutImage
                  img={content.img}
                  imgAuthor={content.imgAuthor}
                  imgAuthorLink={content.imgAuthorLink}
                  side={"right"}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

About.layout = "MainL";

export default About;
