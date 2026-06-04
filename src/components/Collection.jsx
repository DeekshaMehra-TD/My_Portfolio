import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { getProject } from '../data/projects';
import { StarIcon, FlowerIcon } from './Icons';
import ScrollReveal from './ScrollReveal';
import { fadeLeft, fadeRight, tiltIn, fadeUp, viewport } from '../hooks/useScrollReveal';
import './Collection.css';

const Collection = ({ id, title, subtitle, image, description, reverse }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project = getProject(id);

  // Subtle parallax on the image frame
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const contentVariant = reverse ? fadeLeft : fadeRight;
  const photoVariant   = reverse ? fadeRight : fadeLeft;

  return (
    <section id={id} className="collection-section container section-padding" ref={ref}>
      <div className={`collection-layout ${reverse ? 'reverse-layout' : ''}`}>

        {/* Photo side */}
        <ScrollReveal variants={photoVariant} className="collection-image-wrapper">
          <motion.div className="photo-frame" style={{ y: imageY }}>
            <img src={image} alt={title} className="collection-img" />
            <div className="tape tape-top"></div>
            <div className="tape tape-bottom"></div>
          </motion.div>


        </ScrollReveal>

        {/* Content side */}
        <ScrollReveal variants={contentVariant} className="collection-content">
          <motion.div
            className="collection-badge"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            COLLECTION
          </motion.div>

          <motion.h2
            className="collection-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {title}
          </motion.h2>

          <motion.h4
            className="collection-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {subtitle}
          </motion.h4>

          <ScrollReveal variants={tiltIn} delay={0.25} className="collection-desc-card scrapbook-card">
            <p>{description}</p>
          </ScrollReveal>

          {/* Color swatches stagger */}
          <motion.div
            className="swatch-container"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          >
            {['c1','c2','c3','c4','c5'].map(cls => (
              <motion.div
                key={cls}
                className={`swatch ${cls}`}
                variants={{
                  hidden: { opacity: 0, scale: 0, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 14 } },
                }}
                whileHover={{ scale: 1.3, y: -4, transition: { type: 'spring', stiffness: 400 } }}
              />
            ))}
          </motion.div>

          <motion.button
            className="btn-primary mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.06, y: -3, boxShadow: '0 8px 24px rgba(194,30,86,0.35)', transition: { type: 'spring', stiffness: 400, damping: 12 } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            Quick View
          </motion.button>
        </ScrollReveal>

      </div>

      <AnimatePresence>
        {isModalOpen && project && (
          <motion.div 
            className="collection-modal-overlay" 
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="collection-modal scrapbook-card" 
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
              
              <h3 className="modal-title">{project.title}</h3>
              
              {project.tags && (
                <div className="modal-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="modal-tag">{tag}</span>
                  ))}
                </div>
              )}
              
              <p className="modal-desc">{project.description}</p>
              
              <motion.button
                className="btn-primary modal-btn"
                whileHover={{ scale: 1.06, y: -3, boxShadow: '0 8px 24px rgba(194,30,86,0.35)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/project/${id}`)}
              >
                Know More
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Collection;
