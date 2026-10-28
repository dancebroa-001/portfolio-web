
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-8 pt-44 text-center md:pb-10 md:pt-44">

      {/* Availability */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        <span className="text-xs font-medium text-emerald-800">
          {t.hero.status}
        </span>
      </div>

      {/* Main name */}
      <h1 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
        <span className="block">
          {t.hero.greeting}
        </span>

        <span className="block text-indigo-600">
          {t.hero.name}
        </span>
      </h1>

      {/* Professional role */}
      <h2 className="mb-5 max-w-3xl text-xl font-medium tracking-tight text-slate-600 sm:text-2xl md:text-3xl">
        {t.hero.role}
      </h2>

      {/* Short description */}
      <p className="mb-9 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
        {t.hero.description}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3">

        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
        >
          {t.hero.viewWork}
          <span aria-hidden="true">↓</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
        >
          {t.hero.contact}
          <span aria-hidden="true">↗</span>
        </a>

      </div>
    </section>
  )
}
