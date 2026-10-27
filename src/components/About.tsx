
export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

        {/* Education */}
        <article className="flex flex-col justify-between rounded-2xl border border-black/[0.06] bg-white/75 p-8 shadow-sm backdrop-blur-xl sm:p-10">
          <div>
            <span className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-wider text-indigo-600">
              Background
            </span>

            <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-900">
              B.S. in Computer Engineering
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              Computer Engineering graduate from the University of
              Seville, with a strong foundation in programming,
              computer architecture, operating systems and
              software development.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-black/[0.05] pt-6 font-mono text-xs text-slate-500">
            <span>University of Seville</span>
            <span className="font-medium text-slate-900">
              Spain
            </span>
          </div>
        </article>

        {/* Engineering competencies */}
        <article className="flex flex-col justify-between rounded-2xl border border-black/[0.06] bg-white/75 p-8 shadow-sm backdrop-blur-xl sm:p-10">
          <div>
            <span className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-wider text-indigo-600">
              Principles
            </span>

            <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-900">
              Engineering Competencies
            </h3>

            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span>
                  <strong className="font-medium text-slate-900">
                    Software Development:
                  </strong>{' '}
                  Application design, maintainability and clean code.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span>
                  <strong className="font-medium text-slate-900">
                    Backend Engineering:
                  </strong>{' '}
                  Java, Spring Boot, APIs and integration systems.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span>
                  <strong className="font-medium text-slate-900">
                    Frontend Development:
                  </strong>{' '}
                  Responsive interfaces, React and TypeScript.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-black/[0.05] pt-6 font-mono text-xs text-slate-500">
            <span>Focus</span>
            <span className="font-medium text-indigo-600">
              Full Stack Development
            </span>
          </div>
        </article>

      </div>
    </section>
  )
}
