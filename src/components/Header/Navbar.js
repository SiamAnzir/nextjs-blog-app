"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    //console.log("inside");
    setToken(localStorage.getItem("token"));
  }, []);
  //console.log(token);
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <Link href="/" className="text-white">
            Blog App
          </Link>
        </div>

        <div className="space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/blog-list" className="text-white">
            Blog List
          </Link>
          <Link href={token ? "/create" : "/login"} className="text-white">
            Create Blog
          </Link>
          <Link href={token ? "/my-blogs" : "/login"} className="text-white">
            My Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
