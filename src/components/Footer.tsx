
export default function Footer() {
  return (
    <footer className="mt-10 w-full border-t border-black/[0.05] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-400 sm:flex-row">

        <p>
          © {new Date().getFullYear()} Daniel Ceballos.
          Designed with clarity and precision.
        </p>

        <p className="font-mono">
          Built with React • TypeScript • Tailwind CSS
        </p>

      </div>
    </footer>
  )
}
