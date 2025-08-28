import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousal';

// Water-themed data for the animated stats section
const waterStats = [
  { emoji: '💧', title: '8L Saved', description: 'Average daily water savings per user.', bgColor: 'from-blue-400 to-blue-600' },
  { emoji: '🌎', title: '3K+ Users', description: 'Global community conserving water.', bgColor: 'from-teal-400 to-teal-600' },
  { emoji: '🚰', title: '15% Less', description: 'Reduced tap water waste.', bgColor: 'from-cyan-400 to-cyan-600' },
  { emoji: '🌊', title: 'Eco Goals', description: 'Promoting sustainable habits.', bgColor: 'from-indigo-400 to-indigo-600' },
];

const Hero = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current && entry.isIntersecting) {
            setIsTextVisible(true);
            observer.unobserve(textRef.current);
          }
          if (entry.target === statsRef.current && entry.isIntersecting) {
            setIsStatsVisible(true);
            observer.unobserve(statsRef.current);
          }
          if (entry.target === cardsRef.current && entry.isIntersecting) {
            setIsCardsVisible(true);
            observer.unobserve(cardsRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  // Variants for the animated stats cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className="flex flex-col items-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Text Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        ref={textRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={isTextVisible ? { opacity: 1, translateY: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700 mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every Drop Counts
        </motion.h1>
        <div className="space-y-4 text-gray-600">
          {[
            'Our water tracker empowers you to monitor daily water usage, from drinking to showering, helping you make informed choices to conserve water and combat the global water crisis.',
            'At BlueDrop, we’re dedicated to sustainable water management, providing tools that enable communities worldwide to reduce waste and ensure equitable access to this vital resource.',
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={isTextVisible ? { opacity: 1, translateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Animated Stats Section */}
      <motion.div
        className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative"
        ref={statsRef}
      >
        {/* Wave Background */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
            clipPath: 'path("M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z")',
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={isStatsVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        {waterStats.map(({ emoji, title, description, bgColor }, i) => (
          <motion.div
            key={i}
            className="relative bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center h-52 w-full text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3 }}
            variants={cardVariants}
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            dragElastic={0.3}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className={`absolute inset-0 rounded-xl opacity-20 bg-gradient-to-r ${bgColor}`} />
            <span className="text-5xl mb-3">{emoji}</span>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          </motion.div>
        ))}
      </motion.div>

        <Carousel/>
      {/* Images and Stats Section */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" ref={cardsRef}>
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCardsVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="bg-blue-200 text-violet-950 rounded-2xl p-6 flex flex-col justify-between h-48 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isCardsVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold">10L</h2>
            <p className="text-sm sm:text-base">We help to save up to 10L water through our water tracker</p>
          </motion.div>
          <motion.div
            className="h-64 bg-cover bg-center rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url("https://images.hdqwalls.com/wallpapers/water-drop-closeup-macro-4k-1x.jpg")`,
            }}
            initial={{ opacity: 0, translateX: -50 }}
            animate={isCardsVisible ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        <motion.div
          className="h-full bg-cover bg-center rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url("https://images.alphacoders.com/739/73931.jpg")`,
          }}
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCardsVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, translateY: 50 }}
          animate={isCardsVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="h-64 bg-cover bg-center rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url("https://tse1.mm.bing.net/th/id/OIP.grjtVHUTZyT7jutyMPmf6wHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3")`,
            }}
            initial={{ opacity: 0, translateX: 50 }}
            animate={isCardsVisible ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
          <motion.div
            className="bg-pink-200 text-violet-950 rounded-2xl p-6 flex flex-col justify-between h-48 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isCardsVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold">1.5M+</h2>
            <p className="text-sm sm:text-base">We empower 1.5 million+ users worldwide</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;