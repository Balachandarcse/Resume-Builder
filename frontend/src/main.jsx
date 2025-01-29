import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/signup.jsx'
import Login from './components/login.jsx'
import Welcome from './components/welcome.jsx'
import Home from './components/home.jsx'
import Sample from './components/sample.jsx'
import Templates from './components/template.jsx'
import CreateResume from './components/createResume.jsx'
import PreviewResume from './components/previewResume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/templates' element={<Templates/>}></Route>
        <Route path='/sample' element={<Sample/>}></Route>
        <Route path="/create-resume/:templateId" element={<CreateResume />} />
        <Route path="/preview-resume" element={<PreviewResume />} />
      </Routes>
   </BrowserRouter>
  </StrictMode>,
)
