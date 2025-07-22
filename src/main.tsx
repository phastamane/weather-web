import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import NewApp from './newApp.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewApp />

  </StrictMode>,
)
