import React from "react";
import content from "@/data/main/about/content.json";
import AboutContent from "@/components/main/about/AboutContent";
import AboutImage from "@/components/main/about/AboutImage";

const About = () => {
  return (
    <div className="mb-10">
      <h1 className="text-5xl bg-custom-gradient text-transparent bg-clip-text font-extrabold py-10 text-center">
        About Multroic
      </h1>
      <div className="container max-w-7xl  mx-auto leading-loose font-medium text-justify space-y-24 text-xl px-10 md:px-5">
        {content.map((content) => (
          <div key={content.id}>
            <div className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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

export default About;
