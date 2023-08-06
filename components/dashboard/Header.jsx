import { ProfileImagePlaceholder } from "@/assets/img/Img";
import { useAuth } from "@/context/UserContext";
import Image from "next/image";
import React from "react";
import { HiSearch } from "react-icons/hi";

const Header = () => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <header className="flex justify-between items-center py-5 px-24 border-b border-b-zinc-800">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <div className="flex gap-3 items-center relative">
        <input
          type="text"
          className="bg-zinc-800 py-2 rounded-xl px-3 relative pr-8"
          placeholder="Search..."
        />
        <HiSearch
          size={30}
          className="absolute z-10 bg-zinc-800 right-0 p-1 text-zinc-400"
        />
      </div>
    </header>
  );
};

export default Header;
