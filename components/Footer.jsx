"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <section>
      <footer className="bg-[#1A1A1A] text-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="flex justify-center text-white">
                <Link className="block text-teal-600" href="/">
                  <span className="sr-only">Alaziz Group</span>
                  <Image
                    src="/web.png"
                    alt="Logo"
                    width={250}
                    height={250}
                    // className="w-40 h-40"
                  />
                </Link>
              </div>

              <p className=" max-w-md leading-relaxed mt-3 text-xl md:text-2xl sm:max-w-full text-center md:text-center">
                Dream and we will implement it.
              </p>

              <ul className="mt-8 flex gap-6 justify-center md:gap-8">
                <li>
                  <a
                    href="https://www.facebook.com/azizgroup2/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/El_Aziz_Group?t=t4TtlGXGlMcuyEDEO4pGFQ&s=09"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <span className="sr-only">Instagram</span>
                    <TwitterIcon />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/el-aziz-group-5a6437322/"
                    target="_blank"
                    className="text-white transition hover:text-white/75"
                  >
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 justify-center">
              <div className="text-center sm:text-left">
                <p className="text-xl font-bold text-white">Navigation</p>
                <div className="h-1 w-12 bg-[#e9ad64] mt-3"></div>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition text-base hover:text-[#e9ad64]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white transition text-base hover:text-[#e9ad64]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/look-and-like"
                      className="text-white transition text-base hover:text-[#e9ad64]"
                    >
                      Look and Like
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-white transition text-base hover:text-[#e9ad64]"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xl font-bold text-white">Contact Us</p>
                <div className="h-1 w-12 bg-[#e9ad64] mt-3"></div>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="mailto:info@digirainadvertising.com"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-white">
                        info@digirainadvertising.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <p className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-white">01225773231</span>
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-white">01099184241</span>
                    </p>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 flex-1 not-italic text-white">
                      <div className="flex flex-col "></div>
                      Address:
                      <p className="my-2">
                        {" "}
                        First: <br /> Al Baba Mall, Al Khamayel Compound, next
                        to the 6th of October Police Mosque
                      </p>
                      <p>
                        Second: <br /> 152 Al-Taraa Street, Shubra, Egypt
                      </p>
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="mt-4 text-[12px] text-gray-500 sm:order-first sm:mt-0">
                Created By{" "}
                <a
                  href="https://digirainadvertising.com/"
                  target="_blank"
                  className="hover:text-[#e9ad64] hover:underline mr-1"
                >
                  {" "}
                  DIGIRAIN
                </a>
                Company
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
