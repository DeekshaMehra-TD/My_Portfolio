import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { fadeUp, staggerContainer, viewport } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';
import './PortfolioGrid.css';

const directoryTitles = {
  'blooming-affair': 'A BLOOMING AFFAIR',
  'komudika-kaavya': 'KOMUDIKA KAAVYA LEHENGA SET (FOR TORANI INDIA)',
  'ainu-textile': 'AINU TEXTILE (JAPAN) INSPIRED COLLECTION',
  'denim-with-heart': 'DENIM WITH HEART',
  'kamal': 'KAMAL'
};

const directoryConfigs = {
  'blooming-affair': {
    image: '/Blooming_Affair/MainPageCoverPhoto-opt.webp',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  'komudika-kaavya': {
    image: '/Komudika/high-res-resize_0098_watermark-torani-fin_-copy-928_700x-opt.webp',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  'ainu-textile': {
    image: '/Ainu Textile/AinuMain1-opt.webp',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  'denim-with-heart': {
    image: '/Denim with Heart/NewCoverImage-opt.webp',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  'kamal': {
    image: '/Kamal/CoverImage-opt.webp',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
};

const PortfolioGrid = () => {
  const navigate = useNavigate();

  const handleClick = (project) => {
    if (!project.available) return;
    navigate(`/project/${project.slug}`);
  };

  // Sort projects sequentially by their number, excluding Kairi
  const sortedProjects = [...projects]
    .filter(p => p.slug !== 'kairi')
    .sort((a, b) => parseInt(a.num, 10) - parseInt(b.num, 10));

  return (
    <section className="portfolio-grid-section">
      {/* Content Banner Header */}
      <div className="content-banner">
        <div className="content-banner-card">
          <h2 className="content-banner-title">CONTENT</h2>
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div
        className="content-grid"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {sortedProjects.map((project, index) => {
          const titleText = directoryTitles[project.slug] || project.title.toUpperCase();
          const displayNum = parseInt(project.num, 10);
          const config = directoryConfigs[project.slug] || {
            image: project.image,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          };

          return (
            <motion.div
              key={project.slug}
              className={`content-item ${project.available ? 'is-link' : 'is-coming-soon'}`}
              role={project.available ? 'button' : undefined}
              tabIndex={project.available ? 0 : undefined}
              onClick={() => handleClick(project)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(project)}
              aria-label={project.available ? `View ${project.title} project` : `${project.title} — coming soon`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1, y: 0,
                  transition: { type: 'spring', stiffness: 90, damping: 16, delay: index * 0.08 },
                },
              }}
            >
              {/* Number Column */}
              <div className="content-num-wrap">
                <span className="content-number">{displayNum}</span>
              </div>

              {/* Card Frame & Title Column */}
              <div className="content-card-wrap">
                <div className="content-image-frame">
                  <div
                    className="content-image-bg"
                    style={{
                      backgroundImage: `url("${config.image}")`,
                      backgroundSize: config.backgroundSize,
                      backgroundPosition: config.backgroundPosition,
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
                <h4 className="content-title">{titleText}</h4>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default PortfolioGrid;
