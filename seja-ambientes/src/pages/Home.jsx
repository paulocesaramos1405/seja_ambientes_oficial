import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Carousel from '../components/Carousel/Carousel';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { services, companyInfo } from '../data';
import styles from './Home.module.css';

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Marcenaria de alto padrão · Fortaleza, CE</p>
          <h1 className={styles.heroTitle}>
            Ambientes que <em>contam</em><br />a sua história
          </h1>
          <p className={styles.heroSub}>
            Móveis projetados sob medida, criados com precisão artesanal e materiais nobres.
            Cada peça é única, assim como você.
          </p>
          <div className={styles.heroActions}>
            <Link to="/portfolio" className="btn-primary">Ver Projetos</Link>
            <Link to="/contato" className="btn-outline">Solicitar Orçamento</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>Scroll</div>
      </section>

      {/* ── CAROUSEL ── */}
      <Carousel />

      {/* ── ABOUT STRIP ── */}
      <section className={styles.aboutStrip}>
        <div className={styles.aboutImg}>
          <img
            src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=80"
            alt="Marcenaria artesanal"
            loading="lazy"
          />
        </div>
        <div className={styles.aboutText}>
          <p className="section-eyebrow">Sobre Nós</p>
          <h2>Tradição e precisão em cada detalhe</h2>
          <p>
            A Seja Ambientes nasceu da paixão pela marcenaria de qualidade. Trabalhamos com
            madeiras selecionadas, ferragens de alto padrão e um processo criativo que envolve
            você em cada etapa do projeto à entrega.
          </p>
          <p>
            Nosso compromisso é transformar espaços em ambientes que reflitam personalidade,
            funcionalidade e beleza duradoura.
          </p>
          <div className={styles.stats}>
            {companyInfo.stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className="section-header" data-reveal>
          <p className="section-eyebrow">O que fazemos</p>
          <h2 className="section-title">Nossos Serviços</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className={styles.ctaStrip}>
        <p className={styles.ctaEyebrow}>Pronto para transformar seu espaço?</p>
        <h2 className={styles.ctaTitle}>Vamos criar algo extraordinário juntos</h2>
        <Link to="/contato" className="btn-outline">
          Solicitar Orçamento Gratuito
        </Link>
      </section>
    </>
  );
}
