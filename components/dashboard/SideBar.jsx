import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillProject } from "react-icons/ai";
import { FullLogoGradientImg } from "@/assets/img/Img";
import {
  MdDashboard,
  MdExplore,
  MdFavorite,
  MdLeaderboard,
  MdLogout,
  MdOutlineHistory,
  MdPerson,
} from "react-icons/md";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import { ProfileImagePlaceholder } from "@/assets/img/Img";
import { useAuth } from "@/context/UserContext";

const SideBar = () => {
  const { currentUser, logout } = useAuth();

  const menuItems = [
    ["dashboard", <MdDashboard key={1} size={25} />],
    ["explore", <MdExplore key={1} size={25} />],
    ["my projects", <AiFillProject key={1} size={25} />],
    ["favourites", <MdFavorite key={1} size={25} />],
    // ["contribution history", <MdOutlineHistory key={1} size={25} />],
    ["leaderboard", <MdLeaderboard key={1} size={25} />],
  ];

  return (
    <div className="bg-zinc-800 fixed w-64 h-screen space-y-10 flex flex-col">
      <Link
        href={"/"}
        // onClick={handleResize}
      >
        <div className="relative px-5 my-5">
          <Image
            src={FullLogoGradientImg}
            width={0}
            height={0}
            alt="multroic logo"
            className="object-contain object-left md:object-center"
          />
        </div>
      </Link>

      <div className="space-y-5">
        <div className="relative px-5 space-y-5 text-center justify-center w-full flex flex-col items-center">
          <Image
            src={`${
              currentUser && currentUser.photoURL
                ? currentUser.photoURL
                : ProfileImagePlaceholder.src
            }`}
            width={150}
            height={150}
            alt="Profile Image"
            className="object-cover rounded-full object-top"
          />

          <h5 className="text-lg font-bold">
            {currentUser && currentUser.displayName}
          </h5>
        </div>

        <ul className="flex w-full gap-2 justify-center px-5">
          <Link href={"/"}>
            <li className="bg-zinc-900 p-2">
              <MdPerson size={25} />
            </li>
          </Link>

          <Link href={"/"}>
            <li className="bg-zinc-900 p-2">
              <IoMdNotifications size={25} />
            </li>
          </Link>

          <Link href={"/"}>
            <li className="bg-zinc-900 p-2">
              <IoMdSettings size={25} />
            </li>
          </Link>

          <Link href={"/"}>
            <li className="bg-zinc-900 p-2">
              <BiSolidHelpCircle size={25} />
            </li>
          </Link>

          <button onClick={logout}>
            <li className="bg-red-900 p-2">
              <MdLogout size={25} />
            </li>
          </button>
        </ul>
      </div>

      <ul className="space-y-2 text-lg capitalize px-2">
        {menuItems.map((item, index) => (
          <Link className="" href={item} key={index}>
            <li className="hover:bg-zinc-900 px-3 py-3 rounded-xl flex gap-2">
              {item[1]}
              {item[0]}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
