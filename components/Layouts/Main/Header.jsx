import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FullLogoImg } from "@/assets/img/Img";
import { GiHamburgerMenu } from "@/assets/icons/index";

const Header = () => {
  return (
    <header className="z-20 flex justify-between py-3 px-5 md:px-10 fixed bg-white w-full shadow items-center">
      <Link href={"/"} className="text-3xl font-extrabold  text-purple-950">
        <div className="relative w-64 h-7 my-2">
          <Image
            src={FullLogoImg}
            fill
            alt="multroic logo"
            className="object-contain object-left md:object-center"
          />
        </div>
      </Link>

      <div>
        <GiHamburgerMenu size={25} className="text-purple-950" />
      </div>

      <ul className="hidden md:flex space-x-8 font-bold text-xl text-purple-950">
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Games</Link>
        </li>
        <li>
          <Link href={"/"}>Developers</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
        <li>
          <Link href={"/"}>Blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
