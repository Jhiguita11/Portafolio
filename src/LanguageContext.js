import { createContext, useContext, useState } from "react";

export const translations = {
  en: {
    sidebar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      resume: "Resume",
      contact: "Contact",
      role: "Developer",
    },
    hero: {
      badge: "Available for work",
      prefix: "I'm a",
      roles: [
        "Interactive Developer",
        "VR & Architectural Visualization",
        "Game Developer",
        "Web Developer",
      ],
      description:
        "Building immersive experiences at the intersection of technology and creativity — from real-time 3D worlds to modern web applications.",
      projects: "Projects",
      yearsExp: "Years exp.",
      specialist: "Specialist",
    },
    about: {
      title: "ABOUT ME",
      bio: "My profile is focused on creating technological solutions aligned with strategic business objectives, integrating creativity, innovation, and logical thinking. I am a Software Engineering student at the Universidad de Manizales (Caldas, Colombia), with experience in Unreal Engine and Unity for the development of 2D, 3D, immersive VR games and mobile applications, and advanced skills in Blender, 3ds Max, Photoshop, Premiere Pro, and web development.",
    },
    skills: {
      title: "SKILLS",
      groups: ["Game Development", "3D / Animation", "Programming", "Editing"],
    },
    portfolio: {
      myWork: "My work",
      catAll: "All",
      catThreeD: "3D / VR / Mobile",
      catWeb: "Web",
      catThreeDSub: "Unreal Engine · VR · Fortnite",
      catWebSub: "React · Next.js · TypeScript",
      explore: "Explore",
      back: "Back",
      projectsCount: "projects",
      comingSoon: "Coming soon",
      comingSoonSub: "Web projects are on the way. Stay tuned.",
      comingSoonDetail: "Currently crafting modern React experiences. Follow my progress on GitHub or connect on LinkedIn.",
      comingSoonGithub: "GitHub",
      comingSoonLinkedin: "LinkedIn",
      comingSoonPreview: "What's coming",
      comingSoonPreviewItems: ["Portfolio website (this one)", "React + Framer Motion UI projects", "Full-stack web applications"],
      gallery: "Gallery",
      about: "About the project",
      preview: "Preview / Demo",
      type: "Type",
      year: "Year",
      tools: "Tools",
      prev: "Previous",
      next: "Next",
    },
    contact: {
      label: "Get in touch",
      title: "Contact",
      subtitle:
        "Interested in working together or have a project in mind? Send me a message and I'll get back to you as soon as possible.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      subject: "Subject",
      subjectPlaceholder: "What is this about?",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      successTitle: "Message sent!",
      successText: "Thanks for reaching out. I'll reply to your email shortly.",
      sendAnother: "Send another",
      connect: "Let's connect",
      connectText:
        "Whether you're looking to build an immersive VR experience, a game, or a modern web app — I'm here to help bring your vision to life.",
      availability: "Available for freelance & full-time opportunities",
    },
    resume: {
      label: "Curriculum Vitae",
      title: "Resume",
      subtitle:
        "Interactive developer specializing in real-time 3D experiences, VR and modern web applications.",
      download: "Download CV",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      exp: [
        {
          role: "Freelance Interactive Developer",
          company: "Independent",
          period: "2022 — Present",
          description:
            "Design and development of real-time 3D experiences, VR walkthroughs and advertising mini-games for architectural and commercial clients using Unreal Engine 5. Projects include CasaLago, Inferia, Herragro and Akayu.",
          tags: ["Unreal Engine 5", "Blueprints", "VR", "Level Design"],
        },
        {
          role: "Front-End Web Developer",
          company: "Independent",
          period: "2023 — Present",
          description:
            "Building modern, responsive web applications with React. Focused on performance, accessibility and clean UI/UX with component-based architecture and animations via Framer Motion.",
          tags: ["React", "JavaScript", "CSS3", "Framer Motion"],
        },
        {
          role: "3D Artist & Game Designer",
          company: "Independent",
          period: "2022 — Present",
          description:
            "Creation of 3D assets, environments and animations for game projects. Workflow spanning Blender for modeling and texturing, with final integration into Unreal Engine and Unity pipelines.",
          tags: ["Blender", "Unity", "3D Modeling", "Texturing"],
        },
      ],
      edu: [
        {
          degree: "B.Eng. Software Engineering",
          institution: "Universidad de Manizales",
          period: "2022 — Present",
          description:
            "Focus on software architecture, data structures, algorithms, and web development. Active involvement in game development and interactive media projects.",
        },
        {
          degree: "Unreal Engine 5 — Complete Course",
          institution: "Online / Self-directed",
          period: "2022",
          description:
            "Comprehensive training in real-time rendering, Blueprints visual scripting, VR development, lighting and optimization techniques for interactive applications.",
        },
      ],
      skillGroups: [
        { category: "Real-Time 3D", items: ["Unreal Engine 5", "Unity", "Blueprints", "VR Dev"] },
        { category: "3D & Design", items: ["Blender", "3D Modeling", "Texturing", "Animation"] },
        { category: "Web", items: ["React", "JavaScript ES6+", "CSS3", "Framer Motion"] },
        { category: "Tools", items: ["Git", "Figma", "VS Code", "Rider"] },
      ],
    },
  },

  es: {
    sidebar: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      portfolio: "Portafolio",
      resume: "Currículum",
      contact: "Contacto",
      role: "Desarrollador",
    },
    hero: {
      badge: "Disponible para trabajar",
      prefix: "Soy",
      roles: [
        "Desarrollador Interactivo",
        "Visualización VR y Arquitectónica",
        "Desarrollador de Videojuegos",
        "Desarrollador Web",
      ],
      description:
        "Creando experiencias inmersivas en la intersección de tecnología y creatividad — desde mundos 3D en tiempo real hasta aplicaciones web modernas.",
      projects: "Proyectos",
      yearsExp: "Años exp.",
      specialist: "Especialista",
    },
    about: {
      title: "SOBRE MÍ",
      bio: "Mi perfil está enfocado en la creación de soluciones tecnológicas alineadas con los objetivos estratégicos del negocio, integrando creatividad, innovación y pensamiento lógico. Soy estudiante de Ingeniería en Sistemas en la Universidad de Manizales (Caldas, Colombia), con experiencia en Unreal Engine y Unity para el desarrollo de videojuegos 2D, 3D, VR inmersivos y aplicaciones móviles, y manejo avanzado de Blender, 3ds Max, Photoshop, Premiere y desarrollo web.",
    },
    skills: {
      title: "HABILIDADES",
      groups: ["Desarrollo de Juegos", "3D / Animación", "Programación", "Edición"],
    },
    portfolio: {
      myWork: "Mis trabajos",
      catAll: "Todos",
      catThreeD: "3D / VR / Mobile",
      catWeb: "Web",
      catThreeDSub: "Unreal Engine · VR · Fortnite",
      catWebSub: "React · Next.js · TypeScript",
      explore: "Explorar",
      back: "Volver",
      projectsCount: "proyectos",
      comingSoon: "Próximamente",
      comingSoonSub: "Los proyectos web están en camino. Pronto aquí.",
      comingSoonDetail: "Actualmente creando experiencias modernas con React. Sigue mi progreso en GitHub o conéctate en LinkedIn.",
      comingSoonGithub: "GitHub",
      comingSoonLinkedin: "LinkedIn",
      comingSoonPreview: "Qué viene",
      comingSoonPreviewItems: ["Este portafolio web", "Proyectos de UI con React + Framer Motion", "Aplicaciones web full-stack"],
      gallery: "Galería",
      about: "Sobre el proyecto",
      preview: "Vista previa / Demo",
      type: "Tipo",
      year: "Año",
      tools: "Herramientas",
      prev: "Anterior",
      next: "Siguiente",
    },
    contact: {
      label: "Ponte en contacto",
      title: "Contacto",
      subtitle:
        "¿Interesado en trabajar juntos o tienes un proyecto en mente? Envíame un mensaje y te responderé lo antes posible.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      subject: "Asunto",
      subjectPlaceholder: "¿De qué se trata?",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
      successTitle: "¡Mensaje enviado!",
      successText: "Gracias por escribir. Te responderé a tu correo pronto.",
      sendAnother: "Enviar otro",
      connect: "Conectemos",
      connectText:
        "Ya sea que busques crear una experiencia VR inmersiva, un juego o una aplicación web moderna — estoy aquí para ayudarte a hacerlo realidad.",
      availability: "Disponible para proyectos freelance y tiempo completo",
    },
    resume: {
      label: "Currículum Vitae",
      title: "Currículum",
      subtitle:
        "Desarrollador interactivo especializado en experiencias 3D en tiempo real, VR y aplicaciones web modernas.",
      download: "Descargar CV",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      exp: [
        {
          role: "Desarrollador Interactivo Freelance",
          company: "Independiente",
          period: "2022 — Presente",
          description:
            "Diseño y desarrollo de experiencias 3D en tiempo real, recorridos VR y minijuegos publicitarios para clientes arquitectónicos y comerciales usando Unreal Engine 5. Proyectos: CasaLago, Inferia, Herragro y Akayu.",
          tags: ["Unreal Engine 5", "Blueprints", "VR", "Level Design"],
        },
        {
          role: "Desarrollador Front-End Web",
          company: "Independiente",
          period: "2023 — Presente",
          description:
            "Desarrollo de aplicaciones web modernas y responsivas con React. Enfocado en rendimiento, accesibilidad y UI/UX limpia con arquitectura de componentes y animaciones con Framer Motion.",
          tags: ["React", "JavaScript", "CSS3", "Framer Motion"],
        },
        {
          role: "Artista 3D y Diseñador de Juegos",
          company: "Independiente",
          period: "2022 — Presente",
          description:
            "Creación de assets 3D, entornos y animaciones para proyectos de juegos. Flujo de trabajo desde modelado y texturizado en Blender hasta integración final en Unreal Engine y Unity.",
          tags: ["Blender", "Unity", "3D Modeling", "Texturizado"],
        },
      ],
      edu: [
        {
          degree: "Ing. en Sistemas",
          institution: "Universidad de Manizales",
          period: "2022 — Presente",
          description:
            "Énfasis en arquitectura de software, estructuras de datos, algoritmos y desarrollo web. Participación activa en proyectos de desarrollo de juegos y medios interactivos.",
        },
        {
          degree: "Unreal Engine 5 — Curso Completo",
          institution: "Online / Autodidacta",
          period: "2022",
          description:
            "Formación integral en renderizado en tiempo real, scripting visual con Blueprints, desarrollo VR, iluminación y técnicas de optimización para aplicaciones interactivas.",
        },
      ],
      skillGroups: [
        { category: "3D en Tiempo Real", items: ["Unreal Engine 5", "Unity", "Blueprints", "VR Dev"] },
        { category: "3D y Diseño", items: ["Blender", "3D Modeling", "Texturizado", "Animación"] },
        { category: "Web", items: ["React", "JavaScript ES6+", "CSS3", "Framer Motion"] },
        { category: "Herramientas", items: ["Git", "Figma", "VS Code", "Rider"] },
      ],
    },
  },
};

const LanguageContext = createContext({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const { lang, toggle } = useContext(LanguageContext);
  return { lang, toggle, t: translations[lang] };
}
