import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Main from './pages/Main.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Resume from './pages/Resume.jsx';
import Coba from './pages/Coba.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />}/>
        <Route path="/coba" element={<Coba/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
