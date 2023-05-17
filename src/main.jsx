import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/NavigationBar/Navbar.jsx'
import routes from './components/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
    
      <Routes>
        {routes.map(({path, element}) => 
        (<Route key={path} path={path} element={element} />)
        )}
      </Routes>

    </BrowserRouter>
    
  </React.StrictMode>,
)
