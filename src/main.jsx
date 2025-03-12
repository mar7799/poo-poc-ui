import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import RegisterUser from './components/RegisterUser.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<RegisterUser />} />
  </Routes>
  </BrowserRouter>
)
