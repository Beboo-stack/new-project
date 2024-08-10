import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
     <div className="h-full flex-1 bg-black"></div>
      <Image
        alt=""
        width={500}
        height={500}
        src={"/01.jpg"}
        className="flex-1 h-full"
      />
    </div>
  );
};

export default page;
