import { motion } from "framer-motion";
import {
  SiUnrealengine, SiUnity, SiBlender, SiAutodesk,
  SiJavascript, SiReact, SiHtml5, SiCss3,
  SiGithub, SiGitlab, SiAdobephotoshop, SiAdobepremierepro,
  SiAdobeaftereffects, SiBlueprint, SiMysql, SiPostgresql,
  SiCplusplus, SiPython,SiDocker,SiPhp,SiNodedotjs,SiTypescript,SiTwinmotion
} from "react-icons/si";
import { BiServer } from "react-icons/bi";
import { useLanguage } from "../LanguageContext";
import "./Skills.css";

const skillIcons = [
  [
    { name: "Unreal Engine", icon: <SiUnrealengine /> },
    { name: "Unity",         icon: <SiUnity /> },
  ],
  [
    { name: "Blender", icon: <SiBlender /> },
    { name: "3ds Max", icon: <SiAutodesk /> },
    { name: "Twin Motion", icon: <SiTwinmotion /> },
  ],
  [
    { name: "JavaScript",  icon: <SiJavascript /> },
    { name: "React",       icon: <SiReact /> },
    { name: "HTML",        icon: <SiHtml5 /> },
    { name: "CSS",         icon: <SiCss3 /> },
    { name: "C++",         icon: <SiCplusplus /> },
    { name: "Python",      icon: <SiPython /> },
    { name: "Blueprint",   icon: <SiBlueprint /> },
    { name: "GitHub",      icon: <SiGithub /> },
    { name: "GitLab",      icon: <SiGitlab /> },
    { name: "MySQL",       icon: <SiMysql /> },
    { name: "PostgreSQL",  icon: <SiPostgresql /> },
    { name: "SQL Server",  icon: <BiServer /> },
    { name: "Docker",  icon: <SiDocker /> },
    { name: "Php",  icon: <SiPhp /> },
    { name: "Nodejs",  icon: <SiNodedotjs /> },
    { name: "TypeScript",  icon: <SiTypescript /> },
  ],
  [
    { name: "Photoshop",     icon: <SiAdobephotoshop /> },
    { name: "Premiere Pro",  icon: <SiAdobepremierepro /> },
    { name: "After Effects", icon: <SiAdobeaftereffects /> },
  ],
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.04, duration: 0.3, ease: "easeOut" },
  }),
};

export default function Skills() {
  const { t } = useLanguage();

  const skillGroups = skillIcons.map((skills, i) => ({
    num: String(i + 1).padStart(2, "0"),
    title: t.skills.groups[i],
    skills,
    sparse: skills.length <= 3,
  }));

  return (
    <section className="skills-section">
      <div className="skills-orb skills-orb--1" aria-hidden="true" />
      <div className="skills-orb skills-orb--2" aria-hidden="true" />

      <div className="skills-header">
        <motion.h2
          className="skills-main-title"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.skills.title}
        </motion.h2>

        <motion.div
          className="skills-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        />
      </div>

      <div className="skills-columns">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            className="skills-group-card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="group-badge">
              <span className="group-badge-dot" />
              {group.num}
            </div>

            <h3 className="skills-column-title">{group.title}</h3>

            <div className={`skills-cards${group.sparse ? " skills-cards--sparse" : ""}`}>
              {group.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-box"
                  custom={i}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
