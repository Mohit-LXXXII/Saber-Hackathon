import React, { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'motion/react';
import CloudIcon from '@mui/icons-material/Cloud';
import CycloneIcon from '@mui/icons-material/Cyclone';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import IncompleteCircleIcon from '@mui/icons-material/IncompleteCircle';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';

const About = () => {
  // State to control animation trigger
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Trusted By items array
  const trustedByItems = [
    { icon: <CloudIcon className="text-emerald-600" />, name: 'CloudWatch' },
    { icon: <CycloneIcon className="text-emerald-600" />, name: 'Nietzsche' },
    { icon: <AutoAwesomeIcon className="text-emerald-600" />, name: 'Auto Corp' },
    { icon: <IncompleteCircleIcon className="text-emerald-600" />, name: 'CraftGram' },
    { icon: <OilBarrelIcon className="text-emerald-600" />, name: 'Epicurious' },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Trusted By Section */}
      <div className="max-w-5xl mx-auto text-center mb-12" ref={sectionRef}>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Trusted by 10,000+ founders & business owners
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-lg sm:text-xl font-semibold text-gray-800">
          {trustedByItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, translateX: 100 }} // Start from the right
              animate={isVisible ? { opacity: 1, translateX: 0 } : {}} // Animate to center when visible
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.2, // Stagger by 0.2s for each item
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Headline Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
          Benton Helps Startups Automate Customer Interactions
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          From onboarding to real-time support, Benton uses conversational AI to reduce workload and keep customers engaged.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://images.wallpapersden.com/image/download/monkey-luffy-4k-one-piece-2024-art_bmdubGaUmZqaraWkpJRobWllrWdma2U.jpg")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Smart Adaptive Learning</h2>
            <p className="text-sm sm:text-base text-gray-600">
              AI that evolves with your data, continuously improving performance and adapting to new patterns.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://images.wallpapersden.com/image/download/monkey-luffy-4k-one-piece-2024-art_bmdubGaUmZqaraWkpJRobWllrWdma2U.jpg")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Smart Adaptive Learning</h2>
            <p className="text-sm sm:text-base text-gray-600">
              AI that evolves with your data, continuously improving performance and adapting to new patterns.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://images.wallpapersden.com/image/download/monkey-luffy-4k-one-piece-2024-art_bmdubGaUmZqaraWkpJRobWllrWdma2U.jpg")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Smart Adaptive Learning</h2>
            <p className="text-sm sm:text-base text-gray-600">
              AI that evolves with your data, continuously improving performance and adapting to new patterns.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://images.wallpapersden.com/image/download/monkey-luffy-4k-one-piece-2024-art_bmdubGaUmZqaraWkpJRobWllrWdma2U.jpg")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Smart Adaptive Learning</h2>
            <p className="text-sm sm:text-base text-gray-600">
              AI that evolves with your data, continuously improving performance and adapting to new patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;