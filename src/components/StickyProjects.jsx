import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { fadeUp } from '../hooks/useScrollReveal';
import './StickyProjects.css';

const projects = [
  {
    id: "blooming-affair",
    title: "A Blooming Affair",
    subtitle: "Print Design & Fashion illustration",
    image: "/Blooming_Affair/MainPageCoverPhoto-opt.webp",
    description: "This collection is inspired by the serene charm of the countryside, showcasing the graceful beauty of lilies and peonies. With soft pastel hues and deep purples, the floral prints capture nature's timeless elegance, offering a peaceful and romantic expression of the natural world's effortless calm and harmony."
  },
  {
    id: "komudika-kaavya",
    title: "Komudika Kaavya",
    subtitle: "Lehenga Design for Torani",
    image: "/Komudika/high-res-resize_0098_watermark-torani-fin_-copy-928_700x-opt.webp",
    description: "Traditional placement print design featuring historical chintz and kalamkari references on terracotta backgrounds."
  },
  {
    id: "ainu-textile",
    title: "Ainu Textile",
    subtitle: "Surface Design",
    image: "/Ainu Textile/AinuMain1-opt.webp",
    description: "A research based design project focused on cultural appreciation"
  },
  {
    id: "denim-with-heart",
    title: "Denim with Heart",
    subtitle: "Surface Design",
    image: "/Denim with Heart/NewCoverImage-opt.webp",
    description: "Curvy lines sculpt the silhoutte, red heart embroidery flirts with tradition, and every stitch is a love note in denim. Soft yet strong, bold yet tender. These jeans are made to move with emotion."
  }
];

const ProjectImage = ({ project, index, onInView }) => {
  const ref = useRef(null);
  // trigger when the image is roughly in the center of the viewport
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <motion.div 
      ref={ref}
      className="sticky-project-image-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link to={`/project/${project.id}`} className="sticky-project-link">
        <div className="sticky-project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
      </Link>
    </motion.div>
  );
};

const StickyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProject = projects[currentIndex];

  return (
    <section className="sticky-projects-section" id="featured-projects">
      <ScrollReveal variants={fadeUp} className="text-center" style={{ paddingBottom: 'var(--space-lg)' }}>
        <h2 className="raspberry-heading" style={{ textAlign: 'center' }}>FEATURED PROJECTS</h2>
        <p style={{ fontFamily: 'var(--font-secondary)', fontStyle: 'italic', color: 'var(--color-raspberry)', marginTop: '0.5rem', textAlign: 'center' }}>A selection of my best work...</p>
      </ScrollReveal>
      <div className="sticky-projects-container">
        
        {/* Left Side: Sticky Text */}
        <div className="sticky-left-pane">
          <div className="sticky-text-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="sticky-index">
                  {String(currentIndex + 1).padStart(2, '0')} <span className="sticky-index-total">/ {String(projects.length).padStart(2, '0')}</span>
                </div>
                <h2 className="sticky-title">{activeProject.title}</h2>
                <h3 className="sticky-subtitle">{activeProject.subtitle}</h3>
                <p className="sticky-description">{activeProject.description}</p>
                <Link to={`/project/${activeProject.id}`} className="btn-primary sticky-btn">
                  Explore Collection
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Scrolling Images */}
        <div className="sticky-right-pane">
          {projects.map((proj, i) => (
            <ProjectImage 
              key={proj.id} 
              project={proj} 
              index={i} 
              onInView={setCurrentIndex} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StickyProjects;
