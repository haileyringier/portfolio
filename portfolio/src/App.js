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
import Home from './Components/Home';

export default function App() {
  return (
    <div>
      <header className="App">
        <NavBar />
      </header>
      <main>
        <Switch>
            <Route path="/resume">
              {/* <Resume /> */}
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </main>
    </div>
  );
}
