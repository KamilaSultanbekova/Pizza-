import React from "react";
import Events from "../assets/eventsPhoto.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeC from "../components/HomeC";
import Aboutus from "../components/Aboutus";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HomeC />
      <Menu />
      <div className="bg-[#1a0c06]">
        <img src={Events} className="bg-[#1a0c06] w-350 mx-auto" />
      </div>
      <Aboutus />

      <Footer />
    </div>
  );
}
