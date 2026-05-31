import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { getProject } from '../data/projects';
import { SparkleIcon, HeartIcon, StarIcon } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerChild, viewport } from '../hooks/useScrollReveal';
import './ProjectPage.css';

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProject(slug);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80 && !isScrolled) setIsScrolled(true);
    else if (latest <= 80 && isScrolled) setIsScrolled(false);
  });

  // 404-like fallback
  if (!project) {
    return (
      <div className="not-found">
        <h1>Project not found</h1>
        <button className="btn-primary" onClick={() => navigate('/')}>← Back to Portfolio</button>
      </div>
    );
  }

  return (
    <div className="project-page" style={{ position: 'relative' }}>

      {/* ── Back button ───────────────────────────────────── */}
      <motion.button
        className="back-btn"
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -30 }}
        animate={{ 
          opacity: isScrolled ? 0.6 : 1, 
          x: 0,
          scale: isScrolled ? 0.85 : 1
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          x: -4, 
          scale: 1.05, 
          opacity: 1, 
          transition: { type: 'spring', stiffness: 400, damping: 25 } 
        }}
        style={{ transformOrigin: 'top left' }}
      >
        ← Back to Portfolio
      </motion.button>

      {/* ── Hero split ───────────────────────────────────── */}
      {slug !== 'denim-with-heart' && slug !== 'kairi' && slug !== 'blooming-canopy' && (
      <>
      <div className="project-hero container">

        {/* Image */}
        <ScrollReveal variants={fadeLeft} className="project-hero-image-wrap">
          <div className="project-photo-frame">
            <img src={project.coverImage || project.image} alt={project.title} className="project-hero-img" />
            <div className="tape tape-top"></div>
          </div>
          <motion.div
            className="proj-doodle doodle-star"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.5 }}
          >
            <StarIcon color="var(--color-raspberry)" width={40} height={40} />
          </motion.div>
          <motion.div
            className="proj-doodle doodle-heart"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.7 }}
          >
            <HeartIcon color="var(--color-raspberry)" width={36} height={36} />
          </motion.div>
        </ScrollReveal>

        {/* Content */}
        <div className="project-hero-content">
          <motion.div
            className="project-num"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {project.num}
          </motion.div>

          <motion.h1
            className="project-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {project.title}
          </motion.h1>

          <motion.h2
            className="project-subtitle handwritten"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            {project.subtitle}
          </motion.h2>

          {/* Tags */}
          <motion.div
            className="project-tags"
            variants={staggerContainer(0.07, 0.35)}
            initial="hidden"
            animate="visible"
          >
            {project.tags.map((tag) => (
              <motion.span key={tag} className="project-tag" variants={staggerChild}>
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Mood keywords */}
          <motion.div
            className="mood-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {project.moodKeywords.map((kw, i) => (
              <span key={kw} className="mood-kw">
                {i > 0 && <span className="mood-sep"><SparkleIcon color="var(--color-raspberry)" width={14} height={14} /></span>}
                {kw}
              </span>
            ))}
          </motion.div>

          {/* Palette */}
          <motion.div
            className="project-palette"
            variants={staggerContainer(0.08, 0.5)}
            initial="hidden"
            animate="visible"
          >
            {project.palette.map((hex) => (
              <motion.div
                key={hex}
                className="palette-swatch"
                style={{ background: hex }}
                variants={{ hidden: { opacity: 0, scale: 0, y: 10 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 14 } } }}
                whileHover={{ scale: 1.3, y: -4, transition: { type: 'spring', stiffness: 400 } }}
                title={hex}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Description ──────────────────────────────────── */}
      <ScrollReveal variants={fadeUp} className="project-desc-section container">
        <div className="project-desc-card scrapbook-card">
          <p>{project.description}</p>
        </div>
      </ScrollReveal>

      {/* ── Project details grid ─────────────────────────── */}
      {project.details.length > 0 && (
        <section className="project-details-section container">
          <ScrollReveal variants={fadeUp}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-md)' }}>Project Details</h3>
          </ScrollReveal>
          <motion.div
            className="details-grid"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {project.details.map((d) => (
              <motion.div key={d.label} className="detail-card scrapbook-card" variants={staggerChild}>
                <span className="detail-label">{d.label}</span>
                <span className="detail-value">{d.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
      </>
      )}

      {/* ── Illustrations Gallery ──────────────────────────── */}
      {project.illustrations && project.illustrations.length > 0 && (
        <section className="project-gallery-section container" style={{ marginTop: 'var(--space-xl)' }}>
          <ScrollReveal variants={fadeUp}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Illustrations</h3>
          </ScrollReveal>
          <div className="illustrations-flex" style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {project.illustrations.map((img, i) => (
              <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1}>
                <div className="gallery-item scrapbook-card" style={{ flex: '1 1 300px', maxWidth: '600px' }}>
                  <img src={img} alt={`${project.title} - Illustration ${i + 1}`} loading="lazy" />
                  {i % 2 === 0 ? <div className="tape tape-top"></div> : <div className="tape tape-bottom" style={{ bottom: '-10px', top: 'auto' }}></div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Komudika Kaavya Custom Behance Layout ──────────────── */}
      {slug === 'komudika-kaavya' && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-xl)' }}>
            
            {/* Inspirations Collage */}
            {project.collageImages && project.collageImages.length === 4 && (
              <div style={{ marginBottom: 'var(--space-3xl)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Inspirations</h3>
                </ScrollReveal>
                
                <div style={{ display: 'flex', gap: '8px', width: '100%', maxWidth: '1000px', backgroundColor: '#fff', padding: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  {/* Left Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    <ScrollReveal variants={fadeUp} delay={0.1}>
                      <img src={project.collageImages[0]} alt={`${project.title} - Inspiration 1`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} loading="lazy" />
                    </ScrollReveal>
                    <ScrollReveal variants={fadeUp} delay={0.2}>
                      <img src={project.collageImages[1]} alt={`${project.title} - Inspiration 2`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} loading="lazy" />
                    </ScrollReveal>
                  </div>
                  {/* Right Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    <ScrollReveal variants={fadeUp} delay={0.3}>
                      <img src={project.collageImages[2]} alt={`${project.title} - Inspiration 3`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} loading="lazy" />
                    </ScrollReveal>
                    <ScrollReveal variants={fadeUp} delay={0.4}>
                      <img src={project.collageImages[3]} alt={`${project.title} - Inspiration 4`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} loading="lazy" />
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            )}

            {/* Initial Ideation */}
            {project.initialIdeation && (
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Initial Ideation</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                  {project.initialIdeation.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1} style={{ width: '100%', maxWidth: '1100px' }}>
                       <div className="scrapbook-card" style={{ width: '100%', padding: 'var(--space-lg)' }}>
                         <div style={{ position: 'relative' }}>
                           <img src={img} alt={`${project.title} - Ideation Sketch ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                           
                           {/* Highlight overlay for first sketch */}
                           {i === 0 && (
                             <>
                               <div style={{
                                 position: 'absolute',
                                 left: '4.9%',
                                 top: '8%',
                                 width: '28%',
                                 height: '84%',
                                 border: '2px solid #E88D67',
                                 pointerEvents: 'none'
                               }}></div>
                               <div style={{
                                 position: 'absolute',
                                 left: '18.5%',
                                 bottom: '1%',
                                 transform: 'translateX(-50%)',
                                 color: '#4A154B',
                                 fontSize: 'clamp(9px, 1.2vw, 14px)',
                                 fontWeight: 'bold',
                                 letterSpacing: '1px',
                                 pointerEvents: 'none'
                               }}>FINAL DESIGN</div>
                             </>
                           )}
                         </div>
                         <div className="tape tape-top"></div>
                       </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Motif Development */}
            {project.motifs && (
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Motif Development</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--space-xl)', alignItems: 'center' }}>
                  {project.motifs.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1} style={{ width: '100%', maxWidth: i === 0 ? '500px' : '360px' }}>
                       <div className="gallery-item scrapbook-card" style={{ width: '100%', padding: 'var(--space-md)' }}>
                         <img src={img} alt={`${project.title} - Motif ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                         <div className="tape tape-top"></div>
                       </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}



            {/* The Final Showcase Row (Torani Model Photos) */}
            {project.toraniPhotos && (
              <div>
                <ScrollReveal variants={fadeUp} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: 'var(--space-xl) 0', 
                  padding: 'var(--space-sm) 0',
                  borderTop: '1px solid var(--color-raspberry)',
                  borderBottom: '1px solid var(--color-raspberry)',
                  width: '100%'
                }}>
                  <h3 className="project-main-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center', letterSpacing: '2px', margin: '0 0 5px 0' }}>KOMUDIKA KAAVYA LEHENGA SET</h3>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-indigo)', fontSize: 'var(--text-xl)', margin: '0' }}>Collection (Taal)</p>
                </ScrollReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
                  {project.toraniPhotos.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1}>
                       <div className="gallery-item scrapbook-card" style={{ padding: '0 !important', overflow: 'hidden', height: '100%' }}>
                         <img src={img} alt={`${project.title} - Torani Model ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', borderRadius: 'inherit' }} loading="lazy" />
                       </div>
                    </ScrollReveal>
                  ))}
                </div>
                <ScrollReveal variants={fadeUp}>
                  <p style={{ textAlign: 'right', fontStyle: 'italic', color: 'var(--color-indigo)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-md)' }}>
                    *Reference: Torani India's official website
                  </p>
                </ScrollReveal>
              </div>
            )}
        </section>
      )}

      {/* ── Denim with Heart Custom Layout ──────────────── */}
      {slug === 'denim-with-heart' && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-xl)' }}>
            
            {/* Title Block */}
            <div style={{ textAlign: 'center', padding: 'var(--space-xl) 0', position: 'relative' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--color-indigo)', padding: '8px 24px', color: '#fff', fontSize: 'var(--text-sm)', letterSpacing: '3px', marginBottom: 'var(--space-md)', fontWeight: 'bold', borderRadius: '20px' }}>
                {project.category.toUpperCase()}
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', color: 'var(--color-indigo)', letterSpacing: '5px', margin: '0 0 var(--space-md) 0' }}>
                {project.title.toUpperCase()}
              </h2>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontStyle: 'italic', color: 'var(--color-indigo)', lineHeight: '1.8', fontSize: 'var(--text-md)' }}>
                {project.description}
              </p>
            </div>

            {/* Cover Section */}
            {project.coverImage && (
              <div style={{ marginBottom: 'var(--space-3xl)', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <ScrollReveal variants={fadeUp} style={{ width: '100%' }}>
                  <img src={project.coverImage} alt={`${project.title} - Cover`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} loading="lazy" />
                </ScrollReveal>
              </div>
            )}

            {/* Ideation Section */}
            {project.denimIdeation && project.denimIdeation.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Initial Ideation</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {project.denimIdeation.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '1000px' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - Ideation ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                        <div className="tape tape-top"></div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Motif Section */}
            {project.denimMotifs && project.denimMotifs.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Motif</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {project.denimMotifs.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '800px' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - Motif ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                        <div className="tape tape-top"></div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Samples Section */}
            {project.denimSamples && project.denimSamples.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Samples</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {project.denimSamples.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '1000px' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - Sample ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                        <div className="tape tape-top"></div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Products Section */}
            {project.denimProducts && project.denimProducts.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Products</h3>
                </ScrollReveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45vw, 800px), 1fr))', gap: 'var(--space-xl)' }}>
                  {project.denimProducts.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1}>
                      <div className="gallery-item scrapbook-card" style={{ height: '100%' }}>
                        <img src={img} alt={`${project.title} - Product ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                        {i % 2 === 0 ? <div className="tape tape-top"></div> : <div className="tape tape-bottom" style={{ bottom: '-10px', top: 'auto' }}></div>}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

        </section>
      )}

      {/* ── Blooming Canopy Custom Layout ──────────────── */}
      {slug === 'blooming-canopy' && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-xl)' }}>
            
            {/* Title Block */}
            <div style={{ textAlign: 'center', padding: 'var(--space-xl) 0', position: 'relative' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--color-indigo)', padding: '8px 24px', color: '#fff', fontSize: 'var(--text-sm)', letterSpacing: '3px', marginBottom: 'var(--space-md)', fontWeight: 'bold', borderRadius: '20px' }}>
                {project.category.toUpperCase()}
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', color: 'var(--color-indigo)', letterSpacing: '5px', margin: '0 0 var(--space-md) 0' }}>
                {project.title.toUpperCase()}
              </h2>
              <p style={{ maxWidth: '800px', margin: '0 auto', fontStyle: 'italic', color: 'var(--color-indigo)', lineHeight: '1.8', fontSize: 'var(--text-md)' }}>
                {project.description}
              </p>
            </div>

            {/* Cover Section */}
            {project.coverImage && (
              <div style={{ marginBottom: 'var(--space-3xl)', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <ScrollReveal variants={fadeUp} style={{ width: '100%' }}>
                  <img src={project.coverImage} alt={`${project.title} - Cover`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} loading="lazy" />
                </ScrollReveal>
              </div>
            )}

            {/* Motif Section */}
            {project.bloomingMotifs && project.bloomingMotifs.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Motif</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--space-xl)' }}>
                  {project.bloomingMotifs.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '800px', flex: '1 1 400px' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - Motif ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                        <div className="tape tape-top"></div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Products Section */}
            {project.bloomingProducts && project.bloomingProducts.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Products</h3>
                </ScrollReveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45vw, 800px), 1fr))', gap: 'var(--space-xl)' }}>
                  {project.bloomingProducts.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1}>
                      <div className="gallery-item scrapbook-card" style={{ height: '100%' }}>
                        <img src={img} alt={`${project.title} - Product ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                        {i % 2 === 0 ? <div className="tape tape-top"></div> : <div className="tape tape-bottom" style={{ bottom: '-10px', top: 'auto' }}></div>}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

        </section>
      )}

      {/* ── Ainu Textile Custom Layout ──────────────── */}
      {slug === 'ainu-textile' && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-xl)' }}>
            
            {/* Motif Section */}
            {project.ainuMotifs && project.ainuMotifs.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Motif</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {project.ainuMotifs.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '800px' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - Motif ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                        <div className="tape tape-top"></div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Products Section */}
            {project.ainuProducts && project.ainuProducts.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Products</h3>
                </ScrollReveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45vw, 800px), 1fr))', gap: 'var(--space-xl)' }}>
                  {project.ainuProducts.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1}>
                      <div className="gallery-item scrapbook-card" style={{ height: '100%' }}>
                        <img src={img} alt={`${project.title} - Product ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                        {i % 2 === 0 ? <div className="tape tape-top"></div> : <div className="tape tape-bottom" style={{ bottom: '-10px', top: 'auto' }}></div>}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

        </section>
      )}

      {/* ── Kairi Custom Behance Layout ──────────────── */}
      {slug === 'kairi' && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-xl)' }}>
            
            {/* Title Block */}
            <div style={{ textAlign: 'center', padding: 'var(--space-xl) 0', position: 'relative' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#800020', padding: '8px 24px', color: '#fff', fontSize: 'var(--text-sm)', letterSpacing: '3px', marginBottom: 'var(--space-md)', fontWeight: 'bold' }}>
                COLLECTION 6: Print Design
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#800020', letterSpacing: '10px', margin: '0 0 var(--space-md) 0' }}>
                KAIRI
              </h2>
              <p style={{ maxWidth: '700px', margin: '0 auto', fontStyle: 'italic', color: 'var(--color-indigo)', lineHeight: '1.8', fontSize: 'var(--text-md)' }}>
                {project.description}
              </p>
            </div>

            {/* Inspiration Moodboard */}
            {project.kairiMoodboard && (
              <div style={{ display: 'flex', width: '100%', marginBottom: 'var(--space-3xl)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                {project.kairiMoodboard.map((img, i) => (
                  <div key={i} style={{ flex: 1, minWidth: 0 }}>
                    <img 
                      src={img} 
                      alt={`${project.title} - Moodboard ${i+1}`} 
                      width="400"
                      height="600"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Color Palette Block */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 'var(--space-3xl)', height: '100px' }}>
              <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: '#800020', opacity: 0.5, zIndex: 0 }}></div>
              <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: '#800020', opacity: 0.5, zIndex: 0, marginTop: '8px' }}></div>
              <div style={{ display: 'flex', gap: 'var(--space-xl)', backgroundColor: 'var(--color-pink-base)', padding: '0 var(--space-xl)', zIndex: 1 }}>
                {project.palette.map((color, i) => (
                  <ScrollReveal key={color} variants={fadeUp} delay={i * 0.1}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: color, border: '3px solid #fff', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}></div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Print Elements (pp files) */}
            {project.kairiElements && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-2xl)', marginBottom: 'var(--space-3xl)' }}>
                {project.kairiElements.map((img, i) => (
                  <ScrollReveal key={i} variants={fadeUp}>
                    <img src={img} alt={`${project.title} - Print Element ${i+1}`} width="1200" height="800" style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} loading="lazy" decoding="async" />
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Print Layouts (PA files) */}
            {project.kairiLayouts && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-3xl)', marginBottom: 'var(--space-xl)' }}>
                {project.kairiLayouts.map((img, i) => (
                  <ScrollReveal key={i} variants={fadeUp}>
                    <img src={img} alt={`${project.title} - Print Layout ${i+1}`} width="1200" height="1600" style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 10px 40px rgba(0,0,0,0.12)' }} loading="lazy" decoding="async" />
                  </ScrollReveal>
                ))}
              </div>
            )}

        </section>
      )}

      {/* ── Swatches Gallery ──────────────────────────────── */}
      {slug !== 'komudika-kaavya' && project.swatches && project.swatches.length > 0 && (
        <section className="project-gallery-section container" style={{ marginTop: 'var(--space-xl)' }}>
          <ScrollReveal variants={fadeUp}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Fabric Swatches</h3>
          </ScrollReveal>
          <div className="gallery-masonry">
            {project.swatches.map((img, i) => (
              <ScrollReveal key={img} variants={fadeUp} delay={0.1}>
                <div className="gallery-item scrapbook-card swatch-card">
                  <img src={img} alt={`${project.title} - Fabric Swatch ${i + 1}`} loading="lazy" />
                  {i % 2 === 0 ? <div className="tape tape-top"></div> : <div className="tape tape-bottom" style={{ bottom: '-10px', top: 'auto' }}></div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Image Gallery (Generic) ──────────────────────── */}
      {slug !== 'komudika-kaavya' && project.imageGallery && project.imageGallery.length > 0 && (
        <section className="project-gallery-section container" style={{ marginTop: 'var(--space-xl)' }}>
          <ScrollReveal variants={fadeUp}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Project Gallery</h3>
          </ScrollReveal>
          <div className="gallery-masonry" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 20vw, 400px), 1fr))' }}>
            {[...project.imageGallery]
              .sort((a, b) => {
                const nameA = a.split('/').pop().toLowerCase();
                const nameB = b.split('/').pop().toLowerCase();
                return nameA.localeCompare(nameB);
              })
              .map((img, i) => {
              // Extract filename without extension and format it (e.g., "Product 1", "motif")
              const rawName = img.split('/').pop().split('.')[0].replace(/[-_]/g, ' ');
              const formattedTitle = rawName.charAt(0).toUpperCase() + rawName.slice(1);
              
              return (
                <ScrollReveal key={img} variants={fadeUp} delay={0.1}>
                  <div className="gallery-item scrapbook-card">
                    <img src={img} alt={`${project.title} - ${formattedTitle}`} loading="lazy" />
                    {i % 2 === 0 ? <div className="tape tape-top"></div> : <div className="tape tape-bottom" style={{ bottom: '-10px', top: 'auto' }}></div>}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Coming soon overlay ──────────────────────────── */}
      {!project.available && (
        <ScrollReveal variants={fadeUp} className="coming-soon-section container">
          <div className="coming-soon-card scrapbook-card">
            <SparkleIcon color="var(--color-raspberry)" width={48} height={48} />
            <h3>Full case study coming soon!</h3>
            <p>Check back later for the complete project breakdown.</p>
          </div>
        </ScrollReveal>
      )}

      {/* End of Project Page */}

    </div>
  );
};

export default ProjectPage;
