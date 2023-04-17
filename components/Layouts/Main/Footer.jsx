import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-purple-900 text-white">
      <div>social icons here</div>
      <div>Links here</div>
      <div className="bg-purple-950 py-3">
        <Link href={"/"} className="hover:underline">
          &copy; Multroic{" "}
        </Link>
        {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
