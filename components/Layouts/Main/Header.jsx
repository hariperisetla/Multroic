import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between py-3 px-10 fixed bg-white w-full">
      <Link href={"/"} className="text-3xl font-extrabold text-purple-950">
        Multroic
      </Link>
      <ul className="flex space-x-3 font-bold text-xl text-purple-950">
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Play</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
