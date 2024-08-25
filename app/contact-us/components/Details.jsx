import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <div className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:px-32 lg:py-3 flex flex-col  justify-between items-center">
      {/* Text */}
      <div className="flex w-full flex-col gap-5 justify-center items-center text-[#fff]">
        <h2 className="text-2xl text-[#e9ad64]">Contacts</h2>
        <p className="text-5xl font-bold">Offices Locations</p>
        <div className="w-[5%] h-[4px] bg-[#e9ad64] my-1"></div>
        <p className="text-xl text-gray-600">
          If you have any business challenges or questions, feel free to contact
          us.
        </p>
      </div>
      {/* Image */}
      <div className="w-full h-full flex flex-col justify-center items-center mt-10">
        <Image
          src="/01.jpg"
          alt="contact"
          width={600}
          height={600}
          className="w-3/4 h-1/2 rounded-md"
        />
        <div className="flex flex-col justify-center items-start text-white">
          <h2 className="text-2xl font-bold mt-8 text-[#e9ad64]">
            Our Offices
          </h2>
          <ul className="text-lg my-8 list-disc list-inside  ">
            <li>
              Al Baba Mall, Al Khamayel Compound, next to the 6th of October
              Police Mosque
            </li>
            <li>152 Al-Taraa Street, Shubra, Egypt</li>
          </ul>
          <p className="text-xl">Phone: +880 123 456 789</p>
          <p className="text-xl">Email: xKuYt@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
