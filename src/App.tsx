import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalTwinChat from './components/DigitalTwinChat';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col font-sans antialiased selection:bg-[var(--accent)]/30 selection:text-white">
      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Floating AI Digital Twin Chatbot */}
      <DigitalTwinChat />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
