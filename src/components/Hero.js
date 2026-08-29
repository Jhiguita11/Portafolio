import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { trackPointer } from "../utils/pointer";
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
        <h1 className="hero-title">
          <span className="hero-title__name">Jeremy Higuita</span>
          <span className="hero-title__tag">{t.hero.titleTag}</span>
        </h1>

        <p className="hero-subtitle">
          {t.hero.prefix}{" "}
          <span className="hero-typewriter">
            {textoActual}
            <span className="cursor">|</span>
          </span>
        </p>

        <p className="hero-description">{t.hero.description}</p>

        <div className="hero-btn-row">
          <button
            className="hero-btn hero-btn--primary"
            onClick={() => setSection("portfolio")}
            onMouseMove={trackPointer}
          >
            <span className="hero-btn__glow" aria-hidden="true" />
            <span className="hero-btn__label">{t.hero.ctaPrimary}</span>
          </button>
          <button
            className="hero-btn hero-btn--secondary"
            onClick={() => setSection("contact")}
            onMouseMove={trackPointer}
          >
            <span className="hero-btn__glow" aria-hidden="true" />
            <span className="hero-btn__label">{t.hero.ctaSecondary}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
