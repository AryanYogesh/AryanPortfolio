import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutMe from './Components/AboutMe';
import Home from './Pages/Home';
import ContactPage from './Pages/ContactPage';
import AboutMePage from './Pages/AboutMePage';
import Skills from './Pages/Skills';
import Project from './Pages/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='/aboutme' element={<AboutMePage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/project' element={<Project/>}/>
          </Route>
        </Routes>
      
    </Router>
  </React.StrictMode>
);


reportWebVitals();
