
import type { Language } from '../context/LanguageContext'

export interface Project {
  id: number
  title: string
  category: Record<Language, string>
  description: Record<Language, string>
  technologies: string[]
  image: string
  demo?: string
  github?: string
}

