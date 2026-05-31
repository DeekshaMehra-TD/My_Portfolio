import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { fadeUp, staggerContainer, viewport } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';
import './PortfolioGrid.css';

const PortfolioGrid = () => {
  const navigate = useNavigate();

  const handleClick = (project) => {
    if (!project.available) return;
    navigate(`/project/${project.slug}`);
  };

  const printDesigns = projects.filter(p => p.category === 'Print Designs');
  const weaves = projects.filter(p => p.category === 'Weaves and Surface Designs');

  const renderGrid = (items) => (
    <motion.div
      className="directory-grid"
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {items.map((project, index) => (
        <motion.div
          key={project.slug}
          className={`directory-item scrapbook-card ${project.available ? 'is-link' : 'is-coming-soon'}`}
          role={project.available ? 'button' : undefined}
          tabIndex={project.available ? 0 : undefined}
          onClick={() => handleClick(project)}
          onKeyDown={(e) => e.key === 'Enter' && handleClick(project)}
          aria-label={project.available ? `View ${project.title} project` : `${project.title} — coming soon`}
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.92 },
            visible: {
              opacity: 1, y: 0, scale: 1,
              transition: { type: 'spring', stiffness: 90, damping: 16, delay: index * 0.08 },
            },
          }}
          whileHover={project.available ? {
            y: -8, scale: 1.03, rotate: -1,
            boxShadow: '8px 8px 25px rgba(194,30,86,0.15)',
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          } : {
            scale: 1.01,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
          whileTap={project.available ? { scale: 0.97 } : {}}
        >
          <div className="item-num">{project.num}</div>
          <div className="item-content">
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            {!project.available && <span className="coming-soon-tag">Coming soon</span>}
          </div>
          {project.available && <div className="item-arrow">→</div>}
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="portfolio-grid-section container section-padding">
      <ScrollReveal variants={fadeUp} className="grid-header text-center">
        <h2 className="raspberry-heading" style={{ textAlign: 'center' }}>PROJECT DIRECTORY</h2>
        <p className="handwritten">My creative journey...</p>
      </ScrollReveal>

      <div className="portfolio-categories" style={{ marginTop: 'var(--space-xl)' }}>
        <div className="category-section" style={{ marginBottom: 'var(--space-xl)' }}>
          <ScrollReveal variants={fadeUp}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-md)' }}>Print Designs</h3>
          </ScrollReveal>
          {renderGrid(printDesigns)}
        </div>

        <div className="category-section">
          <ScrollReveal variants={fadeUp}>
            <h3 className="pill-badge" style={{ marginBottom: 'var(--space-md)' }}>Weaves and Surface Designs</h3>
          </ScrollReveal>
          {renderGrid(weaves)}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
