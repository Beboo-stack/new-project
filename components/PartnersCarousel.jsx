"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const PartnersCarousel = () => {
  const logos = [
    {
      src: "/logos/pngwing.com (1).png",
    },
    {
      src: "/logos/pngwing.com (2).png",
    },
    {
      src: "/logos/pngwing.com (3).png",
    },
    {
      src: "/logos/pngwing.com.png",
    },
  ];

  const duplicatedLogos = [...logos, ...logos];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div
      id="case-studies"
      className="w-full h-full grid justify-center items-center my-[120px]  overflow-hidden"
    >
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        onMouseEnter={plugin.current.play}
        onMouseLeave={plugin.current.reset}
        className="max-w-xs md:max-w-3xl lg:max-w-[1350px] mx-auto px-3"
      >
        <CarouselContent >
          {duplicatedLogos.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[45%] md:basis-[25%] lg:basis-[21%] "
            >
              <div className="p-1 w-[90px] h-[90px] lg:w-[150px] lg:h-[200px] flex justify-center items-center text-center">
                <Image
                  src={item.src}
                  alt="profile"
                  width={300}
                  height={300}
                  className="w-full rounded-2xl "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious arrow={`hidden `} />
        <CarouselNext arrow={`hidden `} />
      </Carousel>
    </div>
  );
};

export default PartnersCarousel;
