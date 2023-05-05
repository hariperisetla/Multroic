import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FullLogoImg } from "@/assets/img/Img";
import { GiHamburgerMenu, IoCloseSharp } from "@/assets/icons/index";

const Header = () => {
  const menu = ["about", "blog", "games", "developers", "contact"];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setNav(!nav);
    } else return;
  };

  return (
    <header
      className={
        "z-20 flex justify-between py-3 px-5 md:px-10 fixed bg-white w-full shadow items-center flex-wrap duration-500"
      }
    >
      <Link
        href={"/"}
        className="text-3xl font-extrabold  text-purple-950"
        onClick={handleResize}
      >
        <div className="relative w-64 h-7 my-2">
          <Image
            src={FullLogoImg}
            fill
            alt="multroic logo"
            className="object-contain object-left md:object-center"
          />
        </div>
      </Link>

      <div className="md:hidden flex" onClick={handleNav}>
        {nav ? (
          <IoCloseSharp size={30} className="text-purple-950" />
        ) : (
          <GiHamburgerMenu size={25} className="text-purple-950" />
        )}
      </div>

      <ul
        className={
          nav
            ? "duration-500 w-full space-y-5 text-xl font-bold text-purple-950 py-5"
            : "hidden duration-500 md:flex items-center md:space-y-0 space-x-8 space-y-2 font-semibold text-lg text-purple-950"
        }
      >
        {menu.map((page) => (
          <li
            key={page}
            className="border-b-2 border-b-purple-100 md:border-none"
            onClick={handleResize}
          >
            <Link href={page} className="capitalize">
              {page}
            </Link>
          </li>
        ))}

        <li>
          <Link href={"/"} className="bg-purple-950 text-white p-3">
            Get Started
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
