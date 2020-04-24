import React from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div>
    <Navigation />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
