import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signin from './components/Login/Signin.jsx'
import Signup from './components/Signup/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Signin />
    <Signup />
  </StrictMode>,
)
