import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'smuruga692@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-[var(--border)] relative">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Section Label */}
        <div className="section-label justify-center">
          <span>06 // WHAT'S NEXT?</span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[var(--text)] tracking-tight">
          Let's Build Something Great Together
        </h2>

        <p className="text-[var(--text-sub)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          I am currently seeking SDE / Backend / GenAI Engineer roles. Whether you have a question, job opportunity, or just want to connect, feel free to drop me a message!
        </p>

        {/* Copyable Email Link */}
        <div className="pt-4 inline-flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="font-mono text-lg sm:text-xl text-[var(--accent)] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {email}
          </a>

          <button
            onClick={copyToClipboard}
            className="p-2 rounded border border-[var(--accent-border)] bg-[var(--accent-dim)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all font-mono text-xs flex items-center gap-1.5"
            title="Copy Email Address"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'COPIED!' : 'COPY'}</span>
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 text-xs font-mono">
          <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg2)] flex flex-col items-center space-y-1">
            <Mail size={16} className="text-[var(--accent)]" />
            <span className="text-[var(--text-muted)]">EMAIL</span>
            <span className="text-[var(--text)] font-semibold">{email}</span>
          </div>

          <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg2)] flex flex-col items-center space-y-1">
            <Phone size={16} className="text-[var(--accent)]" />
            <span className="text-[var(--text-muted)]">PHONE</span>
            <span className="text-[var(--text)] font-semibold">+91-7200488406</span>
          </div>

          <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg2)] flex flex-col items-center space-y-1">
            <MapPin size={16} className="text-[var(--accent)]" />
            <span className="text-[var(--text-muted)]">LOCATION</span>
            <span className="text-[var(--text)] font-semibold">Bengaluru / Chennai, India</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-6 font-mono text-xs text-[var(--text-sub)]">
          <a
            href="https://github.com/Murugasamy375"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors flex items-center gap-1"
          >
            <Github size={15} />
            <span>GitHub</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href="https://leetcode.com/u/murugasamy12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] font-semibold hover:underline transition-colors flex items-center gap-1"
          >
            <span>LeetCode (2300+)</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href="https://linkedin.com/in/murugasamy-p-b99a8233a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors flex items-center gap-1"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href="https://www.instagram.com/broken__piece07?igsh=MTl5NHIxcWw0cHpoNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors flex items-center gap-1"
          >
            <Instagram size={15} />
            <span>Instagram</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
