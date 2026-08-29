import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import "./App.css";

import { LanguageProvider } from "./LanguageContext";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Resume from "./components/resume";
import Clients from "./components/Clients";

function AppInner() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth > 768);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 768) setIsSidebarOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [section, setSection] = useState("hero");

  const variants = {
    initial: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter:"blur(0px)"
    },
    exit: {
      opacity: 0,
      y: -30,
      filter: "blur(4px)"
    },
  };

  const renderSection = () => {
    switch (section) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "portfolio":
        return <Portafolio />;
      case "resume":
        return <Resume />;
      case "clients":
        return <Clients />;
      case "contact":
        return <Contact />;
      default:
        return <Hero setSection={setSection} />;
    }
  };

  return (
  <div className="layout">

   {/* Botón flotante: en móvil el sidebar sale de pantalla y este es
       el único acceso al menú (el toggle interno se va con él) */}
   <button
     className="mobile-nav-toggle"
     onClick={() => setIsSidebarOpen(true)}
     aria-label="Abrir menú"
   >
     <HiMenu />
   </button>

   <Sidebar
    setSection={setSection}
    active={section}
    isOpen={isSidebarOpen}
    setIsOpen={setIsSidebarOpen}
  />

  {isSidebarOpen && (
    <div
      className="sidebar-mobile-overlay"
      onClick={() => setIsSidebarOpen(false)}
      aria-hidden="true"
    />
  )}

    <main className={`content${isSidebarOpen ? "" : " sidebar-collapsed"}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={section}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
          style={{
            minHeight: "100vh",
            position: "relative",
            zIndex: 1,
          }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  </div>
);
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
