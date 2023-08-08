import { ProfileImagePlaceholder } from "@/assets/img/Img";
import { useAuth } from "@/context/UserContext";
import Image from "next/image";
import React from "react";
import { HiSearch } from "react-icons/hi";
import { LogoIcon } from "@/assets/img/Img";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = ({ setSideBar, sideBar }) => {
  const { currentUser } = useAuth();

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <header className="flex justify-between items-center py-5 px-5 md:px-24 border-b border-b-zinc-800">
      <Image
        src={LogoIcon}
        alt="Logo Icon"
        width={30}
        height={30}
        className="md:hidden"
      />
      <div>
        <h2 className="md:text-2xl font-bold">Dashboard</h2>
      </div>

      <div className="flex gap-3 items-center">
        <div className="hidden md:flex gap-3 items-center relative">
          <input
            type="text"
            className="bg-zinc-800 py-2 text-sm md:text-lg rounded-xl px-3 relative pr-5 md:pr-8"
            placeholder="Search..."
          />
          <HiSearch className="absolute text-2xl md:text-3xl z-10 bg-zinc-800 right-0 p-1 text-zinc-400" />
        </div>
        <HiSearch className="text-3xl p-1 text-zinc-400 md:hidden" />
        <div
          className="bg-zinc-800 md:hidden p-2 rounded-full"
          onClick={handleSideBar}
        >
          {sideBar ? (
            <AiOutlineClose className="text-xl" />
          ) : (
            <AiOutlineMenu className="text-xl" />
          )}
        </div>
        <div className="relative w-[2.1rem] h-[2.1rem] md:w-10 md:h-10">
          <Image
            src={currentUser?.photoURL}
            alt="Profile picture"
            fill
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
