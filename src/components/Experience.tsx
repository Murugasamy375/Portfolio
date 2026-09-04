import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer Trainee Intern',
      company: 'HashedIn by Deloitte',
      location: 'On-Site',
      period: 'Apr 2026 – June 2026',
      highlights: [
        'Architected and deployed RESTful backend microservices in Spring Boot and FastAPI using a 3-tier, object-oriented architecture, applying SOLID principles within Agile/Scrum sprints to improve maintainability and scalability.',
        'Secured high-traffic endpoints by implementing API rate limiting and input validation, containerized services with Docker, and integrated agentic AI/LLM-based components into production-style applications.',
        'Engineered data pipelines using Apache Spark and Kafka on Databricks, and independently delivered 4 project milestones across backend, agentic AI, data engineering, and frontend tracks with clean, peer-reviewed Git commit histories.',
      ],
      skills: [
        'Spring Boot',
        'FastAPI',
        'GenAI / LLM',
        'Apache Spark',
        'Apache Kafka',
        'Databricks',
        'Docker',
        'REST Microservices',
        'Agile/Scrum',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="section-label">
          <span>02 // EXPERIENCE</span>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 rounded-lg border border-[var(--border)] bg-[var(--bg2)]/80 hover:border-[var(--accent-border)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Left Column: Metadata */}
              <div className="md:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] text-[var(--accent)] font-mono text-xs">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-[var(--text)]">
                  {exp.role}
                </h3>

                <div className="font-mono text-sm text-[var(--accent)] font-semibold flex items-center gap-2">
                  <Briefcase size={15} />
                  <span>{exp.company}</span>
                </div>

                <div className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                  <MapPin size={13} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Right Column: Key Deliverables */}
              <div className="md:col-span-8 space-y-4">
                <ul className="space-y-3 text-[var(--text-sub)] text-sm leading-relaxed">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="text-[var(--accent)] mt-1 flex-shrink-0">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded font-mono text-[0.68rem] text-[var(--text-muted)] border border-[var(--border2)] bg-[var(--bg)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
