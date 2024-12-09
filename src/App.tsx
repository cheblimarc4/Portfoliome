import React from 'react';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Hire } from './components/Hire';
import { Navigation } from './components/Navigation';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hire" element={<Hire />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;