import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CloudIcon from '@mui/icons-material/Cloud';
import CycloneIcon from '@mui/icons-material/Cyclone';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import IncompleteCircleIcon from '@mui/icons-material/IncompleteCircle';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';

const About = () => {
  // State to control animation triggers
  const [isVisible, setIsVisible] = useState(false);
  const [isWaterFactsVisible, setIsWaterFactsVisible] = useState(false);
  const sectionRef = useRef(null);
  const waterFactsRef = useRef(null);

  // Intersection Observer to detect when sections are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run animation only once for trusted by
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    const waterFactsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWaterFactsVisible(true);
          waterFactsObserver.disconnect(); // Run animation only once for water facts
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (waterFactsRef.current) waterFactsObserver.observe(waterFactsRef.current);

    return () => {
      observer.disconnect();
      waterFactsObserver.disconnect();
    };
  }, []);

  // Trusted By items array
  const trustedByItems = [
    { icon: <CloudIcon className="text-blue-600" />, name: 'AquaTrust' },
    { icon: <CycloneIcon className="text-blue-600" />, name: 'HydroForce' },
    { icon: <AutoAwesomeIcon className="text-blue-600" />, name: 'WaterWise' },
    { icon: <IncompleteCircleIcon className="text-blue-600" />, name: 'PureFlow' },
    { icon: <OilBarrelIcon className="text-blue-600" />, name: 'EcoWave' },
  ];

  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Trusted By Section */}
      <div className="max-w-5xl mx-auto text-center mb-12" ref={sectionRef}>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Trusted by 10,000+ environmental organizations & communities
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
          Addressing the Global Water Crisis with Innovative Solutions
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Our platform leverages advanced technology to monitor, manage, and conserve water resources, ensuring sustainable access for communities worldwide.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Feature 1 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://d9s8a5p4.rocketcdn.me/wp-content/uploads/sites/3/2019/03/nanostationsmartphone_splash-Profile-image-1024x1024.jpg")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Real-Time Water Monitoring</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Advanced sensors and AI track water quality and usage, providing instant insights to prevent waste and contamination.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://img.freepik.com/premium-photo/sustainable-water-conservation-smart-irrigation-technology-ecofriendly-setting-concept-water-conservation-smart-irrigation-sustainable-technology-ecofriendly-practices_918839-243633.jpg?w=1480")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Smart Conservation Tools</h2>
            <p className="text-sm sm:text-base text-gray-600">
              AI-driven analytics optimize water distribution, reducing waste and ensuring equitable access for all.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://climatewaterequity.org/sites/default/files/clean-water-advocacy.jpg")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Community Empowerment</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Educational tools and real-time data empower communities to manage their water resources sustainably.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div
            className="w-full sm:w-1/2 h-48 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url("https://as1.ftcdn.net/v2/jpg/10/15/68/10/1000_F_1015681036_x5N9nOhkflhcwKfRLRm5aT8rdqHvKKkq.jpg")`,
            }}
          ></div>
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Global Impact Analytics</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Track and measure the impact of water conservation efforts globally with comprehensive data dashboards.
            </p>
          </div>
        </div>
      </div>

      {/* Water Facts Section */}
      <div className="relative w-full max-w-6xl mx-auto py-16 px-6" ref={waterFactsRef}>
        {/* Decorative wave background */}
        <div className="absolute inset-0 -z-10">
          <div className="h-64 w-full bg-gradient-to-b from-[#0d9488]/60 to-[#059669]/20 clip-path-wave"></div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Water Facts 💧</h2>
          <p className="text-gray-600 mt-2">Discover some refreshing insights</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            className="relative group bg-white rounded-2xl p-8 shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, translateY: 50 }}
            animate={isWaterFactsVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d9488] to-[#059669] opacity-20 group-hover:opacity-30 transition"></div>
            <span className="text-6xl block mb-4">💧</span>
            <h3 className="text-xl font-semibold text-gray-800">Hydration</h3>
            <p className="text-gray-600 mt-2 text-sm">Your body is 60% water. Staying hydrated helps everything from focus to fitness.</p>
          </motion.div>
          <motion.div
            className="relative group bg-white rounded-2xl p-8 shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, translateY: 50 }}
            animate={isWaterFactsVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#34d399] to-[#10b981] opacity-20 group-hover:opacity-30 transition"></div>
            <span className="text-6xl block mb-4">🌊</span>
            <h3 className="text-xl font-semibold text-gray-800">Oceans</h3>
            <p className="text-gray-600 mt-2 text-sm">Oceans cover 71% of Earth, producing over half of the world’s oxygen.</p>
          </motion.div>
          <motion.div
            className="relative group bg-white rounded-2xl p-8 shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, translateY: 50 }}
            animate={isWaterFactsVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] opacity-20 group-hover:opacity-30 transition"></div>
            <span className="text-6xl block mb-4">❄️</span>
            <h3 className="text-xl font-semibold text-gray-800">Ice & Snow</h3>
            <p className="text-gray-600 mt-2 text-sm">About 68% of Earth’s freshwater is locked in ice caps and glaciers.</p>
          </motion.div>
          <motion.div
            className="relative group bg-white rounded-2xl p-8 shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, translateY: 50 }}
            animate={isWaterFactsVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#f97316] opacity-20 group-hover:opacity-30 transition"></div>
            <span className="text-6xl block mb-4">☀️</span>
            <h3 className="text-xl font-semibold text-gray-800">Evaporation</h3>
            <p className="text-gray-600 mt-2 text-sm">The water cycle evaporates 1,000 cubic km of water each year.</p>
          </motion.div>
          <motion.div
            className="relative group bg-white rounded-2xl p-8 shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, translateY: 50 }}
            animate={isWaterFactsVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f472b6] to-[#ec4899] opacity-20 group-hover:opacity-30 transition"></div>
            <span className="text-6xl block mb-4">🚰</span>
            <h3 className="text-xl font-semibold text-gray-800">Access</h3>
            <p className="text-gray-600 mt-2 text-sm">Over 2 billion people still lack access to safe drinking water.</p>
          </motion.div>
          <motion.div
            className="relative group bg-white rounded-2xl p-8 shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, translateY: 50 }}
            animate={isWaterFactsVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6b7280] to-[#4b5563] opacity-20 group-hover:opacity-30 transition"></div>
            <span className="text-6xl block mb-4">🌧️</span>
            <h3 className="text-xl font-semibold text-gray-800">Rain</h3>
            <p className="text-gray-600 mt-2 text-sm">Each year, about 505,000 cubic km of water falls as precipitation worldwide.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;