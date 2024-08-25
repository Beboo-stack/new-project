import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[350px] w-[250px] md:w-[500px] md:h-[500px] lg:h-[750px] my-auto mx-auto flex justify-center items-center overflow-hidden rounded-lg sm:h-80 ">
              <Image
                alt=""
                src="/download.jpeg"
                width={1920}
                height={1080}
                className=" inset-0 h-full w-full object-cover rounded-md"
              />
            </div>

            <div className="lg:py-24 text-white">
              <h3 className="text-lg text-[#e9ad64]">About Alaziz Group</h3>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Welcome to Alaziz Group, where your dreams are brought to life
                with elegance and precision.
              </h2>
              <div className="h-1 w-14 bg-[#e9ad64] my-3"></div>

              <p className="mt-4 text-lg text-gray-600">
                We are the first company to seamlessly combine furniture and
                interior design, offering a complete journey from apartment
                purchase to move-in day. Our commitment to excellence, customer
                satisfaction, and outstanding after-sales service sets us apart
              </p>
              <p className="my-8  text-lg text-gray-600">
                Experience the Alaziz Group difference – where innovative
                design, quality craftsmanship, and a passion for creating
                beautiful, functional spaces come together. Let us transform
                your living space into a reflection of your dreams.
              </p>

              <Link
                href="/about-us"
                className="mt-8 inline-block rounded bg-[#e9ad64] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#e9ad64]/70 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
