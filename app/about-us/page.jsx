import Image from "next/image";
import React from "react";
import About from "./components/About";
import Mission from "./components/Mission";

const page = () => {
  return (
    <section className="">
      <div className="img w-full h-[50vh] relative">
        <Image src="/01.jpg" alt="hero" fill className="object-cover" />
        <span className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-[#0000004f]">
          <div className="w-full h-[50%] flex items-center justify-center flex-col">
            <h1 className="lg:text-[70px] md:text-[65px] sm:text-[55px] text-[55px] text-[#fff]">
              About Us
            </h1>
          </div>
        </span>
      </div>
      <About />
      <Mission />
    </section>
  );
};

export default page;
