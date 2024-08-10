"use client";
import Image from "next/image";
import { useState } from "react";
const Mission = () => {
  const [view, setView] = useState("goals");
  return (
    <div className="lg:mt-[100px] md:mt-[100px] mt-[50px] ">
      <div className="container">
        <div className="content flex items-center justify-center lg:flex-row md:flex-col flex-col gap-[40px] ">
          <div className="desc flex-1 flex flex-col items-start justify-start ">
            <section className="w-full ">
              <div className="option flex items-start justify-start gap-[30px] text-[#959393]">
                <button
                  onClick={() => setView("goals")}
                  className={`${view === "goals" && "text-[#e9ad64]"} `}
                >
                  OUR GOALS
                </button>
                <button
                  onClick={() => setView("mission")}
                  className={`${view === "mission" && "text-[#e9ad64]"}`}
                >
                  OUR MISSION
                </button>
                <button
                  onClick={() => setView("vission")}
                  className={`${view === "vission" && "text-[#e9ad64]"}`}
                >
                  OUR VISION
                </button>
              </div>
              <div className="view">
                {view === "goals" && <AboutGets />}
                {view === "mission" && <MissionVeiw />}
                {view === "vission" && <Vission />}
              </div>
            </section>
          </div>
          <div className=" flex-1 h-full w-full flex items-start justify-end ">
            <div className=" founder  img h-[70%] lg:w-[100%] md:w-full w-full flex items-start justify-end relative overflow-hidden">
              <Image
                src="/01.jpg"
                alt="hero"
                width={500}
                height={500}
                className="object-cover h-full w-full rounded-lg"
              />
              <span className=" absolute  bottom-[10%] w-[0%] h-[100px] bg-mainColor flex flex-col items-start justify-center "></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionVeiw = () => {
  return (
    <div className="mt-[30px]">
      <h3 className="text-[25px] text-[#fff]">Design & implementation</h3>
      <p className="mt-[15px] text-[#706f6f]">
        At Alaziz Group, our mission is to maintain our leadership position in
        the fields of interior design, furniture, and thriving general trade. We
        are dedicated to providing innovative and integrated solutions that meet
        the evolving needs of our clients. Our goal is to continue growing and
        expanding our influence, setting new standards in quality and service
        across all our ventures.
      </p>
    </div>
  );
};

const Vission = () => {
  return (
    <div className="mt-[30px]">
      <h3 className="text-[25px] text-[#fff]"> Interior Of Tomorrow</h3>
      <p className="mt-[15px] text-[#706f6f]">
        Our vision is to be the foremost company that seamlessly integrates
        finishing and furnishing, guiding our clients through every step of
        their journey from purchasing an apartment to moving in. We strive to
        create a unified experience, ensuring that our clients enjoy a
        harmonious and stress-free transition into their new homes. By combining
        our expertise in interior design and furniture, we offer a unique and
        holistic approach to home improvement and lifestyle enhancement.
      </p>
    </div>
  );
};

const AboutGets = () => {
  return (
    <div className="mt-[30px]">
      <h3 className="text-[25px] text-[#fff]">Goals</h3>
      <p className="mt-[15px] text-[#706f6f]">
        Our goal is to make you the best design ever with our unique signature
        way in designs & also to make you feel comfortable with the best quality
        . Here we will make your dreams come true . We are doing our best to
        become the best international interior design studio
      </p>
    </div>
  );
};

export default Mission;
