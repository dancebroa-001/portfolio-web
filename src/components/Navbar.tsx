
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="pointer-events-none fixed left-0 top-6 z-50 flex w-full justify-center px-4">
      <nav className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-black/[0.06] bg-white/75 px-5 py-2.5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:gap-6">

        <a href="#" className="group hidden items-center gap-2 sm:flex">
          <span className="h-2 w-2 rounded-full bg-indigo-600 transition-transform group-hover:scale-125" />
          <span className="text-base font-bold tracking-tight text-slate-900">
          DC<span className="text-indigo-600"></span>
          </span>
        </a>

        <div className="flex items-center gap-4 text-[13px] font-medium text-slate-600 sm:gap-6">
          <a href="#about" className="transition-colors hover:text-slate-900">
            {t.nav.about}
          </a>
          <a href="#projects" className="transition-colors hover:text-slate-900">
            {t.nav.projects}
          </a>
          <a href="#contact" className="transition-colors hover:text-slate-900">
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-200"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          <a
            href="/cv/daniel-ceballos-cv.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-slate-800 active:scale-95"
          >
            {t.nav.cv} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
