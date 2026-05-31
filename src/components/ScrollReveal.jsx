import React from 'react';
import { motion } from 'framer-motion';
import { viewport } from '../hooks/useScrollReveal';

/**
 * ScrollReveal — generic reveal wrapper.
 * @param {object}  variants   - Framer Motion variant object (hidden/visible)
 * @param {number}  delay      - Optional extra delay (seconds)
 * @param {string}  className  - Optional class name
 * @param {string}  as         - HTML tag to render (default 'div')
 * @param {boolean} once       - Override trigger-once behaviour
 */
const ScrollReveal = ({
  children,
  variants,
  delay = 0,
  className = '',
  style = {},
  as = 'div',
  once,
}) => {
  const resolvedViewport = once !== undefined ? { once, margin: '0px 0px -80px 0px' } : viewport;
  const MotionTag = motion[as] ?? motion.div;

  const resolvedVariants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible?.transition ?? {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={resolvedViewport}
      variants={resolvedVariants}
    >
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;
