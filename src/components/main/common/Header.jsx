import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const menu = ["about", "blog", "games", "developers", "contact"];

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      let show;

      if (location.pathname === "/") {
        show = window.scrollY > 50;
      } else {
        show = window.scrollY > 0;
      }

      if (show) {
        navRef.current.classList.add("bg-zinc-950");
        navRef.current.classList.add("border-b");
        // navRef.current.classList.add("border-b-zinc-600");
        // navRef.current.classList.add("shadow-secondary");
      } else {
        navRef.current.classList.remove("bg-zinc-950");
        navRef.current.classList.remove("border-b");
        // navRef.current.classList.remove("border-b-zinc-600");
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
      className="z-10 sticky top-0 flex justify-between border-b-zinc-600 duration-200 py-5 px-5"
    >
      <Link
        href={"/"}
        className="text-3xl font-extrabold text-purple-950 relative w-44 h-auto"
        // onClick={handleResize}
      >
        <Image
          src={"/assets/logo-gradient.svg"}
          fill
          alt="multroic logo"
          className="object-contain object-left md:object-center"
        />
      </Link>

      <ul className="gap-8 inline-flex font-bold">
        {menu.map((page) => (
          <li key={page}>
            <Link
              href={page}
              className={`border-b border-b-secondary md:border-none hover:bg-custom-gradient hover:text-transparent hover:bg-clip-text capitalize`}
            >
              {page}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={"/signin"}
            className="`border-b border-b-secondary md:border-none hover:bg-custom-gradient hover:text-transparent hover:bg-clip-text capitalize`"
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
}
