import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="mt-[90px] ">
      <div className="container">
        <div className="content xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col gap-[50px]  flex  justify-center ">
          <div className="left relative flex-1 flex items-center justify-center">
            <div className="img lg:h-[550px] md:h-[550px] sm:h-[350px] h-[350px] lg:w-[90%] md:w-[95%] sm:w-[95%] w-[95%] rounded-[30px] overflow-hidden">
              <Image src="/01.jpg" alt="about" fill className="object-cover rounded-lg" />
            </div>
          </div>
          <div className="right flex-1 flex flex-col gap-[20px] items-start justify-start text-start">
            <div className="title lg:text-[25px] md:text-[25px] text-Gold">
              <h1 className="text-[#e9ad64]">WHY CHOOSE US</h1>
            </div>
            <div className="name lg:text-[45px] md:text-[62px] sm:text-[35px] text-[30px] font-bold text-[#fff]">
              <h2>Alaziz Group</h2>
            </div>
            <p className="des text-[#C6C8C9]">
              Alaziz Group is a dynamic and innovative conglomerate dedicated to
              transforming spaces and enhancing lifestyles. Our group proudly
              encompasses three specialized companies: Look and Like Furniture,
              Look and Like Interior Design, and Look and Like Thriving General
              Trade in Dubai. As pioneers in the industry, we are the first
              company entity to seamlessly combine furniture and interior
              design, offering our clients a comprehensive solution from initial
              purchase to final living arrangements. Our unwavering commitment
              to excellence drives us to deliver superior quality, exceptional
              customer service, and outstanding after-sales support.
            </p>
            <div className="numbers w-full border-t border-[#C6C8C9] grid xl:grid-cols-2 mt-[50px] lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 grid-col-1 lg:gap-[20px] md:gap-[20px] ">
              <div className="projects flex items-center justify-center gap-[25px] ">
                <h1 className="lg:text-[75px] md:text-[75px] sm:text-[55px] text-[55px]  font-bold text-[#FFF]">
                  52
                </h1>
                <p className="text-[#C6C8C9] text-[20px] tracking-widest">
                  PROJECTS COMPLETED
                </p>
              </div>
              <div className="customers flex items-center justify-center gap-[25px] ">
                <h1 className="lg:text-[75px] md:text-[75px] sm:text-[55px] text-[55px] font-bold text-[#FFF]">
                  49
                </h1>
                <p className="text-[#C6C8C9] text-[20px] tracking-widest">
                  CUSTOMER SATISFACTION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
