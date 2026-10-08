import { Bot, Code2, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'AI Interviewer & ATS Platform',
    year: '2026',
    icon: <Bot className="text-[var(--accent)]" size={22} />,
    desc: 'An LLM-powered agentic AI interviewer that conducts personalized technical interviews, evaluates candidate responses, performs voice-based interactions, and provides semantic Resume-JD ATS analysis.',
    highlights: [
      'Built an agentic AI interviewer using Python, FastAPI, LangGraph, and Groq for contextual question generation, follow-up questions, response evaluation, and candidate scoring.',
      'Developed a Resume-JD ATS pipeline using Sentence Transformers, BM25 keyword matching, and ChromaDB vector search for semantic matching and automated skill-gap analysis.',
      'Integrated Whisper Speech-to-Text and Kokoro Text-to-Speech to support voice-based interviews and deployed the platform on Render.',
    ],
    tags: [
      'Python',
      'FastAPI',
      'LangGraph',
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
    desc: 'An end-to-end agentic AI system that transforms raw requirement documents into structured software architecture, entity models, API specifications, and production-ready FastAPI code.',
    highlights: [
      'Orchestrated a stateful multi-agent LangGraph workflow with dedicated agents for requirement extraction, architecture design, entity modeling, and code generation.',
      'Implemented RAG with ChromaDB for semantic retrieval along with Pydantic schemas, structured output parsing, and tool calling.',
      'Added FastAPI APIs with JWT authentication and human-in-the-loop validation before executing the final code-generation workflow.',
    ],
    tags: [
      'Python',
      'LangGraph',
      'LangChain',
      'ChromaDB',
      'FastAPI',
      'Hugging Face',
      'JWT Auth',
      'RAG',
      'Pydantic',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murugasamy375',
    isFeatured: true,
  },

  {
    num: '03',
    title: 'CodeHub – Collaborative AI Coding Platform',
    year: '2026',
    icon: <Code2 className="text-[var(--accent)]" size={22} />,
    desc: 'A collaborative coding platform where admins publish daily programming challenges and members solve, submit, and discuss problems with AI-assisted code evaluation and progress tracking.',
    highlights: [
      'Built a full-stack coding platform using React, Vite, FastAPI, Supabase, and PostgreSQL with role-based authentication for admins and members.',
      'Implemented an online coding workspace with problem statements, test cases, code submission, notes, comments, daily challenges, streak tracking, and progress monitoring.',
      'Designed AI-assisted evaluation workflows for submitted solutions and voice-based problem responses, enabling automated feedback alongside admin evaluation.',
      'Implemented a daily challenge workflow where submissions contribute to streak progress only after completing the required coding, notes, and voice activities.',
    ],
    tags: [
      'React',
      'Vite',
      'FastAPI',
      'Python',
      'Supabase',
      'PostgreSQL',
      'AI Evaluation',
      'REST API',
      'Authentication',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murugasamy375',
    isFeatured: true,
  },

  {
    num: '04',
    title: 'Ticket Analysis AI',
    year: '2026',
    icon: <Bot className="text-[var(--accent)]" size={22} />,
    desc: 'An AI-powered support ticket analysis platform that combines RAG, semantic search, LLM reasoning, and anomaly detection to analyze and prioritize customer support tickets.',
    highlights: [
      'Built a FastAPI backend and Streamlit dashboard for filtering, analyzing, and querying support-ticket data through an AI-powered workflow.',
      'Implemented RAG using ChromaDB and Sentence Transformers to retrieve semantically relevant support tickets and provide contextual responses.',
      'Developed anomaly detection services for identifying long-resolution tickets and old unresolved high-priority tickets.',
      'Integrated Groq LLMs with LangChain and Pydantic-based tool workflows for structured ticket analysis and intelligent responses.',
    ],
    tags: [
      'Python',
      'FastAPI',
      'Streamlit',
      'LangChain',
      'RAG',
      'ChromaDB',
      'Sentence Transformers',
      'Groq',
      'Pydantic',
      'AI Agents',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murugasamy375/Ticket-Analysis-Ai',
    isFeatured: true,
  },

  {
    num: '05',
    title: 'AI Calendar Assistant',
    year: '2026',
    icon: <Bot className="text-[var(--accent)]" size={22} />,
    desc: 'An AI-powered calendar assistant that uses natural-language instructions to help users create, manage, and organize calendar events through an intelligent agent workflow.',
    highlights: [
      'Built an AI assistant capable of interpreting natural-language scheduling requests and converting them into structured calendar actions.',
      'Integrated LLM-based reasoning with calendar operations to automate event creation, updates, and scheduling workflows.',
      'Designed the system around tool-based agent interactions to separate natural-language understanding from calendar execution.',
    ],
    tags: [
      'Python',
      'LLM',
      'AI Agent',
      'Google Calendar',
      'LangChain',
      'Tool Calling',
      'REST API',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murugasamy375',
    isFeatured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="section-label">
          <span>03 // FEATURED PROJECTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="proj-card p-8 rounded-lg border border-[var(--border)] bg-[var(--bg2)]/80 flex flex-col justify-between"
            >
              <div>
                {/* Header: Num, Year, Links */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--accent)] font-bold px-2.5 py-1 rounded bg-[var(--accent-dim)] border border-[var(--accent-border)]">
                      {project.num}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-sub)] hover:text-[var(--accent)] transition-colors p-1"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-sub)] hover:text-[var(--accent)] transition-colors p-1"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-[var(--bg)] border border-[var(--border)] flex-shrink-0">
                    {project.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text)]">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-sub)] leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 text-xs text-[var(--text-sub)] leading-relaxed">
                  {project.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] mt-0.5">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded font-mono text-[0.68rem] text-[var(--text-muted)] border border-[var(--border2)] bg-[var(--bg)]"
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