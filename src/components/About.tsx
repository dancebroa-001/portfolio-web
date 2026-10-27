import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
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
              {t.about.background}
            </span>

            <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-900">
              {t.about.degree}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              {t.about.description}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-black/[0.05] pt-6 font-mono text-xs text-slate-500">
            <span>{t.about.university}</span>
            <span className="font-medium text-slate-900">
              {t.about.country}
            </span>
          </div>
        </article>

        {/* Engineering competencies */}
        <article className="flex flex-col justify-between rounded-2xl border border-black/[0.06] bg-white/75 p-8 shadow-sm backdrop-blur-xl sm:p-10">
          <div>
            <span className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-wider text-indigo-600">
              {t.about.principles}
            </span>

            <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-900">
              	{t.about.competencies}
            </h3>

            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span>
                  <strong className="font-medium text-slate-900">
                    {t.about.software}
                  </strong>{' '}
                  {t.about.softwareDesc}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span>
                  <strong className="font-medium text-slate-900">
                    {t.about.backend}
                  </strong>{' '}
                  {t.about.backendDesc}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span>
                  <strong className="font-medium text-slate-900">
                    {t.about.frontend}
                  </strong>{' '}
                  {t.about.frontendDesc}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-black/[0.05] pt-6 font-mono text-xs text-slate-500">
            <span>{t.about.focus}</span>
            <span className="font-medium text-indigo-600">
              	{t.about.focusValue}
            </span>
          </div>
        </article>

      </div>
    </section>
  )
}
