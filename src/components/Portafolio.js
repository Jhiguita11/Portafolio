import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiArrowLeft, HiArrowRight, HiCode, HiArrowUp, HiPlay, HiChip, HiColorSwatch, HiMap } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiUnrealengine, SiBlender, SiThreedotjs, SiJavascript, SiMeta, SiWebgl } from "react-icons/si";
import { useLanguage } from "../LanguageContext";
import { playHover, playClick } from "../utils/sounds";
import "./Portafolio.css";

// CasaLago
import CasalagoVideo from "../Assets/Projects/Casalago/CasalagOp.mp4";
import Casalago1  from "../Assets/Projects/Casalago/Casalago_1.png";
import Casalago2  from "../Assets/Projects/Casalago/Casalago_2.png";
import Casalago3  from "../Assets/Projects/Casalago/Casalago_3.png";
import Casalago4  from "../Assets/Projects/Casalago/Casalago_4.png";
import Casalago5  from "../Assets/Projects/Casalago/Casalago_5.png";
import Casalago6  from "../Assets/Projects/Casalago/Casalago_6.png";
import Casalago7  from "../Assets/Projects/Casalago/Casalago_7.png";
import Casalago8  from "../Assets/Projects/Casalago/Casalago_8.png";
import Casalago9  from "../Assets/Projects/Casalago/Casalago_9.png";
import Casalago10 from "../Assets/Projects/Casalago/Casalago_10.png";
// Inferia
import Inferia1 from "../Assets/Projects/inferia/Inferia_1.png";
import InferiaVideo from "../Assets/Projects/inferia/Teaser_Inferia.mp4";

// Herragro
import herragro1 from "../Assets/Projects/herragro/herragro.png";
import HerragroVideo from "../Assets/Projects/herragro/Herragro.mp4";

// Akayu
import Akayu1     from "../Assets/Projects/Akayu/Akayu_1.png";
import Akayu2     from "../Assets/Projects/Akayu/Akayu_2.png";
import Akayu3     from "../Assets/Projects/Akayu/Akayu_3.png";
import AkayuMapa  from "../Assets/Projects/Akayu/Mapa.png";
import AkayuVideo from "../Assets/Projects/Akayu/Teaser_Fornite_Akayu.mp4";

// MiesFruit
import MiesfruitVideo   from "../Assets/Projects/Miesfruit/Miesfruit.mp4";
import MiesfruitPortada from "../Assets/Projects/Miesfruit/PortadaMiesFruit.png";

// MiesFUT
import MiesfutPortada from "../Assets/Projects/Miesfut/MiesFUT.png";
import MiesfutFast from "../Assets/Projects/Miesfut/Miesfut_Speedfast.mp4";

// MiesCup
import MiesCupPortada from "../Assets/Projects/Miescup/PortadaMIESCUP.png";

// MZ
import MZ1    from "../Assets/Projects/MZ/MZ_1.png";
import MZ2    from "../Assets/Projects/MZ/MZ_2.png";
import MZ3    from "../Assets/Projects/MZ/MZ_3.png";
import MZ4    from "../Assets/Projects/MZ/MZ_4.png";
import MZ5    from "../Assets/Projects/MZ/MZ_5.png";
import MZ6    from "../Assets/Projects/MZ/MZ_6.png";
import MZ7    from "../Assets/Projects/MZ/MZ_7.png";
import MZ8    from "../Assets/Projects/MZ/MZ_8.png";
import MZVideo2 from "../Assets/Projects/MZ/MZVD_2.mp4";

// Blender
import BlenderComercial from "../Assets/Projects/Blender/Comercial.png";
import BlenderUntitled  from "../Assets/Projects/Blender/untitled.png";

// Cubexus
import CubexusLogo from "../Assets/Projects/Cubexus/LogoCubexus.png";

// Fisica Inmersiva
import FisicaInmersivaPortada from "../Assets/Projects/Fisica Inmmersiva/PortadaFisicaInmersiva.png";

// Web projects
import ARMiesLogo        from "../Assets/Projects_Web/ARMies/LogoMiesAR.jpg";
import ARMiesPortada     from "../Assets/Projects_Web/ARMies/Portadamiesar.jpg";
import ARMiesVideo       from "../Assets/Projects_Web/ARMies/MIES AR.mp4";
import KumandayPortada  from "../Assets/Projects_Web/KumandayStudios/PortadaKS.png";
import Mies360Logo        from "../Assets/Projects_Web/Nexarq360/LogoNexarq360.png";
import Nexarq360Portada   from "../Assets/Projects_Web/Nexarq360/LogoPortada1.jpg";
import Nexarq360_1        from "../Assets/Projects_Web/Nexarq360/1.png";
import Nexarq360_2      from "../Assets/Projects_Web/Nexarq360/2.png";
import Nexarq360_3      from "../Assets/Projects_Web/Nexarq360/3.png";
import Nexarq360_4      from "../Assets/Projects_Web/Nexarq360/4.png";
import Nexarq360Video   from "../Assets/Projects_Web/Nexarq360/2026-05-14 14-02-55.mp4";
import MiHogarPortada   from "../Assets/Projects_Web/MiHogar/MiHogar.jpg";

const TOOL_ICON_MAP = [
  { match: /unreal engine|uefn/i,        Icon: SiUnrealengine, color: "#3D8FFF" },
  { match: /blender|cycles|eevee/i,       Icon: SiBlender,      color: "#EA7600" },
  { match: /three\.?js/i,                 Icon: SiThreedotjs,   color: "#049EF4" },
  { match: /javascript/i,                 Icon: SiJavascript,   color: "#F7DF1E" },
  { match: /meta quest/i,                 Icon: SiMeta,         color: "#0467DF" },
  { match: /webxr|webgl/i,               Icon: SiWebgl,        color: "#990000" },
  { match: /blueprint|uefn/i,            Icon: HiCode,         color: "#60a5fa" },
  { match: /ai|behavior tree/i,          Icon: HiChip,         color: "#a78bfa" },
  { match: /pbr|shading|render|lumen|nanite|cycles|eevee/i, Icon: HiColorSwatch, color: "#34d399" },
  { match: /level design|map/i,          Icon: HiMap,          color: "#fb923c" },
];

function getToolEntry(name) {
  return TOOL_ICON_MAP.find(e => e.match.test(name)) ?? { Icon: HiCode, color: "#94a3b8" };
}

const projectsData = [
  {
    id: 0,
    title: "CasaLago",
    cover: Casalago1,
    images: [Casalago1, Casalago2, Casalago3, Casalago4, Casalago5,
             Casalago6, Casalago7, Casalago8, Casalago9, Casalago10],
    videos: [CasalagoVideo],
    renderCredit: {
      en: "Work done at MIESGROUP alongside {link} for JARAMILLO MORA construction company.",
      es: "Trabajo realizado en MIESGROUP de la mano de {link} para la constructora JARAMILLO MORA.",
    },
    creditLink: { text: "Jhiguita11", url: "https://github.com/Jhiguita11" },
    shortDesc: {
      en: "Client-delivered architectural VR visualization in Unreal Engine 5 — dual-platform Blueprint architecture targeting PC and Meta Quest from a single codebase, with real-time Lumen lighting, PBR material libraries, and an in-world UMG navigation system built for non-technical end users.",
      es: "Visualización arquitectónica VR entregada a cliente en Unreal Engine 5 — arquitectura Blueprint dual para PC y Meta Quest desde un solo codebase, con iluminación Lumen en tiempo real, bibliotecas de materiales PBR y sistema de navegación UMG en el mundo diseñado para usuarios finales no técnicos.",
    },
    longDesc: {
      en: "CasaLago is an interactive architectural visualization developed in Unreal Engine 5, delivered as a commercial product to a residential construction client. The goal: let prospective buyers tour an unbuilt residential complex on both PC and VR from a single build. A dual-platform Blueprint architecture was engineered to handle runtime device detection, player controller switching, and camera mode management — ensuring consistent behavior across platforms without duplicate logic. Lumen global illumination and Nanite virtualized geometry were configured and performance-tuned for real-time photorealism, with PBR material libraries authored from reference photos of the actual construction finishes. The UI was built entirely in UMG: an in-world widget system allowed clients to navigate rooms, toggle furniture visibility layers, and access embedded informational hotspots without needing technical knowledge of the engine. A Blueprint state machine managed three navigation modes (walk, teleport, cinematic flythrough), giving the sales team flexible presentation formats. Full production pipeline owned end-to-end: environment modeling, material authoring, Blueprint gameplay and UI systems, VR interaction design, and final packaged client delivery.",
      es: "CasaLago es una visualización arquitectónica interactiva desarrollada en Unreal Engine 5, entregada como producto comercial a un cliente de construcción residencial. El objetivo: permitir a compradores potenciales recorrer un conjunto residencial sin construir tanto en PC como en VR desde un solo build. Se ingeniería una arquitectura Blueprint dual para manejar detección de dispositivo en tiempo de ejecución, cambio de controlador de jugador y gestión de modo de cámara, asegurando comportamiento consistente entre plataformas sin lógica duplicada. La iluminación global Lumen y la geometría Nanite fueron configuradas para fotorrealismo en tiempo real, con bibliotecas de materiales PBR creadas desde fotos de referencia de los acabados reales de construcción. La UI fue construida íntegramente en UMG: un sistema de widgets en el mundo permitía a los clientes navegar habitaciones, alternar capas de muebles y acceder a hotspots informativos sin conocimiento técnico del motor. Una máquina de estados Blueprint gestionó tres modos de navegación (caminar, teletransporte, vuelo cinemático), dando al equipo de ventas formatos de presentación flexibles. Pipeline de producción completo gestionado de principio a fin: modelado ambiental, materiales, sistemas Blueprint de gameplay y UI, diseño de interacción VR y entrega final empaquetada al cliente.",
    },
    type: { en: "Architectural VR Visualization", es: "Visualización Arquitectónica VR" },
    year: "2025",
    tools: "Unreal Engine 5, Lumen, Nanite, Blueprints",
    tags: ["Unreal Engine 5", "VR", "Blueprints", "Arch-Viz", "Lumen"],
    category: "3d",
  },
  {
    id: 1,
    title: "Inferia",
    cover: Inferia1,
    images: [Inferia1],
    videos: [InferiaVideo],
    shortDesc: {
      en: "First-person psychological horror game for PC in Unreal Engine 5.5 — custom Blueprint event sequencer for atmospheric scare triggers, AI Behavior Tree enemies with EQS perception, and Lumen-driven level design built to sustain dread across a full narrative arc.",
      es: "Videojuego de terror psicológico en primera persona para PC en Unreal Engine 5.5 — secuenciador de eventos Blueprint personalizado para triggers de susto atmosférico, enemigos con Behavior Tree de IA y percepción EQS, y diseño de niveles Lumen construido para sostener el terror en un arco narrativo completo.",
    },
    longDesc: {
      en: "Inferia is a first-person psychological horror game built end-to-end in Unreal Engine 5.5 for PC. The player takes on the role of a detective investigating a house tied to a series of unexplained disappearances — no one who entered ever came back. The technical backbone is a custom Blueprint event sequencer that drives all atmospheric scare systems: timed light flicker routines, stacked audio cue events, and environment state transitions that activate based on player proximity and narrative progress — layered scare mechanics built entirely without cutscenes, keeping the player in control at all times. Enemy AI was implemented with Unreal's Behavior Tree and Blackboard system using custom perception components (sight, hearing, environmental awareness), allowing enemies to react organically to player behavior and transition fluidly between patrol, investigate, alert, and attack states. Level design was architected around deliberate visual funneling and atmospheric density — corridors that compress, rooms with calibrated negative space, Lumen lighting tuned to produce specific emotional responses at each narrative beat. An in-game journal system was built in UMG to surface clues progressively, pacing the narrative reveal without dialogue. Full pipeline owned end-to-end: environment modeling, PBR materials, Blueprint gameplay and AI scripting, sound system wiring, level sequence animation, and final PC build.",
      es: "Inferia es un videojuego de terror psicológico en primera persona construido de principio a fin en Unreal Engine 5.5 para PC. El jugador asume el rol de un detective investigando una casa vinculada a desapariciones inexplicables — nadie que entró jamás regresó. La columna vertebral técnica es un secuenciador de eventos Blueprint personalizado que impulsa todos los sistemas de susto atmosférico: rutinas de parpadeo de luces temporizadas, señales de audio apiladas y transiciones de estado ambiental activadas por proximidad y progreso narrativo — mecánicas de susto por capas construidas sin cutscenes, manteniendo al jugador en control. La IA enemiga fue implementada con Behavior Tree y Blackboard de Unreal usando componentes de percepción personalizados (vista, audición, conciencia ambiental), permitiendo a los enemigos transicionar fluidamente entre estados de patrulla, investigación, alerta y ataque. El diseño de niveles fue arquitectado alrededor de embudo visual deliberado y densidad atmosférica — pasillos que comprimen, habitaciones con espacio negativo calibrado, iluminación Lumen afinada para producir respuestas emocionales específicas en cada beat narrativo. Se construyó un sistema de diario en UMG para presentar pistas progresivamente, marcando el ritmo narrativo sin diálogos. Pipeline completo gestionado de principio a fin: modelado ambiental, materiales PBR, scripting de gameplay e IA Blueprint, cableado de sonido, animación de secuencias de nivel y build PC final.",
    },
    type: { en: "Psychological Horror Game", es: "Videojuego de Terror Psicológico" },
    year: "2024",
    tools: "Unreal Engine 5.5, Lumen, Nanite, Blueprints, Level Design",
    tags: ["Unreal Engine 5.5", "Horror", "PC", "Lumen", "Nanite", "Level Design"],
    category: "3d",
  },
  {
    id: 2,
    title: "Herragro",
    cover: herragro1,
    images: [herragro1],
    videos: [HerragroVideo],
    shortDesc: {
      en: "Commercial branded game for PC delivered to HERRAGRO — Colombia's leading hardware manufacturer — built in Unreal Engine 5.0 with a Blueprint game-state system, dual-perspective camera, and a construction-site environment designed end-to-end against real brand guidelines.",
      es: "Videojuego publicitario comercial para PC entregado a HERRAGRO — el fabricante de ferreterías líder de Colombia — construido en Unreal Engine 5.0 con un sistema de estados de juego Blueprint, cámara de doble perspectiva y entorno de obra diseñado de principio a fin según especificaciones reales de marca.",
    },
    longDesc: {
      en: "Herragro is an interactive branded game developed in Unreal Engine 5.0 as a commercial deliverable for HERRAGRO, one of Colombia's most recognized tool and hardware manufacturers. The player takes on the role of a construction worker navigating an industrial-themed environment, collecting 10 HERRAGRO-branded coins before the countdown timer expires. A complete game state system was architected in Blueprint — covering game initialization, session countdown logic, real-time coin collection tracking, win/loss condition evaluation, level unlock progression, and result screen display — all wired into a clean state machine ensuring consistent behavior across every session. A dual-perspective camera system was implemented with smooth runtime transitions between third-person and first-person views, managed through a Blueprint camera manager component, giving players freedom to choose their play style. The environment was modeled and dressed end-to-end to match HERRAGRO's visual identity: branded signage, product replicas, and construction props were placed with deliberate attention to logo and product visibility, functioning as a playable advertisement. Packaged and delivered as a standalone PC application ready for deployment at trade shows and brand events — demonstrating commercial-grade interactive media production from initial concept through final client handoff.",
      es: "Herragro es un videojuego publicitario interactivo desarrollado en Unreal Engine 5.0 como entregable comercial para HERRAGRO, uno de los fabricantes de herramientas y ferretería más reconocidos de Colombia. El jugador asume el rol de un obrero de construcción que navega un entorno de temática industrial, recolectando 10 monedas con la marca HERRAGRO antes de que el cronómetro se agote. Se arquitecturó un sistema de estados de juego completo en Blueprint — cubriendo inicialización del juego, lógica de cuenta regresiva, seguimiento de recolección de monedas en tiempo real, evaluación de condición de victoria/derrota, progresión de desbloqueo de nivel y pantalla de resultados — todo conectado en una máquina de estados limpia que aseguró comportamiento consistente en cada sesión. Se implementó un sistema de cámara de doble perspectiva con transiciones fluidas entre vistas en tercera y primera persona, gestionado por un componente Blueprint de gestor de cámara. El entorno fue modelado y ambientado de principio a fin para coincidir con la identidad visual de HERRAGRO: señalización con marca, réplicas de productos y accesorios de construcción colocados con atención deliberada a la visibilidad de logos y productos, funcionando como un anuncio jugable. Empaquetado y entregado como aplicación PC standalone lista para ferias y activaciones de marca — demostrando producción de medios interactivos de nivel comercial desde el concepto inicial hasta la entrega final al cliente.",
    },
    type: { en: "Branded Advertising Game", es: "Videojuego Publicitario de Marca" },
    year: "2023",
    tools: "Unreal Engine 5.0, Blueprints, Blender, Level Design",
    tags: ["Unreal Engine 5.0", "PC", "Branding", "Game Design", "Blueprints"],
    category: "3d",
  },
  {
    id: 3,
    title: "Akayu",
    cover: Akayu2,
    images: [Akayu2, Akayu1, Akayu3, AkayuMapa],
    videos: [{ src: AkayuVideo, portrait: true }],
    shortDesc: {
      en: "Branded adventure mini-game built in UEFN for Fortnite Creative — Verse-scripted checkpoint progression, achievement triggers, and structured level design deployed live on the Fortnite platform as a real client campaign reaching millions of players.",
      es: "Minijuego publicitario de aventura construido en UEFN para Fortnite Creative — progresión de checkpoints scriptada en Verse, triggers de logros y diseño de niveles estructurado desplegado en vivo en la plataforma Fortnite como campaña real de cliente que alcanzó millones de jugadores.",
    },
    longDesc: {
      en: "Akayu is an adventure advertising mini-game developed in UEFN (Unreal Editor for Fortnite) for Fortnite Creative, deployed directly on the live Fortnite platform as a branded client campaign — reaching its massive global player base with zero installation friction. The project was scripted end-to-end using Verse alongside UEFN device logic, implementing a structured adventure level with defined objectives, multi-stage narrative, and environmental storytelling layered throughout. A checkpoint and respawn system was designed and scripted to persist player progress across the level, ensuring narrative order was maintained and progress was not lost on death. Achievement triggers and unlock events were built using Verse functions hooked into the UEFN island game loop, rewarding exploration milestones and objective completions with branded in-game feedback. The UI — objective trackers, progress indicators, and event notifications — was built using UEFN's HUD device system, designed to integrate naturally within Fortnite's existing UI layer. Level design was architected around visual storytelling: themed zones constructed to reinforce the client's brand world, with color-coded paths, branded signage, and interactive props guiding players intuitively through the experience. Demonstrates the ability to ship a complete, client-facing interactive product within the tooling and constraints of a live platform ecosystem.",
      es: "Akayu es un minijuego publicitario de aventura desarrollado en UEFN (Unreal Editor for Fortnite) para Fortnite Creative, desplegado directamente en la plataforma Fortnite en vivo como campaña de marca para un cliente real — alcanzando su masiva base global de jugadores sin fricción de instalación. El proyecto fue scriptado de principio a fin usando Verse junto con lógica de dispositivos UEFN, implementando un nivel de aventura estructurado con objetivos definidos, narrativa de múltiples etapas y narrativa ambiental estratificada. Se diseñó y scriptó un sistema de checkpoints y respawn para persistir el progreso del jugador a través del nivel, asegurando que el orden narrativo se mantuviera y el progreso no se perdiera al morir. Los triggers de logros y eventos de desbloqueo fueron construidos usando funciones Verse enganchadas al bucle de juego de la isla UEFN, recompensando hitos de exploración y completaciones de objetivos con retroalimentación de marca en el juego. La UI — rastreadores de objetivos, indicadores de progreso y notificaciones de eventos — fue construida usando el sistema de dispositivos HUD de UEFN, diseñada para integrarse naturalmente dentro de la capa UI de Fortnite. El diseño de niveles fue arquitectado alrededor de la narrativa visual: zonas temáticas construidas para reforzar el mundo de marca del cliente, con rutas codificadas por color, señalización de marca y accesorios interactivos que guían a los jugadores intuitivamente. Demuestra la capacidad de lanzar un producto interactivo completo orientado al cliente dentro de las herramientas y limitaciones de un ecosistema de plataforma en vivo.",
    },
    type: { en: "Advertising Game / Fortnite Creative", es: "Juego Publicitario / Fortnite Creative" },
    year: "2022",
    tools: "Unreal Engine 5, UEFN, Blueprints, Level Design",
    tags: ["Unreal Engine 5", "Fortnite", "Adventure", "Blueprints", "UEFN"],
    category: "3d",
  },
  {
    id: 4,
    title: "MiesFruit",
    cover: MiesfruitPortada,
    heroBgPos: "center 55%",
    images: [MiesfruitPortada],
    videos: [MiesfruitVideo],
    shortDesc: {
      en: "Immersive VR fruit-slashing game for Meta Quest 2 in Unreal Engine 5.2 — physics-driven saber interaction engineered from scratch in Blueprint, randomized launcher system, session scoring with VR-scale UMG HUD, and a full asset pipeline optimized for 72fps standalone performance.",
      es: "Videojuego VR inmersivo de corte de frutas para Meta Quest 2 en Unreal Engine 5.2 — interacción de sable impulsada por física ingeniada desde cero en Blueprint, sistema de lanzador aleatorizado, puntuación con HUD UMG a escala VR y pipeline completo de assets optimizado para rendimiento standalone a 72fps.",
    },
    longDesc: {
      en: "MiesFruit is an immersive VR game developed in Unreal Engine 5.2 for the Meta Quest 2, covering the full production pipeline from 3D asset creation through standalone platform delivery. The core mechanic — a physics-driven saber that slices fruits mid-air — was engineered from scratch in Blueprint: saber collision geometry was designed as a swept-volume trace running each frame, detecting intersection with fruit physics bodies and triggering procedural slice animations and particle effects on contact, producing a responsive cutting feel without runtime destructible mesh deformation. A fruit launcher system was built using a Blueprint spawning manager that randomized launch angle, velocity, and timing within tunable parameters per difficulty tier, keeping each session unpredictable. A session scoring system with real-time HUD was implemented in UMG — a visible counter and countdown timer designed at VR scale for comfortable in-headset readability — rewarding speed and precision. To meet Meta Quest 2's standalone performance constraints (72fps, mobile GPU), the full asset pipeline was optimized: geometry LODs, texture atlasing, and draw call budgets were managed throughout. 3D fruit assets were modeled, UV-unwrapped, and rigged in Blender with targeted polycount before integration into UE5. Complete VR production ownership: interaction design, Blueprint gameplay logic, VR UI, 3D content creation, and standalone platform optimization — all built and delivered as a functioning standalone application.",
      es: "MiesFruit es un videojuego VR inmersivo desarrollado en Unreal Engine 5.2 para el Meta Quest 2, cubriendo el pipeline completo de producción desde la creación de assets 3D hasta la entrega en plataforma standalone. La mecánica central — un sable impulsado por física que corta frutas en el aire — fue ingeniada desde cero en Blueprint: la geometría de colisión del sable fue diseñada como un trazado de volumen barrido ejecutado cada fotograma, detectando intersección con cuerpos físicos de frutas y disparando animaciones de corte procedurales y efectos de partículas al contacto, produciendo sensación de corte responsiva sin deformación de malla destructible en tiempo de ejecución. Se construyó un sistema de lanzamiento de frutas usando un gestor de spawning Blueprint que aleatorizó ángulo de lanzamiento, velocidad y temporización dentro de parámetros ajustables por nivel de dificultad, manteniendo cada sesión impredecible. Se implementó un sistema de puntuación basado en sesión con HUD en tiempo real en UMG — un contador visible y cronómetro regresivo diseñado a escala VR para legibilidad cómoda desde dentro del visor — premiando velocidad y precisión. Para cumplir con las restricciones de rendimiento standalone del Meta Quest 2 (72fps, GPU móvil), el pipeline completo de assets fue optimizado: LODs de geometría, atlas de texturas y presupuestos de draw calls gestionados deliberadamente. Los assets 3D de frutas fueron modelados, desenvueltos en UV y preparados en Blender con objetivos de polígonos optimizados. Propiedad completa de producción VR: diseño de interacción, lógica de gameplay Blueprint, UI VR, creación de contenido 3D y optimización de plataforma standalone — todo construido y entregado como aplicación standalone funcional.",
    },
    type: { en: "VR Interactive Game", es: "Videojuego Interactivo VR" },
    year: "2023",
    tools: "Unreal Engine 5.2, Meta Quest 2, Blueprints, Blender",
    tags: ["Unreal Engine 5.2", "VR", "Meta Quest 2", "Game Design", "Blueprints"],
    category: "3d",
  },
  {
    id: 6,
    title: "MiesFUT",
    cover: MiesfutPortada,
    heroBgPos: "center 35%",
    images: [MiesfutPortada],
    videos: [MiesfutFast],
    shortDesc: {
      en: "VR goalkeeper training simulator for Meta Quest 2 in Unreal Engine 5.4 — custom AI Behavior Tree with dynamic shot randomization across 9 goal zones, animated NPC striker, physics-accurate ball trajectories, motion-controller save detection, and session performance HUD — formal proposal for Once Caldas F.C.",
      es: "Simulador VR de entrenamiento de porteros para Meta Quest 2 en Unreal Engine 5.4 — Behavior Tree de IA personalizado con aleatorización dinámica de disparos en 9 zonas del arco, delantero NPC animado, trayectorias de balón precisas en física, detección de paradas por controlador de movimiento y HUD de rendimiento — propuesta formal para el Once Caldas F.C.",
    },
    longDesc: {
      en: "MiesFUT is a VR goalkeeper training simulator developed in Unreal Engine 5.4 for Meta Quest 2, built as a formal training proposal for the goalkeeping staff of Once Caldas F.C. — one of Colombia's most historic football clubs. The central technical challenge: build an AI penalty shooter that feels genuinely unpredictable. A custom Behavior Tree with randomized weighted decision nodes was engineered to independently select shot zone (9 goal areas), trajectory curve type, and ball launch velocity each penalty, governed by a tunable difficulty profile — ensuring no two penalties follow the same pattern. An NPC striker was rigged, animated, and wired to a shot sequence Blueprint that blends run-up, kick, and ball launch events in sync, producing a believable shooter performance rather than a static emitter. Ball physics were configured with custom projectile trajectory curves incorporating realistic spin and launch angle parameters, requiring the goalkeeper to read incoming trajectory rather than purely react to speed. The goalkeeper save detection system was built using VR motion controller collision volumes with custom Blueprint logic triggered on contact with ball trajectory volumes. A session scoring system with performance summary UI was implemented in UMG at Quest headset scale, giving coaches measurable data across training sessions. Full asset pipeline performance-optimized for standalone. As a client proposal, this demonstrates commercial-grade VR development applied to the professional sports performance market.",
      es: "MiesFUT es un simulador VR de entrenamiento de porteros desarrollado en Unreal Engine 5.4 para Meta Quest 2, construido como propuesta formal de entrenamiento para el cuerpo técnico del Once Caldas F.C. — uno de los clubes de fútbol más históricos de Colombia. El desafío técnico central: construir un lanzador de penaltis de IA que se sienta genuinamente impredecible. Se ingeniería un Behavior Tree personalizado con nodos de decisión aleatorizados y ponderados para seleccionar independientemente la zona de disparo (9 áreas del arco), el tipo de curva de trayectoria y la velocidad de lanzamiento en cada penalti, gobernado por un perfil de dificultad ajustable — asegurando que no haya dos penaltis con el mismo patrón. Un delantero NPC fue rigged, animado y conectado a un Blueprint de secuencia de disparo que mezcla eventos de carrera, patada y lanzamiento del balón en sincronía, produciendo una actuación de lanzador creíble en lugar de un emisor estático. La física del balón fue configurada con curvas de trayectoria de proyectil personalizadas que incorporan parámetros realistas de giro y ángulo de lanzamiento, requiriendo que el portero lea la trayectoria entrante en lugar de reaccionar puramente a la velocidad. El sistema de detección de paradas del portero fue construido usando volúmenes de colisión de controladores de movimiento VR con lógica Blueprint personalizada activada al contacto. Se implementó un sistema de puntuación de sesión con UI de resumen de rendimiento en UMG a escala de visor Quest, dando a entrenadores datos medibles entre sesiones. Pipeline de assets completamente optimizado para standalone. Como propuesta de cliente, demuestra desarrollo VR de nivel comercial aplicado al mercado de rendimiento deportivo profesional.",
    },
    type: { en: "VR Sports Training Simulator", es: "Simulador de Entrenamiento Deportivo VR" },
    year: "2024",
    tools: "Unreal Engine 5.4, Meta Quest 2, Blueprints, AI Behavior Trees, Blender",
    tags: ["Unreal Engine 5.4", "VR", "Meta Quest 2", "AI", "Sports Tech", "Blueprints"],
    category: "3d",
  },
  {
    id: 5,
    title: "MZ",
    cover: MZ7,
    images: [MZ7, MZ1, MZ2, MZ3, MZ4, MZ5, MZ6, MZ8],
    videos: [ MZVideo2],
    shortDesc: {
      en: "First-person survival shooter for PC in Unreal Engine 5.3 — Blueprint weapon system built from scratch with full state management and recoil simulation, custom AI Behavior Tree with EQS-driven enemy navigation, dynamic spawner, and Lumen atmospheric lighting layered over environmental narrative.",
      es: "Shooter de supervivencia en primera persona para PC en Unreal Engine 5.3 — sistema de armas Blueprint construido desde cero con gestión completa de estados y simulación de retroceso, Behavior Tree de IA personalizado con navegación enemiga impulsada por EQS, spawner dinámico e iluminación atmosférica Lumen sobre narrativa ambiental.",
    },
    longDesc: {
      en: "MZ is a first-person survival shooter developed in Unreal Engine 5.3 for PC, built as a complete production from initial concept through final packaged build. The player arrives at an abandoned house overrun by hostile creatures — armed with a firearm, they must survive and uncover the mystery behind the creatures' origin. The weapon system was built from scratch in Blueprint: a fully animated first-person firearm covering reload state management, ammo inventory tracking, recoil simulation, and muzzle flash and sound event wiring — all driven by an Animation Blueprint blending run, aim, shoot, and reload states reactively based on input. Enemy AI was implemented using Unreal's Behavior Tree and Blackboard system with custom EQS (Environment Query System) queries, enabling enemies to navigate intelligently, flank the player, investigate sounds, and transition fluidly between patrol, alert, investigate, and attack states based on live perception data. A dynamic enemy spawner was scripted to manage population density, spawn timing, and difficulty curve progression across the level. Lumen global illumination was deliberately configured to produce the oppressive shadow-heavy atmosphere that defines the game's feel — with specific light placement and emissive material calibration to maximize psychological tension at key narrative beats. Environmental narrative — notes, object arrangement, scene composition — was placed to reward exploration and layer mystery without dialogue. Full pipeline owned end-to-end: Blender environment assets, UE5 material authoring, Blueprint weapon and AI systems, sound event wiring, level sequence animation, and final PC build.",
      es: "MZ es un shooter de supervivencia en primera persona desarrollado en Unreal Engine 5.3 para PC, construido como producción completa desde el concepto inicial hasta el build final empaquetado. El jugador llega a una casa abandonada invadida por criaturas hostiles — armado con un arma de fuego, debe sobrevivir y descubrir el misterio detrás del origen de las criaturas. El sistema de armas fue construido desde cero en Blueprint: un arma de fuego completamente animada en primera persona que cubre gestión de estado de recarga, seguimiento de inventario de munición, simulación de retroceso y cableado de eventos de destello de boca y sonido — todo impulsado por un Animation Blueprint que mezcla estados de correr, apuntar, disparar y recargar de forma reactiva según el input. La IA enemiga fue implementada usando el sistema Behavior Tree y Blackboard de Unreal con consultas EQS (Environment Query System) personalizadas, permitiendo a los enemigos navegar inteligentemente, flanquear al jugador, investigar sonidos y transicionar fluidamente entre estados de patrulla, alerta, investigación y ataque basándose en datos de percepción en tiempo real. Se scriptó un spawner dinámico de enemigos para gestionar la densidad de población, el tiempo de spawn y la curva de dificultad a lo largo del nivel. La iluminación global Lumen fue configurada deliberadamente para producir la atmósfera opresiva y llena de sombras que define el juego — con colocación específica de luces y calibración de materiales emisivos para maximizar la tensión psicológica en los beats narrativos clave. La narrativa ambiental — notas, disposición de objetos, composición de escena — fue colocada para recompensar la exploración y estratificar el misterio sin diálogos. Pipeline completo gestionado de principio a fin: assets de entorno en Blender, materiales UE5, sistemas de armas e IA Blueprint, cableado de eventos de sonido, animación de secuencias de nivel y build PC final.",
    },
    type: { en: "First-Person Survival Game", es: "Videojuego de Supervivencia en Primera Persona" },
    year: "2024",
    tools: "Unreal Engine 5.3, Lumen, Blueprints, AI Behavior Trees, Blender",
    tags: ["Unreal Engine 5.3", "Survival", "Horror", "PC", "Lumen", "AI"],
    category: "3d",
  },
  {
    id: 7,
    title: "MiesCup",
    cover: MiesCupPortada,
    heroBgPos: "center 35%",
    images: [MiesCupPortada],
    videos: [],
    shortDesc: {
      en: "VR tennis training simulator for Meta Quest 3 in Unreal Engine 5.3 — physics-accurate ball machine, racket collision with swing-direction influence on shot outcome, real-time moving target scoring system, and in-VR UMG performance HUD built as a professional athletic tool.",
      es: "Simulador VR de entrenamiento de tenis para Meta Quest 3 en Unreal Engine 5.3 — máquina lanzapelotas precisa en física, colisión de raqueta con influencia de dirección de golpe en el resultado, sistema de puntuación de objetivo móvil en tiempo real y HUD UMG de rendimiento en VR construido como herramienta atlética profesional.",
    },
    longDesc: {
      en: "MiesCup is a VR tennis training simulator developed in Unreal Engine 5.3 for Meta Quest 3, built as a professional athletic performance tool for tennis players. The player stands inside a full-scale virtual court where a ball machine continuously launches balls at realistic speeds and trajectories; a dynamic target zone moves laterally in real time, and the player must direct each shot precisely into the moving zone to score. The ball physics system was engineered with custom projectile trajectory curves, incorporating launch angle, velocity, and spin parameters to produce realistic ball behavior and court bounce dynamics. The racket interaction system was built using VR motion controller collision volumes with swept-trace detection that records contact direction and swing speed at the moment of impact — influencing the ball's post-contact trajectory to reward proper technique with more accurate shot placement, rather than treating every contact as identical. The moving target system was scripted in Blueprint with a lateral movement algorithm varying speed and direction based on difficulty tier, making drills unpredictable across repetitions and preventing pattern memorization. A session scoring system with in-VR HUD was implemented in UMG — displaying real-time score, shot accuracy, and a post-session summary at Meta Quest 3 display scale — giving players and coaches measurable, comparable performance data. The court environment was modeled with the Quest 3's enhanced display and mixed reality pass-through capabilities in mind, balancing visual quality with the platform's performance budget. Complete standalone application demonstrating professional VR development for the sports technology market.",
      es: "MiesCup es un simulador VR de entrenamiento de tenis desarrollado en Unreal Engine 5.3 para Meta Quest 3, construido como herramienta de rendimiento atlético profesional para tennistas. El jugador se sitúa dentro de una cancha virtual a escala real donde una máquina lanzapelotas dispara continuamente pelotas con velocidades y trayectorias realistas; una zona objetivo dinámica se desplaza lateralmente en tiempo real, y el jugador debe dirigir cada golpe con precisión hacia la zona para acumular puntos. El sistema de física de la pelota fue ingeniado con curvas de trayectoria de proyectil personalizadas, incorporando parámetros de ángulo de lanzamiento, velocidad y giro para producir comportamiento realista de la pelota y dinámicas de bote en cancha. El sistema de interacción de la raqueta fue construido usando volúmenes de colisión de controladores de movimiento VR con detección de trazado barrido que registra la dirección de contacto y la velocidad de golpe en el momento del impacto — influyendo en la trayectoria post-contacto de la pelota para recompensar la técnica adecuada con una colocación de tiro más precisa, en lugar de tratar cada contacto de forma idéntica. El sistema de objetivo móvil fue scriptado en Blueprint con un algoritmo de movimiento lateral que varía velocidad y dirección según el nivel de dificultad, haciendo los ejercicios impredecibles entre repeticiones y previniendo la memorización de patrones. Se implementó un sistema de puntuación de sesión con HUD en VR en UMG — mostrando puntuación en tiempo real, precisión de tiro y resumen post-sesión a la escala de pantalla del Meta Quest 3 — dando a jugadores y entrenadores datos de rendimiento medibles y comparables. El entorno de la cancha fue modelado teniendo en mente las capacidades de pantalla mejorada y realidad mixta del Quest 3, equilibrando calidad visual con el presupuesto de rendimiento de la plataforma. Aplicación standalone completa que demuestra desarrollo VR profesional para el mercado de tecnología deportiva.",
    },
    type: { en: "VR Sports Training Simulator", es: "Simulador de Entrenamiento Deportivo VR" },
    year: "2024",
    tools: "Unreal Engine 5.3, Meta Quest 3, Blueprints, AI, Blender",
    tags: ["Unreal Engine 5.3", "VR", "Meta Quest 3", "Sports Tech", "Tennis", "Blueprints"],
    category: "3d",
  },
  {
    id: 8,
    title: "Blender",
    cover: BlenderComercial,
    images: [BlenderComercial, BlenderUntitled],
    videos: [],
    shortDesc: {
      en: "Curated 3D work produced entirely in Blender — commercial product visualizations for brand campaigns with custom studio lighting rigs and PBR node-graph materials, alongside personal artistic pieces exploring procedural textures and stylized rendering with Cycles and EEVEE.",
      es: "Trabajo 3D curado producido íntegramente en Blender — visualizaciones comerciales de productos para campañas de marca con rigs de iluminación de estudio personalizados y materiales PBR en gráficos de nodos, junto a piezas artísticas personales que exploran texturas procedurales y renderizado estilizado con Cycles y EEVEE.",
    },
    longDesc: {
      en: "This collection presents 3D modeling and rendering work produced entirely in Blender across two distinct production contexts. The commercial side includes photorealistic product visualizations developed for advertising campaigns: per-product lighting rigs were built from scratch — three-point studio setups, HDRI environment lighting, and custom area light configurations — to produce the hero product shots required by client briefs. Materials were authored using PBR node graphs with deliberate roughness, metalness, and subsurface scattering values derived from real product reference, achieving accurate surface reproduction under controlled lighting. Camera composition, depth of field, and color grading were handled in Blender's node-based compositor, delivering print and screen-ready final renders. On the personal side, hobby pieces served as creative R&D outside client constraints: stylized scene composition, procedural texture experimentation, emission and glass material exploration, and rendering technique development. Both Cycles (path-traced, photorealistic) and EEVEE (real-time rasterization) engines were used depending on output requirements. These works reflect end-to-end Blender pipeline ownership — hard-surface and organic modeling, UV unwrapping, PBR material authoring, lighting design, and final image production — skills that feed directly into the 3D asset work delivered across all game and visualization projects in this portfolio.",
      es: "Esta colección presenta trabajo de modelado y renderizado 3D producido íntegramente en Blender en dos contextos de producción distintos. El lado comercial incluye visualizaciones fotorrealistas de productos desarrolladas para campañas publicitarias: se construyeron rigs de iluminación por producto desde cero — configuraciones de estudio de tres puntos, iluminación de entorno HDRI y configuraciones personalizadas de área de luz — para producir los hero shots requeridos por los briefs de clientes. Los materiales fueron creados usando gráficos de nodos PBR con valores deliberados de rugosidad, metalicidad y dispersión subsuperficial derivados de referencia real del producto, logrando reproducción precisa de superficie bajo iluminación controlada. La composición de cámara, profundidad de campo y gradación de color fueron manejadas en el compositor basado en nodos de Blender, entregando renders finales listos para impresión y pantalla. En el lado personal, las piezas de hobby sirvieron como I+D creativo fuera de las restricciones de clientes: composición de escena estilizada, experimentación con texturas procedurales, exploración de materiales de emisión y vidrio, y desarrollo de técnicas de renderizado. Se usaron ambos motores Cycles (trazado de rayos, fotorrealista) y EEVEE (rasterización en tiempo real) según los requisitos de salida. Estos trabajos reflejan propiedad del pipeline completo de Blender — modelado hard-surface y orgánico, desenvolvimiento UV, creación de materiales PBR, diseño de iluminación y producción de imagen final — habilidades que alimentan directamente el trabajo de assets 3D en todos los proyectos de juegos y visualización de este portafolio.",
    },
    type: { en: "3D Art & Product Visualization", es: "Arte 3D y Visualización de Producto" },
    year: "2024",
    tools: "Blender, Cycles, EEVEE, PBR Shading",
    tags: ["Blender", "3D Modeling", "Product Viz", "Rendering", "Cycles"],
    category: "3d",
  },
  { id: 9,  title: "Cubexus",          cover: CubexusLogo, images: [], videos: [], shortDesc: { en: "Coming soon", es: "Próximamente" }, longDesc: { en: "Coming soon", es: "Próximamente" }, type: { en: "Coming soon", es: "Próximamente" }, year: "", tools: "", tags: [], category: "3d",  comingSoon: true },
  { id: 10, title: "Fisica Inmersiva", cover: FisicaInmersivaPortada, images: [], videos: [], shortDesc: { en: "Coming soon", es: "Próximamente" }, longDesc: { en: "Coming soon", es: "Próximamente" }, type: { en: "Coming soon", es: "Próximamente" }, year: "", tools: "", tags: [], category: "3d",  comingSoon: true },
  {
    id: 13,
    title: "NEXARQ 360",
    cover: Mies360Logo,
    heroCover: Nexarq360Portada,
    images: [Nexarq360_1, Nexarq360_2, Nexarq360_3, Nexarq360_4],
    videos: [Nexarq360Video],
    url: "https://jhiguita11.github.io/NEXARQ/",
    renderCredit: { en: "Renders courtesy of MIESGROUP S.A.S", es: "Renders cortesía de MIESGROUP S.A.S" },
    heroBgSize: "auto 150%",
    heroBgPos: "left center",
    shortDesc: {
      en: "360° architectural tour platform built as an independent product — custom spherical renderer on Three.js/WebGL, programmable interactive map system, and fully settings-driven UI customization (branding, overlays, audio, transitions) ready to deploy for any construction or real estate project.",
      es: "Plataforma de recorridos arquitectónicos 360° construida como producto independiente — renderizador esférico personalizado sobre Three.js/WebGL, sistema de mapa interactivo programable y personalización de UI completamente por ajustes (marca, superposiciones, audio, transiciones) lista para desplegar en cualquier proyecto de construcción o inmobiliaria.",
    },
    longDesc: {
      en: "NEXARQ 360 is a specialized web platform built from the ground up as an independent product — a professional-grade tool for creating, customizing, and delivering immersive 360° virtual tours, designed to serve any construction company, real estate developer, or architecture firm that needs them. Unlike generic panoramic viewers, every layer of NEXARQ 360 was engineered for the architectural production workflow. The frontend was built with JavaScript, Three.js, and WebGL: panoramic image sequences are loaded and rendered using a custom spherical projection renderer built on top of Three.js, with equirectangular-to-sphere mapping and optimized texture streaming to handle high-resolution 360° photography at consistent frame rates. An interactive programmable map system was developed as a core feature: tour designers define navigation nodes, connection paths, hotspot placements, and point-of-interest logic through a configuration layer — giving teams full editorial control over how end users navigate through any project without requiring code changes per deployment. The UI layer was designed for complete per-client customization: branding elements, color schemes, typography, navigation control styles, overlay panels, ambient audio, and transition effects are all configured through a settings-driven component system — every element was built as a parameterized component rather than hardcoded, making the platform adaptable to any client's identity. The result is a scalable, production-ready platform that can be deployed for any architectural project, demonstrating full-stack web development with Three.js, WebGL, and a configuration-first design architecture.",
      es: "NEXARQ 360 es una plataforma web especializada construida desde sus cimientos como producto independiente — una herramienta de nivel profesional para crear, personalizar y entregar recorridos virtuales 360° inmersivos, diseñada para servir a cualquier constructora, inmobiliaria o estudio de arquitectura que los necesite. A diferencia de los visualizadores panorámicos genéricos, cada capa de NEXARQ 360 fue ingeniada para el flujo de trabajo de producción arquitectónica. El frontend fue construido con JavaScript, Three.js y WebGL: las secuencias de imágenes panorámicas son cargadas y renderizadas usando un renderizador de proyección esférica personalizado construido sobre Three.js, con mapeo equirectangular a esfera y streaming de texturas optimizado para manejar fotografía 360° de alta resolución a tasas de fotogramas consistentes. Se desarrolló un sistema de mapa interactivo programable como característica central: los diseñadores de recorridos definen nodos de navegación, rutas de conexión, ubicaciones de hotspots y lógica de puntos de interés a través de una capa de configuración — dando a los equipos control editorial total sobre cómo los usuarios finales navegan por cualquier proyecto sin requerir cambios de código por despliegue. La capa de UI fue diseñada para personalización completa por cliente: elementos de marca, paletas de colores, tipografía, estilos de controles de navegación, paneles de superposición, audio ambiente y efectos de transición se configuran todos a través de un sistema de componentes impulsado por ajustes — cada elemento fue construido como componente parametrizado en lugar de hardcoded, haciendo la plataforma adaptable a la identidad de cualquier cliente. El resultado es una plataforma escalable y lista para producción que puede desplegarse para cualquier proyecto arquitectónico, demostrando desarrollo web full-stack con Three.js, WebGL y una arquitectura de diseño orientada a configuración.",
    },
    type: { en: "360° Architectural Tour Platform", es: "Plataforma de Recorridos Arquitectónicos 360°" },
    year: "2026",
    tools: "JavaScript, Three.js, WebGL, CSS, HTML",
    tags: ["360°", "Architecture", "WebGL", "Virtual Tour", "Real Estate"],
    category: "web",
  },
  {
    id: 11,
    title: "Mies AR",
    cover: ARMiesLogo,
    cardImgPos: "center 20%",
    cardImgFit: "contain",
    cardImgBg: "#ffffff",
    cardImgScale: 1.32,
    heroCover: ARMiesPortada,
    images: [],
    videos: [ARMiesVideo],
    url: "https://jeremyh00.github.io/AR-MIES-WEB/",
    heroBgSize: "cover",
    heroBgPos: "center center",
    heroBgPosMobile: "70% center",
    shortDesc: {
      en: "Web AR app for MiesGroup built with WebXR, Three.js, and JavaScript — real-time surface detection via WebXR Device API, spatial 3D object anchoring, and multi-touch gesture controls (pinch-to-scale, drag-to-reposition) running entirely in the mobile browser with zero installation.",
      es: "App web AR para MiesGroup construida con WebXR, Three.js y JavaScript — detección de superficies en tiempo real vía WebXR Device API, anclaje espacial de objetos 3D y controles por gestos multitáctiles (pellizcar para escalar, arrastrar para reposicionar) ejecutándose íntegramente en el navegador móvil sin instalación.",
    },
    longDesc: {
      en: "Mies AR is a mixed reality web application developed for MiesGroup, engineered to run entirely within the mobile browser — no app store, no installation required. The technical core is a WebXR + Three.js pipeline: the WebXR Device API handles real-time camera access and surface detection, identifying horizontal and vertical planes in the user's physical environment and providing the spatial anchor transforms needed to place 3D objects with accurate world-locked positioning. Three.js was used to build the full 3D rendering layer — managing the scene graph, loading and rendering GLTF/GLB assets, and compositing virtual objects over the live camera feed in real time. Touch gesture controls were implemented in JavaScript: a custom pinch-gesture recognizer using multi-touch pointer events drives real-time uniform scaling of the placed object, while a drag handler translates the anchor transform to reposition the model across the detected surface — all without interfering with the WebXR session frame loop. The user interface — placement guidance, object selection, and interaction prompts — was built as an HTML/CSS overlay layer integrated over the WebXR canvas, designed for one-handed mobile usability. By delivering the full AR experience through a standard web URL, Mies AR eliminates native app distribution entirely — instantly accessible via a single shared link on any device. Demonstrates full-stack web development: frontend UI, WebXR integration, Three.js 3D pipeline, and touch gesture handling — all shipped as a single deployable web application.",
      es: "Mies AR es una aplicación web de realidad mixta desarrollada para MiesGroup, ingeniada para ejecutarse completamente dentro del navegador móvil — sin tienda de aplicaciones, sin instalación requerida. El núcleo técnico es un pipeline WebXR + Three.js: la API WebXR Device maneja el acceso a la cámara en tiempo real y la detección de superficies, identificando planos horizontales y verticales en el entorno físico del usuario y proporcionando las transformaciones de anclaje espacial necesarias para colocar objetos 3D con posicionamiento preciso fijo al mundo. Three.js fue usado para construir la capa completa de renderizado 3D — gestionando el grafo de escena, cargando y renderizando assets GLTF/GLB, y componiendo objetos virtuales sobre el feed de cámara en vivo en tiempo real. Los controles de gestos táctiles fueron implementados en JavaScript: un reconocedor personalizado de gestos de pellizco usando eventos de puntero multitáctil impulsa el escalado uniforme en tiempo real del objeto colocado, mientras que un manejador de arrastre traslada la transformación de anclaje para reposicionar el modelo — todo sin interferir con el bucle de fotogramas de la sesión WebXR. La UI — guía de colocación, selección de objetos y prompts de interacción — fue construida como una capa superpuesta HTML/CSS integrada sobre el canvas WebXR, diseñada para usabilidad móvil con una sola mano. Al entregar la experiencia AR completa a través de una URL web estándar, Mies AR elimina la distribución de aplicaciones nativas por completo — accesible instantáneamente mediante un solo enlace en cualquier dispositivo. Demuestra desarrollo web full-stack: UI frontend, integración WebXR, pipeline 3D Three.js y manejo de gestos táctiles — todo desplegado como una sola aplicación web.",
    },
    type: { en: "Web AR / Mixed Reality App", es: "App Web AR / Realidad Mixta" },
    year: "2026",
    tools: "WebXR, Three.js, JavaScript",
    tags: ["WebAR", "Mixed Reality", "3D", "Mobile", "MiesGroup"],
    category: "web",
  },
  { id: 12, title: "KumandayStudios",  cover: KumandayPortada, images: [], videos: [], shortDesc: { en: "Coming soon", es: "Próximamente" }, longDesc: { en: "Coming soon", es: "Próximamente" }, type: { en: "Coming soon", es: "Próximamente" }, year: "", tools: "", tags: [], category: "web", comingSoon: true },
  { id: 14, title: "MiHogar",          cover: MiHogarPortada,  images: [], videos: [], shortDesc: { en: "Coming soon", es: "Próximamente" }, longDesc: { en: "Coming soon", es: "Próximamente" }, type: { en: "Coming soon", es: "Próximamente" }, year: "", tools: "", tags: [], category: "web", comingSoon: true },
];

/* ==================== MEDIA CAROUSEL ==================== */

function MediaCarousel({ items, title }) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.pause();
  }, [current]);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  if (!items || items.length === 0) return null;

  const isImageCarousel = items[0].type === "image";
  const activeItem = items[current];

  return (
    <div className="pj-carousel">
      <div
        className="pj-carousel__track"
        style={activeItem?.portrait ? { aspectRatio: "9/16", maxHeight: "70vh" } : undefined}
      >

        {/* Imágenes: todas en DOM, CSS crossfade — sin AnimatePresence */}
        {isImageCarousel && items.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt={`${title} — ${i + 1}`}
            className={`pj-carousel__img pj-carousel__img--cf${i === current ? " pj-carousel__img--cf-active" : ""}`}
          />
        ))}

        {/* Videos: AnimatePresence fade */}
        {!isImageCarousel && (
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="pj-carousel__video-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <video
                ref={videoRef}
                className="pj-carousel__video"
                controls
                preload="metadata"
              >
                <source src={activeItem.src} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
        )}

        {items.length > 1 && (
          <>
            <button className="pj-carousel__btn pj-carousel__btn--prev" onClick={prev} aria-label="Previous">
              <HiChevronLeft size={22} />
            </button>
            <button className="pj-carousel__btn pj-carousel__btn--next" onClick={next} aria-label="Next">
              <HiChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="pj-carousel__thumbnails">
          {items.map((item, i) => (
            <button
              key={i}
              className={`pj-carousel__thumb${item.type === "video" ? " pj-carousel__thumb--video" : ""}${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={item.type === "video" ? `Video ${i + 1}` : `Image ${i + 1}`}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="" />
              ) : (
                <span className="pj-carousel__thumb-play" aria-hidden="true">
                  <HiPlay size={14} />
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ==================== PROJECT PAGE ==================== */

function ProjectPage({ project, projects, lang, ui, onBack, onPrev, onNext, hasPrev, hasNext, total, currentIndex }) {
  const topRef = useRef(null);
  const [descExpanded, setDescExpanded] = useState(false);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
    setDescExpanded(false);
  }, [project]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onBack();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      className="pj-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    >
      <div ref={topRef} />
      {/* ── TOP NAV ── */}
      <div className="pj-page__topnav">
        <button className="pj-page__back-btn" onClick={() => { playClick(); onBack(); }} onMouseEnter={playHover}>
          <HiArrowLeft size={16} />
          {ui.back}
        </button>
        <div className="pj-page__nav-controls">
          <button
            className={`pj-nav-pill pj-nav-pill--prev${!hasPrev ? " pj-nav-pill--disabled" : ""}`}
            onClick={() => { if (hasPrev) { playClick(); onPrev(); } }}
            disabled={!hasPrev}
            onMouseEnter={() => hasPrev && playHover()}
            aria-label="Previous project"
          >
            <HiChevronLeft size={17} />
            <span>{hasPrev ? projects[currentIndex - 1].title : ui.prev}</span>
          </button>
          <span className="pj-page__nav-counter">{currentIndex + 1} / {total}</span>
          <button
            className={`pj-nav-pill pj-nav-pill--next${!hasNext ? " pj-nav-pill--disabled" : ""}`}
            onClick={() => { if (hasNext) { playClick(); onNext(); } }}
            disabled={!hasNext}
            onMouseEnter={() => hasNext && playHover()}
            aria-label="Next project"
          >
            <span>{hasNext ? projects[currentIndex + 1].title : ui.next}</span>
            <HiChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* ── HERO ── */}
      <div
        className="pj-page__hero"
        style={{
          backgroundImage: (project.heroCover ?? project.cover) ? `url(${project.heroCover ?? project.cover})` : "none",
          backgroundPosition: project.heroBgPos ?? "center top",
          backgroundSize: project.heroBgSize ?? undefined,
          backgroundBlendMode: project.heroBgBlend ?? undefined,
          backgroundColor: project.heroBgBlend ? "#060d1e" : undefined,
          "--hero-bg-pos-mobile": project.heroBgPosMobile ?? "center center",
          "--hero-bg-size-mobile": project.heroBgSizeMobile ?? "cover",
        }}
      >
        <div className="pj-page__hero-gradient" />
        <div className="pj-page__hero-content">
          <motion.span
            className="pj-page__hero-type"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {project.type[lang]}
          </motion.span>
          <motion.h1
            className="pj-page__hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="pj-page__hero-short"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.4 }}
          >
            {project.shortDesc[lang]}
          </motion.p>
          <motion.div
            className="pj-tags"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.4 }}
          >
            {project.tags.map((tag) => (
              <span key={tag} className="pj-tag">{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="pj-page__content">

        {/* Overview: descripción + meta lado a lado */}
        <div className="pj-page__overview">
          <motion.div
            className="pj-page__desc-col"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="pj-page__section-label">{ui.about}</h2>
            <p className={`pj-page__long-desc${descExpanded ? " pj-page__long-desc--expanded" : ""}`}>
              {project.longDesc[lang]}
            </p>
            <button
              className="pj-page__desc-toggle"
              onClick={() => setDescExpanded((v) => !v)}
            >
              {descExpanded
                ? (lang === "es" ? "Ver menos" : "See less")
                : (lang === "es" ? "Ver más" : "See more")}
            </button>
          </motion.div>
          <motion.div
            className="pj-page__meta-col"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <div className="pj-meta-item">
              <span className="pj-meta-label">{ui.type}</span>
              <span className="pj-meta-value">{project.type[lang]}</span>
            </div>
            <div className="pj-meta-item">
              <span className="pj-meta-label">{ui.year}</span>
              <span className="pj-meta-value">{project.year}</span>
            </div>
          </motion.div>
        </div>

        {/* Tools — icon badges below overview */}
        {project.tools && (
          <motion.div
            className="pj-tools"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45 }}
          >
            <h2 className="pj-page__section-label">{ui.tools}</h2>
            <div className="pj-tools__grid">
              {project.tools.split(",").map((raw) => {
                const name = raw.trim();
                const { Icon, color } = getToolEntry(name);
                return (
                  <div key={name} className="pj-tool-badge">
                    <Icon size={34} style={{ color }} />
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Visit website button — only for projects with a URL */}
        {project.url && (
          <motion.div
            className="pj-page__visit-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.45 }}
          >
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-page__visit-btn"
              onMouseEnter={playHover}
              onClick={playClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="pj-page__visit-btn-glow" />
              <HiArrowRight size={22} />
              <span>{lang === "es" ? "Visitar sitio web" : "Visit website"}</span>
            </motion.a>
          </motion.div>
        )}

        {/* Gallery — solo imágenes */}
        {project.images.length > 0 && (
          <div className="pj-page__section">
            <h2 className="pj-page__section-label">{ui.gallery}</h2>
            <MediaCarousel
              items={project.images.map((src) => ({ type: "image", src }))}
              title={project.title}
            />
          </div>
        )}

        {/* Videos — solo videos */}
        {project.videos && project.videos.length > 0 && (
          <div className="pj-page__section">
            <h2 className="pj-page__section-label">{ui.preview}</h2>
            <MediaCarousel
              items={project.videos.map((v) => typeof v === "string" ? { type: "video", src: v } : { type: "video", src: v.src, portrait: v.portrait })}
              title={project.title}
            />
          </div>
        )}

        {/* Render credit */}
        {project.renderCredit && (
          <p className="pj-page__render-credit">
            {project.creditLink
              ? project.renderCredit[lang].split("{link}").map((part, i, arr) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<a href={project.creditLink.url} target="_blank" rel="noopener noreferrer" className="pj-credit-link">{project.creditLink.text}</a></span>
                    : part
                )
              : project.renderCredit[lang]
            }
          </p>
        )}

        {/* Back to top */}
        <div className="pj-page__footer-nav">
          <button
            className="pj-scroll-top-btn"
            onClick={() => { playClick(); topRef.current?.scrollIntoView({ behavior: "smooth" }); }}
            onMouseEnter={playHover}
          >
            <HiArrowUp size={18} />
            <span>{lang === "es" ? "Volver arriba" : "Back to top"}</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}

/* ==================== CATEGORY PICKER ==================== */

function CategoryPicker({ ui, onSelect }) {
  const threeDCount = projectsData.filter((p) => p.category === "3d").length;
  const webCount    = projectsData.filter((p) => p.category === "web" && !p.comingSoon).length;

  return (
    <motion.div
      className="cat-picker"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.45 }}
    >
      {/* ── LEFT: 3D / VR / Mobile ── */}
      <motion.div
        className="cat-panel cat-panel--3d"
        onClick={() => { playClick(); onSelect("3d"); }}
        onMouseEnter={playHover}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.div
          className="cat-panel__bg"
          style={{ backgroundImage: `url(${Casalago1})` }}
          variants={{
            rest:  { filter: "blur(6px) brightness(0.45)", scale: 1.08 },
            hover: { filter: "blur(0px) brightness(0.55)", scale: 1.12 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="cat-panel__overlay"
          variants={{
            rest:  { background: "linear-gradient(to top, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.5) 60%, rgba(2,6,23,0.2) 100%)" },
            hover: { background: "linear-gradient(to top, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.3) 60%, rgba(2,6,23,0.05) 100%)" },
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="cat-panel__content"
          variants={{
            rest:  { y: 12, opacity: 0.85 },
            hover: { y: 0,  opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="cat-panel__count">
            {threeDCount} {ui.projectsCount}
          </span>
          <h2 className="cat-panel__title">{ui.catThreeD}</h2>
          <p className="cat-panel__sub">{ui.catThreeDSub}</p>
          <div className="cat-panel__cta">
            <span>{ui.explore}</span>
            <HiArrowRight />
          </div>
        </motion.div>
      </motion.div>

      {/* ── DIVIDER ── */}
      <div className="cat-divider" />

      {/* ── RIGHT: Web ── */}
      <motion.div
        className="cat-panel cat-panel--web"
        onClick={() => { playClick(); onSelect("web"); }}
        onMouseEnter={playHover}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <div className="cat-panel__web-bg">
          <div className="web-orb web-orb--1" />
          <div className="web-orb web-orb--2" />
          <div className="web-orb web-orb--3" />
        </div>
        <motion.div
          className="cat-panel__content"
          variants={{
            rest:  { y: 12, opacity: 0.85 },
            hover: { y: 0,  opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="cat-panel__count">
            {webCount} {ui.projectsCount}
          </span>
          <h2 className="cat-panel__title">{ui.catWeb}</h2>
          <p className="cat-panel__sub">{ui.catWebSub}</p>
          <div className="cat-panel__cta">
            <span>{ui.explore}</span>
            <HiArrowRight />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ==================== PORTFOLIO ==================== */

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const ui = t.portfolio;

  // null = picker visible; "3d" | "web" = grid view
  const [activeCat, setActiveCat] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // All projects in the active category (includes comingSoon for the grid)
  const filtered = activeCat
    ? projectsData.filter((p) => p.category === activeCat)
    : [];

  // Only openable projects (no comingSoon) — used for ProjectPage navigation
  const viewable = filtered.filter((p) => !p.comingSoon);

  const hoveredProject = hoveredId !== null ? filtered[hoveredId] : null;

  const openProject = useCallback((id) => { setSelectedId(id); setHoveredId(null); }, []);
  const closeProject = useCallback(() => setSelectedId(null), []);
  const scrollTop = () => {
    document.querySelector(".pj-page")?.scrollIntoView({ behavior: "instant" });
  };

  const prevProject = useCallback(() => {
    scrollTop();
    setSelectedId((id) => Math.max(0, id - 1));
  }, []);
  const nextProject = useCallback(
    () => { scrollTop(); setSelectedId((id) => Math.min(viewable.length - 1, id + 1)); },
    [viewable.length]
  );

  const handleCatSelect = (cat) => {
    setActiveCat(cat);
    setSelectedId(null);
    setHoveredId(null);
  };

  const handleBack = () => {
    setActiveCat(null);
    setSelectedId(null);
    setHoveredId(null);
  };

  return (
    <section className="portfolio-section">
      {/* Hover background blur — only in grid view */}
      <AnimatePresence>
        {hoveredProject && activeCat !== null && selectedId === null && (
          <motion.div
            key={hoveredProject.id}
            className="portfolio-bg-preview"
            style={{ backgroundImage: hoveredProject.cover ? `url(${hoveredProject.cover})` : "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeCat === null ? (
          /* ── CATEGORY PICKER ── */
          <CategoryPicker key="picker" ui={ui} onSelect={handleCatSelect} />
        ) : selectedId !== null ? (
          /* ── PROJECT PAGE ── */
          <ProjectPage
            key={`pj-${selectedId}`}
            project={viewable[selectedId]}
            projects={viewable}
            lang={lang}
            ui={ui}
            onBack={closeProject}
            onPrev={prevProject}
            onNext={nextProject}
            hasPrev={selectedId > 0}
            hasNext={selectedId < viewable.length - 1}
            total={viewable.length}
            currentIndex={selectedId}
          />
        ) : (
          /* ── GRID VIEW ── */
          <motion.div
            key="grid"
            className="portfolio-grid-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            {/* Back button — corner */}
            <motion.button
              className="cat-back-btn"
              onClick={() => { playClick(); handleBack(); }}
              onMouseEnter={playHover}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <HiArrowLeft size={15} />
              {ui.back}
            </motion.button>

            {/* Header */}
            <div className="portfolio-header">
              <motion.span
                className="portfolio-label"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {ui.myWork}
              </motion.span>
              <motion.h2
                className="portfolio-title"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.45 }}
              >
                {activeCat === "3d" ? ui.catThreeD : ui.catWeb}
              </motion.h2>
              <motion.span
                className="portfolio-title-underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Grid or coming-soon */}
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={activeCat}
                  className="portfolio-grid"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {filtered.map((project, i) =>
                    project.comingSoon ? (
                      /* ── Coming-soon card: no click, no hover preview ── */
                      <motion.div
                        key={project.id}
                        className="project-card project-card--coming-soon"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.45 }}
                        aria-label={`${project.title} — ${lang === "es" ? "Próximamente" : "Coming soon"}`}
                      >
                        {project.cover ? (
                          <img
                            src={project.cover}
                            alt={project.title}
                            className="project-card__thumb"
                            loading="lazy"
                          />
                        ) : (
                          <div className="project-card__no-thumb" aria-hidden="true" />
                        )}
                        <div className="project-card__cs-overlay">
                          <span className="project-card__cs-text">
                            {lang === "es" ? "Próximamente" : "Coming soon"}
                          </span>
                          <span className="project-card__cs-title">{project.title}</span>
                        </div>
                      </motion.div>
                    ) : (
                      /* ── Normal card ── */
                      <motion.div
                        key={project.id}
                        className="project-card"
                        onMouseEnter={() => { playHover(); setHoveredId(i); }}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => { playClick(); openProject(viewable.findIndex((p) => p.id === project.id)); }}
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.45 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                      >
                        {project.cover ? (
                          <img
                            src={project.cover}
                            alt={project.title}
                            loading="lazy"
                            style={(project.cardImgPos || project.cardImgFit) ? { objectPosition: project.cardImgPos, objectFit: project.cardImgFit, backgroundColor: project.cardImgBg, transform: project.cardImgScale ? `scale(${project.cardImgScale})` : undefined } : undefined}
                          />
                        ) : (
                          <div className="project-card__no-thumb" aria-hidden="true">
                            <HiPlay size={36} />
                          </div>
                        )}
                        <div className="overlay">
                          <h3>{project.title}</h3>
                          <div className="card-tags">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="card-tag">{tag}</span>
                            ))}
                          </div>
                          <p className="card-short-desc">{project.shortDesc[lang]}</p>
                        </div>
                      </motion.div>
                    )
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="coming-soon"
                  className="portfolio-coming-soon"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="coming-soon__icon">
                    <HiCode size={48} />
                  </div>
                  <h3 className="coming-soon__title">{ui.comingSoon}</h3>
                  <p className="coming-soon__sub">{ui.comingSoonSub}</p>
                  <p className="coming-soon__detail">{ui.comingSoonDetail}</p>

                  <div className="coming-soon__preview">
                    <span className="coming-soon__preview-label">{ui.comingSoonPreview}</span>
                    <ul className="coming-soon__preview-list">
                      {ui.comingSoonPreviewItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="coming-soon__links">
                    <a
                      href="https://github.com/Jhiguita11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="coming-soon__link"
                      aria-label="GitHub profile"
                    >
                      <FiGithub size={18} />
                      {ui.comingSoonGithub}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jeremy-higuita-070bb025b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="coming-soon__link coming-soon__link--linkedin"
                      aria-label="LinkedIn profile"
                    >
                      <FiLinkedin size={18} />
                      {ui.comingSoonLinkedin}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
