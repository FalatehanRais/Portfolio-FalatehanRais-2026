'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Reveal from './Reveal';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Contact</span>
          <h2 className="sectionTitle">Let&apos;s Connect</h2>
        </div>

        <div className={styles.grid}>
          <Reveal className={styles.infoCol} direction="up">
            <h3 className={styles.infoTitle}>Got a project in mind?</h3>

            <div className={styles.contactItems}>
              {[
                { icon: 'fa-solid fa-envelope',  text: 'teanrais@gmail.com' },
                { icon: 'fa-solid fa-phone',     text: '+62 819 5800 0304' },
                { icon: 'fa-brands fa-linkedin', text: '@teanrais' },
              ].map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <div className={styles.iconWrap}>
                    <i className={item.icon} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.badges}>
              <div className={styles.badge}>
                <i className="fa-solid fa-star" style={{ color: 'var(--red)' }} />
                &nbsp;4.9/5 Avg Rating
              </div>
              <div className={styles.badge}>
                <i className="fa-solid fa-trophy" style={{ color: 'var(--red)' }} />
                &nbsp;2 Awards
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.formCard} direction="up" delay={0.15}>
            {submitted && (
              <div className={styles.successMsg}>
                <i className="fa-solid fa-circle-check" /> Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} data-testid="contact-form">
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Name</label>
                  <input
                    {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                    className={styles.input}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input
                    {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                    className={styles.input}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Subject</label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  className={styles.input}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Too short' } })}
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  rows={5}
                />
                {errors.message && <span className={styles.error}>{errors.message.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn} data-testid="contact-submit">
                Send Message <i className="fa-solid fa-arrow-right" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
