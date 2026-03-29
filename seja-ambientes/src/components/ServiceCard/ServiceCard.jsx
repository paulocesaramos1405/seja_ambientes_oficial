import React from 'react';
import styles from './ServiceCard.module.css';

const icons = {
  kitchen: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="10" width="32" height="24" rx="1" />
      <path d="M14 10V34M30 10V34M6 20h32M6 26h32" />
    </svg>
  ),
  bedroom: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="6" width="28" height="32" rx="1" />
      <path d="M16 6v32M8 20h28" />
      <circle cx="20" cy="25" r="2" />
    </svg>
  ),
  living: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="14" width="36" height="20" rx="1" />
      <path d="M4 22h36M14 14v20M30 14v20" />
      <rect x="10" y="32" width="6" height="6" />
      <rect x="28" y="32" width="6" height="6" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="8" width="28" height="28" rx="1" />
      <path d="M8 20h28M20 8v28" />
      <circle cx="14" cy="14" r="2" />
      <circle cx="30" cy="30" r="2" />
    </svg>
  ),
  bathroom: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 38L12 10h20l6 28z" />
      <path d="M10 20h24M8 30h28M22 10v28" />
    </svg>
  ),
  commercial: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 38V18l14-10 14 10v20z" />
      <rect x="17" y="26" width="10" height="12" />
      <path d="M8 18h28" />
    </svg>
  ),
};

export default function ServiceCard({ service }) {
  return (
    <div className={styles.card} data-reveal>
      <div className={styles.icon}>{icons[service.icon]}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}
