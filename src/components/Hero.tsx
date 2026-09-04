import { useState, useEffect, useRef } from 'react';
import { Terminal, ArrowRight, Github, Linkedin, Mail, Code2, ExternalLink, MapPin } from 'lucide-react';

const roles = [
  'GenAI / LLM Engineer',
  'Software Development Engineer (SDE)',
  'Java & Python Backend Developer',
  'Data Engineering Pipelines Specialist',
  'Competitive Programmer (2300+ Problems Solved)'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Cycling roles
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Background Particles canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.floor((width * height) / 18000);
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 - dist / 1100})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[var(--border)]"
    >
      {/* Particle Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <Terminal size={14} className="text-cyan-400" />
            <span>OPEN FOR OPPORTUNITIES (BENGALURU / CHENNAI / REMOTE)</span>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-xs sm:text-sm text-cyan-400 tracking-widest uppercase font-semibold">
              Hi, I'm
            </p>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text drop-shadow-sm">
                Murugasamy P
              </span>
            </h1>
          </div>

          {/* Cycling Role Line */}
          <div className="h-10 flex items-center font-display text-xl sm:text-2xl text-slate-300">
            <span className="font-semibold">Specialized in &nbsp;</span>
            <span
              className={`text-cyan-400 font-bold transition-opacity duration-300 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {roles[roleIndex]}
            </span>
            <span className="cblink" />
          </div>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
            Computer Science student at <strong className="text-white">St. Joseph's College of Engineering</strong>. 
            I possess exceptionally strong foundations in <strong className="text-white">Data Structures & Algorithms (2300+ problems solved)</strong>, 
            build robust microservices in <strong className="text-white">Spring Boot & FastAPI</strong>, and design 
            <strong className="text-cyan-400"> Agentic Generative AI systems</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 font-mono text-xs font-bold tracking-wider hover:opacity-95 hover:scale-105 transition-all shadow-lg shadow-cyan-500/25"
            >
              <span>Explore My Work</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 font-mono text-xs font-semibold tracking-wider hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all backdrop-blur-md"
            >
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 pt-4 text-xs font-mono text-slate-400">
            <a
              href="https://github.com/Murugasamy375"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/murugasamy12/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 text-cyan-400 font-semibold transition-colors inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-sm"
            >
              <Code2 size={15} />
              <span>LeetCode (2300+)</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://linkedin.com/in/murugasamy-p-b99a8233a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:smuruga692@gmail.com"
              className="hover:text-purple-400 transition-colors inline-flex items-center gap-1.5"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column Avatar (Adjusted framing & positioning) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group">
            {/* Ambient Multi-color Glowing Halo Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-50 blur-2xl group-hover:opacity-85 transition-opacity" />

            {/* Outer Animated Spinning Ring */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/60 opacity-50 group-hover:opacity-90 transition-opacity animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-6 rounded-full border border-indigo-500/30 opacity-40 group-hover:opacity-70 transition-opacity animate-spin-reverse pointer-events-none" />

            {/* Avatar Frame with Perfect Photo Positioning */}
            <div className="relative w-full h-full rounded-full border-2 border-cyan-400/50 overflow-hidden bg-slate-900 shadow-2xl group-hover:border-cyan-400 transition-colors">
              <img
                src="/avatar.jpeg"
                alt="Murugasamy P"
                className="w-full h-full object-cover object-[center_12%] filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Badge 1: Top Right */}
            <a
              href="https://leetcode.com/u/murugasamy12/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 -right-4 px-3.5 py-1.5 bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 text-cyan-300 font-mono text-[0.68rem] font-bold rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>2300+ Solved</span>
            </a>

            {/* Floating Badge 2: Bottom Left (Updated Location) */}
            <div className="absolute -bottom-3 -left-4 px-3.5 py-1.5 bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 text-slate-100 font-mono text-[0.68rem] font-semibold rounded-full shadow-2xl flex items-center gap-1.5">
              <MapPin size={13} className="text-cyan-400" />
              <span>Bengaluru / Chennai 📍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
