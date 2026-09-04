import { ExternalLink, Github, Sparkles, Bot, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      num: '01',
      title: 'AI Interviewer & ATS Platform',
      year: '2026',
      icon: <Bot className="text-[var(--accent)]" size={22} />,
      desc: 'An LLM-powered agentic AI interviewer capable of generating personalized technical questions, evaluating responses, conducting voice-based interviews, and providing Resume-JD semantic ATS matching.',
      highlights: [
        'Designed an LLM-powered agentic AI interviewer using Python, FastAPI, and Groq, producing contextual follow-up questions and candidate scoring.',
        'Developed a Resume-JD matching & ATS pipeline using Sentence Transformers, BM25 keyword matching, and ChromaDB vector search for automated skill-gap analysis.',
        'Integrated Speech-to-Text (Whisper) and Text-to-Speech (Kokoro TTS) for real-time voice interviews; deployed live on Render.',
      ],
      tags: [
        'Python',
        'FastAPI',
        'LLM (Groq)',
        'RAG',
        'ChromaDB',
        'Sentence Transformers',
        'BM25',
        'Whisper STT',
        'Kokoro TTS',
      ],
      liveUrl: 'https://ai-interview-fiar.onrender.com/index',
      githubUrl: 'https://github.com/Murugasamy375',
      isFeatured: true,
    },
    {
      num: '02',
      title: 'AI Code Generator from Requirement Documents',
      year: '2026',
      icon: <Code2 className="text-[var(--accent)]" size={22} />,
      desc: 'An end-to-end agentic AI system that ingests raw requirement documents (req.md) and automatically synthesizes architecture diagrams, entity models, API specifications, and production-ready FastAPI code.',
      highlights: [
        'Orchestrated a stateful multi-agent LangGraph workflow featuring 4 dedicated agents for requirement extraction, architecture design, entity model, and code generation.',
        'Implemented a RAG pipeline with ChromaDB for semantic retrieval, enforcing structured output parsing, Pydantic schemas, and tool calling.',
        'Exposed FastAPI endpoints protected with JWT authentication and human-in-the-loop plan validation before code generation.',
      ],
      tags: [
        'Python',
        'LangGraph',
        'LangChain',
        'ChromaDB',
        'FastAPI',
        'Hugging Face',
        'JWT Auth',
        'RAG Pipeline',
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/Murugasamy375',
      isFeatured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="section-label">
          <span>03 // FEATURED PROJECTS</span>
        </div>

        <div className="space-y-8">
          {projects.map((proj) => (
            <div
              key={proj.num}
              className="proj-card p-8 rounded-lg border border-[var(--border)] bg-[var(--bg2)]/80 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--accent)] opacity-60">
                    {proj.num} //
                  </span>
                  <div className="p-2 rounded border border-[var(--accent-border)] bg-[var(--accent-dim)]">
                    {proj.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)]">
                      {proj.title}
                    </h3>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded border border-[var(--border2)] text-[var(--text-sub)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs flex items-center gap-1.5"
                      title="View GitHub Repository"
                    >
                      <Github size={14} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 px-3 rounded border border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)] font-mono text-xs font-bold hover:bg-transparent hover:text-[var(--accent)] transition-all flex items-center gap-1.5 shadow-md"
                      title="View Live Platform"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[var(--text-sub)] text-base leading-relaxed mb-4">
                {proj.desc}
              </p>

              {/* Key Technical Highlights */}
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[var(--text-sub)]">
                {proj.highlights.map((point, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <Sparkles size={14} className="text-[var(--accent)] mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border)]">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded font-mono text-[0.65rem] text-[var(--text-muted)] border border-[var(--border2)] bg-[var(--bg)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
