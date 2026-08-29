import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useLanguage } from "../LanguageContext";
import { trackPointer } from "../utils/pointer";
import "./Resume.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/* Entrada numerada del dossier — sirve para experiencia y para educación */
function Entry({ index, title, org, period, description, tags }) {
  return (
    <motion.article className="dossier-entry" variants={fadeUp} custom={index}>
      <span className="dossier-entry__num" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="dossier-entry__body">
        <div className="dossier-entry__head">
          <h4 className="dossier-entry__title">{title}</h4>
          <span className="dossier-entry__period">{period}</span>
        </div>

        <span className="dossier-entry__org">{org}</span>
        <p className="dossier-entry__desc">{description}</p>

        {tags && tags.length > 0 && (
          <ul className="dossier-entry__tags">
            {tags.map((tag) => (
              <li key={tag} className="dossier-tag">{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}

function Resume() {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <section className="resume-section section">
      <div className="resume-orb" aria-hidden="true" />

      <motion.div
        className="dossier"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* ── Columna fija: identidad y descarga ── */}
        <motion.aside className="dossier-rail" variants={fadeUp} custom={0}>
          <div className="dossier-rail__inner">
            <span className="dossier-rail__label">{r.label}</span>
            <h2 className="dossier-rail__title">{r.title}</h2>
            <div className="dossier-rail__rule" aria-hidden="true" />
            <p className="dossier-rail__subtitle">{r.subtitle}</p>

            <a
              className="dossier-download"
              href="/JeremyHiguita_CV.pdf"
              download
              onMouseMove={trackPointer}
            >
              <span className="dossier-download__glow" aria-hidden="true" />
              <HiDownload size={17} />
              <span>{r.download}</span>
            </a>
          </div>
        </motion.aside>

        {/* ── Columna de contenido ── */}
        <div className="dossier-main">
          <motion.section className="dossier-group" variants={fadeUp} custom={1}>
            <header className="dossier-group__head">
              <h3 className="dossier-group__title">{r.experience}</h3>
              <span className="dossier-group__count">{r.exp.length}</span>
            </header>

            {r.exp.map((item, i) => (
              <Entry
                key={item.role}
                index={i}
                title={item.role}
                org={item.company}
                period={item.period}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </motion.section>

          <motion.section className="dossier-group" variants={fadeUp} custom={2}>
            <header className="dossier-group__head">
              <h3 className="dossier-group__title">{r.education}</h3>
              <span className="dossier-group__count">{r.edu.length}</span>
            </header>

            {r.edu.map((item, i) => (
              <Entry
                key={item.degree}
                index={i}
                title={item.degree}
                org={item.institution}
                period={item.period}
                description={item.description}
              />
            ))}
          </motion.section>

          <motion.section className="dossier-group" variants={fadeUp} custom={3}>
            <header className="dossier-group__head">
              <h3 className="dossier-group__title">{r.skills}</h3>
            </header>

            <div className="dossier-skills">
              {r.skillGroups.map((group) => (
                <div key={group.category} className="dossier-skill-row">
                  <span className="dossier-skill-row__label">{group.category}</span>
                  <ul className="dossier-skill-row__items">
                    {group.items.map((skill) => (
                      <li key={skill} className="dossier-tag">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;
