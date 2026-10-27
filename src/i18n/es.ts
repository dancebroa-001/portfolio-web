
import type { en } from './en'

type TranslationShape = {
  [K in keyof typeof en]: {
    [P in keyof typeof en[K]]: string
  }
}

export const es = {
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
    cv: 'Descargar CV',
  },
  hero: {
  status: 'Abierto a oportunidades',
  greeting: 'Hola, soy',
  name: 'Daniel Ceballos.',
  role: 'Ingeniero de Software y Desarrollador Full Stack',
  description:
    'Creando experiencias web modernas y software fiable.',
  viewWork: 'Ver proyectos',
  contact: 'Contactar',
},

  tech: {
    title: 'Tecnologías principales',
  },
  projects: {
    title: 'Proyectos destacados',
    subtitle:
      'Sistemas diseñados teniendo en cuenta la escalabilidad, el rendimiento y la calidad del código.',
    demo: 'Ver demo',
    source: 'Código fuente',
  },
  about: {
    background: 'Formación',
    degree: 'Grado en Ingeniería de Computadores',
    description:
      'Graduado en Ingeniería de Computadores por la Universidad de Sevilla, con una sólida base en programación, arquitectura de computadores, sistemas operativos y desarrollo de software.',
    university: 'Universidad de Sevilla',
    country: 'España',
    principles: 'Competencias',
    competencies: 'Competencias de ingeniería',
    software: 'Desarrollo de software:',
    softwareDesc: 'Diseño de aplicaciones, mantenibilidad y código limpio.',
    backend: 'Ingeniería backend:',
    backendDesc: 'Java, Spring Boot, APIs y sistemas de integración.',
    frontend: 'Desarrollo frontend:',
    frontendDesc: 'Interfaces responsivas, React y TypeScript.',
    focus: 'Especialidad',
    focusValue: 'Desarrollo Full Stack',
  },
  contact: {
    title: 'Construyamos algo juntos',
    description:
      'Actualmente estoy abierto a oportunidades como ingeniero de software junior y desarrollador Full Stack. Puedes contactar conmigo para hablar de proyectos, colaboraciones o nuevas oportunidades.',
    copy: 'Copiar correo',
    copied: 'Correo copiado',
    linkedinPending: 'LinkedIn — Próximamente',
  },
  footer: {
    description: 'Diseñado con claridad y precisión.',
    builtWith: 'Desarrollado con',
  },
} satisfies TranslationShape
