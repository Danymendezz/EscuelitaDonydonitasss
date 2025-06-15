import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Location from '@/pages/Location';
import Academic from '@/pages/Academic';
import Gallery from '@/pages/Gallery';
import Enrollment from '@/pages/Enrollment';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/ubicacion" element={<Location />} />
            <Route path="/academico" element={<Academic />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/inscripciones" element={<Enrollment />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;