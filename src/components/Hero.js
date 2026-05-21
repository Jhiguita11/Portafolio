import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import "./Hero.css";

function Hero({ setSection }) {
  const { t } = useLanguage();
  const roles = t.hero.roles;

  const [textoActual, setTextoActual] = useState("");
  const [indiceTexto, setIndiceTexto] = useState(0);
  const [indiceLetra, setIndiceLetra] = useState(0);
  const [borrando, setBorrando] = useState(false);

  // Reset typewriter when language changes
  useEffect(() => {
    setTextoActual("");
    setIndiceTexto(0);
    setIndiceLetra(0);
    setBorrando(false);
  }, [roles]);

  useEffect(() => {
    const textoCompleto = roles[indiceTexto % roles.length];
    const velocidad = borrando ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!borrando && indiceLetra < textoCompleto.length) {
        setTextoActual(textoCompleto.slice(0, indiceLetra + 1));
        setIndiceLetra(indiceLetra + 1);
      } else if (borrando && indiceLetra > 0) {
        setTextoActual(textoCompleto.slice(0, indiceLetra - 1));
        setIndiceLetra(indiceLetra - 1);
      } else if (!borrando && indiceLetra === textoCompleto.length) {
        setTimeout(() => setBorrando(true), 1200);
      } else if (borrando && indiceLetra === 0) {
        setBorrando(false);
        setIndiceTexto((indiceTexto + 1) % roles.length);
      }
    }, velocidad);

    return () => clearTimeout(timeout);
  }, [indiceLetra, borrando, indiceTexto, roles]);

  return (
    <section className="hero">
      <div className="hero-dot-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />

      <div className="hero-overlay">
        <div className="hero-badge">{t.hero.badge}</div>

        <h1 className="hero-title">Jeremy Higuita</h1>

        <p className="hero-subtitle">
          {t.hero.prefix}{" "}
          <span className="hero-typewriter">
            {textoActual}
            <span className="cursor">|</span>
          </span>
        </p>

        <p className="hero-description">{t.hero.description}</p>

        <div className="hero-cta-row">
          <div className="hero-stat">
            <span className="hero-stat__number">11+</span>
            <span className="hero-stat__label">{t.hero.projects}</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat__number">4+</span>
            <span className="hero-stat__label">{t.hero.yearsExp}</span>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat__number">Full</span>
            <span className="hero-stat__label">Stack</span>
          </div>
        </div>

        <div className="hero-btn-row">
          <button className="hero-btn hero-btn--primary" onClick={() => setSection("portfolio")}>
            {t.hero.ctaPrimary}
          </button>
          <button className="hero-btn hero-btn--secondary" onClick={() => setSection("contact")}>
            {t.hero.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
