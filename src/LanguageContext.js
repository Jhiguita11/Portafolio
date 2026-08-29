import { createContext, useContext, useState } from "react";

export const translations = {
  en: {
    sidebar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      resume: "Resume",
      clients: "Clients",
      contact: "Contact",
      role: "Developer",
    },
    hero: {
      prefix: "I'm a",
      roles: [
        "Interactive Developer",
        "VR & Architectural Visualization",
        "Game Developer",
        "Web Developer",
      ],
      description:
        "Building immersive experiences at the intersection of technology and creativity — from real-time 3D worlds to modern web applications.",
      titleTag: "Full Stack",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
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
      builtWith: "Built with this platform",
      builtWithSub: "Live projects delivered on NEXARQ 360 for real clients.",
      viewTour: "View 360° tour",
      clientLabel: "Client",
    },
    clients: {
      label: "Who I've worked with",
      title: "Clients",
      subtitle: "Companies and organizations that have been part of my journey as an interactive and web developer — each one a new challenge and a new skill.",
      list: [
        {
          name: "MIESGROUP",
          initials: "MG",
          accent: "#9ca3af",
          sector: "Interactive Technology & VR",
          desc: "Interactive technology studio where I started as a 3D Developer and returned as Lead of the 3D and web development area, delivering VR experiences, architectural visualizations, 360° tours, and branded games for their clients.",
          projects: ["CasaLago VR", "MONARCA", "NEXARQ 360", "MiesFruit", "MiesFUT", "MiesCup", "Mies AR"],
          year: "2023 — 2025 · 2026 — Present",
        },
        {
          name: "Constructora MELÉNDEZ",
          initials: "CM",
          accent: "#E20E17",
          sector: "Real Estate & Construction",
          desc: "Real estate developer based in Cali. Through MIESGROUP I delivered the MONARCA PCVR architectural walkthrough and the Valle Alto and Reserva de Mirriñao 360° virtual tours, both live on their commercial website.",
          projects: ["MONARCA", "Valle Alto 360°", "Reserva de Mirriñao 360°"],
          year: "2026",
        },
        {
          name: "HERRAGRO",
          initials: "HG",
          accent: "#FDD000",
          sector: "Hardware & Manufacturing",
          desc: "Colombia's leading hardware manufacturer. Delivered a branded interactive PC game to showcase their product line at trade shows and brand events.",
          projects: ["Herragro Game"],
          year: "2023",
        },
        {
          name: "Constructora JARAMILLO MORA",
          initials: "JM",
          accent: "#E20B13",
          sector: "Real Estate & Construction",
          desc: "Real estate construction company. Developed a dual-platform VR architectural walkthrough of the CasaLago residential project for Meta Quest and PC.",
          projects: ["CasaLago VR"],
          year: "2024",
        },
        {
          name: "NIPHOS",
          initials: "NP",
          accent: "#e2e8f0",
          sector: "Software & Game Studio",
          desc: "My own studio, co-founded as an independent technology company: custom software development and, next, video games. I built its corporate site and MiHogar, a web app for home service management.",
          projects: ["NIPHOS Web", "MiHogar"],
          year: "2025 — Present",
        },
        {
          name: "Universidad de Manizales",
          initials: "UM",
          accent: "#1B4D3E",
          sector: "Education & Research",
          desc: "My home university, for which I developed Física Inmersiva — an interactive VR physics experience as part of my academic work in Systems & Telecommunications Engineering.",
          projects: ["Física Inmersiva"],
          year: "2023 — Present",
        },
      ],
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
      errorText: "Something went wrong. Please try again.",
      linkedin: "linkedin.com/in/jeremy-higuita",
      connect: "Let's connect",
      connectText:
        "Whether you're looking to build an immersive VR experience, a game, or a modern web app — I'm here to help bring your vision to life.",
      availability: "Available for freelance & full-time opportunities",
    },
    resume: {
      label: "Curriculum Vitae",
      title: "Resume",
      subtitle:
        "Systems & Telecommunications Engineering student with experience in 3D development, VR, architectural visualization, and technical support. Passionate about technology and interactive solutions.",
      download: "Download CV",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      exp: [
        {
          role: "Lead of 3D & Web Development",
          company: "MIESGROUP",
          period: "05/2026 — Present",
          description:
            "Returned to MIESGROUP to lead the 3D and web development area, owning delivery across both fronts. Leading real-time architectural visualization in Unreal Engine 5 — including the MONARCA PCVR walkthrough for Constructora Meléndez — and the NEXARQ 360 platform, on which the Valle Alto and Reserva de Mirriñao virtual tours were produced and shipped to production.",
          tags: ["Team Leadership", "Unreal Engine 5", "PCVR", "Web Development", "NEXARQ 360"],
        },
        {
          role: "Technical Support Advisor",
          company: "MOVISTAR / ABAI",
          period: "10/2025 — 02/2026",
          description:
            "Provided technical support to MOVISTAR customers as an external agent for ABAI. Handled service incidents, device configuration, and telecommunications troubleshooting.",
          tags: ["Technical Support", "Telecommunications", "Customer Service"],
        },
        {
          role: "Casino Assistant",
          company: "R&S TEMPORALES SAS",
          period: "06/2025 — 09/2025",
          description:
            "Operational support in the casino area, ensuring service quality and proper execution of assigned activities.",
          tags: ["Operations", "Customer Service"],
        },
        {
          role: "3D Developer",
          company: "MIESGROUP",
          period: "08/2023 — 03/2025",
          description:
            "Development of architectural visualizations, VR walkthroughs, and interactive 3D experiences for construction clients using Unreal Engine 5 and Blender. Projects include CasaLago, Inferia, and Herragro.",
          tags: ["Unreal Engine 5", "Blender", "VR", "Architectural Viz"],
        },
      ],
      edu: [
        {
          degree: "B.Eng. Systems & Telecommunications Engineering",
          institution: "Universidad de Manizales",
          period: "01/2023 — Present",
          description:
            "Focus on software architecture, data structures, algorithms, and web development. Active involvement in game development and interactive media projects.",
        },
        {
          degree: "Technician in Environmental Sanitation",
          institution: "Universidad de Caldas",
          period: "01/2019 — 11/2021",
          description:
            "Training in environmental health, public sanitation systems, and community health management.",
        },
      ],
      skillGroups: [
        { category: "Real-Time 3D", items: ["Unreal Engine 5", "Unity", "Blueprints", "VR Dev"] },
        { category: "3D & Design", items: ["Blender", "3D Modeling", "Texturing", "Animation"] },
        { category: "Web", items: ["React", "JavaScript ES6+", "CSS3", "Framer Motion"] },
        { category: "Tools", items: ["Git", "Figma", "VS Code", "Rider"] },
        { category: "Soft Skills", items: ["Teamwork", "Problem Solving", "Adaptability", "Time Management", "Creativity", "Leadership", "Critical Thinking", "Attention to Detail", "Fast Learner", "Proactivity", "Responsibility", "Communication"] },
        { category: "Languages", items: ["Spanish (Native)", "English (B1)"] },
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
      clients: "Clientes",
      contact: "Contacto",
      role: "Desarrollador",
    },
    hero: {
      prefix: "Soy",
      roles: [
        "Desarrollador Interactivo",
        "Visualización VR y Arquitectónica",
        "Desarrollador de Videojuegos",
        "Desarrollador Web",
      ],
      description:
        "Creando experiencias inmersivas en la intersección de tecnología y creatividad — desde mundos 3D en tiempo real hasta aplicaciones web modernas.",
      titleTag: "Full Stack",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contáctame",
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
      builtWith: "Proyectos hechos con esta plataforma",
      builtWithSub: "Recorridos en vivo entregados sobre NEXARQ 360 para clientes reales.",
      viewTour: "Ver recorrido 360°",
      clientLabel: "Cliente",
    },
    clients: {
      label: "Con quiénes he trabajado",
      title: "Clientes",
      subtitle: "Empresas y organizaciones que han hecho parte de mi camino como desarrollador interactivo y web — cada una, un nuevo reto y una nueva habilidad.",
      list: [
        {
          name: "MIESGROUP",
          initials: "MG",
          accent: "#9ca3af",
          sector: "Tecnología Interactiva & VR",
          desc: "Estudio de tecnología interactiva donde empecé como Desarrollador 3D y al que regresé como Líder del área de desarrollo 3D y web, entregando experiencias VR, visualizaciones arquitectónicas, recorridos 360° y videojuegos publicitarios.",
          projects: ["CasaLago VR", "MONARCA", "NEXARQ 360", "MiesFruit", "MiesFUT", "MiesCup", "Mies AR"],
          year: "2023 — 2025 · 2026 — Actualidad",
        },
        {
          name: "Constructora MELÉNDEZ",
          initials: "CM",
          accent: "#E20E17",
          sector: "Inmobiliaria y Construcción",
          desc: "Constructora con sede en Cali. A través de MIESGROUP entregué el recorrido arquitectónico PCVR de MONARCA y los recorridos virtuales 360° de Valle Alto y Reserva de Mirriñao, ambos publicados en su sitio comercial.",
          projects: ["MONARCA", "Valle Alto 360°", "Reserva de Mirriñao 360°"],
          year: "2026",
        },
        {
          name: "HERRAGRO",
          initials: "HG",
          accent: "#FDD000",
          sector: "Ferretería & Manufactura",
          desc: "El fabricante de ferretería líder de Colombia. Entregué un videojuego publicitario interactivo para PC que presenta su línea de productos en ferias y eventos de marca.",
          projects: ["Herragro Game"],
          year: "2023",
        },
        {
          name: "Constructora JARAMILLO MORA",
          initials: "JM",
          accent: "#E20B13",
          sector: "Construcción & Inmobiliaria",
          desc: "Empresa constructora e inmobiliaria. Desarrollé un recorrido VR arquitectónico del proyecto residencial CasaLago para Meta Quest y PC.",
          projects: ["CasaLago VR"],
          year: "2024",
        },
        {
          name: "NIPHOS",
          initials: "NP",
          accent: "#e2e8f0",
          sector: "Estudio de Software y Videojuegos",
          desc: "Mi propio estudio, cofundado como empresa de tecnología independiente: desarrollo de software a medida y, próximamente, videojuegos. Desarrollé su sitio corporativo y MiHogar, una app web para gestión de servicios del hogar.",
          projects: ["NIPHOS Web", "MiHogar"],
          year: "2025 — Actualidad",
        },
        {
          name: "Universidad de Manizales",
          initials: "UM",
          accent: "#1B4D3E",
          sector: "Educación & Investigación",
          desc: "Mi universidad, para la que desarrollé Física Inmersiva — una experiencia interactiva de física en VR como parte de mi trabajo académico en Ingeniería en Sistemas y Telecomunicaciones.",
          projects: ["Física Inmersiva"],
          year: "2023 — Presente",
        },
      ],
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
      errorText: "Algo salió mal. Por favor intenta de nuevo.",
      linkedin: "linkedin.com/in/jeremy-higuita",
      connect: "Conectemos",
      connectText:
        "Ya sea que busques crear una experiencia VR inmersiva, un juego o una aplicación web moderna — estoy aquí para ayudarte a hacerlo realidad.",
      availability: "Disponible para proyectos freelance y tiempo completo",
    },
    resume: {
      label: "Currículum Vitae",
      title: "Currículum",
      subtitle:
        "Estudiante de Ingeniería en Sistemas y Telecomunicaciones con experiencia en desarrollo 3D, VR, visualización arquitectónica y soporte técnico. Apasionado por la tecnología y las soluciones interactivas.",
      download: "Descargar CV",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      exp: [
        {
          role: "Líder de Área de Desarrollo 3D y Web",
          company: "MIESGROUP",
          period: "05/2026 — Actualidad",
          description:
            "Regreso a MIESGROUP como líder del área de desarrollo 3D y web, a cargo de la entrega en ambos frentes. Dirijo la visualización arquitectónica en tiempo real en Unreal Engine 5 — incluido el recorrido PCVR de MONARCA para la Constructora Meléndez — y la plataforma NEXARQ 360, sobre la que se produjeron y publicaron los recorridos virtuales de Valle Alto y Reserva de Mirriñao.",
          tags: ["Liderazgo de Equipo", "Unreal Engine 5", "PCVR", "Desarrollo Web", "NEXARQ 360"],
        },
        {
          role: "Asesor Soporte Técnico",
          company: "MOVISTAR / ABAI",
          period: "10/2025 — 02/2026",
          description:
            "Atención y soporte técnico a clientes de MOVISTAR como agente externo para ABAI. Gestión de incidencias de servicio, configuración de dispositivos y solución de problemas de telecomunicaciones.",
          tags: ["Soporte Técnico", "Telecomunicaciones", "Atención al Cliente"],
        },
        {
          role: "Auxiliar de Casino",
          company: "R&S TEMPORALES SAS",
          period: "06/2025 — 09/2025",
          description:
            "Apoyo operativo en el área de casino, garantizando la calidad del servicio y la correcta ejecución de las actividades asignadas.",
          tags: ["Operaciones", "Atención al Cliente"],
        },
        {
          role: "Desarrollador 3D",
          company: "MIESGROUP",
          period: "08/2023 — 03/2025",
          description:
            "Desarrollo de visualizaciones arquitectónicas, recorridos VR y experiencias 3D interactivas para clientes de construcción usando Unreal Engine 5 y Blender. Proyectos: CasaLago, Inferia y Herragro.",
          tags: ["Unreal Engine 5", "Blender", "VR", "Visualización Arquitectónica"],
        },
      ],
      edu: [
        {
          degree: "Ing. en Sistemas y Telecomunicaciones",
          institution: "Universidad de Manizales",
          period: "01/2023 — Presente",
          description:
            "Énfasis en arquitectura de software, estructuras de datos, algoritmos y desarrollo web. Participación activa en proyectos de desarrollo de juegos y medios interactivos.",
        },
        {
          degree: "Técnico en Saneamiento Ambiental",
          institution: "Universidad de Caldas",
          period: "01/2019 — 11/2021",
          description:
            "Formación en salud ambiental, sistemas de saneamiento público y gestión de salud comunitaria.",
        },
      ],
      skillGroups: [
        { category: "3D en Tiempo Real", items: ["Unreal Engine 5", "Unity", "Blueprints", "VR Dev"] },
        { category: "3D y Diseño", items: ["Blender", "3D Modeling", "Texturizado", "Animación"] },
        { category: "Web", items: ["React", "JavaScript ES6+", "CSS3", "Framer Motion"] },
        { category: "Herramientas", items: ["Git", "Figma", "VS Code", "Rider"] },
        { category: "Habilidades Blandas", items: ["Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Gestión del tiempo", "Creatividad", "Liderazgo", "Pensamiento crítico", "Atención al detalle", "Aprendizaje rápido", "Proactividad", "Responsabilidad", "Comunicación"] },
        { category: "Idiomas", items: ["Español (Nativo)", "Inglés (B1)"] },
      ],
    },
  },
};

const LanguageContext = createContext({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
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
