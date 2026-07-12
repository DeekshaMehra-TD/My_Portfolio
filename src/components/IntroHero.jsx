import './IntroHero.css';

const IntroHero = () => {
  return (
    <div className="intro-container">
      <section className="intro-motherprint">
        <img
          src="/motherprint.png"
          alt=""
          className="motherprint-image"
        />
      </section>

      <section className="intro-hero">
        <picture>
          {/* 2K / large screens — 1920×1080 */}
          <source srcSet="/DEEKSHANTRO-1.webp" media="(min-width: 1281px)" />
          {/* Laptop and below — 1280×551 */}
          <img
            src="/DEEKSHANTRO2-1.png"
            alt="Deeksha Mehra — Textile Designer"
            className="intro-image"
          />
        </picture>
      </section>
    </div>
  );
};

export default IntroHero;
