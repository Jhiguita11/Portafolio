import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap, HiLightningBolt, HiDownload } from "react-icons/hi";
import { useLanguage } from "../LanguageContext";
import "./Resume.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

function Resume() {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <section className="resume-section section">
      <div className="resume-orb" aria-hidden="true" />

      <motion.div className="resume-wrapper" initial="hidden" animate="visible">
        {/* Header */}
        <motion.div className="resume-header" variants={fadeUp} custom={0}>
          <span className="resume-label">{r.label}</span>
          <h2 className="resume-title">{r.title}</h2>
          <p className="resume-subtitle">{r.subtitle}</p>
          <a className="resume-download-btn" href="/JeremyHiguita_CV.pdf" download aria-label="Download CV">
            <HiDownload size={18} />
            {r.download}
          </a>
        </motion.div>

        {/* Experience */}
        <motion.div className="resume-block" variants={fadeUp} custom={1}>
          <div className="resume-block-title">
            <HiBriefcase className="resume-block-icon" />
            <h3>{r.experience}</h3>
          </div>

          <div className="timeline">
            {r.exp.map((item, i) => (
              <motion.div key={i} className="timeline-item" variants={fadeUp} custom={2 + i}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <h4 className="timeline-role">{item.role}</h4>
                      <span className="timeline-company">{item.company}</span>
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="timeline-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div className="resume-block" variants={fadeUp} custom={5}>
          <div className="resume-block-title">
            <HiAcademicCap className="resume-block-icon" />
            <h3>{r.education}</h3>
          </div>

          <div className="timeline">
            {r.edu.map((item, i) => (
              <motion.div key={i} className="timeline-item" variants={fadeUp} custom={6 + i}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <h4 className="timeline-role">{item.degree}</h4>
                      <span className="timeline-company">{item.institution}</span>
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills summary */}
        <motion.div className="resume-block" variants={fadeUp} custom={8}>
          <div className="resume-block-title">
            <HiLightningBolt className="resume-block-icon" />
            <h3>{r.skills}</h3>
          </div>

          <div className="skills-grid">
            {r.skillGroups.map((group, i) => (
              <motion.div key={group.category} className="skills-group" variants={fadeUp} custom={9 + i}>
                <h4 className="skills-group-title">{group.category}</h4>
                <div className="skills-tags">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Resume;
