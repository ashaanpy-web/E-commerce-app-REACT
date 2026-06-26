import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Home from './pages/Home';
import Explore from './pages/Explore';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative font-sans text-slate-100 flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;