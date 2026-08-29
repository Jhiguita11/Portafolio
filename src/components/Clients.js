import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { playHover, playClick } from "../utils/sounds";
import LogoMiesgroup from "../Assets/logos_clientes/logo_mies.png";
import LogoHerragro from "../Assets/logos_clientes/LOGO_HERRAGRO.png";
import LogoJMora from "../Assets/logos_clientes/Logo_JMora.png";
import LogoMelendez from "../Assets/logos_clientes/LogoMelendez.png";
import LogoNiphos from "../Assets/logos_clientes/LogoNiphos.png";
import LogoUniManizales from "../Assets/logos_clientes/LOGO_UNIMANIZALES.png";
import "./Clients.css";

const LOGOS = {
  MIESGROUP: LogoMiesgroup,
  HERRAGRO: LogoHerragro,
  "Constructora JARAMILLO MORA": LogoJMora,
  "Constructora MELÉNDEZ": LogoMelendez,
  NIPHOS: LogoNiphos,
  "Universidad de Manizales": LogoUniManizales,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

function Clients() {
  const { t } = useLanguage();
  const c = t.clients;

  // El clic fija un cliente; el mouse por encima lo previsualiza sin fijarlo
  const [pinned, setPinned] = useState(0);
  const [hovered, setHovered] = useState(null);
  const shownIndex = hovered ?? pinned;
  const shown = c.list[shownIndex];

  return (
    <section className="clients-section section">
      <div className="clients-orb" aria-hidden="true" />

      <motion.div
        className="clients-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="clients-header" variants={fadeUp} custom={0}>
          <span className="clients-label">{c.label}</span>
          <h2 className="clients-title">{c.title}</h2>
          <p className="clients-subtitle">{c.subtitle}</p>
        </motion.div>

        {/* ── Muro de logos ── */}
        <motion.div className="logo-wall" variants={fadeUp} custom={1}>
          {c.list.map((client, i) => (
            <button
              key={client.name}
              type="button"
              className={`logo-tile${i === shownIndex ? " logo-tile--active" : ""}`}
              style={{ "--accent": client.accent }}
              onClick={() => { playClick(); setPinned(i); }}
              onMouseEnter={() => { playHover(); setHovered(i); }}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              aria-pressed={i === pinned}
              aria-label={client.name}
            >
              {LOGOS[client.name] ? (
                <img src={LOGOS[client.name]} alt={client.name} loading="lazy" />
              ) : (
                <span className="logo-tile__initials">{client.initials}</span>
              )}
              <span className="logo-tile__bar" aria-hidden="true" />
            </button>
          ))}
        </motion.div>

        {/* ── Panel de detalle del cliente activo ── */}
        <motion.div className="client-detail" variants={fadeUp} custom={2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={shown.name}
              className="client-detail__inner"
              style={{ "--accent": shown.accent }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="client-detail__head">
                <div>
                  <h3 className="client-detail__name">{shown.name}</h3>
                  <span className="client-detail__sector">{shown.sector}</span>
                </div>
                <span className="client-detail__year">{shown.year}</span>
              </div>

              <p className="client-detail__desc">{shown.desc}</p>

              <ul className="client-detail__projects">
                {shown.projects.map((p) => (
                  <li key={p} className="client-detail__chip">{p}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Clients;
