import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Water-themed carousel data from SaveWater document
const carouselItems = [
  {
    image: 'https://media.istockphoto.com/id/1368214406/photo/water-running-from-a-black-rain-shower-head.jpg?s=612x612&w=0&k=20&c=fBIC-HqnXRnAoJzKt5M9-0cxlQY5xyy9Ckep_feWFfc=',
    title: 'Shower',
    caption: '10-minute shower ≈ 25 gal',
    fallbackImage: 'https://i.pinimg.com/1200x/03/e1/82/03e1820a0191e42eccbf85815f6cf34c.jpg',
  },
  {
    image: 'https://i.pinimg.com/1200x/3e/94/b7/3e94b796dbca24bc0e632a4063041844.jpg',
    title: 'Brushing',
    caption: 'Brushing (tap on) ≈ 4 gal',
    fallbackImage: '/images/fallback-water.jpg',
  },
  {
    image: 'https://i.pinimg.com/1200x/83/2d/ba/832dba0d27bbbb68d3e53d2d517f65e8.jpg',
    title: 'Dishwasher',
    caption: 'Dishwasher load ≈ 6 gal',
    fallbackImage: 'https://i.pinimg.com/1200x/83/2d/ba/832dba0d27bbbb68d3e53d2d517f65e8.jpg',
  },
  {
    image: 'https://i.pinimg.com/1200x/c0/c5/45/c0c5455f513dc112fc04b5d85cc2aff3.jpg',
    title: 'Washing Machine',
    caption: 'Washing machine ≈ 25 gal',
    fallbackImage: '',
  },
];

const Carousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Auto-scroll effect (optional, can be removed if not desired)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Navigate to previous/next item
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  // Animation variants for carousel items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          drag="x"
          dragConstraints={{ left: -((carouselItems.length - 1) * window.innerWidth), right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -100 && velocity.x < -0.5) handleNext();
            else if (offset.x > 100 && velocity.x > 0.5) handlePrev();
          }}
        >
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-full flex justify-center items-center"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative w-full max-w-md">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                  onError={(e) => { e.target.src = item.fallbackImage; }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-xl">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700"
          aria-label="Previous image"
        >
          <ArrowBackIosIcon fontSize="small" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700"
          aria-label="Next image"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-emerald-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;