
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'HyperStore',
    category: 'E-Commerce Core',
    description:
      'Headless e-commerce platform featuring instant optimistic cart mutations, serverless inventory reservation via Redis locks, and idempotent Stripe checkout flows.',
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
    category: 'Developer Tooling',
    description:
      'Lightweight developer telemetry suite ingesting streaming latency events through FastAPI WebSockets, rendering live SVG micro-sparklines with low memory footprint.',
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
    category: 'Distributed Collaboration',
    description:
      'Collaborative Markdown workspace powered by Conflict-free Replicated Data Types (CRDTs). Local edits synchronize across peers with remote cursor broadcasting.',
    technologies: [
      'React',
      'Node.js',
      'Socket.io',
      'Docker',
    ],
    image: '/images/projects/devflow.webp',
  },
]
