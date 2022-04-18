import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import HeaderNavbar from "./components/navbar/navbar";
import Home from "./components/pages/home";
import Coaching from "./components/pages/coaching";
import Experience from "./components/pages/experience";
import Resume from "./components/pages/resume";
import Contact from "./components/pages/contact";






function App() {
  return (
    <BrowserRouter>
    <HeaderNavbar/>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/coaching" element={<Coaching/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
