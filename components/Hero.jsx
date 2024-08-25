import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-[url(/01.jpg)] bg-cover bg-fixed bg-center bg-no-repeat ">
        <div className="absolute inset-0 bg-gray-900/50  sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex h-screen justify-center items-center lg:px-8">
          <div className="flex flex-col justify-center items-center max-w-2xl text-center ">
            <h1 className="text-5xl font-extrabold text-white sm:text-7xl">
              Welcome to Alaziz Group
            </h1>
            <p className="mt-4 max-w-lg text-[#C6C8C9] text-xl sm:text-2xl/relaxed">
              Dream and we will implement it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
