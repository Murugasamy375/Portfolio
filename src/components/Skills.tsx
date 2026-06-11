import { useState } from 'react';
import { Cpu, Database, Blocks, GraduationCap, ChevronRight } from 'lucide-react';



interface Skill {
  name: string;
  level: number; // percentage
  useCase: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: 'Generative AI (Learning)',
      icon: <Cpu size={18} />,
      skills: [
        { name: 'LangGraph', level: 65, useCase: 'Studying stateful node routing and workflow structures' },
        { name: 'LangChain', level: 70, useCase: 'Exploring document loaders and custom chain configurations' },
        { name: 'RAG Concepts', level: 68, useCase: 'Experimenting with vector chunking and semantic retrievals' },
        { name: 'LLM APIs', level: 75, useCase: 'Integrating Hugging Face/OpenAI API wrappers in test apps' },
        { name: 'Prompt Engineering', level: 80, useCase: 'Practicing optimized contextual prompt guidelines' }
      ]
    },
    {
      title: 'Data Engineering',
      icon: <Database size={18} />,
      skills: [
        { name: 'Apache Spark', level: 85, useCase: 'Developed PySpark data extraction scripts for internship tracks' },
        { name: 'Databricks', level: 82, useCase: 'Conducted notebooks queries & cloud environment evaluations' },
        { name: 'Apache Kafka', level: 80, useCase: 'Established pub/sub data topics for message queues' },
        { name: 'Batch Processing', level: 84, useCase: 'Constructed ETL routines for structured databases' }
      ]
    },
    {
      title: 'Web & Frameworks',
      icon: <Blocks size={18} />,
      skills: [
        { name: 'MERN Stack', level: 90, useCase: 'Built full-stack MongoDB, Express, React, and Node.js web products' },
        { name: 'Spring Boot', level: 92, useCase: 'Developed secure, JPA-backed controllers for library API services' },
        { name: 'React.js', level: 88, useCase: 'Designed client pages with components and custom state routines' },
        { name: 'TypeScript', level: 86, useCase: 'Enforced type-safe props and models across application codebases' },
        { name: 'Angular', level: 80, useCase: 'Completed trainee track for client interface creation' },
        { name: 'FastAPI', level: 85, useCase: 'Built asynchronous Python microservices for AI workflows' }
      ]
    },
    {
      title: 'Languages & DBs',
      icon: <Blocks size={18} />,
      skills: [
        { name: 'Java', level: 94, useCase: 'Core programming language used for Spring Boot products and DSA' },
        { name: 'Python', level: 92, useCase: 'Selected language for LangGraph workflow tasks and data scripts' },
        { name: 'MySQL', level: 88, useCase: 'Configured tables, relationships, and queries for book lending loggers' },
        { name: 'SQL & C', level: 85, useCase: 'Maintained low-level functions and basic query scripts' }
      ]
    },
    {
      title: 'Core Concepts & Tools',
      icon: <GraduationCap size={18} />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 99, useCase: 'Expert proficiency: Solved 2,300+ problems on LeetCode, GFG, and Skillrack' },
        { name: 'Object-Oriented Programming', level: 97, useCase: 'Deep foundations: Advanced design patterns, polymorphic structures, and SOLID principles' },
        { name: 'DBMS / SQL Queries', level: 88, useCase: 'Structured query maps, index strategies, and transactions' },
        { name: 'Git & GitHub', level: 90, useCase: 'Managed version controls, code branch trees, and merges' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg/25 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-glow-indigo/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Technical Skillset
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-glow-cyan to-glow-indigo mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            A breakdown of my technical proficiency, categorized by domains and hands-on usage.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Categories Sidebar */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-3 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/5 pr-0 lg:pr-6 shrink-0 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center space-x-3 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 whitespace-nowrap text-left w-full ${
                  activeCategory === idx
                    ? 'bg-linear-to-r from-glow-cyan to-glow-indigo text-white shadow-lg shadow-glow-cyan/15 scale-102'
                    : 'bg-white/2 hover:bg-white/5 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                <span className={activeCategory === idx ? 'text-white' : 'text-glow-cyan'}>
                  {cat.icon}
                </span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {categories[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-glow-cyan/30 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display font-bold text-lg text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-glow-cyan">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Custom progress bar */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4 border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-glow-cyan to-glow-indigo rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-start space-x-1.5 text-xs text-gray-400 border-t border-white/5 pt-3 mt-auto leading-relaxed">
                  <ChevronRight size={14} className="text-glow-cyan shrink-0 mt-0.5" />
                  <span>{skill.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
