import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import ChatIcon from '@mui/icons-material/Chat';

const ChatModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a water conservation expert providing concise, factual answers.' },
            { role: 'user', content: query },
          ],
          max_tokens: 500,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('OpenAI API error:', error);
      setResponse('Error fetching response. Please check your API key or try again.');
    } finally {
      setLoading(false);
    }
  };

  // Modal content
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="chat-modal-title"
            aria-modal="true"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="chat-modal-title" className="text-xl font-bold text-emerald-700">
                BlueDrop AI Chat
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close chat modal"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mb-4">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about water conservation..."
                className="w-full p-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
                aria-label="Enter your question"
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 disabled:bg-emerald-400 transition-colors"
              >
                {loading ? 'Loading...' : 'Ask'}
              </button>
            </form>
            {response && (
              <div className="bg-emerald-50 p-4 rounded-md max-h-64 overflow-y-auto">
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ChatModal;