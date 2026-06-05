import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ThreadDivider from './ThreadDivider';
import { fadeLeft, fadeRight, fadeUp, staggerContainer, staggerChild, viewport } from '../hooks/useScrollReveal';
import './Hero.css';

/* ── Lightweight inline SVG icons ── */
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
);
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
);
const EnvelopeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
);
const BehanceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor"><path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V277h84.8c34.9 0 55 14.8 55 49.4 0 34-21.4 43.2-55.5 43.2zM576 300.2h-186V289c0-36.7 24.4-50.6 52.5-50.6 33.1 0 50.5 16.2 52.4 50.6h81.1v-5.5c0-85.3-55-142.9-133.4-142.9-82.6 0-141.6 61.1-141.6 149.5 0 90.3 55.1 148 141.6 148 79.8 0 119.2-40.4 130.3-116.9zM389 217.3c-29.1 0-51.2 15.2-53.8 46.3h103.2c-1.7-31.7-20.4-46.3-49.4-46.3z"/></svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
);

const Hero = () => {
  return (
    <main>
      {/* ════════════════════════════════════════════════════════
          COVER SECTION — Built with clean code, 100% responsive
          ════════════════════════════════════════════════════════ */}
      <section className="cover-section">
        <motion.img
          src="/Home Page-opt.webp"
          alt="Deeksha Mehra — Textile Design Portfolio"
          className="cover-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

      </section>

      <ThreadDivider />

      {/* ════════════════════════════════════════════════════════
          RESUME / ABOUT — Clean professional grid
          ════════════════════════════════════════════════════════ */}
      <section className="hero-section container section-padding">
        <div className="hero-grid">

          {/* ── LEFT: Profile Image + About ─────────────────── */}
          <ScrollReveal variants={fadeLeft} className="hero-left">
            <div className="profile-card">
              <img 
                src="/deeksha-mehra-opt.webp" 
                alt="Deeksha Mehra" 
                className="profile-image"
                loading="eager"
              />
            </div>
            <div className="about-block">
              <h1 className="hero-name">Deeksha Mehra</h1>
              <p className="hero-tagline">Textile Designer</p>
              <p className="hero-bio">
                Textile Design graduate with a minor in Fashion Communication. I'm always chasing the perfect blend of tradition and innovation because design should never be boring, and neither should the fabrics we live with.
              </p>
            </div>
          </ScrollReveal>

          {/* ── CENTER: Contact + Skills ────────────────────── */}
          <ScrollReveal variants={fadeUp} className="hero-center">
            
            <div className="info-card">
              <h2 className="info-card-title">Contact</h2>
              <div className="contact-list">
                <a href="tel:+917983819892" className="contact-row">
                  <span className="contact-icon"><PhoneIcon /></span>
                  <span>+91 7983819892</span>
                </a>
                <div className="contact-row">
                  <span className="contact-icon"><MapPinIcon /></span>
                  <span>Haldwani, Uttarakhand</span>
                </div>
                <a href="mailto:dikshamehra2501@gmail.com" className="contact-row">
                  <span className="contact-icon"><EnvelopeIcon /></span>
                  <span>dikshamehra2501@gmail.com</span>
                </a>
                <a href="https://instagram.com/diksha_2501" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <span className="contact-icon"><InstagramIcon /></span>
                  <span>@diksha_2501</span>
                </a>
                <a href="https://behance.net/deekshamehra2501" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <span className="contact-icon"><BehanceIcon /></span>
                  <span>deekshamehra2501</span>
                </a>
                <a href="https://www.linkedin.com/in/deeksha-mehra-04b657404/" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <span className="contact-icon"><LinkedInIcon /></span>
                  <span>deeksha-mehra-04b657404</span>
                </a>
              </div>
            </div>

            <div className="info-card">
              <h2 className="info-card-title">Skills</h2>
              <ul className="skill-list">
                <li>Basic weaving, Hand spinning, Crocheting, Knitting Techniques</li>
                <li>Traditional Emobroideries and other surface Techniques</li>
                <li>Experience with different type of printing Techniques</li>
                <li>Illustrations (digital and hand)</li>
                <li>Ability to analyze current threads in textiles and fashion</li>
                <li style={{ color: '#C21E56' }}>I leverage AI tools to accelerate concept development, allowing me to quickly generate design variations, visual prototypes, and mockups. This lets me explore more ideas in less time, test different directions, and ensure I bring the strongest vision to life - always keeping my creative vision at the forefront</li>
              </ul>
            </div>

          </ScrollReveal>

          {/* ── RIGHT: Software, Interests, Education ───────── */}
          <ScrollReveal variants={fadeRight} className="hero-right">
            
            <div className="info-card">
              <h2 className="info-card-title">Software</h2>
              <ul className="skill-list">
                <li>Adobe Photoshop</li>
                <li>Adobe InDesign</li>
                <li>Adobe Illustrator</li>
                <li>Pointcarre</li>
                <li>Figma</li>
                <li>Procreate</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="info-card-title">Interests</h2>
              <div className="interests-grid">
                <span className="interest-chip">Knitting</span>
                <span className="interest-chip">Crocheting</span>
                <span className="interest-chip">Cycling</span>
                <span className="interest-chip">Sewing</span>
                <span className="interest-chip">Styling</span>
                <span className="interest-chip">Photography</span>
              </div>
            </div>

            <div className="info-card">
              <h2 className="info-card-title">Education</h2>
              <div className="edu-block">
                <p className="edu-line">National Institute of Fashion Technology, Himachal Pradesh</p>
                <p className="edu-sub">Bachelor of Design (B.Des) — Textile Design</p>
                <p className="edu-sub">(2022 - 2026) - CGPA : 8.1</p>
              </div>
              <br></br>
              <div className="edu-block">
                <p className="edu-line">Gurukul International School, Haldwani, Nainital</p>
                <p className="edu-sub">High School (12th) - PCM</p>
                <p className="edu-sub">Percentage : 86%</p>
              </div>
            </div>

          </ScrollReveal>

        </div>
      </section>
    </main>
  );
};

export default Hero;
