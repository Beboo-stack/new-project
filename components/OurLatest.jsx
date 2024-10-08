"use client";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

const OurLatest = () => {
  const [data, setData] = useState([]);

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    enviroment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIROMENT,
  });

  const fetchData = async () => {
    const res = await client.getEntries({ content_type: "ourLatest" });
    setData(res.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mb-10">
      {/* Text */}
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold sm:text-5xl text-[#e9ad64]">
          Our Latest Launches
        </h1>
        <p className="my-16 text-xl w-[80%] text-gray-500">
          Alaziz Group has a well-established reputation for tackling
          sophisticated and diversified projects. From sprawling residential or
          commercial developments to cutting-edge industrial facilities, our
          extensive experience ensures we are well-equipped for any challenge.
        </p>
      </div>
      <h2 className="text-3xl font-bold sm:text-2xl mb-8 text-center text-white">
        Check out our latest projects
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 ">
        {data.map((project, index) => (
          <div key={index} className="relative hover:scale-105 transition-all">
            <div className="flex gap-2">
              <CircleCheck
                className={`${
                  project?.fields?.checkState.toLowerCase() === "running"
                    ? "text-[#e9ad64]"
                    : "text-green-500"
                } mb-2`}
              />
              <p className="text-gray-600 uppercase">
                {project?.fields?.checkState}
              </p>
            </div>
            <div className="relative rounded-md">
              <Image
                alt=""
                src={"https:" + project?.fields?.image?.fields?.file?.url}
                width={500}
                height={500}
                className="w-full h-64 object-cover sm:h-80 lg:h-96 rounded-lg  "
              />

              <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply hover:opacity-0 transition-all duration-300 rounded-lg " />
            </div>
            <div className="absolute rounded-sm flex flex-col justify-center items-center bottom-[20%] md:bottom-[15%] left-[5%] bg-slate-300 w-[90%] min-h-[20%]">
              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                {project?.fields?.title}
              </h3>
              <p className="my-3 text-center text-gray-700">
                {project?.fields?.type}
              </p>
            </div>
            <p className="mt-24 text-gray-500 text-center">
              {project?.fields?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLatest;
