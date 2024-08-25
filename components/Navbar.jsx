"use client";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navRef = useRef(null);
  useOnClickOutside(navRef, () => setToggle(null));
  return (
    <div>
      <header className="z-10 absolute top-0 left-0 w-full">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8  py-4 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block" href="/">
                <Image
                  alt="Logo"
                  width={200}
                  height={200}
                  src="/web.png"
                  className="w-[150px] "
                />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li className="hover:scale-125 transition-all">
                    <Link
                      className="text-[#ffffff] text-lg transition hover:text-white/75 "
                      href="/"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>

                  <li className="hover:scale-125 transition-all">
                    <Link
                      className="text-[#ffffff] text-lg transition hover:text-white/75"
                      href="/about-us"
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>

                  <li className="hover:scale-125 transition-all">
                    <Link
                      className="text-[#ffffff] text-lg transition hover:text-white/75"
                      href="/look-and-like"
                    >
                      {" "}
                      Look and Like{" "}
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md hidden md:block bg-[#e9ad64] px-5 py-2.5 text-lg hover:text-white/70 transition-all font-medium text-white shadow"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="block md:hidden">
                  <button
                    onClick={() => setToggle(!toggle)}
                    className="rounded  p-2 text-white transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Nav */}
            <div
              className={`absolute lg:hidden  w-screen h-screen z-[1000] transition-all duration-300 ease-in-out bg-black/85 ${
                toggle ? " left-0 top-0" : "left-[-120%] top-0"
              }`}
            >
              <div
                className="w-[calc(100%-50px)] relative h-full p-5 flex flex-col justify-center items-center bg-[#1A1919]"
                ref={navRef}
              >
                <button
                  onClick={() => setToggle(!toggle)}
                  type=""
                  className="lg:hidden hs-collapse-toggle flex justify-center items-center gap-x-2 mb-10 font-bold rounded-full bg-white/70 p-2  absolute top-5 left-5  hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={30}
                    height={20}
                    className="cursor-pointer "
                  />
                </button>
                <ul className="flex flex-col gap-5 items-center justify-center w-full ">
                  <li className="w-full text-center">
                    <Link
                      onClick={() => setToggle(!toggle)}
                      href="/"
                      className="text-2xl md:text-[15px]  xl:text-[16px]  cursor-pointer text-[#e9ad64]  hover:text-[#e9ad64]/20 font-bold"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="w-full text-center">
                    <Link
                      onClick={() => setToggle(!toggle)}
                      href="/about-us"
                      className="text-2xl md:text-[15px]  xl:text-[16px]  cursor-pointer text-[#e9ad64]  hover:text-[#e9ad64]/20 font-bold"
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="w-full text-center">
                    <Link
                      onClick={() => setToggle(!toggle)}
                      href="/look-and-like"
                      className="text-2xl md:text-[15px]  xl:text-[16px]  cursor-pointer text-[#e9ad64]  hover:text-[#e9ad64]/20 font-bold"
                    >
                      Look and Like
                    </Link>
                  </li>
                  <li className="w-full text-center">
                    <Link
                      onClick={() => setToggle(!toggle)}
                      href="/contact-us"
                      className="text-2xl md:text-[15px]  xl:text-[16px]  cursor-pointer text-[#e9ad64]  hover:text-[#e9ad64]/20 font-bold"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
