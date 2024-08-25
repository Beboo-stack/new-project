import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
      <div className=" h-screen relative">
        <Image
          alt=""
          width={500}
          height={500}
          src={"/01.jpg"}
          className="w-full h-full "
        />
        <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply hover:opacity-0 transition-all duration-500  " />
      </div>
      <div className=" h-screen relative">
        <Image
          alt=""
          width={500}
          height={500}
          src={"/01.jpg"}
          className="w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply hover:opacity-0 transition-all duration-500  " />
      </div>  
    </div>
  );
};

export default page;
