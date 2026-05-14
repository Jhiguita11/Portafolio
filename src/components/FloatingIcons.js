import { motion } from "framer-motion";
import {
  SiUnrealengine, SiUnity, SiBlender, SiAutodesk,
  SiJavascript, SiReact, SiHtml5, SiCss3,
  SiCplusplus, SiPython, SiAdobephotoshop, SiAdobeaftereffects,
} from "react-icons/si";

import "./FloatingIcons.css";

const icons = [
  { Icon: SiUnrealengine,      top: "8%",  size: 72, duration: 32, delay: 0,   opacity: 0.13 },
  { Icon: SiBlender,           top: "22%", size: 58, duration: 14, delay: 1.5, opacity: 0.10 },
  { Icon: SiReact,             top: "38%", size: 64, duration: 28, delay: 0.5, opacity: 0.12 },
  { Icon: SiUnity,             top: "54%", size: 52, duration: 12, delay: 3,   opacity: 0.09 },
  { Icon: SiJavascript,        top: "70%", size: 60, duration: 38, delay: 2,   opacity: 0.11 },
  { Icon: SiCplusplus,         top: "83%", size: 48, duration: 11, delay: 4,   opacity: 0.08 },
  { Icon: SiPython,            top: "14%", size: 44, duration: 22, delay: 6,   opacity: 0.09 },
  { Icon: SiHtml5,             top: "46%", size: 50, duration: 13, delay: 5,   opacity: 0.10 },
  { Icon: SiCss3,              top: "62%", size: 44, duration: 35, delay: 7,   opacity: 0.08 },
  { Icon: SiAutodesk,          top: "30%", size: 55, duration: 18, delay: 2.5, opacity: 0.10 },
  { Icon: SiAdobephotoshop,    top: "76%", size: 46, duration: 42, delay: 8,   opacity: 0.09 },
  { Icon: SiAdobeaftereffects, top: "90%", size: 42, duration: 15, delay: 1,   opacity: 0.07 },
];

export default function FloatingIcons() {
  return (
    <div className="floating-container">
      {icons.map(({ Icon, top, size, duration, delay, opacity }, i) => (
        <motion.div
          key={i}
          className="floating-icon"
          style={{ top, fontSize: size, color: `rgba(255,255,255,${opacity})` }}
          initial={{ x: "-12vw" }}
          animate={{
            x: "115vw",
            y: [0, -14, 6, -8, 0],
          }}
          transition={{
            x: { duration, delay, repeat: Infinity, ease: "linear" },
            y: { duration: duration * 0.4, delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
