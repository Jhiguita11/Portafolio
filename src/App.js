import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

import { LanguageProvider } from "./LanguageContext";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Resume from "./components/resume";

function AppInner() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
  <div className="layout">


   <Sidebar
  setSection={setSection}
  active={section}
  isOpen={isSidebarOpen}
  setIsOpen={setIsSidebarOpen}
/>


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
