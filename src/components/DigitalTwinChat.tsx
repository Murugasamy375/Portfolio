import { useState } from 'react';
import { X, Send, Bot } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export default function DigitalTwinChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi! I'm Murugasamy's AI Assistant 🤖. Ask me anything about his GenAI projects, Deloitte internship, DSA stats, or live links!",
    },
  ]);

  const presetQuestions = [
    'Tell me about his GenAI projects',
    'Where is the live AI Interviewer app?',
    'What are his DSA & LeetCode stats?',
    'What was his role at Deloitte?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');

    // Generate dynamic response based on query
    setTimeout(() => {
      let reply = '';
      const lower = query.toLowerCase();

      if (lower.includes('live') || lower.includes('interviewer') || lower.includes('ats') || lower.includes('render')) {
        reply = "Murugasamy's live AI Interviewer & ATS platform is deployed on Render! You can test it live here: https://ai-interview-fiar.onrender.com/index. It features voice interviews (Whisper STT + Kokoro TTS), Groq LLM question generation, and ChromaDB vector ATS matching.";
      } else if (lower.includes('genai') || lower.includes('ai') || lower.includes('project') || lower.includes('langgraph')) {
        reply = 'Murugasamy built two major GenAI applications: 1) AI Interviewer & ATS Platform with Groq, RAG, and Voice synthesis. 2) Multi-Agent AI Code Generator using LangGraph, LangChain, ChromaDB, and FastAPI that auto-generates code from requirement documents!';
      } else if (lower.includes('deloitte') || lower.includes('hashedin') || lower.includes('intern') || lower.includes('experience')) {
        reply = 'He worked as a Software Developer Trainee Intern at HashedIn by Deloitte (Apr 2026 – June 2026), building Spring Boot microservices, FastAPI endpoints, rate limiting, Docker containerization, and Spark/Kafka data pipelines on Databricks across 4 milestones.';
      } else if (lower.includes('dsa') || lower.includes('leetcode') || lower.includes('rank') || lower.includes('stats') || lower.includes('problem')) {
        reply = 'He has solved 2300+ DSA problems across LeetCode, Skillrack, and GeeksforGeeks! You can view his LeetCode profile here: https://leetcode.com/u/murugasamy12/ (Global Rank 189,353, 500+ solved).';
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('cgpa')) {
        reply = "He is pursuing Bachelor of Engineering in Computer Science & Engineering at St. Joseph's College of Engineering, Chennai (CGPA 8.23, 2022-2026).";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('phone')) {
        reply = 'You can reach Murugasamy at smuruga692@gmail.com or call +91-7200488406. His LinkedIn is linkedin.com/in/murugasamy-p-b99a8233a and GitHub is github.com/Murugasamy375!';
      } else {
        reply = `Murugasamy P is a Software Development Engineer & GenAI Specialist. He specializes in Python, Java Spring Boot, FastAPI, LangGraph, RAG, Kafka, Spark, and Docker. Feel free to contact him at smuruga692@gmail.com!`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[var(--accent)] text-[var(--bg)] shadow-2xl hover:scale-110 transition-all border border-[var(--accent-border)]"
        aria-label="Ask AI Assistant"
        title="Ask Murugasamy AI"
      >
        {isOpen ? <X size={22} /> : <Bot size={24} />}
      </button>

      {/* Chat Drawer Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 max-h-[500px] bg-[var(--bg2)] border border-[var(--accent-border)] rounded-xl shadow-2xl flex flex-col overflow-hidden font-sans">
          {/* Header */}
          <div className="p-3.5 bg-[var(--bg)] border-b border-[var(--border)] flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
              <Bot size={18} />
              <span>Ask AI Murugasamy</span>
            </div>
            <span className="text-[0.62rem] text-[var(--text-muted)] border border-[var(--accent-border)] px-2 py-0.5 rounded-full">
              ONLINE
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 max-h-[320px] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 items-start ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'bot' && (
                  <div className="p-1 rounded bg-[var(--accent-dim)] text-[var(--accent)] flex-shrink-0 mt-0.5">
                    <Bot size={13} />
                  </div>
                )}
                <div
                  className={`p-2.5 rounded-lg leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[var(--accent)] text-[var(--bg)] font-medium font-mono text-[0.72rem]'
                      : 'bg-[var(--bg)] border border-[var(--border)] text-[var(--text-sub)]'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Preset Recommendation Chips */}
          <div className="px-3 py-2 border-t border-[var(--border)] bg-[var(--bg)] flex flex-wrap gap-1.5">
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="font-mono text-[0.6rem] px-2 py-1 rounded border border-[var(--border2)] text-[var(--text-sub)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all text-left"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2.5 bg-[var(--bg2)] border-t border-[var(--border)] flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 bg-[var(--bg)] border border-[var(--border2)] rounded px-3 py-1.5 text-xs text-[var(--text)] focus:outline-none focus:border-[var(--accent)] font-mono"
            />
            <button
              onClick={() => handleSend()}
              className="p-1.5 rounded bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition-opacity"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
