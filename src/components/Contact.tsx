import { useLanguage } from '../context/LanguageContext'

import { useState } from 'react'

const EMAIL = 'dancebroa@gmail.com'

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20"
    >
      <div className="flex flex-col items-center rounded-3xl border border-black/[0.06] bg-white/80 p-10 text-center shadow-[0_8px_30px_-6px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-14">

        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {t.contact.title}
        </h2>

        <p className="mb-8 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          {t.contact.description}
        </p>

        {/* Email */}
        <div className="group mb-8 inline-flex max-w-full items-center gap-3 rounded-xl border border-black/[0.04] bg-slate-100 px-4 py-2">
          <span aria-hidden="true">✉</span>

          <a
            href={`mailto:${EMAIL}`}
            className="min-w-0 break-all text-sm font-medium text-slate-900 transition-colors hover:text-indigo-600"
          >
            {EMAIL}
          </a>

          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? t.contact.copied : t.contact.copy}
            className="cursor-pointer rounded-md p-1 text-sm text-slate-500 transition-all hover:bg-white hover:text-slate-900"
          >
            {copied ? '✓' : '▢'}
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
          <a
            href="https://github.com/edudemer"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-900"
          >
            GitHub ↗
          </a>

          <span className="text-slate-300">•</span>

          <span className="text-slate-400">
            {t.contact.linkedinPending}
          </span>
        </div>

      </div>
    </section>
  )
}
