import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col font-sans antialiased selection:bg-glow-cyan/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

