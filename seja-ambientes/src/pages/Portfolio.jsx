import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects, portfolioFilters } from '../data';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  useScrollReveal();

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className={styles.portfolio}>
      <div className={styles.header} data-reveal>
        <p className="section-eyebrow">Nossos Trabalhos</p>
        <h1 className={styles.title}>Portfólio de Projetos</h1>
      </div>

      <div className={styles.filters} data-reveal>
        {portfolioFilters.map((f) => (
          <button
            key={f.value}
            className={`${styles.filterBtn} ${activeFilter === f.value ? styles.active : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project) => (
          <div
            key={project.id}
            className={`${styles.item} ${project.large ? styles.large : ''}`}
          >
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
              <p>{project.location}</p>
              <span className={styles.viewBtn}>Ver Projeto</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
