import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import Hero from "./component/Outlet/Hero";
import About from "./component/Outlet/About";
import Gallery from "./component/Outlet/Gallery";
import Tips from "./component/Outlet/Tips";
import Contact from "./component/Outlet/Contact";
import SplashScreen from "./component/Outlet/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll progress hook (only active when splash screen is hidden)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <motion.div
            className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
            style={{ scaleX, transformOrigin: "0%", backgroundColor: "#0d9488" }}
          />
          <div className="flex flex-col justify-center bg-white min-h-[100vh]">
            <Routes>
              <Route
                path="/"
                element={<Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
              >
                <Route index element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tips" element={<Tips />} />
                <Route path="/gallery" element={<Gallery />} />
              </Route>
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;