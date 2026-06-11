import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-4 shadow-lg shadow-black/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <span className="font-display font-bold text-xl tracking-tight text-glow-gradient">
            Murugasamy.P
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white font-medium text-sm transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials / Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/Murugasamy375"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-glow-cyan hover:scale-105 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/murugasamy-p-b99a8233a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-glow-indigo hover:scale-105 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:smuruga692@gmail.com"
            className="p-2 text-gray-400 hover:text-glow-violet hover:scale-105 transition-all duration-200"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.instagram.com/broken__piece07?igsh=MTl5NHIxcWw0cHpoNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-rose-400 hover:scale-105 transition-all duration-200"
            aria-label="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-linear-to-r from-glow-cyan to-glow-indigo hover:opacity-90 hover:scale-105 shadow-md shadow-glow-cyan/25 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-panel border-t border-dark-border py-6 px-8 flex flex-col space-y-4 shadow-2xl transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-glow-cyan text-base font-medium transition-colors duration-200 py-1"
          >
            {link.name}
          </a>
        ))}
        <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
          <a
            href="https://github.com/Murugasamy375"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-glow-cyan transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/murugasamy-p-b99a8233a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-glow-indigo transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:smuruga692@gmail.com"
            className="text-gray-400 hover:text-glow-violet transition-colors"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.instagram.com/broken__piece07?igsh=MTl5NHIxcWw0cHpoNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-rose-400 transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex-1 text-center py-2 rounded-full text-xs font-semibold text-white bg-linear-to-r from-glow-cyan to-glow-indigo"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
