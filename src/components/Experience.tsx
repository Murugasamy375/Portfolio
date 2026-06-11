import { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, CircleDot } from 'lucide-react';

interface TimelineEvent {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export default function Experience() {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const timelineData: TimelineEvent[] = [
    {
      role: 'Software Developer Trainee Intern',
      company: 'HashedIn by Deloitte',
      location: 'On-site',
      duration: 'Apr 2026 - Present',
      description: [
        'Completed intensive, hands-on tracks in Generative AI, Spring Boot, Data Engineering, and Angular development.',
        'Architected and implemented production-grade pipelines utilizing LangGraph, LangChain, and chroma vector stores.',
        'Engineered distributed data processing scripts using Apache Spark (PySpark), Azure Databricks, and Apache Kafka queues.',
        'Submitted high-quality weekly deliverables, solving complex software bottlenecks and ensuring robust API integrations.'
      ],
      skills: ['LangGraph', 'LangChain', 'Spring Boot', 'Apache Spark', 'Databricks', 'Apache Kafka', 'Angular']
    },
    {
      role: 'Bachelor of Engineering - CSE Student',
      company: "St. Joseph's College of Engineering",
      location: 'Chennai, Tamil Nadu',
      duration: 'Nov 2022 - May 2026',
      description: [
        'Strong focus on core engineering topics: Data Structures & Algorithms (DSA), OOP, DBMS, OS, and Computer Networks.',
        'Consistently solved problems, leading to institutional competitive programming records.',
        'Gained foundations in Full Stack development frameworks and cloud pipelines.'
      ],
      skills: ['Java', 'Python', 'SQL', 'C', 'HTML/CSS', 'React', 'TypeScript', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-dark-bg/60 overflow-hidden">
      {/* Visual backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow-indigo/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Journey & Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-glow-cyan to-glow-indigo mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Highlights of my academic growth, professional training, and engineering tracks.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central track line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-glow-cyan via-glow-indigo to-glow-violet/20 pointer-events-none"></div>

          <div className="space-y-12">
            {timelineData.map((event, idx) => {
              const isEven = idx % 2 === 0;
              const isOpen = activeItem === idx;

              return (
                <div
                  key={event.company}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Anchor Point Bullet */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20">
                    <button
                      onClick={() => setActiveItem(isOpen ? null : idx)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 bg-dark-bg transition-all duration-300 ${
                        isOpen 
                          ? 'border-glow-cyan shadow-[0_0_12px_rgba(6,182,212,0.6)] scale-110' 
                          : 'border-glow-indigo hover:border-glow-cyan hover:scale-105'
                      }`}
                    >
                      <CircleDot size={12} className={isOpen ? 'text-glow-cyan' : 'text-glow-indigo'} />
                    </button>
                  </div>

                  {/* Empty Spacer Column for layout on Desktop */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Timeline Card */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <div
                      onClick={() => setActiveItem(isOpen ? null : idx)}
                      className={`cursor-pointer glass-panel rounded-2xl p-6 border transition-all duration-300 text-left ${
                        isOpen 
                          ? 'border-glow-cyan/50 shadow-lg shadow-glow-cyan/5 bg-dark-card/90' 
                          : 'border-white/5 hover:border-white/20 hover:bg-dark-card/85'
                      }`}
                    >
                      {/* Header */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-2 text-glow-cyan text-xs font-semibold uppercase tracking-wider">
                          <Calendar size={12} />
                          <span>{event.duration}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white">
                          {event.role}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <Briefcase size={14} className="text-gray-400" />
                          <span className="font-medium">{event.company}</span>
                          <span className="text-gray-500">|</span>
                          <span className="text-gray-400 text-xs">{event.location}</span>
                        </div>
                      </div>

                      {/* Expandable bullets */}
                      <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <ul className="space-y-3 pl-1.5 border-l border-white/10 mt-2">
                          {event.description.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="text-xs sm:text-sm text-gray-400 flex items-start space-x-2 leading-relaxed">
                              <ChevronRight size={14} className="text-glow-cyan shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-4">
                          {event.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono font-medium text-glow-cyan bg-glow-cyan/5 border border-glow-cyan/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expand indicator (visible when collapsed) */}
                      {!isOpen && (
                        <div className="mt-3 flex items-center text-xs text-glow-indigo font-medium font-mono hover:text-glow-cyan">
                          <span>View Details</span>
                          <ChevronRight size={12} className="ml-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
