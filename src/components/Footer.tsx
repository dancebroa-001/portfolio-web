
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="mt-10 w-full border-t border-black/[0.05] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-400 sm:flex-row">

        <p>
          © {new Date().getFullYear()} Daniel Ceballos.{' '}
          {t.footer.description}
        </p>

        <p className="font-mono">
          {t.footer.builtWith} React • TypeScript • Tailwind CSS
        </p>

      </div>
    </footer>
  )
}
