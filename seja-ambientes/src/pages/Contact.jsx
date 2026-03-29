import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ContactForm from '../components/ContactForm/ContactForm';
import { companyInfo } from '../data';
import styles from './Contact.module.css';

const contactDetails = [
  {
    key: 'address',
    label: 'Endereço',
    value: companyInfo.address,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: 'phone',
    label: 'Telefone / WhatsApp',
    value: companyInfo.phone,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.49 19.79 19.79 0 01.09 2.82 2 2 0 012.06.64h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.53a16 16 0 006.29 6.29l1.25-1.25a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    key: 'email',
    label: 'E-mail',
    value: companyInfo.email,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    key: 'hours',
    label: 'Horário de Atendimento',
    value: companyInfo.hours,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Contact() {
  useScrollReveal();

  return (
    <section className={styles.contact}>
      <div className={styles.header} data-reveal>
        <p className="section-eyebrow">Fale Conosco</p>
        <h1 className={styles.title}>Vamos conversar sobre seu projeto</h1>
      </div>

      <div className={styles.grid}>
        {/* ── LEFT: INFO + MAP ── */}
        <div className={styles.info} data-reveal>
          <h3>Estamos prontos para transformar seu espaço</h3>
          <p>
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas para
            entender suas necessidades e agendar uma visita técnica sem compromisso.
          </p>

          {contactDetails.map((d) => (
            <div key={d.key} className={styles.detail}>
              <div className={styles.detailIcon}>{d.icon}</div>
              <div className={styles.detailText}>
                <strong>{d.label}</strong>
                <span style={{ whiteSpace: 'pre-line' }}>{d.value}</span>
              </div>
            </div>
          ))}

          <div className={styles.mapContainer}>
            <iframe
              src={companyInfo.mapEmbedUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Seja Ambientes"
            />
          </div>
        </div>

        {/* ── RIGHT: FORM ── */}
        <div className={styles.formWrap} data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
