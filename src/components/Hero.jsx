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

/* ── Skill categories data ── */
const skillCategories = [
  {
    title: 'Textile Techniques',
    items: ['Weaving', 'Knitting', 'Crocheting', 'Fabric manipulation', 'Material exploration'],
  },
  {
    title: 'Print Design',
    items: ['Seamless repeat patterns', 'Placement print design', 'Motif development', 'Colorway creation', 'Print mockups', 'Knowledge of traditional and digital printing techniques'],
  },
  {
    title: 'Surface Development',
    items: ['Embroidery design & surface ornamentation', 'Texture development', 'Mixed-media experimentation', 'Patchwork and stitching'],
  },
  {
    title: 'Research & Trend Analysis',
    items: ['Trend forecasting & market research', 'Concept and mood board development', 'Cultural & craft research'],
  },
  {
    title: 'AI & Innovation',
    description: 'I leverage AI tools to accelerate concept development and generate design variations, visual prototypes and mockups — bringing ideas to life faster while keeping creativity at the forefront.',
  },
  {
    title: 'Creative Strengths',
    items: ['Concept-driven design thinking', 'Print & pattern storytelling', 'Color and composition', 'Detail-oriented execution', 'Creative problem-solving', 'Adaptability & collaboration'],
  },
];

const Hero = () => {
  return (
    <main>
      {/* ════════════════════════════════════════════════════════
          COVER SECTION
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
          RESUME / ABOUT + SKILLS — all in one section
          ════════════════════════════════════════════════════════ */}
      <section className="hero-section container section-padding">
        <div className="hero-grid">

          {/* ── LEFT: Profile Image with name overlay ───────── */}
          <ScrollReveal variants={fadeLeft} className="hero-left">
            <div className="profile-card">
              <img
                src="/deeksha-mehra-opt.webp"
                alt="Deeksha Mehra"
                className="profile-image"
                loading="eager"
              />
              <div className="profile-overlay">
                <h1 className="hero-name">Deeksha Mehra</h1>
                <p className="hero-tagline">Textile Designer</p>
              </div>
            </div>
            <p className="hero-bio">
              Textile Design graduate with a minor in Fashion Communication. I'm always chasing the perfect blend of tradition and innovation because design should never be boring, and neither should the fabrics we live with.
            </p>
          </ScrollReveal>

          {/* ── CENTER: Contact + Interests ─────────────────── */}
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
          </ScrollReveal>

          {/* ── RIGHT: Software + Education ─────────────────── */}
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
              <h2 className="info-card-title">Education</h2>
              <div className="edu-block">
                <p className="edu-line">National Institute of Fashion Technology, Himachal Pradesh</p>
                <p className="edu-sub">Bachelor of Design (B.Des) — Textile Design</p>
                <p className="edu-sub">(2022 - 2026) - CGPA : 8.1</p>
              </div>
              <br />
              <div className="edu-block">
                <p className="edu-line">Gurukul International School, Haldwani, Nainital</p>
                <p className="edu-sub">High School (12th) - PCM</p>
                <p className="edu-sub">Percentage : 86%</p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── Skills card grid ── */}
        <ScrollReveal variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
          <h2 className="info-card-title" style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-md)' }}>Skills</h2>
        </ScrollReveal>
        <motion.div
          className="skills-grid"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skillCategories.map((cat, i) => (
            <motion.div key={i} className="skill-card" variants={staggerChild}>
              {/* Binder clip */}
              <div className="binder-clip" aria-hidden="true">
                <svg viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Wire handles */}
                  <path d="M18 38 C18 38 10 30 14 18 C17 9 26 6 30 6 C34 6 43 9 46 18 C50 30 42 38 42 38"
                    stroke="#b0b0b0" strokeWidth="3.5" strokeLinecap="round" fill="none"
                    style={{filter:'drop-shadow(0 1px 1px rgba(0,0,0,0.2))'}}/>
                  {/* Inner wire arch */}
                  <path d="M23 38 C23 38 17 31 20 21 C22.5 13 27 11 30 11 C33 11 37.5 13 40 21 C43 31 37 38 37 38"
                    stroke="#cccccc" strokeWidth="2" strokeLinecap="round" fill="none"/>

                  {/* Clip body — main block */}
                  <rect x="6" y="38" width="48" height="26" rx="3" fill="#f2b8c6"/>
                  {/* Body highlight */}
                  <rect x="6" y="38" width="48" height="8" rx="3" fill="#f8d0db" opacity="0.7"/>
                  {/* Body shadow bottom */}
                  <rect x="6" y="56" width="48" height="8" rx="3" fill="#d9869e" opacity="0.5"/>

                  {/* Centre spine */}
                  <rect x="27" y="38" width="6" height="26" fill="#e8a0b4" opacity="0.6"/>
                  {/* Spine highlight */}
                  <rect x="28" y="38" width="2" height="26" fill="white" opacity="0.2"/>

                  {/* Left jaw notch */}
                  <path d="M6 58 L6 64 Q6 64 12 64 L12 58 Q12 62 9 62 Q6 62 6 58Z" fill="#d9869e" opacity="0.6"/>
                  {/* Right jaw notch */}
                  <path d="M54 58 L54 64 Q54 64 48 64 L48 58 Q48 62 51 62 Q54 62 54 58Z" fill="#d9869e" opacity="0.6"/>

                  {/* Bottom edge detail */}
                  <rect x="8" y="62" width="44" height="2" rx="1" fill="#c97a9a" opacity="0.4"/>
                </svg>
              </div>
              <h3 className="skill-card-title">{cat.title}</h3>
              <div className="skill-card-divider" />
              {cat.description ? (
                <p className="skill-card-desc">{cat.description}</p>
              ) : (
                <ul className="skill-card-list">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

      </section>
    </main>
  );
};

export default Hero;
