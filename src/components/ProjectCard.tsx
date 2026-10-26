
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const reverse = index % 2 !== 0

  return (
    <article className="rounded-2xl border border-black/[0.06] bg-white/75 p-8 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all hover:shadow-[0_8px_30px_-6px_rgba(15,23,42,0.07)] sm:p-10">

      <div
        className={`flex flex-col items-center gap-8 lg:gap-12 ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >

        {/* Project information */}
        <div className="flex w-full flex-col items-start lg:w-1/2">

          <span className="mb-2 font-mono text-[11px] font-medium uppercase tracking-wider text-indigo-600">
            {String(index + 1).padStart(2, '0')} / {project.category}
          </span>

          <h3 className="mb-2.5 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {project.title}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 text-xs font-medium">

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-900 transition-colors hover:text-indigo-600"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-slate-900"
              >
                Source Code <span aria-hidden="true">↗</span>
              </a>
            )}

          </div>
        </div>

        {/* Project preview */}
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/[0.06] bg-slate-50 shadow-sm lg:w-1/2">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

      </div>
    </article>
  )
}
