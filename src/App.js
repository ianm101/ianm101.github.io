import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Coaching from './pages/coaching';
import Resume from './pages/resume';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact component={About}/>
        <Route path='/coaching' exact component={Coaching}/>
        <Route path='/resume' exact component={Resume}/>
        <Route path='/contact' exact component={Contact}/>

      </Routes>
    </Router>
  );
}

export default App;
