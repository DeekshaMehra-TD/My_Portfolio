import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ThreadDivider = () => {
  const ref = useRef(null);

  // Bind to the scroll position of the divider itself
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 70%"] // Starts when entering from bottom, finishes at 70% from top to guarantee completion even above a short footer
  });

  // Apply a gentle spring so the drawing feels perfectly smooth and less rigid
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });

  return (
    <div ref={ref} style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: 'var(--space-xl) 0', opacity: 0.6 }}>
      <svg width="100%" height="20" viewBox="0 0 1000 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10 T 450 10 T 500 10 T 550 10 T 600 10 T 650 10 T 700 10 T 750 10 T 800 10 T 850 10 T 900 10 T 950 10 T 1000 10"
          fill="transparent"
          stroke="var(--color-raspberry)"
          strokeWidth="2"
          style={{ pathLength, opacity: pathLength }}
        />
      </svg>
    </div>
  );
};

export default ThreadDivider;
