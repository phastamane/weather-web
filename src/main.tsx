import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './App.tsx'
import NewApp from './newApp.tsx'
import Header from './components/header/Header.tsx'
import Body from './components/main/Body.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewApp />

  </StrictMode>,
)
