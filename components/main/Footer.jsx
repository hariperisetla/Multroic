import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FullLogoGradientImg, FullLogoWhiteImg } from "@/assets/img/Img";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 text-white flex flex-col items-center justify-center pt-10 border-t border-t-slate-700 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl p-10 md:p-20 space-y-10 md:space-y-0 md:space-x-20">
        <div className="text-center md:text-left w-full flex flex-col justify-center">
          <div className="relative w-full md:w-64 h-7 mb-3">
            <Image
              src={FullLogoGradientImg}
              fill
              alt="multroic logo"
              className="object-contain object-center md:object-left"
            />
          </div>
          <div className="font-medium">
            Created by{" "}
            <Link
              target="_blank"
              href={"https://hariperisetla.github.io"}
              className="underline text-purple-100"
            >
              Hari Perisetla
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left">
          <ul className="capitalize space-y-3">
            <li className="uppercase font-extrabold bg-custom-gradient text-transparent bg-clip-text">
              site links
            </li>
            <li>about</li>
            <li>games</li>
            <li>developers</li>
            <li>contact</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <ul className="capitalize space-y-3">
            <li className="uppercase font-extrabold bg-custom-gradient text-transparent bg-clip-text">
              legal
            </li>
            <li>terms</li>
            <li>privacy policy</li>
            <li>terms of use</li>
            <li>license</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <ul className="capitalize space-y-3">
            <li className="uppercase font-extrabold bg-custom-gradient text-transparent bg-clip-text">
              social
            </li>
            <li>twitter</li>
            <li>facebook</li>
            <li>instagram</li>
            <li>youtube</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center py-3 font-medium border-t border-t-slate-700">
        &copy; {currentYear}{" "}
        <Link
          href={"/"}
          className="hover:underline uppercase font-bold underline"
        >
          Multroic{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
