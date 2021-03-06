import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './routes/home/Home.jsx'
import Navigation from './routes/navigation/Navigation.jsx'
import Flexbox from './routes/flexbox/Flexbox.jsx'
import Javascript from './routes/javascript/Javascript.jsx'
import ExportPdf from './routes/exportPdf/ExportPdf.jsx'
import HomeSpinner from "./routes/spinner/HomeSpinner.jsx";
import { Header } from './components'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/router' element={<Navigation />} />
        <Route path='/flexbox' element={<Flexbox />} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/PDF' element={<ExportPdf />} />
        <Route path='/spinner' element={<HomeSpinner />} />
      </Routes>
    </Router>
  );
}

export default App;
