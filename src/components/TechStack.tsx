
const technologies = [
  { name: 'React', color: 'bg-sky-500' },
  { name: 'Next.js', color: 'bg-slate-900' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'Node.js', color: 'bg-emerald-600' },
  { name: 'Python', color: 'bg-amber-500' },
  { name: 'PostgreSQL', color: 'bg-indigo-500' },
  { name: 'Git', color: 'bg-orange-500' },
]

export default function TechStack() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex flex-col items-center">

        <span className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-slate-400">
          Core Technologies
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex items-center gap-2 rounded-xl border border-black/[0.05] bg-white/70 px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${technology.color}`}
              />

              <span>{technology.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
