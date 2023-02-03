import React, { useState } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import { animals } from './data';
function App() {
  return (
    <div className="App">
      <Header />
      <Main animals={animals} />
      <Footer />
    </div>
  );
}

export default App;
