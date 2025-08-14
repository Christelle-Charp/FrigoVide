import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IngredientsProvider from './contexts/IngredientsContext.jsx'
import RecettesProvider from './contexts/RecettesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IngredientsProvider>
      <RecettesProvider>
        <App />
      </RecettesProvider>
    </IngredientsProvider>
  </StrictMode>,
)
