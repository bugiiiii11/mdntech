import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParallaxOrbs from './components/ParallaxOrbs';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Project from './components/sections/Project';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

// Home page component
const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <Project />
    <About />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark relative">
        {/* Floating Parallax Orbs */}
        <ParallaxOrbs />

        {/* Header Navigation */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
