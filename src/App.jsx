import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Experience from './components/Experience';
import PortfolioGrid from './components/PortfolioGrid';
import Collection from './components/Collection';
import ScrollReveal from './components/ScrollReveal';
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
      <div id="experience"><Experience /></div>

      <div id="portfolio"><PortfolioGrid /></div>
    </main>

    <ScrollReveal variants={footerVariants}>
      <section id="contact" className="container section-padding">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: 'var(--space-lg)',
          borderRadius: 'clamp(1.5rem, 4vw, 3rem)',
          border: '1px solid rgba(255, 255, 255, 1)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle decorative stitched border inside the card */}
          <div style={{
            position: 'absolute',
            inset: '12px',
            border: '1px dashed rgba(194, 30, 86, 0.3)',
            borderRadius: 'calc(clamp(1.5rem, 4vw, 3rem) - 8px)',
            pointerEvents: 'none',
            zIndex: 1
          }}></div>
          
          <motion.h2
            initial={{ letterSpacing: '0.3em', opacity: 0, y: 10 }}
            whileInView={{ letterSpacing: '0.05em', opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ 
              fontFamily: 'var(--font-secondary)', 
              fontWeight: 300,
              textTransform: 'uppercase',
              color: 'var(--color-raspberry)', 
              fontSize: 'var(--text-xl)', 
              marginBottom: 'var(--space-md)',
              position: 'relative',
              zIndex: 2
            }}
          >
            Let's Create Together
          </motion.h2>
                    <motion.a
            href="mailto:dikshamehra2501@gmail.com"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              display: 'inline-block',
              fontSize: 'var(--text-base)',
              padding: 'var(--space-xs) var(--space-sm)',
              borderRadius: '0',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 10px 20px rgba(194, 30, 86, 0.2)',
              marginBottom: 'var(--space-md)'
            }}
          >
            Say Hello
          </motion.a>
          
          <p style={{ 
            fontFamily: 'var(--font-secondary)', 
            color: '#475569', 
            fontSize: 'clamp(14px, 1.5vw, 17px)', 
            maxWidth: '500px', 
            margin: '0 auto 0 auto',
            position: 'relative',
            zIndex: 2,
            lineHeight: '1.6'
          }}>
            Always open to interesting collaborations, exciting projects, and creative ideas.
          </p>
        </div>
      </section>
    </ScrollReveal>
    
    <footer style={{ 
      textAlign: 'center',
      padding: 'var(--space-md) var(--space-lg)',
      fontFamily: 'var(--font-secondary)', 
      fontSize: 'var(--text-sm)', 
      backgroundColor: 'var(--color-raspberry)',
      color: 'white', 
      letterSpacing: '0.05em',
      marginTop: 'var(--space-xl)'
    }}>
      © 2026 Deeksha Mehra. Crafted with <span style={{ color: 'var(--color-pink-base)' }}>❤</span>
    </footer>
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
