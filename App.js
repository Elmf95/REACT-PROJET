import React from 'react';

import { Chef, FindUs, Footer, Gallery, Header, Intro } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs/>
    <Footer />
  </div>
);

export default App;
