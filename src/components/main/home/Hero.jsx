import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center mt-[-4rem] h-[100vh] md:h-[100vh] items-center bg-image bg-cover bg-no-repeat bg-fixed">
      <div className="container px-5 md:pt-0 md:px-16 mx-auto flex max-w-screen-lg h-full items-center">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-7xl bg-custom-gradient text-transparent bg-clip-text font-montserrat font-extrabold leading-tight">
            Discover and Play Open-Source Games
          </h1>
          <p className="font-medium text-2xl">
            Join our community of developers and gamers to explore a variety of
            games in your browser or download them to play on your device!
          </p>

          <div className="hover:-translate-y-[2px]">
            <Link
              href={"/signup"}
              className="bg-custom-gradient text-black px-5 py-3 text-2xl font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
