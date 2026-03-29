import React, { useState, useEffect, useCallback } from 'react';
import styles from './Carousel.module.css';
import { carouselSlides } from '../../data';

export default function Carousel() {
  const [idx, setIdx] = useState(0);

  const getSlidesVisible = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  };

  const [visible, setVisible] = useState(getSlidesVisible());
  const totalGroups = Math.ceil(carouselSlides.length / visible);

  useEffect(() => {
    const onResize = () => setVisible(getSlidesVisible());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goTo = useCallback(
    (next) => {
      const max = Math.ceil(carouselSlides.length / visible) - 1;
      setIdx(Math.max(0, Math.min(next, max)));
    },
    [visible]
  );

  // Auto-advance
  useEffect(() => {
    const t = setInterval(
      () => setIdx((prev) => (prev + 1) % Math.ceil(carouselSlides.length / visible)),
      4500
    );
    return () => clearInterval(t);
  }, [visible]);

  return (
    <section className={styles.section}>
      <div className="section-header" data-reveal>
        <p className="section-eyebrow">Projetos Recentes</p>
        <h2 className="section-title">Nossos Trabalhos em Destaque</h2>
      </div>

      <div className={styles.carouselWrap}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${(100 / visible) * idx}%)` }}
        >
          {carouselSlides.map((slide) => (
            <div
              key={slide.id}
              className={styles.slide}
              style={{ minWidth: `${100 / visible}%` }}
            >
              <div className={styles.slideInner}>
                <img src={slide.image} alt={slide.title} loading="lazy" />
                <div className={styles.slideLabel}>
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.carBtn} onClick={() => goTo(idx - 1)} aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.dots}>
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button className={styles.carBtn} onClick={() => goTo(idx + 1)} aria-label="Próximo">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
