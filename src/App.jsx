import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Experience from './components/Experience';
import PortfolioGrid from './components/PortfolioGrid';
import Collection from './components/Collection';
import ScrollReveal from './components/ScrollReveal';
import ThreadDivider from './components/ThreadDivider';
import Navbar from './components/Navbar';

/* Lazy-loaded chunks — keeps initial bundle lean */
const Loader = lazy(() => import('./components/Loader'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

const Home = () => (
  <div className="app-container" id="top">
    <ScrollProgress />
    <Navbar />

    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <ThreadDivider />
      <div id="experience"><Experience /></div>
      <ThreadDivider />

      <div id="portfolio"><PortfolioGrid /></div>
      <ThreadDivider />
    </main>

    <ScrollReveal variants={footerVariants}>
      <footer id="contact" style={{ textAlign: 'center', padding: '4rem 0', fontFamily: 'var(--font-display)', color: 'var(--color-raspberry)' }}>
        <motion.h2
          initial={{ letterSpacing: '0.3em', opacity: 0 }}
          whileInView={{ letterSpacing: '0.05em', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 'var(--space-md)' }}
        >
          Let's Create Together
        </motion.h2>
        <p style={{ color: 'var(--color-indigo)', fontSize: 'var(--text-md)', marginBottom: 'var(--space-xl)' }}>
          Always open to interesting collaborations.
        </p>
        <motion.a
          href="mailto:dikshamehra2501@gmail.com"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Say Hello
        </motion.a>
        <motion.p
          style={{ marginTop: 'var(--space-2xl)', fontSize: 'var(--text-sm)', color: 'var(--color-indigo)', opacity: 0.7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © 2026 Deeksha Mehra. Crafted with ❤️
        </motion.p>
      </footer>
    </ScrollReveal>
  </div>
);

function App() {
  const location = useLocation();
  // Show loader only on first load of the homepage
  const [loaderDone, setLoaderDone] = useState(false);
  const isHome = location.pathname === '/';

  // Scroll to top or hash on every route change
  React.useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', color: 'var(--color-raspberry)' }}>Loading...</div>}>
      {/* Loader — only shown once on homepage entry */}
      <AnimatePresence mode="wait">
        {isHome && !loaderDone && (
          <Loader onComplete={() => setLoaderDone(true)} />
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="*"              element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
