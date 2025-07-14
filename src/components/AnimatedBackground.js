import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => (
  <motion.div
    aria-hidden="true"
    className="fixed inset-0 -z-10 w-full h-full"
    initial={{ backgroundPosition: '0% 50%' }}
    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
    style={{
      background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
      backgroundSize: '400% 400%',
    }}
  />
);

export default AnimatedBackground; 