
import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image mobile-first">
           <img
            src="../assets/picnic.jpg"
            alt="Simrika Sunar"
            className="profile-photo"
          />
        </div>
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Simrika Sunar</span></h1>
          <h3>Aspiring Computer Engineer</h3>
          <p>Currently studying Grade 12 at Adarsha Secondary School, passionate about technology, programming, and creating innovative solutions through code.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setActiveSection('about')}>About Me</button>
            <button className="btn-secondary" onClick={() => setActiveSection('contact')}>Get In Touch</button>
          </div>
          <div className="hero-social-links">
            < a href="https://github.com/simrika0" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/simrikao_o?igsh=dXpibG0yeDRmN3Jr" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href=" https://www.facebook.com/share/19hmm67r9q/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:simrika0213@gmail.com" className="hero-social-link">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+9779860944238" className="hero-social-link">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
