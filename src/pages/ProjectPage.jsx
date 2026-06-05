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
        <button className="btn-primary" onClick={() => navigate('/#featured-projects')}>← Back to Portfolio</button>
      </div>
    );
  }

  const dynamicTheme = project?.theme ? {
    '--theme-bg': project.theme.bg,
    '--theme-text': project.theme.text,
    '--theme-primary': project.theme.primary,
    '--theme-secondary': project.theme.secondary,
    '--theme-muted': project.theme.muted,
  } : {};

  return (
    <div className="project-page" style={{ position: 'relative', ...dynamicTheme }}>

      {/* ── Back button ───────────────────────────────────── */}
      <motion.button
        className="back-btn"
        onClick={() => navigate('/#featured-projects')}
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
        ← Back to Featured Projects
      </motion.button>

      {/* ── Hero split ───────────────────────────────────── */}
      {slug !== 'blooming-affair' && slug !== 'denim-with-heart' && (
      <>
      <div className="project-hero">

        {/* Image */}
        <ScrollReveal variants={fadeLeft} className="project-hero-image-wrap">
          <div className="project-photo-frame">
            <img src={project.coverImage || project.image} alt={project.title} className="project-hero-img" />
            <div className="tape tape-top"></div>
          </div>
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
            className="project-subtitle"
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

          {project.secondaryDescription && (
            <motion.div
              className="project-secondary-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                marginTop: 'var(--space-sm)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-md)',
                lineHeight: '1.7',
                color: 'var(--theme-text)',
                opacity: 0.95
              }}
            >
              {project.secondaryDescription}
            </motion.div>
          )}
        </div>
      </div>
      {/* ── Description ──────────────────────────────────── */}
      {project.description && slug !== 'komudika-kaavya' && slug !== 'ainu-textile' && (
        <ScrollReveal variants={fadeUp} className="project-desc-section container">
          <div className="project-desc-card scrapbook-card">
            <p>{project.description}</p>
          </div>
        </ScrollReveal>
      )}

      {/* ── Project details grid ─────────────────────────── */}
      {project.details.length > 0 && (
        <section className="project-details-section container" style={{ marginTop: !project.description || slug === 'komudika-kaavya' || slug === 'ainu-textile' ? 'var(--space-2xl)' : '0' }}>
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
      {/* ── Theme & Moodboard ──────────────────────── */}
      {project.boards && (
        <section className="project-custom-layout container" style={{ marginTop: '0', marginBottom: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
            {project.boards.map((img, i) => (
              <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '1200px' }}>
                <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                  <img src={img} alt={`${project.title} - Board ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} loading="lazy" />
                  <div className="tape tape-top"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
      {/* ── Motifs ─────────────────────────────────── */}
      {project.motifs && slug !== 'komudika-kaavya' && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-xl)', marginBottom: '0' }}>
          <ScrollReveal variants={fadeUp} style={{ textAlign: 'center', marginBottom: 'var(--space-xs)' }}>
          </ScrollReveal>
          <div className="grid-2-col">
            {project.motifs.map((img, i) => (
              <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '1200px' }}>
                <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                  <img src={img} alt={`${project.title} - Motif ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} loading="lazy" />
                  <div className="tape tape-top"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Digital Flipbook Embed ─────────────────────────── */}
      {project.flipbookSrc && (
        <section className="project-flipbook-section" style={{ width: '100vw', maxWidth: '100%', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
          <ScrollReveal variants={fadeUp} style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-md)', marginTop: 'var(--space-md)' }}>Digital Book</h3>
          </ScrollReveal>
          <ScrollReveal variants={fadeUp} style={{ width: '100%', maxWidth: '1600px', padding: '0 var(--space-md)' }}>
            <div style={{ width: '100%', background: 'transparent' }}>
              <iframe src={project.flipbookSrc} style={{ width: '100%', height: '80vh', minHeight: '650px', display: 'block', border: 'none' }} scrolling="no" frameBorder="0" allow="clipboard-write; autoplay; fullscreen" allowFullScreen className="publuuflip"></iframe>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Kamal Fabric Explorations ────────────────────── */}
      {slug === 'kamal' && project.kamalFabricExploration && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-xs)', marginBottom: '0' }}>
          <ScrollReveal variants={fadeUp} style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-md)', color: 'var(--theme-text)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Explored fabric-print interactions by testing the same print across different fabrics to assess variations in appearance, texture, and overall aesthetic.
            </p>
          </ScrollReveal>
          <div className="swatches-grid">
            {project.kamalFabricExploration.map((item, i) => {
              const isObj = typeof item === 'object';
              const imgSrc = isObj ? item.src : item;
              const name = isObj ? item.name : null;
              const composition = isObj ? item.composition : null;

              return (
                <ScrollReveal key={imgSrc} variants={fadeUp}>
                  <div className="gallery-item scrapbook-card no-border" style={{ overflow: 'hidden' }}>
                    <img src={imgSrc} alt={`${project.title} - Fabric Exploration ${i + 1}`} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block', borderRadius: 0 }} loading="lazy" />
                    {name && (
                      <div style={{ padding: 'var(--space-md)', textAlign: 'center', fontFamily: 'var(--font-secondary)' }}>
                        <p style={{ margin: '0 0 2px 0', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--theme-text)', textTransform: 'uppercase', letterSpacing: '1px' }}>{name}</p>
                        {composition && <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--theme-muted)' }}>{composition}</p>}
                      </div>
                    )}
                    <div className="tape tape-top"></div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
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
        <section className="project-custom-layout komudika-layout container" style={{ marginTop: '0', marginBottom: 'var(--space-xl)' }}>
            
            {/* Divider Line */}
            <div style={{ width: '100vw', height: '3px', backgroundColor: 'var(--theme-primary, var(--color-raspberry))', opacity: 0.3, marginTop: '0', marginBottom: 'var(--space-2xl)', marginLeft: 'calc(-50vw + 50%)' }}></div>



            {/* Inspirations Collage */}
            {project.collageImage && (
              <div style={{ marginBottom: 'var(--space-3xl)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Inspirations</h3>
                </ScrollReveal>
                <ScrollReveal variants={fadeUp} delay={0.1} style={{ width: '100%' }}>
                  <img src={project.collageImage} alt={`${project.title} - Inspirations Collage`} className="has-theme-border" style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderRadius: '8px' }} loading="lazy" />
                </ScrollReveal>
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
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1} style={{ width: '100%', maxWidth: '800px' }}>
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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {project.motifs.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1} style={{ width: '100%', maxWidth: '1100px' }}>
                       <div className="gallery-item scrapbook-card" style={{ width: '100%', padding: 'var(--space-md)' }}>
                         <img src={img} alt={`${project.title} - Motif ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                         <div className="tape tape-top"></div>
                       </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Final Print */}
            {project.finalPrint && (
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <ScrollReveal variants={fadeUp} style={{ textAlign: 'center' }}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Placement print on lehenga kali</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ScrollReveal variants={fadeUp} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                     <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)', display: 'inline-block' }}>
                       <img src={project.finalPrint} alt={`${project.title} - Final Print`} style={{ maxWidth: '100%', maxHeight: '95vh', width: 'auto', height: 'auto', display: 'block' }} loading="lazy" />
                       <div className="tape tape-top"></div>
                     </div>
                  </ScrollReveal>
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
                  borderTop: '1px solid var(--theme-primary, var(--color-raspberry))',
                  borderBottom: '1px solid var(--theme-primary, var(--color-raspberry))',
                  width: '100%'
                }}>
                  <h3 className="project-main-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textAlign: 'center', letterSpacing: '2px', margin: '0 0 5px 0' }}>KOMUDIKA KAAVYA LEHENGA SET</h3>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-indigo)', fontSize: 'var(--text-xl)', margin: '0' }}>Collection (Taal)</p>
                </ScrollReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
                  {project.toraniPhotos.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1}>
                       <div style={{ height: '100%' }}>
                         <img src={img} alt={`${project.title} - Torani Model ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
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
            
            {/* Title Block without Cover Image */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 'var(--space-xl) 0', textAlign: 'left' }}>
              <motion.div className="project-num" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
                {project.num}
              </motion.div>
              <motion.h1 className="project-main-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
                {project.title}
              </motion.h1>
              <motion.h2 className="project-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }} style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
                {project.subtitle}
              </motion.h2>

              <motion.div className="project-tags" variants={staggerContainer(0.07, 0.35)} initial="hidden" animate="visible" style={{ alignSelf: 'flex-start', textAlign: 'left', marginTop: 'var(--space-md)' }}>
                {project.tags.map((tag) => (
                  <motion.span key={tag} className="project-tag" variants={staggerChild}>{tag}</motion.span>
                ))}
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} style={{ marginTop: 'var(--space-md)', maxWidth: '800px', lineHeight: '1.8', fontSize: 'var(--text-md)', textAlign: 'left' }}>
                {project.description}
              </motion.p>

              <motion.div className="project-palette with-line" variants={staggerContainer(0.08, 0.5)} initial="hidden" animate="visible" style={{ alignSelf: 'flex-start', textAlign: 'left', marginTop: 'var(--space-xl)' }}>
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

            {/* Sample Ideation Section */}
            {project.denimMotifs && project.denimMotifs.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Sample Ideation</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {project.denimMotifs.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '800px' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - Sample Ideation ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
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



      {/* ── Blooming Affair Custom Layout ──────────────── */}
      {slug === 'blooming-affair' && (
        <section className="project-custom-layout container" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-xl)', paddingLeft: 'var(--space-md)', paddingRight: 'var(--space-md)' }}>
            
            {/* Title Block without Cover Image */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 'var(--space-xl) 0', textAlign: 'left' }}>
              <motion.div className="project-num" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
                {project.num}
              </motion.div>
              <motion.h1 className="project-main-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
                {project.title}
              </motion.h1>
              <motion.h2 className="project-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }} style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
                {project.subtitle}
              </motion.h2>

              <motion.div className="project-tags" variants={staggerContainer(0.07, 0.35)} initial="hidden" animate="visible" style={{ alignSelf: 'flex-start', textAlign: 'left', marginTop: 'var(--space-md)' }}>
                {project.tags.map((tag) => (
                  <motion.span key={tag} className="project-tag" variants={staggerChild}>{tag}</motion.span>
                ))}
              </motion.div>



              <motion.div className="project-palette with-line" variants={staggerContainer(0.08, 0.5)} initial="hidden" animate="visible" style={{ alignSelf: 'flex-start', textAlign: 'left', marginTop: 'var(--space-md)' }}>
                {project.palette.map((hex) => (
                  <motion.div key={hex} className="palette-swatch" style={{ background: hex }} variants={{ hidden: { opacity: 0, scale: 0, y: 10 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 14 } } }} whileHover={{ scale: 1.3, y: -4, transition: { type: 'spring', stiffness: 400 } }} title={hex} />
                ))}
              </motion.div>
            </div>

            {/* Project details grid */}
            {project.details && project.details.length > 0 && (
              <div className="project-details-section" style={{ marginBottom: 'var(--space-3xl)' }}>
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
              </div>
            )}

            {/* Moodboard Section */}
            {project.affairMoodboard && project.affairMoodboard.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Moodboards</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2xl)' }}>
                  {project.affairMoodboard.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={i === 1 ? { width: '100vw', maxWidth: '100vw' } : { width: '100%', maxWidth: '100%' }}>
                      {i === 1 ? (
                        <img src={img} alt={`${project.title} - Moodboard ${i + 1}`} style={{ width: '100vw', height: 'auto', display: 'block', borderRadius: '0' }} loading="lazy" />
                      ) : (
                        <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                          <img src={img} alt={`${project.title} - Moodboard ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                          <div className="tape tape-top"></div>
                        </div>
                      )}
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Motif Section */}
            {project.affairMotifs && project.affairMotifs.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Motifs</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {project.affairMotifs.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '100%' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - Motif ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                        <div className="tape tape-top"></div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

            {/* Motherprints Section */}
            {project.affairMotherprints && project.affairMotherprints.length > 0 && (
              <div style={{ marginBottom: '0' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Motherprint and its colorways (6x6 inches)</h3>
                </ScrollReveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
                  {project.affairMotherprints.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)', height: '100%' }}>
                        <img src={img} alt={`${project.title} - Motherprint ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                        <div className="tape tape-top"></div>
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
            
            {/* About Ainu Section */}
            {project.aboutAinu && project.aboutAinu.length > 0 && (
              <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <ScrollReveal variants={fadeUp}>
                  <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>About Ainu</h3>
                </ScrollReveal>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', alignItems: 'center' }}>
                  {project.aboutAinu.map((img, i) => (
                    <ScrollReveal key={img} variants={fadeUp} delay={i * 0.1} style={{ width: '100%' }}>
                      <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                        <img src={img} alt={`${project.title} - About Ainu ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} loading="lazy" />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}

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
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Fabric Swatches (Mockups - Not in actual size)</h3>
          </ScrollReveal>
          <div className="swatches-grid">
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

      {/* ── Illustrations Section (Blooming Affair) ──────── */}
      {project.affairProducts && project.affairProducts.length > 0 && (
        <section className="project-gallery-section container" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
          <ScrollReveal variants={fadeUp}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-lg)' }}>Illustrations</h3>
          </ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {project.affairProducts.map((img, i) => (
              <ScrollReveal key={img} variants={fadeUp} style={{ width: '100%', maxWidth: '100%' }}>
                <div className="gallery-item scrapbook-card" style={{ padding: 'var(--space-md)' }}>
                  <img src={img} alt={`${project.title} - Illustration ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
                  <div className="tape tape-top"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Image Gallery (Generic) ──────────────────────── */}
      {slug !== 'komudika-kaavya' && project.imageGallery && project.imageGallery.length > 0 && (
        <section className="project-gallery-section container" style={{ marginTop: 'var(--space-xl)' }}>
          <ScrollReveal variants={fadeUp} style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            <h3 className="pill-badge">Image Gallery</h3>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            {project.imageGallery.map((img, i) => {
              // Extract filename without extension and format it (e.g., "Product 1", "motif")
              const rawName = img.split('/').pop().split('.')[0].replace(/[-_]/g, ' ');
              const formattedTitle = rawName.charAt(0).toUpperCase() + rawName.slice(1);
              
              const isVideo = img.toLowerCase().endsWith('.webm') || img.toLowerCase().endsWith('.mp4');
              
              return (
                <ScrollReveal key={img} variants={fadeUp} delay={0.1} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className="gallery-item scrapbook-card no-border" style={{ overflow: 'hidden', width: isVideo ? 'fit-content' : '100%', maxWidth: '100%' }}>
                    {isVideo ? (
                      <video src={img} autoPlay loop muted playsInline style={{ maxWidth: '100%', maxHeight: '85vh', width: 'auto', height: 'auto', display: 'block', borderRadius: 0, margin: '0 auto' }} />
                    ) : (
                      <img src={img} alt={`${project.title} - ${formattedTitle}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 0 }} loading="lazy" />
                    )}
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
            <SparkleIcon color="var(--theme-primary, var(--color-raspberry))" width={48} height={48} />
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
