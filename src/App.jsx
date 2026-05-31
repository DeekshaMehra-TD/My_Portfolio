import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Experience from './components/Experience';
import PortfolioGrid from './components/PortfolioGrid';
import Collection from './components/Collection';
import ScrollReveal from './components/ScrollReveal';
import ThreadDivider from './components/ThreadDivider';

/* Lazy-loaded chunks — keeps initial bundle lean */
const Loader = lazy(() => import('./components/Loader'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

// Main portfolio homepage
const Home = () => (
  <div className="app-container">
    <ScrollProgress />

    <Hero />
    <ThreadDivider />
    <Experience />
    <ThreadDivider />
    <PortfolioGrid />
    <ThreadDivider />

    <Collection id="blooming-affair"  title="A Blooming Affair"  subtitle="Fashion illustration & Print Design"   image="/Blooming_Affair/mammamamam.webp" description="A beautiful countryside and peony theme collection. Features delicate watercolour florals and feminine silhouettes."                                                   reverse={false} />
    <ThreadDivider />
    <Collection id="komudika-kaavya" title="Komudika Kaavya"    subtitle="Lehenga Design for Torani"              image="/Komudika/high-res-resize_0098_watermark-torani-fin_-copy-928_700x.webp" description="Traditional placement print design featuring historical chintz and kalamkari references on terracotta backgrounds."                         reverse={true}  />
    <ThreadDivider />
    <Collection id="ainu-textile"    title="Ainu Textile"        subtitle="Surface Design"                         image="/Ainu Textile/Product 1.webp"    description="Research-driven collection themed around deep indigo, muslin ivory, and crimson red embroidery with geometric chain stitching."          reverse={false} />
    <ThreadDivider />
    <Collection id="denim-with-heart" title="Denim with Heart"  subtitle="Surface Design"                         image="/Denim with Heart/product1.webp"   description="Grungy-cute wide leg denim jeans featuring custom curvy bleach patterns and red wavy lace appliqués."                                    reverse={true}  />
    <ThreadDivider />
    <Collection id="blooming-canopy" title="Blooming Canopy"  subtitle="Home Textile — Bedding Collection"                         image="/Blooming Canopy/MainImage.webp"   description="A print design collection inspired by William Morris, blending his intricate floral patterns with modern, airy aesthetics. Featuring soft greens, warm peach tones, fluid forms, and subtle textures, the collection offers a fresh, delicate take on classic florals, perfect for home and lifestyle branding."                                    reverse={false}  />
    <ThreadDivider />
    <Collection id="kairi" title="Kairi"  subtitle="Collection 6: Print Design"                         image="/Kairi/PA1.webp"   description="A refined saree collection celebrating the timeless elegance of paisleys."                                    reverse={true}  />
    <ThreadDivider />

    <ScrollReveal variants={footerVariants}>
      <footer style={{ textAlign: 'center', padding: '4rem 0', fontFamily: 'var(--font-display)', color: 'var(--color-raspberry)' }}>
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
          href="mailto:hello@example.com"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ textDecoration: 'none' }}
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

  // Scroll to top on every route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', color: 'var(--color-raspberry)' }}>Loading...</div>}>
      {/* Loader — only shown once on homepage entry */}
      {isHome && !loaderDone && (
        <Loader onComplete={() => setLoaderDone(true)} />
      )}

      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="*"              element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
