import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import "./Clients.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function Clients() {
  const { t } = useLanguage();
  const c = t.clients;

  return (
    <section className="clients-section section">
      <div className="clients-orb" aria-hidden="true" />

      <motion.div className="clients-wrapper" initial="hidden" animate="visible">
        <motion.div className="clients-header" variants={fadeUp} custom={0}>
          <span className="clients-label">{c.label}</span>
          <h2 className="clients-title">{c.title}</h2>
          <p className="clients-subtitle">{c.subtitle}</p>
        </motion.div>

        <div className="clients-grid">
          {c.list.map((client, i) => (
            <motion.div
              key={client.name}
              className="client-card"
              variants={fadeUp}
              custom={1 + i}
              style={{ "--accent": client.accent }}
            >
              <div className="client-card__top">
                <div className="client-card__avatar">{client.initials}</div>
                <div className="client-card__info">
                  <h3 className="client-card__name">{client.name}</h3>
                  <span className="client-card__sector">{client.sector}</span>
                </div>
              </div>

              <p className="client-card__desc">{client.desc}</p>

              <div className="client-card__footer">
                <div className="client-card__projects">
                  {client.projects.map((p) => (
                    <span key={p} className="client-card__project-chip">{p}</span>
                  ))}
                </div>
                <span className="client-card__year">{client.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Clients;
