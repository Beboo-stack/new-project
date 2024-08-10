import AboutUs from "@/components/AboutUs";
import Booking from "@/components/Booking";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import OurLatest from "@/components/OurLatest";
import PartnersCarousel from "@/components/PartnersCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurLatest />
      <Booking />
      <PartnersCarousel />
      <Form />
    </div>
  );
}
