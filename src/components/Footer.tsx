import { ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Name / Logo */}
        <div className="text-left">
          <span className="font-display font-bold text-lg text-white">Murugasamy P</span>
          <p className="text-gray-500 text-xs mt-1">Generative AI & Software Engineer</p>
        </div>

        {/* Navigation Shortcut */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Actions & Socials */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Murugasamy375"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/3 border border-white/5 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/murugasamy-p-b99a8233a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/3 border border-white/5 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:smuruga692@gmail.com"
            className="p-2.5 rounded-full bg-white/3 border border-white/5 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="Email Me"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.instagram.com/broken__piece07?igsh=MTl5NHIxcWw0cHpoNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/3 border border-white/5 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="Instagram Profile"
          >
            <Instagram size={16} />
          </a>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-linear-to-r from-glow-cyan to-glow-indigo text-white hover:opacity-90 hover:scale-105 transition-all shadow-md shadow-glow-cyan/20"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
