import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // State for reveal animations
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isTopSectionVisible, setIsTopSectionVisible] = useState(false);
  const [isBottomSectionVisible, setIsBottomSectionVisible] = useState(false);
  const [isCardSectionVisible, setIsCardSectionVisible] = useState(false);
  // Refs for sections
  const headingRef = useRef(null);
  const topSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const cardSectionRef = useRef(null);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headingRef.current && entry.isIntersecting) {
            setIsHeadingVisible(true);
            observer.unobserve(headingRef.current);
          }
          if (entry.target === topSectionRef.current && entry.isIntersecting) {
            setIsTopSectionVisible(true);
            observer.unobserve(topSectionRef.current);
          }
          if (entry.target === bottomSectionRef.current && entry.isIntersecting) {
            setIsBottomSectionVisible(true);
            observer.unobserve(bottomSectionRef.current);
          }
          if (entry.target === cardSectionRef.current && entry.isIntersecting) {
            setIsCardSectionVisible(true);
            observer.unobserve(cardSectionRef.current);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of element is visible
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (topSectionRef.current) observer.observe(topSectionRef.current);
    if (bottomSectionRef.current) observer.observe(bottomSectionRef.current);
    if (cardSectionRef.current) observer.observe(cardSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={isHeadingVisible ? { opacity: 1, translateY: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-900 mb-7">
          Innovative Water Solutions
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-emerald-700 mb-5">
          For a Sustainable Future
        </h1>
      </motion.div>

      {/* Top Section: Text and Image */}
      <motion.div
        className="flex flex-col justify-between p-4 w-full max-w-5xl mx-auto rounded-xl mb-12"
        initial={{ opacity: 0 }}
        animate={isTopSectionVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div
          className="flex flex-col md:flex-row justify-between p-4 h-auto min-h-[12rem] gap-4 rounded-xl"
          ref={topSectionRef}
        >
          <motion.div
            className="flex flex-col px-6 w-full md:w-[50%] shadow-md bg-white rounded-xl py-4"
            initial={{ opacity: 0, translateX: -50 }}
            animate={isTopSectionVisible ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="my-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900">
              Water Purification
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Our advanced filtration systems remove contaminants, ensuring safe drinking water for communities worldwide.
            </p>
            <h2 className="my-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900">
              Smart Monitoring
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Real-time sensors track water quality and usage, empowering users to make data-driven conservation decisions.
            </p>
            <h2 className="my-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900">
              Conservation Tools
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              AI-driven analytics optimize water distribution, reducing waste and promoting equitable access.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-[50%] bg-cover bg-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/16/59/d3/1659d31ac78aa267e53b803aeb0659d4.jpg")`,
            }}
            initial={{ opacity: 0, translateX: 50 }}
            animate={isTopSectionVisible ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Bottom Section: Image Gallery */}
      <motion.div
  className="flex flex-col sm:flex-row justify-around p-4 w-full max-w-5xl mx-auto rounded-xl mb-12"
  initial={{ opacity: 0 }}
  animate={isBottomSectionVisible ? { opacity: 1 } : {}}
  transition={{ duration: 0.8 }}
>
  <div
    className="flex flex-col sm:flex-row justify-around p-4 h-[20vmin] sm:h-[50vmin] gap-4 rounded-xl"
    ref={bottomSectionRef}
  >
    <motion.div
      className="w-full sm:w-[33%] bg-cover bg-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")`, // Water drop
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isBottomSectionVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
    <motion.div
      className="w-full sm:w-[33%] bg-cover bg-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1505455184862-554a3b3e18eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")`, // Ocean
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isBottomSectionVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
    <motion.div
      className="w-full sm:w-[33%] bg-cover bg-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Glacier_Bay_National_Park%2C_Alaska.jpg/1280px-Glacier_Bay_National_Park%2C_Alaska.jpg")`, // Glacier
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isBottomSectionVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
    />
  </div>
</motion.div>

      {/* New Card Section */}
      <motion.div
        className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative mb-12"
        initial={{ opacity: 0 }}
        animate={isCardSectionVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        ref={cardSectionRef}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d9488]/20 to-[#059669]/10 clip-path-wave" />
        <motion.div
          className="relative bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center h-52 text-center"
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCardSectionVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-r from-[#0d9488] to-[#059669]" />
          <span className="text-5xl mb-3">💧</span>
          <h3 className="text-lg font-semibold text-gray-800">Hydration</h3>
          <p className="text-sm text-gray-600 mt-2">Keep your body refreshed with daily water intake.</p>
        </motion.div>
        <motion.div
          className="relative bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center h-52 text-center"
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCardSectionVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-r from-[#34d399] to-[#10b981]" />
          <span className="text-5xl mb-3">🌿</span>
          <h3 className="text-lg font-semibold text-gray-800">Nature</h3>
          <p className="text-sm text-gray-600 mt-2">Connect with nature for a balanced lifestyle.</p>
        </motion.div>
        <motion.div
          className="relative bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center h-52 text-center"
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCardSectionVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-r from-[#0d9488] to-[#059669]" />
          <span className="text-5xl mb-3">🔥</span>
          <h3 className="text-lg font-semibold text-gray-800">Water Efficiency</h3>
          <p className="text-sm text-gray-600 mt-2">Optimize water use with smart technology to save resources daily.</p>
        </motion.div>
        <motion.div
          className="relative bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center h-52 text-center"
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCardSectionVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-r from-[#0d9488] to-[#059669]" />
          <span className="text-5xl mb-3">🌙</span>
          <h3 className="text-lg font-semibold text-gray-800">Eco Balance</h3>
          <p className="text-sm text-gray-600 mt-2">Restore ecosystems with sustainable water management practices.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;