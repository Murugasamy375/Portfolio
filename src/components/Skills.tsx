import { useState } from 'react';
import { Cpu, Server, Database, Code, Layout, Layers, Terminal } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const skillGroups = [
    {
      category: 'GenAI & LLMs',
      icon: <Cpu size={16} className="text-[var(--accent)]" />,
      skills: [
        'LangChain',
        'LangGraph',
        'RAG Infrastructure',
        'ChromaDB Vector DB',
        'Hugging Face Transformers',
        'Groq API',
        'MCP (Model Context Protocol)',
        'Sentence Transformers',
        'BM25 Retrieval',
        'Whisper STT',
        'Kokoro TTS',
        'Machine Learning',
      ],
    },
    {
      category: 'Backend Dev',
      icon: <Server size={16} className="text-[var(--accent)]" />,
      skills: [
        'Java Spring Boot',
        'Python FastAPI',
        'RESTful API Design',
        'JWT Authentication',
        'Apache Kafka',
        'Microservices Architecture',
        'Express.js',
        'API Gateway',
      ],
    },
    {
      category: 'Databases',
      icon: <Database size={16} className="text-[var(--accent)]" />,
      skills: ['MySQL', 'MongoDB', 'JPA / Hibernate', 'Vector DB', 'DynamoDB'],
    },
    {
      category: 'Languages',
      icon: <Code size={16} className="text-[var(--accent)]" />,
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C', 'TypeScript'],
    },
    {
      category: 'Data Engineering',
      icon: <Layers size={16} className="text-[var(--accent)]" />,
      skills: ['Apache Spark', 'PySpark', 'Databricks Data Pipelines'],
    },
    {
      category: 'Frontend & CS Core',
      icon: <Layout size={16} className="text-[var(--accent)]" />,
      skills: [
        'React.js',
        'Angular',
        'TypeScript',
        'Data Structures & Algorithms',
        'System Design (LLD & HLD)',
        'Operating Systems',
        'Computer Networks',
        'DBMS',
      ],
    },
    {
      category: 'Platforms & Tools',
      icon: <Terminal size={16} className="text-[var(--accent)]" />,
      skills: ['Docker', 'Git & GitHub', 'Postman', 'Agile / Scrum', 'CI/CD Pipelines'],
    },
  ];

  const filteredGroups =
    activeCategory === 'ALL'
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="section-label">
          <span>04 // TECHNICAL SKILLS</span>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
              activeCategory === 'ALL'
                ? 'bg-[var(--accent)] text-[var(--bg)] font-bold'
                : 'border border-[var(--border2)] text-[var(--text-sub)] hover:border-[var(--accent)]'
            }`}
          >
            ALL SKILLS
          </button>
          {skillGroups.map((g) => (
            <button
              key={g.category}
              onClick={() => setActiveCategory(g.category)}
              className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
                activeCategory === g.category
                  ? 'bg-[var(--accent)] text-[var(--bg)] font-bold'
                  : 'border border-[var(--border2)] text-[var(--text-sub)] hover:border-[var(--accent)]'
              }`}
            >
              {g.category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg2)]/60 hover:border-[var(--accent-border)] transition-colors space-y-4"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                {group.icon}
                <span>{group.category}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="sk-tag px-3 py-1.5 rounded font-mono text-xs border border-[var(--border)] bg-[var(--bg)] text-[var(--text-sub)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-all cursor-default"
                  >
                    {skill}
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
