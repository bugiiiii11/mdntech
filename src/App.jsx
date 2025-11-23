import Background3D from './components/background/Background3D';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />

      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Stats />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
