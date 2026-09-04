import { Code, Server, Brain, Database, Award, ExternalLink } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Brain className="text-[var(--accent)]" size={18} />,
      title: 'GenAI & Agentic Systems',
      desc: 'Multi-agent workflows with LangGraph, RAG vector pipelines with ChromaDB, Groq LLMs, Whisper, and Kokoro TTS.',
    },
    {
      icon: <Server className="text-[var(--accent)]" size={18} />,
      title: 'Backend & Microservices',
      desc: 'Layered RESTful services using Spring Boot and Python FastAPI following SOLID principles, JWT auth, rate limiting, and Docker.',
    },
    {
      icon: <Database className="text-[var(--accent)]" size={18} />,
      title: 'Data Pipelines & Storage',
      desc: 'Distributed data processing with Apache Spark and Kafka on Databricks, working with relational, NoSQL, and Vector DBs.',
    },
    {
      icon: <Code className="text-[var(--accent)]" size={18} />,
      title: 'DSA & System Design',
      desc: '2300+ DSA problems solved across LeetCode, Skillrack, and GeeksforGeeks with strong focus on LLD and HLD system design.',
    },
  ];

  const statCards = [
    {
      num: '2300+',
      label: 'DSA PROBLEMS SOLVED',
      link: 'https://leetcode.com/u/murugasamy12/',
    },
    {
      num: '500+',
      label: 'LEETCODE SOLVED (RANK 189K)',
      link: 'https://leetcode.com/u/murugasamy12/',
    },
    {
      num: '5th',
      label: 'GFG INSTITUTIONAL RANK',
      link: null,
    },
    {
      num: '8.23',
      label: 'B.E. CSE CGPA',
      link: null,
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-[var(--border)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="section-label">
          <span>01 // ABOUT ME</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-5 text-[var(--text-sub)] text-base sm:text-lg leading-relaxed font-sans">
            <p>
              I am a <strong className="text-[var(--text)]">Software Development Engineer</strong> and{' '}
              <strong className="text-[var(--accent)]">GenAI Specialist</strong> graduating from{' '}
              <span className="text-[var(--text)]">St. Joseph’s College of Engineering, Chennai</span>. 
              My expertise centers on creating high-performance backend microservices, intelligent multi-agent systems, and scalable data pipelines.
            </p>
            <p>
              During my internship at <strong className="text-[var(--text)]">HashedIn by Deloitte</strong>, 
              I architected production microservices in Spring Boot and FastAPI, implemented API security & rate limiting, containerized services with Docker, and engineered Spark/Kafka data pipelines on Databricks across 4 project milestones.
            </p>
            <p>
              When I’m not engineering software systems, I train heavily in competitive programming, having solved over{' '}
              <a
                href="https://leetcode.com/u/murugasamy12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                2,300+ DSA problems
              </a>{' '}
              across LeetCode, GeeksforGeeks, and Skillrack.
            </p>

            {/* Quick Core Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg2)]/60 hover:border-[var(--accent-border)] transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[var(--text)]">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[var(--text-sub)] leading-normal font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-dim)] space-y-4">
              <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider flex items-center justify-between font-semibold">
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span>Key Metrics & Rankings</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {statCards.map((stat, idx) => {
                  const content = (
                    <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-center space-y-1 hover:border-[var(--accent-border)] transition-colors group">
                      <span className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors block">
                        {stat.num}
                      </span>
                      <span className="font-mono text-[0.6rem] text-[var(--text-muted)] tracking-wider block flex items-center justify-center gap-1">
                        <span>{stat.label}</span>
                        {stat.link && <ExternalLink size={10} className="text-[var(--accent)]" />}
                      </span>
                    </div>
                  );

                  return stat.link ? (
                    <a
                      key={idx}
                      href={stat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View LeetCode Profile"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={idx}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Quick Location & Availability Card */}
            <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--bg2)] font-sans text-xs space-y-2">
              <div className="font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                📍 Location & Status
              </div>
              <p className="text-[var(--text-sub)] leading-relaxed">
                Based in <strong className="text-[var(--text)]">Bengaluru / Chennai, India</strong>. Ready for On-Site (Bengaluru / Chennai) or Remote SDE / Backend / GenAI Engineer roles globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
