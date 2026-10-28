
import { useLanguage } from '../context/LanguageContext'

const technologies = [
  {
    name: 'React',
    icon: 'devicon-react-original colored',
    glow: 'rgba(97,218,251,0.75)',
    url: "https://es.react.dev/",
  },
  {
    name: 'Next.js',
    icon: 'devicon-nextjs-plain',
    glow: 'rgba(100,116,139,0.75)',
    url: "https://nextjs.org/",
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain colored',
    glow: 'rgba(49,120,198,0.75)',
    url: "https://www.typescriptlang.org/",
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain colored',
    glow: 'rgba(104,160,99,0.75)',
    url: "https://nodejs.org/es",
  },
  {
    name: 'Python',
    icon: 'devicon-python-plain colored',
    glow: 'rgba(255,212,59,0.75)',
    url: "https://es.python.org/",
  },
  {
    name: 'PostgreSQL',
    icon: 'devicon-postgresql-plain colored',
    glow: 'rgba(51,103,145,0.75)',
    url: "https://www.postgresql.org/",
  },
  {
    name: 'Git',
    icon: 'devicon-git-plain colored',
    glow: 'rgba(240,80,50,0.75)',
    url: "https://git-scm.com/",
  },
]

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="tech-section mx-auto max-w-5xl px-6 pt-2 pb-16">  
      <div className="flex flex-col items-center">

        <span className="mb-8 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
          {t.tech.title}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
          {technologies.map((tech) => (
            <a href= {tech.url} target="_blank" >
            <div
              key={tech.name}
              className="tech-card"
              style={{
                '--tech-glow': tech.glow,
              } as React.CSSProperties}
            >
              <div className="tech-icon">
                <i
                  className={tech.icon}
                  aria-hidden="true"
                />
              </div>

              <span className="tech-name">
                {tech.name}
              </span>
            </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
