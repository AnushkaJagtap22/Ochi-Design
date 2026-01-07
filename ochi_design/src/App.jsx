import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Eyes from "./components/Eyes.jsx";
import Featured from "./components/Featured.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      multiplier: 1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      id="main"
      data-scroll-container
      className="w-full min-h-screen bg-zinc-900 text-white"
    >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
