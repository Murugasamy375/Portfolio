import { useState, useEffect } from 'react';
import { Terminal, Download, ArrowRight } from 'lucide-react';

const roles = [
  'MERN Stack Developer',
  'Java Full Stack Developer',
  'Data Engineer',
  'Competitive Programmer',
  'AI Learner & Enthusiast'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300); // match duration of fade out
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden grid-bg">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-glow-cyan/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-glow-indigo/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow animation-delay-400"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Block */}
        <div className="lg:col-span-7 space-y-6 text-left z-10 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-glow-cyan/30 bg-glow-cyan/5 text-glow-cyan text-xs font-semibold uppercase tracking-wider">
            <Terminal size={14} className="animate-pulse" />
            <span>Open for Opportunities (Intern / Full-Time)</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
            Hi, I'm <br className="hidden sm:inline" />
            <span className="text-glow-gradient">Murugasamy P</span>
          </h1>

          <div className="h-10 sm:h-12 flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
              Specialized in{' '}
              <span className={`text-glow-cyan transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {roles[roleIndex]}
              </span>
            </span>
          </div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            Computer Science student at St. Joseph's College of Engineering. I possess exceptionally strong foundations in Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP), build robust MERN stack and Java full-stack applications, and am actively exploring generative AI concepts.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl text-center text-sm font-semibold text-white bg-linear-to-r from-glow-cyan to-glow-indigo hover:shadow-lg hover:shadow-glow-cyan/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl text-center text-sm font-semibold text-gray-300 hover:text-white glass-panel hover:bg-white/5 border border-white/10 hover:border-glow-indigo/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Let's Connect</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1C1ugTp_ygP8Um-FbWGIFgbJECo_KxxBp/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl text-center text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Portrait Block */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 max-w-full flex justify-center items-center">
            {/* Pulsing neon rings under the avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-glow-cyan to-glow-violet opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-glow-cyan via-glow-indigo to-glow-violet opacity-50 blur-md group-hover:opacity-85 transition-opacity duration-300 animate-pulse-slow"></div>

            {/* Main Avatar Container */}
            <div className="w-[96%] h-[96%] rounded-full overflow-hidden border-2 border-dark-border bg-dark-bg z-10 relative">
              <img
                src="/avatar.jpeg"
                alt="Murugasamy P - Profile"
                className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Tech badges floating around the avatar */}
            <div className="absolute bottom-4 -left-4 glass-panel border border-glow-cyan/40 px-3 py-1.5 rounded-xl shadow-lg z-20 flex items-center space-x-2 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-cyan-400">MERN Stack</span>
            </div>
            <div className="absolute top-10 -right-4 glass-panel border border-glow-indigo/40 px-3 py-1.5 rounded-xl shadow-lg z-20 flex items-center space-x-2 hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-indigo-400">2300+ Solved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

