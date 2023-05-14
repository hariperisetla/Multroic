import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FullLogoGradientImg } from "@/assets/img/Img";
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
  const navRef = React.useRef();
  useEffect(() => {
    const handleScroll = () => {
      let show;

      if (location.pathname === "/") {
        show = window.scrollY > 50;
      } else {
        show = window.scrollY > 0;
      }

      if (show) {
        navRef.current.classList.add("bg-black");
        navRef.current.classList.add("border-b");
        navRef.current.classList.add("border-b-secondary");
      } else {
        navRef.current.classList.remove("bg-black");
        navRef.current.classList.remove("border-b");
        navRef.current.classList.remove("border-b-secondary");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`${
        nav ? "bg-black overcroll-y-none overflow-y-scroll" : ""
      } z-20 flex justify-between py-3 px-5 md:px-10 fixed w-full shadow items-center flex-wrap duration-200`}
    >
      <Link
        href={"/"}
        className="text-3xl font-extrabold text-purple-950"
        onClick={handleResize}
      >
        <div className="relative w-64 h-7 my-2">
          <Image
            src={FullLogoGradientImg}
            fill
            alt="multroic logo"
            className="object-contain object-left md:object-center"
          />
        </div>
      </Link>

      <div className="md:hidden flex" onClick={handleNav}>
        {nav ? (
          <IoCloseSharp size={30} className="" />
        ) : (
          <GiHamburgerMenu size={25} className="" />
        )}
      </div>

      <ul
        className={
          nav
            ? "duration-500 w-full space-y-16 text-3xl font-medium py-5 bg-black h-screen"
            : "hidden duration-500 md:flex items-center md:space-y-0 space-x-8 space-y-2 font-semibold text-lg"
        }
      >
        {menu.map((page) => (
          <li
            key={page}
            className={`border-b border-b-secondary md:border-none hover:bg-custom-gradient hover:text-transparent hover:bg-clip-text`}
            onClick={handleResize}
          >
            <Link href={page} className="capitalize">
              {page}
            </Link>
          </li>
        ))}

        <li>
          <Link href={"/"} className="bg-custom-gradient p-3">
            Get Started
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
