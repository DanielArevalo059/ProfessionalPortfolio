//import dependencies
import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
//import data



import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import components and pages
import Nav from './components/Nav.js';
import AboutMePage from './pages/AboutMePage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ContactPage from './pages/ContactPage.js';

//import styles 
import './App.css';

function App() {

  // const [discStat, setDiscStat] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> Daniel Arevalo</h1>
      </header>
      
      <Nav/>

      <main>
        <section>
          <Routes>
            <Route path='/' element={<AboutMePage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contact' element={<ContactPage />} />
             {/* <Route path='/contact' element={<Contact />} /> */}
          </Routes>
        </section>
        
      </main>

 <footer>
    <p>
        &copy; 2024 Daniel Arevalo
    </p>
</footer> 

      </BrowserRouter>
    </div>
  );
}

export default App;
