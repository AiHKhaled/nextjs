import Link from "next/link";
import React from "react";
import list from "../public/list.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src={list} height={77} width={77} />
          <h2 className="logoname">list</h2>
        </div>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/About">
          <a>about</a>
        </Link>
        <Link href="/lists">
          <a>lists</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
