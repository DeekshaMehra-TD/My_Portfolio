import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { fadeUp, viewport } from '../hooks/useScrollReveal';
import './Experience.css';

const timelineItems = [
  { title: 'Textile Design Intern', date: 'Dec. 2025 - April 2026', company: '@ HP Singh', desc: 'Completed my graduation project with HP Singh, developing two placement print collections for their emerging sub-brand. I led the entire design process, from concept development and motif creation to final artwork execution.' },
  { title: 'Print Design Intern', date: 'June - Aug. 2025', company: '@ Torani India Design Studio', desc: 'Assisted in developing and executing print concepts for upcoming seasonal collection. One of my lehenga prints was approved for production and got featured in Torani\'s Winter Collection (Taal).'},
  { title: 'Social Media & Design Manager', date: 'July 2025 - Present', company: '@ VaultedWear.co', desc: 'Currently managing the brand\'s Instagram, creating all content and original ideas for reels and promotions. I design posters and digital creatives, developed the store\'s logo, and continue to shape its complete visual identity.'},
  { title: 'Craft Research Document', date: 'June 2024', company: '@ Tibetan Women\'s Centre', desc: 'Collaborated with Tibetan Women\'s Centre, Dehradun and conducted an on field in-depth research on Tibetan carpets, focusing on traditional weaving practices and the symbolism of design patterns.' },
  { title: 'CRAFT BASED DESIGN PROJECT', date: 'Nov. 2025', company: '@ Kullu Weaving', desc: 'Worked closely with local artisans as part of a collaborative craft-based design project exploring Kullu weaving, and designed a collection of ceremonial gifts for government officials.' },
];

const projectItems = [
  { title: 'Aipan Redefined', date: 'Nov. 2025', desc: 'Rooted in childhood memories, this project weaves the traditional Aipan art of Uttarakhand into contemporary textiles, creating a connection to home, heritage, and identity.' },
  { title: 'Editorial Styling & Photoshoot', date: 'Nov. 2024', desc: 'Directed and styled an editorial photoshoot inspired by Tibetan folklore, centered around an original character we developed and presented as a full magazine layout.' },
  { title: 'Scarves Collection', date: 'Dec. 2023', desc: 'Mata Ni Pachedi (Textile painting, Gujarat). Did a detailed study and created a collection of hand painted scarves inspired by the traditional motifs.' },
  { title: 'Upcycled Tote Bags', date: 'Sept. 2022', desc: 'Launched a group initiative to create a sustainable tote bag brand by upcycling waste fabric. Secured a bulk order of 1,000 customized tote bags from the local market.' },
];

const Experience = () => {
  return (
    <section className="experience-section container section-padding" id="experience">
      <ScrollReveal variants={fadeUp}>
        <div className="book-mockup-wrapper">
          <div className="book-cover">
            <div className="book-pages">
              
              {/* Left Page: Work Experience */}
              <div className="book-page left-page">
                <div className="page-content">
                  <div className="left-page-header">
                    <h2 className="book-title-small">Work Experience</h2>
                    <h1 className="book-title-large">Resume</h1>
                    <div className="title-underline"></div>
                  </div>
                  
                  <div className="experience-list">
                    {timelineItems.map((item, i) => (
                      <div key={i} className="book-timeline-item">
                        <h4>{item.title}</h4>
                        <p className="company-date">
                          <span className="company">{item.company}</span>
                          <span className="separator">|</span>
                          <span className="date">{item.date}</span>
                        </p>
                        <p className="desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Page: Projects */}
              <div className="book-page right-page">
                <div className="page-content right-page-layout">
                  <div className="huge-text-container">
                    <div className="huge-text">projects</div>
                  </div>
                  
                  <div className="projects-list">
                    {projectItems.map((item, i) => (
                      <div key={i} className="book-timeline-item">
                        <h4>{item.title}</h4>
                        <p className="company-date">
                          <span className="date">{item.date}</span>
                        </p>
                        <p className="desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spine and lighting overlays for 3D effect */}
              <div className="book-spine"></div>
              <div className="book-lighting-overlay"></div>
              
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Experience;
