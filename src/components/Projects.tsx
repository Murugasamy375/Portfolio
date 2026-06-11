import { useState } from 'react';
import { Bot, Library, Sparkles, Send, RefreshCw, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  category: 'AI' | 'Full-Stack';
  description: string[];
  tech: string[];
  role: string;
  icon: React.ReactNode;
}

const mockSimulations: Record<string, {
  retrieved: string[];
  plan: string[];
  code: string;
}> = {
  auth: {
    retrieved: [
      'ChromaDB: Found JWT security configs for Spring Security / NextAuth.',
      'ChromaDB: Found best-practice password hashing template (Bcrypt).'
    ],
    plan: [
      'LangGraph Node [analyzer]: Validated email regex and password rules.',
      'LangGraph Node [planner]: Structured schema (id, email, password_hash, is_active).',
      'LangGraph Node [coder]: Outputting controller, repository, and auth filter code.'
    ],
    code: `// Spring Boot Authentication Controller
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authManager;
    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest req) {
        if (userRepository.existsByEmail(req.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        User user = new User(req.getEmail(), encoder.encode(req.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }
}`
  },
  library: {
    retrieved: [
      'ChromaDB: Found Library entities (Book, User, Transaction).',
      'ChromaDB: Found pagination query helper configurations.'
    ],
    plan: [
      'LangGraph Node [analyzer]: Read fields for isbn, title, author, copies.',
      'LangGraph Node [planner]: Mapped JPA relational constraints (One-to-Many).',
      'LangGraph Node [coder]: Compiled service transaction code.'
    ],
    code: `// JPA Entity for Books
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String isbn;
    
    private String title;
    private String author;
    private int availableCopies;

    // Getters and Setters...
}`
  },
  generic: {
    retrieved: [
      'ChromaDB: Query completed. Matching general full-stack blueprint.',
      'ChromaDB: Found common controller-service repository pattern.'
    ],
    plan: [
      'LangGraph Node [analyzer]: Interpreted custom request constraints.',
      'LangGraph Node [planner]: Mapped REST controller endpoints.',
      'LangGraph Node [coder]: Generating code scaffolding.'
    ],
    code: `// Express.js Controller Stub
app.post('/api/resource', async (req, res) => {
    try {
        const { name, data } = req.body;
        const result = await ResourceService.create({ name, data });
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});`
  }
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'AI' | 'Full-Stack'>('All');
  
  // Simulator states
  const [prompt, setPrompt] = useState('');
  const [simState, setSimState] = useState<'idle' | 'retrieving' | 'planning' | 'coding' | 'done'>('idle');
  const [simOutput, setSimOutput] = useState<typeof mockSimulations['auth'] | null>(null);

  const projects: Project[] = [
    {
      title: 'AI-Powered Requirement-to-Code Generator',
      category: 'AI',
      role: 'AI Explorer & Learner',
      description: [
        'Built a Generative AI application as a hands-on learning project to explore converting software requirements into plans.',
        'Studied dense semantic RAG pipelines using document chunking, embeddings, and ChromaDB vector search.',
        'Designed a stateful LangGraph multi-agent loop to practice routing queries, mapping plans, and drafting code.',
        'Integrated local security configurations, file uploads, and modular mockup template compilation pipelines.'
      ],
      tech: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'Hugging Face', 'FastAPI'],
      icon: <Bot size={24} className="text-glow-cyan" />
    },
    {
      title: 'Library Management System',
      category: 'Full-Stack',
      role: 'Backend Engineer',
      description: [
        'Developed production-ready RESTful APIs for managing inventories, book allocations, and user accounts.',
        'Implemented full pagination, global searches, dynamic query filtering, and audit transaction tables.',
        'Optimized SQL query plans, applied custom validation annotations, and handled granular service-level exception maps.'
      ],
      tech: ['Spring Boot', 'MySQL', 'JPA', 'Hibernate', 'RESTful API'],
      icon: <Library size={24} className="text-glow-indigo" />
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleSimulate = (key: 'auth' | 'library' | 'generic', text: string) => {
    setPrompt(text);
    setSimState('retrieving');
    
    setTimeout(() => {
      setSimState('planning');
      setTimeout(() => {
        setSimState('coding');
        setTimeout(() => {
          setSimState('done');
          setSimOutput(mockSimulations[key]);
        }, 1200);
      }, 1000);
    }, 800);
  };

  const resetSimulator = () => {
    setPrompt('');
    setSimState('idle');
    setSimOutput(null);
  };

  return (
    <section id="projects" className="py-20 bg-dark-bg/40 relative">
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-glow-violet/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-glow-cyan to-glow-indigo mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            A showcase of my recent full-stack systems and state-of-the-art Generative AI applications.
          </p>

          {/* Filters */}
          <div className="flex justify-center space-x-4 mt-8">
            {['All', 'AI', 'Full-Stack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-linear-to-r from-glow-cyan to-glow-indigo text-white shadow-md shadow-glow-cyan/20'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-glow-indigo/30 glass-panel-hover"
            >
              <div className="space-y-6">
                {/* Badge Header */}
                <div className="flex justify-between items-center">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-glow-cyan bg-glow-cyan/5 border border-glow-cyan/15">
                    {project.category}
                  </span>
                </div>

                {/* Info */}
                <div className="text-left space-y-2">
                  <span className="text-xs font-mono font-medium text-gray-400">{project.role}</span>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-left">
                  {project.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="text-xs sm:text-sm text-gray-400 flex items-start space-x-2.5 leading-relaxed">
                      <ChevronRight size={14} className="text-glow-cyan shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Tech */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-8">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium text-gray-300 bg-white/5 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Simulator Dashboard */}
        <div className="glass-panel rounded-3xl p-6 md:p-10 border border-glow-cyan/20 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Header background gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-glow-cyan via-glow-indigo to-glow-violet"></div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Input & Panel info */}
            <div className="lg:w-5/12 text-left space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-glow-cyan text-xs font-semibold uppercase tracking-wider">
                  <Sparkles size={16} className="animate-pulse" />
                  <span>Live Simulator Widget</span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                  Test the Requirement-to-Code Generator
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Experience a live mockup simulation of my multi-agent LangGraph workflow. Select a prompt to generate software schemas and functional code.
                </p>
              </div>

              {/* Template Buttons */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-500 font-semibold uppercase tracking-wider">Select a Quick Template:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    disabled={simState !== 'idle'}
                    onClick={() => handleSimulate('auth', 'Generate user registration service with secure JWT validation.')}
                    className="px-3 py-2 rounded-xl text-xs font-mono text-left glass-panel border border-white/5 hover:border-glow-cyan/40 hover:bg-white/5 transition-all text-gray-300 disabled:opacity-50"
                  >
                    🔐 User Auth Service
                  </button>
                  <button
                    disabled={simState !== 'idle'}
                    onClick={() => handleSimulate('library', 'Create JPA entities and Spring repository for tracking book loans.')}
                    className="px-3 py-2 rounded-xl text-xs font-mono text-left glass-panel border border-white/5 hover:border-glow-indigo/40 hover:bg-white/5 transition-all text-gray-300 disabled:opacity-50"
                  >
                    📚 Book Loan Entity
                  </button>
                </div>
              </div>

              {/* Custom Input */}
              <div className="relative flex items-center bg-white/2 rounded-xl border border-white/5 p-1">
                <input
                  type="text"
                  value={prompt}
                  disabled={simState !== 'idle'}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type dynamic requirement..."
                  className="flex-1 bg-transparent border-0 outline-hidden focus:ring-0 text-xs sm:text-sm text-white px-3 py-2 placeholder-gray-500"
                />
                <button
                  disabled={simState !== 'idle' || !prompt.trim()}
                  onClick={() => handleSimulate('generic', prompt)}
                  className="p-2.5 rounded-lg bg-linear-to-r from-glow-cyan to-glow-indigo text-white hover:opacity-90 disabled:opacity-40 transition-opacity"
                  aria-label="Send query"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>

            {/* Simulated Output (Terminal style) */}
            <div className="lg:w-7/12 bg-black/60 rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[350px] sm:h-[400px]">
              {/* Terminal Titlebar */}
              <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex justify-between items-center text-xs font-mono text-gray-400">
                <div className="flex items-center space-x-2">
                  <Terminal size={14} className="text-glow-cyan" />
                  <span>langgraph_agent_orchestrator.py</span>
                </div>
                {simState !== 'idle' && (
                  <button onClick={resetSimulator} className="hover:text-white flex items-center space-x-1">
                    <RefreshCw size={10} className={simState !== 'done' ? 'animate-spin' : ''} />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Terminal Content */}
              <div className="p-4 flex-1 overflow-y-auto font-mono text-xs text-left space-y-4">
                {simState === 'idle' && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-2">
                    <Bot size={32} className="text-gray-600 animate-bounce" />
                    <span>Waiting for task initialization...</span>
                    <span className="text-[10px] text-gray-600">Select a prompt template or enter text on the left to compile code.</span>
                  </div>
                )}

                {/* Steps */}
                {simState !== 'idle' && (
                  <div className="space-y-2.5">
                    {/* Step 1 */}
                    <div className="flex items-start space-x-2.5">
                      <span className={`text-[10px] px-2 py-0.5 rounded-sm font-semibold tracking-wider ${
                        simState === 'retrieving' 
                          ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        RAG SEARCH
                      </span>
                      <span className="text-gray-400">
                        {simState === 'retrieving' ? 'Retrieving references from vector DB...' : 'ChromaDB lookup completed successfully.'}
                      </span>
                    </div>

                    {/* Step 2 */}
                    {['planning', 'coding', 'done'].includes(simState) && (
                      <div className="flex items-start space-x-2.5 animate-fade-in">
                        <span className={`text-[10px] px-2 py-0.5 rounded-sm font-semibold tracking-wider ${
                          simState === 'planning' 
                            ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          PLANNER
                        </span>
                        <span className="text-gray-400">
                          {simState === 'planning' ? 'Traversing LangGraph node routing...' : 'Graph flow generated software blueprints.'}
                        </span>
                      </div>
                    )}

                    {/* Step 3 */}
                    {['coding', 'done'].includes(simState) && (
                      <div className="flex items-start space-x-2.5 animate-fade-in">
                        <span className={`text-[10px] px-2 py-0.5 rounded-sm font-semibold tracking-wider ${
                          simState === 'coding' 
                            ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          COMPILER
                        </span>
                        <span className="text-gray-400">
                          {simState === 'coding' ? 'Drafting source code blocks...' : 'Code compiled without errors.'}
                        </span>
                      </div>
                    )}

                    {/* Final Code Output */}
                    {simState === 'done' && simOutput && (
                      <div className="pt-4 border-t border-white/5 space-y-3 animate-fade-in-up">
                        <div className="flex items-center space-x-1.5 text-emerald-400">
                          <CheckCircle2 size={14} />
                          <span className="font-semibold uppercase tracking-wider text-[10px]">Successfully Generated Plan & Code:</span>
                        </div>
                        <div className="bg-white/2 border border-white/5 p-3 rounded-lg overflow-x-auto text-[10px] max-h-[160px] leading-relaxed text-gray-300 whitespace-pre">
                          {simOutput.code}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
