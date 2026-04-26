import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

const basename = window.location.hostname.endsWith('github.io') ? '/House-Of-MD' : ''

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename || undefined}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
