
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-36 text-center md:pb-32 md:pt-44">

      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-medium text-emerald-800">
          {t.hero.status}
        </span>
      </div>

      <h1 className="mb-6 max-w-3xl text-4xl leading-[1.15] font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
        {t.hero.title}
      </h1>

      <p className="mb-10 max-w-2xl text-base leading-relaxed font-normal text-slate-600 sm:text-lg">
        {t.hero.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md active:scale-95"
        >
          {t.hero.viewWork} <span aria-hidden="true">↓</span>
        </a>

        <a
          href="/cv/daniel-ceballos-cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:shadow-md active:scale-95"
        >
          {t.nav.cv} <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
