import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => setDone(true), 800);
          return 100;
        }
        // Natural easing — fast start, slower middle, rush to finish
        const remaining = 100 - prev;
        const increment = Math.max(0.4, Math.min(2.8, remaining * 0.035 + 0.5));
        return Math.min(100, prev + increment);
      });
    }, 35);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Notify parent after the exit animation completes
  useEffect(() => {
    if (done) {
      const t = setTimeout(onComplete, 1000);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  // Status message based on progress
  const getMessage = () => {
    if (progress < 30) return 'Threading the needle...';
    if (progress < 60) return 'Stitching the details...';
    if (progress < 85) return 'Pressing the fabric...';
    if (progress < 100) return 'Final touches...';
    return 'Ready to wear ✦';
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Fabric texture bg */}
          <div className="loader-texture" />

          <div className="loader-content">

            {/* ── Lottie Sewing Machine ─────────────────── */}
            <motion.div
              className="loader-lottie-wrap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <DotLottieReact
                src="https://assets-v2.lottiefiles.com/a/13333fd4-116d-11ee-91da-bb19cce12b40/4Sc3cuXojh.lottie"
                loop
                autoplay
                className="loader-lottie-player"
              />
            </motion.div>

            {/* ── Name reveal ──────────────────────────── */}
            <div className="loader-name">
              {'DEEKSHA MEHRA'.split('').map((char, i) => {
                const charRevealAt = (i / 13) * 70;
                const visible = progress >= charRevealAt;
                return (
                  <motion.span
                    key={i}
                    className={`loader-char ${char === ' ' ? 'loader-space' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                );
              })}
            </div>

            <motion.p
              className="loader-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 15 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              Textile Design Portfolio
            </motion.p>

            {/* ── Progress bar (stitched) ──────────────── */}
            <div className="loader-progress-track">
              <motion.div
                className="loader-progress-fill"
                style={{ width: `${progress}%` }}
              />
              {/* Stitch marks */}
              <div className="loader-stitch-marks">
                {Array.from({ length: 20 }, (_, i) => (
                  <span
                    key={i}
                    className="stitch-mark"
                    style={{ opacity: progress >= (i / 20) * 100 ? 1 : 0.15 }}
                  />
                ))}
              </div>
            </div>

            {/* ── Percentage + message ─────────────────── */}
            <div className="loader-percent-row">
              <span className="loader-percent-num">
                {Math.floor(progress)}
                <span className="pct-sign">%</span>
              </span>
              <span className="loader-percent-label">{getMessage()}</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
