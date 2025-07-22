import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeC from "../components/HomeC";
import Aboutus from "../components/Aboutus";
import Menu from "../components/Menu";
import Events from "../components/Events";

export default function Home() {
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const eventsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "menu" && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "events" && eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <Navbar onScrollTo={scrollToSection} />

      <div ref={homeRef}>
        <HomeC />
      </div>


      <div ref={menuRef}>
        <Menu />
      </div>

      <div ref={eventsRef}>
        <Events />
      </div>

      <div ref={aboutRef}>
        <Aboutus />
      </div>

      <Footer />
    </div>
  );
}
