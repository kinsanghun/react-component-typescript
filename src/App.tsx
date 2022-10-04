import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import View from './pages/View';
import Header from './components/include/header';
import Footer from './components/include/footer';
import Components from 'pages/components';
import Interactive from 'pages/Interactive';
import Contact from 'pages/Contact';
import ScrollToTop from 'util/scrollTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/components" element={<Components />}></Route>
          <Route path="/interactive" element={<Interactive />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
