import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for homepage to mount before scrolling
      setTimeout(() => {
        if (targetId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      className="floating-navbar"
      variants={{
        visible: { y: 0, x: "-50%", opacity: 1 },
        hidden: { y: -100, x: "-50%", opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="nav-links" style={{ margin: '0 auto' }}>
        <a href="#top" onClick={(e) => handleNavClick(e, 'top')}>Home</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
        <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Content</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
