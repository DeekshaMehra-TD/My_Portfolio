import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #C21E56, #D8B4F8, #C21E56)',
        transformOrigin: '0%',
        zIndex: 9999,
        borderRadius: '0 2px 2px 0',
      }}
    />
  );
};

export default ScrollProgress;
