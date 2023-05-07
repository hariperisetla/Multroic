import React from "react";
import { AboutImg1 } from "@/assets/img/Img";
import Image from "next/image";
import Link from "next/link";
import aboutContent from "../data/main/about.json";
import { AboutImage } from "@/components/Layouts/main/about";
import AboutContent from "@/components/Layouts/main/about/AboutContent";

const About = () => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-extrabold py-10 text-center text-purple-950">
        About Multroic
      </h1>
      <div className="container max-w-7xl mx-auto leading-loose font-medium text-justify space-y-24 text-xl px-5">
        {aboutContent.map((content) => (
          <div key={content.id}>
            <div
              key={content.id}
              className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <AboutImage
                img={content.img}
                imgAuthor={content.imgAuthor}
                imgAuthorLink={content.imgAuthorLink}
                side={"left"}
              />
              <AboutContent content={content} />
            </div>

            {content.id % 2 === 0 ? (
              <div
                key={content.id}
                className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                <AboutImage
                  img={content.img}
                  imgAuthor={content.imgAuthor}
                  imgAuthorLink={content.imgAuthorLink}
                  side={"left"}
                />
                <AboutContent content={content} />
              </div>
            ) : (
              <div
                key={content.id}
                className=" hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                <AboutContent content={content} />
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
