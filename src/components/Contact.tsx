import { useState } from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Instagram } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const contactInfo = [
    {
      label: 'Email',
      value: 'smuruga692@gmail.com',
      href: 'mailto:smuruga692@gmail.com',
      icon: <Mail className="text-glow-cyan" size={18} />,
    },
    {
      label: 'Phone',
      value: '+91-7200488406',
      href: 'tel:+917200488406',
      icon: <Phone className="text-glow-indigo" size={18} />,
    },
    {
      label: 'GitHub',
      value: 'github.com/Murugasamy375',
      href: 'https://github.com/Murugasamy375',
      icon: <Github className="text-glow-violet" size={18} />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/murugasamy-p-b99a8233a',
      href: 'https://linkedin.com/in/murugasamy-p-b99a8233a',
      icon: <Linkedin className="text-glow-cyan" size={18} />,
    },
    {
      label: 'Instagram',
      value: '@broken__piece07',
      href: 'https://www.instagram.com/broken__piece07?igsh=MTl5NHIxcWw0cHpoNQ==',
      icon: <Instagram className="text-glow-violet" size={18} />,
    },
    {
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      icon: <MapPin className="text-glow-indigo" size={18} />,
    },
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('sending');

    // Simulate sending message API
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg/60 relative overflow-hidden">
      {/* Glow helper */}
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-glow-indigo/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-glow-cyan to-glow-indigo mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Have a project in mind, want to collaborate, or have feedback? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left glass-panel rounded-3xl p-8 border border-white/5">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Feel free to reach out. I will respond as soon as possible, generally within 24 hours.
              </p>
              
              <div className="space-y-4 pt-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider block">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-gray-200 hover:text-glow-cyan hover:underline transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-gray-200">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 text-xs text-gray-500">
              © {new Date().getFullYear()} Murugasamy P. Built with React and Tailwind CSS.
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/5 text-left relative">
            {/* Overlay feedback screens */}
            {status === 'success' && (
              <div className="absolute inset-0 bg-dark-bg/95 rounded-3xl z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                <CheckCircle2 size={48} className="text-emerald-400 animate-bounce mb-4" />
                <h3 className="font-display font-bold text-2xl text-white">Message Sent Successfully!</h3>
                <p className="text-gray-400 text-xs sm:text-sm max-w-sm mt-2 leading-relaxed">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-glow-cyan to-glow-indigo hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error Callout */}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs sm:text-sm flex items-start space-x-2.5">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-xs font-semibold text-gray-300">
                    Your Name <span className="text-glow-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-hidden focus:border-glow-cyan/50 focus:ring-1 focus:ring-glow-cyan/50 transition-all placeholder-gray-600"
                    placeholder="John Doe"
                    disabled={status === 'sending'}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-xs font-semibold text-gray-300">
                    Your Email <span className="text-glow-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-hidden focus:border-glow-cyan/50 focus:ring-1 focus:ring-glow-cyan/50 transition-all placeholder-gray-600"
                    placeholder="johndoe@example.com"
                    disabled={status === 'sending'}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="form-subject" className="text-xs font-semibold text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="form-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-hidden focus:border-glow-cyan/50 focus:ring-1 focus:ring-glow-cyan/50 transition-all placeholder-gray-600"
                  placeholder="Inquiry / Partnership / Hello"
                  disabled={status === 'sending'}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-xs font-semibold text-gray-300">
                  Message <span className="text-glow-cyan">*</span>
                </label>
                <textarea
                  id="form-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-hidden focus:border-glow-cyan/50 focus:ring-1 focus:ring-glow-cyan/50 transition-all placeholder-gray-600 resize-none"
                  placeholder="Your message goes here..."
                  disabled={status === 'sending'}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl text-center text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-glow-cyan to-glow-indigo hover:shadow-lg hover:shadow-glow-cyan/20 disabled:opacity-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
