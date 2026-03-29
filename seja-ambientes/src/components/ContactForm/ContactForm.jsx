import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', phone: '',
    service: '', message: '', how: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
          stroke="#9B1C1C" strokeWidth="1.5">
          <circle cx="24" cy="24" r="20" />
          <polyline points="16 24 22 30 32 18" />
        </svg>
        <h4>Mensagem enviada!</h4>
        <p>Em breve nossa equipe entrará em contato. Obrigado pelo interesse!</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="fname">Nome *</label>
          <input
            type="text" id="fname" name="fname"
            placeholder="Seu nome" value={form.fname}
            onChange={handleChange} required
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="lname">Sobrenome</label>
          <input
            type="text" id="lname" name="lname"
            placeholder="Seu sobrenome" value={form.lname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email" id="email" name="email"
            placeholder="seu@email.com" value={form.email}
            onChange={handleChange} required
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="phone">Telefone / WhatsApp</label>
          <input
            type="tel" id="phone" name="phone"
            placeholder="(00) 00000-0000" value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.group}>
        <label htmlFor="service">Ambiente de Interesse</label>
        <select id="service" name="service" value={form.service} onChange={handleChange}>
          <option value="">Selecione um ambiente…</option>
          <option>Cozinha Planejada</option>
          <option>Dormitório / Closet</option>
          <option>Sala de Estar / Jantar</option>
          <option>Home Office</option>
          <option>Banheiro / Lavabo</option>
          <option>Projeto Comercial</option>
          <option>Outro</option>
        </select>
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Mensagem *</label>
        <textarea
          id="message" name="message"
          placeholder="Conte-nos sobre seu projeto, espaço disponível, preferências…"
          value={form.message} onChange={handleChange} required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="how">Como nos encontrou?</label>
        <select id="how" name="how" value={form.how} onChange={handleChange}>
          <option value="">Selecione…</option>
          <option>Instagram</option>
          <option>Google</option>
          <option>Indicação</option>
          <option>Outro</option>
        </select>
      </div>

      <button type="submit" className={styles.submit}>
        Enviar Mensagem →
      </button>
    </form>
  );
}
