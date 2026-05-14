import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import FloatingIcons from "./FloatingIcons";
import "./About.css";
import profile from "../Assets/Images/profile.jpg";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">

      <FloatingIcons />

      {/* Photo — floats above card */}
      <motion.div
        className="about-avatar"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-avatar__ring">
          <img src={profile} alt="Jeremy Higuita" />
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55 }}
      >
        <motion.div
          className="about-title-wrapper"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h2 className="about-title">{t.about.title}</h2>
          <motion.span
            className="about-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          {t.about.bio}
        </motion.p>
      </motion.div>

    </section>
  );
}

export default About;
