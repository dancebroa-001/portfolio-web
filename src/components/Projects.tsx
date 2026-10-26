
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20"
    >

      <div className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Featured Work
        </h2>

        <p className="mt-1.5 text-sm text-slate-500 sm:text-base">
          Production-grade systems designed with scalability,
          speed, and clean code.
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
