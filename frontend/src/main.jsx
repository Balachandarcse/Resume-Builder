import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/signup.jsx'
import Login from './components/login.jsx'
import Welcome from './components/welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
   </BrowserRouter>
  </StrictMode>,
)
