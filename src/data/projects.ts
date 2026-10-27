
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'HyperStore',
    category: {
      en: 'E-Commerce Core',
      es: 'Núcleo E-Commerce',
    },
    description: {
      en: 'Headless e-commerce platform featuring instant optimistic cart mutations, serverless inventory reservation via Redis locks, and idempotent Stripe checkout flows.',
      es: 'Plataforma e-commerce headless con actualizaciones optimistas del carrito, reservas de inventario mediante Redis y procesos de pago idempotentes con Stripe.',
    },
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redis',
    ],
    image: '/images/projects/hyperstore.webp',
  },
  {
    id: 2,
    title: 'PulseOps',
    category: {
      en: 'Developer Tooling',
      es: 'Herramientas de desarrollo',
    },
    description: {
      en: 'Lightweight developer telemetry suite ingesting streaming latency events through FastAPI WebSockets, rendering live SVG micro-sparklines with low memory footprint.',
      es: 'Herramienta de telemetría para desarrolladores que procesa eventos de latencia en tiempo real mediante FastAPI y WebSockets, mostrando gráficas SVG con bajo consumo de memoria.',
    },
    technologies: [
      'FastAPI',
      'Python',
      'React',
      'WebSockets',
    ],
    image: '/images/projects/pulseops.webp',
  },
  {
    id: 3,
    title: 'DevFlow',
    category: {
      en: 'Distributed Collaboration',
      es: 'Colaboración distribuida',
    },
    description: {
      en: 'Collaborative Markdown workspace powered by Conflict-free Replicated Data Types (CRDTs). Local edits synchronize across peers with remote cursor broadcasting.',
      es: 'Espacio de trabajo colaborativo en Markdown basado en estructuras CRDT, con sincronización de cambios y cursores entre usuarios en tiempo real.',
    },
    technologies: [
      'React',
      'Node.js',
      'Socket.io',
      'Docker',
    ],
    image: '/images/projects/devflow.webp',
  },
]
