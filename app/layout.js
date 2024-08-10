import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alaziz Group",
  description:
    "Alaziz Group is a dynamic and innovative conglomerate dedicated to transforming spaces and enhancing lifestyles. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A1919]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
