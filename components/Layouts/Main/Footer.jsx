import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FullLogoWhiteImg } from "@/assets/img/Img";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-purple-900 text-white">
      <div className="py-20 container mx-auto space-x-20 max-w-6xl grid grid-cols-4">
        <div className=" text-left">
          <div className="relative w-64 h-7 mb-3">
            <Image
              src={FullLogoWhiteImg}
              fill
              alt="multroic logo"
              className="object-contain object-left"
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
            <li className="uppercase font-bold">site links</li>
            <li>about</li>
            <li>games</li>
            <li>developers</li>
            <li>contact</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <ul className="capitalize space-y-3">
            <li className="uppercase font-bold">legal</li>
            <li>terms</li>
            <li>privacy policy</li>
            <li>terms of use</li>
            <li>license</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <ul className="capitalize space-y-3">
            <li className="uppercase font-bold">social</li>
            <li>twitter</li>
            <li>facebook</li>
            <li>instagram</li>
            <li>youtube</li>
          </ul>
        </div>
      </div>
      <div className="bg-purple-950 py-3 font-medium">
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
