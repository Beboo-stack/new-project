import { CircleCheck } from "lucide-react";
import Image from "next/image";

const OurLatest = () => {
  const projects = [
    {
      image: "/01.jpg",
      title: "Project 1",
      type: "RESIDENTIAL",
      description:
        " skeleton - semi-finished - fully finished - MEP works - basement - finishing works",
      check: <CircleCheck className=" mb-2 text-[#e9ad64]" />,
      check_State: "RUNNING",
    },
    {
      image: "/01.jpg",
      title: "Project 2",
      type: "RESIDENTIAL",
      description:
        " skeleton - semi-finished - fully finished - MEP works - basement - finishing works",
      check: <CircleCheck className="text-green-500 mb-2" />,
      check_State: "DELIVERED",
    },
    {
      image: "/01.jpg",
      title: "Project 3",
      type: "RESIDENTIAL",
      description:
        " skeleton - semi-finished - fully finished - MEP works - basement - finishing works",
      check: <CircleCheck className="mb-2 text-[#e9ad64]" />,
      check_State: "RUNNING",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mb-10">
      {/* Text */}
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold sm:text-5xl text-[#e9ad64]">
          Our Latest Launches
        </h1>
        <p className="my-16 text-xl w-[80%] text-gray-500">
          Hills Construction has a well-established reputation for tackling
          sophisticated and diversified projects. From sprawling residential or
          commercial developments to cutting-edge industrial facilities, our
          extensive experience ensures we're well-equipped for any challenge.
        </p>
      </div>
      <h2 className="text-3xl font-bold sm:text-2xl mb-8 text-center text-white">
        Check out our latest projects
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 ">
        {projects.map((project, index) => (
          <div key={index} className="relative hover:scale-105 transition-all">
            <div className="flex gap-2">
              {project.check}
              <p className="text-gray-600">{project.check_State}</p>
            </div>
            <div className="relative  ">
              <Image
                alt=""
                src={project.image}
                width={500}
                height={500}
                className="w-full h-64 object-cover sm:h-80 lg:h-96 rounded-md bg-gray-900/50 "
              />

              <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply hover:opacity-0 transition-all duration-300  " />
            </div>
            <div className="absolute flex flex-col justify-center items-center bottom-[20%] md:bottom-[15%] left-[5%] bg-slate-300 w-[90%] min-h-[20%]">
              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                {project.title}
              </h3>
              <p className="my-3 text-center text-gray-700">{project.type}</p>
            </div>
            <p className="mt-24 text-gray-500 text-center">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLatest;
