import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import AboutSection from './Components/AboutSection';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Projects from './Components/Projects';
import Picture from './Components/Picture';
import ContactCard from './Components/ContactCard'

export default function App() {
  return (
    <div>
      <header className="App">
        {/* <NavBar /> */}
      </header>
      <main>
        <AboutSection />
        <Projects />
        <ContactCard />
      </main>
    </div>
  );
}
