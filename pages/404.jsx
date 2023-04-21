import React from "react";
import { PageNotFoundImg } from "@/assets/img/Img";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <main className="pt-16 pb-10">
      <div className="relative w-full h-[80vh]">
        <div className="flex w-full justify-center">
          <h2 className="font-bold z-10 text-purple-950 absolute top-16 text-3xl text-center md:text-5xl">
            Sorry, Page not found!
          </h2>
          <Link
            href={"/"}
            className="block cursor-pointer absolute top-36 text-xl md:text-2xl z-10 bg-purple-950 py-2 px-5 text-white font-bold"
          >
            Go to Homepage
          </Link>
        </div>
        <Image
          src={PageNotFoundImg}
          alt="page not found image"
          fill
          className="object-contain"
        />
      </div>
    </main>
  );
};

PageNotFound.layout = "MainL";

export default PageNotFound;
