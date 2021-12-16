import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './routes'
import { Header } from './components'
import Navigation from './components/navigation/Navigation.jsx'
import Flexbox from './components/flexbox/Flexbox.jsx'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/router' element={<Navigation />} />
        <Route path='/flexbox' element={<Flexbox />} />
      </Routes>
    </Router>
  );
}

export default App;
