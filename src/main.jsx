import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimeiroComponente from './pages/primeiroComponete'
import "./pages/primeiroComponete/index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeiroComponente title="titulo para primeiroComponete" subtitle="subTitulo do primeiroComponente" content="Descrição do primeiroComponente"/>
  </React.StrictMode>,
)

