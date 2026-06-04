import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './Loader.css';

const words = [
  "Hello",
  "Deeksha Mehra",
  "Textile Design",
  "Surface Pattern",
  "Welcome"
];

export default function Loader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(wordTimer);

          setTimeout(() => {
            setClosing(true);

            setTimeout(() => {
              onComplete?.();
            }, 900);
          }, 350);

          return prev;
        }

        return prev + 1;
      });
    }, 350);

    return () => clearInterval(wordTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          className="loader-wrapper"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* trailing bottom curve */}
          <motion.div
            className="loader-curve"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />

          <div className="loader-text-container">
            <AnimatePresence mode="wait">
              <motion.h1
                key={words[index]}
                className="loader-heading"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{
                  duration: 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {words[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
