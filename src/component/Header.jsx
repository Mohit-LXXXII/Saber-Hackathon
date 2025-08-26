// ```jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, TextField, Typography, Box, Divider } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose }) => {
  // State for water tracker inputs
  const [waterUsage, setWaterUsage] = useState({
    drinking: '',
    showering: '',
    other: '',
  });
  const [totalUsage, setTotalUsage] = useState(0);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWaterUsage((prev) => ({
      ...prev,
      [name]: value.replace(/[^0-9]/g, ''), // Allow only numbers
    }));
  };

  // Calculate total usage
  useEffect(() => {
    const total =
      (parseFloat(waterUsage.drinking) || 0) +
      (parseFloat(waterUsage.showering) || 0) +
      (parseFloat(waterUsage.other) || 0);
    setTotalUsage(total.toFixed(2));
  }, [waterUsage]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Check if modal div exists
  const modalRoot = document.getElementById('modal');
  if (!modalRoot) {
    console.error('Modal root element with id="modal" not found');
    return null;
  }

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose} // Close modal when clicking outside
      >
        <motion.div
          className="bg-white rounded-2xl p-6 max-w-md mx-auto relative"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ scale: 0.7, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <Typography id="modal-title" variant="h5" sx={{ color: '#1e3a8a', mb: 2, fontWeight: 'bold' }}>
            Water Usage Tracker
          </Typography>
          <Typography variant="body2" sx={{ color: '#4b5563', mb: 3 }}>
            Log your daily water usage to help conserve water and combat the global water crisis.
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Drinking (liters)"
              name="drinking"
              value={waterUsage.drinking}
              onChange={handleInputChange}
              type="number"
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              inputProps={{ min: 0 }}
            />
            <TextField
              label="Showering (liters)"
              name="showering"
              value={waterUsage.showering}
              onChange={handleInputChange}
              type="number"
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              inputProps={{ min: 0 }}
            />
            <TextField
              label="Other Uses (liters)"
              name="other"
              value={waterUsage.other}
              onChange={handleInputChange}
              type="number"
              size="small"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              inputProps={{ min: 0 }}
            />
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ color: '#1e3a8a', fontWeight: 'medium' }}>
              Total Water Usage: {totalUsage} liters
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: totalUsage > 100 ? '#dc2626' : '#059669', mb: 2 }}
            >
              {totalUsage > 100
                ? 'High usage! Consider reducing water consumption to help conserve resources.'
                : 'Great job! Keep conserving water to support sustainable communities.'}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#059669', '&:hover': { backgroundColor: '#047857' } }}
                onClick={() => setWaterUsage({ drinking: '', showering: '', other: '' })}
              >
                Reset
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#059669',
                  color: '#059669',
                  '&:hover': { borderColor: '#047857', backgroundColor: '#f0f0f0' },
                }}
                onClick={onClose}
              >
                Close
              </Button>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    modalRoot
  );
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-[15vmin] my-3 justify-between items-center gap-2 py-2 px-4 max-w-[90vw] rounded-2xl mx-auto w-full bg-black text-white">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="flex justify-between gap-2 items-center text-white">
        <h1 className="text-2xl">
          <AcUnitIcon sx={{ fontSize: '7vmin' }} className="text-emerald-500" /> BlueDrop
        </h1>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-emerald-400' : '') + ' duration-700'}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-emerald-400' : '') + ' duration-700'}
        >
          About
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? 'text-emerald-400' : '') + ' duration-700'}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/tips"
          className={({ isActive }) => (isActive ? 'text-emerald-400' : '') + ' duration-700'}
        >
          Tips
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'text-emerald-400' : '') + ' duration-700'}
        >
          Contact
        </NavLink>
      </div>
      <Button
        variant="contained"
        sx={{ height: 40, backgroundColor: 'white', color: '#059669', '&:hover': { backgroundColor: '#f0f0f0' } }}
        onClick={() => setIsModalOpen(true)}
      >
        Tracker
      </Button>
    </div>
  );
};

export default Header;