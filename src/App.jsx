import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import Hero from "./component/Outlet/Hero";
import About from "./component/Outlet/About";
import ExploreIcon from '@mui/icons-material/Explore';
import Gallery from "./component/Outlet/Gallery";
import Tips from "./component/Outlet/Tips";
import Contact from "./component/Outlet/Contact";
import { useEffect } from "react";

function App() {
  // Scroll progress hook
  const { scrollYProgress } = useScroll();
  // Smooth animation with spring effect
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <BrowserRouter>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
        style={{ scaleX, transformOrigin: "0%", backgroundColor: "#0d9488" }}
      />
      <div className="flex flex-col justify-center bg-white min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;