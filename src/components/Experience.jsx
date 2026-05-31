import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from './Icons';
import ScrollReveal from './ScrollReveal';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerChild, viewport } from '../hooks/useScrollReveal';
import './Experience.css';

const timelineItems = [
  { title: 'Print Design Intern', company: '@ Torani India', desc: 'Worked on the Taal Winter Collection. Created placement prints for lehengas with traditional floral motifs.' },
  { title: 'Social Media & Design Manager', company: '@ VaultedWear.co', desc: 'Managed Instagram presence, created content, and developed brand identity aesthetics.' },
  { title: 'Craft Research Document', company: 'Tibetan Women\'s Centre', desc: 'In-depth research on carpet weaving traditions, techniques, and sustainable practices.' },
];

const projectItems = [
  { title: 'NGO Collaboration (AVANI)', desc: 'Stole collection inspired by traditional Aipan folk art.' },
  { title: 'Editorial Styling & Photoshoot', desc: 'Art direction and styling for a Tibetan folklore magazine spread.' },
  { title: 'Scarves Collection', desc: 'Mata Ni Pachedi hand-painted traditional motif explorations.' },
  { title: 'Upcycled Tote Bags', desc: 'Sustainable group initiative fulfilling a bulk order of 1000 upcycled bags.' },
];

const Experience = () => {
  return (
    <section className="experience-section container section-padding">
      <ScrollReveal variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}>
        <div className="exp-container scrapbook-card">
          <ScrollReveal variants={fadeUp}>
            <h2 className="section-title">Work Experience &amp; Projects</h2>
          </ScrollReveal>

          <div className="exp-grid">
            {/* Experience column */}
            <motion.div
              className="exp-column"
              variants={staggerContainer(0.18, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h3 className="column-title handwritten" variants={staggerChild}>Experience</motion.h3>
              {timelineItems.map((item, i) => (
                <motion.div key={i} className="timeline-item" variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.12 } },
                }}>
                  <div className="timeline-dot"></div>
                  <h4>{item.title}</h4>
                  <p className="company">{item.company}</p>
                  <p className="desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Projects column */}
            <motion.div
              className="exp-column"
              variants={staggerContainer(0.18, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h3 className="column-title handwritten" variants={staggerChild}>Projects</motion.h3>
              {projectItems.map((item, i) => (
                <motion.div key={i} className="timeline-item project-item" variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.12 } },
                }}>
                  <div className="timeline-dot star-dot">
                    <StarIcon color="var(--color-raspberry)" width={20} height={20} />
                  </div>
                  <h4>{item.title}</h4>
                  <p className="desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Experience;
