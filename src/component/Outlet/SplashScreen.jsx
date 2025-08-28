import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const fullText = 'Welcome to BlueDrop Tracker - Every Drop Counts';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50); // Speed of typewriter effect (100ms per character)
      return () => clearTimeout(timeout);
    } else {
      // Auto-complete after 2 seconds
      const timeout = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-blue-100 to-emerald-100 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {displayedText}
          <span className="animate-blink">|</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Join the movement to conserve water, one drop at a time.
        </motion.p>
        <motion.button
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
          onClick={onComplete}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          aria-label="Continue to BlueDrop Tracker"
        >
          Continue
        </motion.button>
      </div>
      <style>
        {`
          .animate-blink {
            animation: blink 0.7s step-end infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </motion.div>
  );
};

export default SplashScreen;