import {
  HiHome,
  HiUser,
  HiLightningBolt,
  HiBriefcase,
  HiDocument,
  HiMail,
  HiMenu,
  HiX,
  HiVolumeUp,
  HiVolumeOff,
  HiOfficeBuilding,
} from "react-icons/hi";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../LanguageContext";
import { playHover, playClick, setSoundsEnabled } from "../utils/sounds";
import "./Sidebar.css";

export default function Sidebar({ setSection, active, isOpen, setIsOpen }) {
  const { lang, toggle, t } = useLanguage();
  const [soundOn, setSoundOn] = useState(true);

  const handleSoundToggle = () => {
    const next = !soundOn;
    setSoundsEnabled(next);
    setSoundOn(next);
    if (next) playClick();
  };

  const navItems = [
    { key: "hero",      label: t.sidebar.home,      icon: <HiHome /> },
    { key: "about",     label: t.sidebar.about,     icon: <HiUser /> },
    { key: "skills",    label: t.sidebar.skills,    icon: <HiLightningBolt /> },
    { key: "portfolio", label: t.sidebar.portfolio, icon: <HiBriefcase /> },
    { key: "resume",    label: t.sidebar.resume,    icon: <HiDocument /> },
    { key: "clients",   label: t.sidebar.clients,   icon: <HiOfficeBuilding /> },
    { key: "contact",   label: t.sidebar.contact,   icon: <HiMail /> },
  ];

  return (
    <aside className={`sidebar${isOpen ? "" : " collapsed"}`}>
      {/* Toggle button */}
      <div className="sidebar-toggle">
        <button
          className="toggle-btn"
          onClick={() => { playClick(); setIsOpen(!isOpen); }}
          onMouseEnter={playHover}
          aria-label={isOpen ? "Colapsar sidebar" : "Expandir sidebar"}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Profile */}
      <div className="profile">
        <h2>Jeremy Higuita</h2>
        <p>{t.sidebar.role}</p>
      </div>

      {/* Navigation */}
      <nav>
        {navItems.map(({ key, label, icon }) => (
          <button
            key={key}
            className={active === key ? "active" : ""}
            onClick={() => { playClick(); setSection(key); }}
            onMouseEnter={playHover}
            title={!isOpen ? label : undefined}
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </button>
        ))}
      </nav>

      {/* Sound controls */}
      <div className="sidebar-sound-controls">
        <button
          className={`sound-ctrl-btn${soundOn ? " active" : ""}`}
          onClick={handleSoundToggle}
          onMouseEnter={() => soundOn && playHover()}
          title={isOpen ? undefined : (soundOn ? "Sound ON" : "Sound OFF")}
          aria-label={soundOn ? "Turn off sound effects" : "Turn on sound effects"}
        >
          {soundOn ? <HiVolumeUp size={15} /> : <HiVolumeOff size={15} />}
          {isOpen && <span className="sound-ctrl-label">{soundOn ? "Sound ON" : "Sound"}</span>}
        </button>
      </div>

      {/* Language toggle */}
      <div className="sidebar-lang">
        <button
          className={`lang-btn${lang === "en" ? " active" : ""}`}
          onClick={() => { if (lang !== "en" || !isOpen) { playClick(); toggle(); } }}
          onMouseEnter={playHover}
          title="English"
          aria-label="Switch to English"
        >
          <ReactCountryFlag countryCode="US" svg style={{ width: "1.5em", height: "1.5em" }} />
        </button>
        <span className="lang-sep">|</span>
        <button
          className={`lang-btn${lang === "es" ? " active" : ""}`}
          onClick={() => { if (lang !== "es" || !isOpen) { playClick(); toggle(); } }}
          onMouseEnter={playHover}
          title="Español"
          aria-label="Cambiar a español"
        >
          <ReactCountryFlag countryCode="CO" svg style={{ width: "1.5em", height: "1.5em" }} />
        </button>
      </div>
    </aside>
  );
}
