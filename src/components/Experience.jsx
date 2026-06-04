import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerChild, viewport } from '../hooks/useScrollReveal';
import './Experience.css';

const timelineItems = [
  { title: 'Textile Design Intern (Dec. 2025 - April 2026)', company: '@ HP Singh', desc: 'Completed my graduation project with HP Singh, developing two placement print collections for their emerging sub-brand. I led the entire design process, from concept development and motif creation to final artwork execution.' },
  { title: 'Print Design Intern (June - Aug. 2025)', company: '@ Torani India Design Studio', desc: 'Assisted in developing and executing print concepts for upcoming seasonal collection. One of my lehenga prints was approved for production and got featured in Torani\'s Winter Collection (Taal).'},
  { title: 'Social Media & Design Manager (July 2025 - Present)', company: '@ VaultedWear.co', desc: 'Currently managing the brand\'s Instagram, creating all content and original ideas for reels and promotions. I design posters and digital creatives, developed the store\'s logo, and continue to shape its complete visual identity.'},
  { title: 'Craft Research Document (June 2024)', company: '@ Tibetan Women\'s Centre', desc: 'Collaborated with Tibetan Women\'s Centre, Dehradun and conducted an on field in-depth research on Tibetan carpets, focusing on traditional weaving practices and the symbolism of design patterns.' },
  { title: 'CRAFT BASED DESIGN PROJECT (Nov. 2025)', company: '@ Kullu Weaving', desc: 'Worked closely with local artisans as part of a collaborative craft-based design project exploring Kullu weaving, and designed a collection of ceremonial gifts for government officials.' },
];

const projectItems = [

  { title: 'Aipan Redefined (Nov. 2025)', desc: 'Rooted in childhood memories, this project weaves the traditional Aipan art of Uttarakhand into contemporary textiles, creating a connection to home, heritage, and identity.' },
  { title: 'Editorial Styling and Photoshoot (Nov. 2024)', desc: 'Directed and styled an editorial photoshoot inspired by Tibetan folklore, centered around an original character we developed and presented as a full magazine layout.' },
  { title: 'Scarves Collection (Dec. 2023)', desc: 'Mata Ni Pachedi (Textile painting, Gujarat). Did a detailed study and created a collection of hand painted scarves inspired by the traditional motifs.' },
  { title: 'Upcycled Tote Bags (Sept. 2022)', desc: 'Launched a group initiative to create a sustainable tote bag brand by upcycling waste fabric. Secured a bulk order of 1,000 customized tote bags from the local market.' },
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
              <motion.h3 className="column-title" variants={staggerChild}>Experience</motion.h3>
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
              <motion.h3 className="column-title" variants={staggerChild}>Projects</motion.h3>
              {projectItems.map((item, i) => (
                <motion.div key={i} className="timeline-item project-item" variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.12 } },
                }}>
                  <div className="timeline-dot"></div>
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
