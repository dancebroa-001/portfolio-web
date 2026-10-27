import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

import 'devicon/devicon.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
