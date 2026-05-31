// Central scroll-reveal config using Framer Motion whileInView
// Provides reusable animation presets and stagger helpers.

export const transitions = {
  smooth: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  spring: { type: 'spring', stiffness: 80, damping: 18 },
  springFast: { type: 'spring', stiffness: 120, damping: 20 },
};

// Viewport config — trigger once, 15% of element visible
export const viewport = { once: true, margin: '0px 0px -80px 0px' };

// ── Variant presets ──────────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: transitions.spring },
};

export const tiltIn = {
  hidden: { opacity: 0, scale: 0.88, rotate: 4 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: transitions.spring },
};

// ── Stagger container ─────────────────────────────────────────────────────────
// Wrap children in this; each child gets its own delay.
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// Child item for staggered list
export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};
