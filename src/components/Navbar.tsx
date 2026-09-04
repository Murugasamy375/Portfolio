import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IST Clock
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const istString = new Date().toLocaleTimeString('en-US', options);
      setTime(`${istString} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { num: '01', name: 'ABOUT', href: '#about' },
    { num: '02', name: 'EXPERIENCE', href: '#experience' },
    { num: '03', name: 'PROJECTS', href: '#projects' },
    { num: '04', name: 'SKILLS', href: '#skills' },
    { num: '05', name: 'ACHIEVEMENTS', href: '#achievements' },
    { num: '06', name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="font-mono text-sm tracking-wider text-[var(--accent)] font-semibold hover:opacity-80 transition-opacity"
        >
          murugasamy.p <span className="opacity-40">// SDE & GenAI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[0.72rem] tracking-wider text-[var(--text-sub)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              <span className="text-[var(--accent)] opacity-60 mr-1">{link.num}.</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Info: Clock & Theme Switcher */}
        <div className="hidden sm:flex items-center space-x-5">
          <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
            {time}
          </span>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--border2)] text-[var(--text-sub)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
            <span>{theme.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border border-[var(--border2)] text-[var(--text-sub)] hover:text-[var(--accent)]"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-[var(--text-sub)] hover:text-[var(--accent)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--bg2)] border-b border-[var(--border)] py-6 px-8 flex flex-col space-y-4 shadow-xl font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-sub)] hover:text-[var(--accent)] py-1"
            >
              <span className="text-[var(--accent)] mr-2">{link.num}.</span>
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[var(--border)] text-[var(--text-muted)]">
            <span>{time}</span>
          </div>
        </div>
      )}
    </nav>
  );
}
