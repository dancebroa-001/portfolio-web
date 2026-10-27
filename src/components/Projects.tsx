
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20"
    >
      <div className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t.projects.title}
        </h2>

        <p className="mt-1.5 text-sm text-slate-500 sm:text-base">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
