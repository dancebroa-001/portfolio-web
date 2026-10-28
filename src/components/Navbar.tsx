
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 px-4">

      <nav className="
        pointer-events-auto
        mx-auto flex h-[68px] w-full max-w-[960px]
        items-center justify-between
        rounded-full
        border border-slate-200/80
        bg-white/85
        px-5 sm:px-7
        shadow-[0_8px_35px_rgba(15,23,42,0.07)]
        backdrop-blur-2xl
        transition-all duration-300
      ">

        {/* LOGO */}
        <a
          href="#"
          aria-label="Go to homepage"
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="
            flex h-10 w-10 items-center justify-center
            rounded-xl bg-indigo-50
            transition-all duration-300
            group-hover:rotate-[-5deg]
            group-hover:bg-indigo-100
          ">
            <span className="text-lg font-bold tracking-tight text-indigo-600">
              DC<span className="text-indigo-400">.</span>
            </span>
          </div>

          <span className="hidden text-[15px] font-semibold tracking-tight text-slate-900 lg:block">
            Daniel Ceballos
          </span>
        </a>

        {/* NAVIGATION LINKS */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                rounded-full px-4 py-2.5
                text-sm font-medium text-slate-600
                transition-all duration-200
                hover:bg-slate-100
                hover:text-slate-950
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* LANGUAGE */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === 'en'
                ? 'Switch to Spanish'
                : 'Cambiar a inglés'
            }
            className="
              flex h-10 w-10 cursor-pointer
              items-center justify-center
              rounded-full bg-slate-100
              text-xs font-semibold text-slate-600
              transition-all duration-200
              hover:bg-indigo-50
              hover:text-indigo-600
              active:scale-95
            "
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          {/* CV */}
          <a
            href="/cv/daniel-ceballos-cv.pdf"
            download
            className="
              inline-flex h-10 items-center gap-2
              rounded-full bg-slate-900
              px-4 sm:px-5
              text-xs font-semibold text-white
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-indigo-600
              hover:shadow-[0_8px_20px_rgba(79,70,229,0.25)]
              active:scale-95
            "
          >
            <span className="hidden min-[390px]:inline">
              {t.nav.cv}
            </span>

            <span aria-hidden="true" className="text-base">
              ↗
            </span>
          </a>

        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div className="
        pointer-events-auto
        mx-auto mt-2 flex w-fit items-center justify-center
        gap-1 rounded-full
        border border-slate-200/80
        bg-white/90 p-1.5
        shadow-sm backdrop-blur-xl
        md:hidden
      ">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="
              rounded-full px-3 py-2
              text-xs font-medium text-slate-600
              transition-colors
              hover:bg-slate-100
              hover:text-slate-900
            "
          >
            {link.label}
          </a>
        ))}
      </div>

    </header>
  )
}
