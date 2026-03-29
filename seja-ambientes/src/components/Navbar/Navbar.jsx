import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import LogoIcon from '../LogoIcon/LogoIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logo}>
          <LogoIcon className={styles.logoIcon} />
          Seja<span>&nbsp;Ambientes</span>
        </Link>

        <div className={styles.navLinks}>
          <Link to="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
            Home
          </Link>
          <Link to="/portfolio" className={`${styles.navLink} ${isActive('/portfolio') ? styles.active : ''}`}>
            Portfólio
          </Link>
          <a href="/#services" className={styles.navLink}>
            Serviços
          </a>
          <Link to="/contato" className={`${styles.navLink} ${styles.navCta} ${isActive('/contato') ? styles.active : ''}`}>
            Fale Conosco
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        <Link to="/" className={styles.mobileLink}>Home</Link>
        <Link to="/portfolio" className={styles.mobileLink}>Portfólio</Link>
        <Link to="/contato" className={styles.mobileLink}>Contato</Link>
      </div>
    </>
  );
}
