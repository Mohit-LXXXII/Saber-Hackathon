import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
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
import ChatModal from "./component/Outlet/ChatModal";
import ChatIcon from '@mui/icons-material/Chat';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Scroll progress hook (only active when splash screen is hidden)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

   const pulseAnimation = {
    scale: [1, 1.15, 1],
    boxShadow: [
      "0 0 0 0 rgba(5, 150, 105, 0)",
      "0 0 0 8px rgba(5, 150, 105, 0.3)",
      "0 0 0 0 rgba(5, 150, 105, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

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
            {/* Floating Chat Icon */}
            <motion.button
              className="fixed bottom-6 right-8 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2"
              onClick={() => setIsChatOpen(true)}
              aria-label="Open AI chat"
              animate={pulseAnimation}
              whileHover={{ scale: 1.1, boxShadow: "0 0 0 8px rgba(5, 150, 105, 0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChatIcon />
              <span className="text-sm font-medium">AI</span>
            </motion.button>
            {/* Chat Modal */}
            <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;