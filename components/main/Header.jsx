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
        navRef.current.classList.add("bg-slate-900");
        navRef.current.classList.add("shadow-sm");
        // navRef.current.classList.add("shadow-secondary");
      } else {
        navRef.current.classList.remove("bg-slate-900");
        navRef.current.classList.remove("shadow-sm");
        // navRef.current.classList.remove("shadow-secondary");
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
        nav ? "overcroll-y-none overflow-y-scroll" : ""
      } z-20 flex justify-between py-3 px-5 md:px-10 fixed w-full shadow-sm items-center duration-200`}
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
        className={`
          ${
            nav ? "left-0" : "left-[-100%]"
          } duration-500 fixed md:static top-0 md:space-y-0 text-lg  md:space-x-8 font-semibold px-5 justify-between md:justify-normal w-full md:w-auto md:h-auto h-full md:py-0 space-y-16 md:flex py-5 items-center bg-slate-900 md:bg-transparent`}
      >
        <li
          onClick={handleNav}
          className="md:hidden w-full flex justify-end text-right"
        >
          <IoCloseSharp size={30} className="" />
        </li>
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
          <Link
            href={"/signin"}
            className="bg-custom-gradient group hover:bg-custom-gradient text-transparent bg-clip-text border-secondary border hover:border-white p-[0.70rem] hover:text-inherit"
          >
            Sign In
          </Link>
        </li>
        <li className="hover:-translate-y-[2px]">
          <Link href={"/signup"} className="bg-custom-gradient p-3">
            Get Started
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
