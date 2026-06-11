import { Award, GraduationCap, Calendar, ShieldCheck, Trophy } from 'lucide-react';

interface Certification {
  title: string;
  provider: string;
  score?: string;
  icon: React.ReactNode;
}

interface Achievement {
  title: string;
  metric: string;
  detail: string;
  icon: React.ReactNode;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: 'Competitive Programming',
      metric: '2,300+ Solved Problems',
      detail: 'Solved data structures and algorithms challenges across LeetCode, Skillrack, and GeeksforGeeks.',
      icon: <Trophy className="text-glow-cyan" size={20} />
    },
    {
      title: 'LeetCode consistency',
      metric: '100 Days Streak',
      detail: 'Earned active global consistency badge with a LeetCode Global Rank of 189,353.',
      icon: <Calendar className="text-glow-indigo" size={20} />
    },
    {
      title: 'GeeksforGeeks Contest',
      metric: '5th Institutional Rank',
      detail: 'Secured top positions in regional and institutional ranking dashboards.',
      icon: <Award className="text-glow-violet" size={20} />
    }
  ];

  const certifications: Certification[] = [
    {
      title: 'Java Full Stack Certification',
      provider: 'Wipro Talent Next',
      icon: <ShieldCheck className="text-glow-cyan" size={18} />
    },
    {
      title: 'Programming Using C',
      provider: 'NPTEL Certification',
      score: 'Score: 76%',
      icon: <GraduationCap className="text-glow-indigo" size={18} />
    },
    {
      title: 'Software Conceptual Design',
      provider: 'NPTEL Certification',
      score: 'Score: 65%',
      icon: <GraduationCap className="text-glow-violet" size={18} />
    },
    {
      title: 'Data Structures and Algorithms Using Java',
      provider: 'Infosys Springboard',
      icon: <ShieldCheck className="text-glow-cyan" size={18} />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-dark-bg/40 relative">
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-glow-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-glow-cyan to-glow-indigo mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Highlights of my competitive coding milestones and certified learning paths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Achievements Col */}
          <div className="space-y-6 text-left">
            <h3 className="font-display font-bold text-2xl text-white flex items-center space-x-2">
              <Trophy className="text-glow-cyan" size={24} />
              <span>Coding Milestones</span>
            </h3>
            
            <div className="space-y-4">
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  className="glass-panel rounded-2xl p-5 border border-white/5 flex items-start space-x-4 hover:border-glow-cyan/30 glass-panel-hover"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 mt-0.5">
                    {ach.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-medium text-glow-cyan uppercase tracking-wider">
                      {ach.title}
                    </span>
                    <h4 className="text-lg font-bold text-white leading-snug">
                      {ach.metric}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {ach.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Col */}
          <div className="space-y-6 text-left">
            <h3 className="font-display font-bold text-2xl text-white flex items-center space-x-2">
              <GraduationCap className="text-glow-indigo" size={24} />
              <span>Professional Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-panel rounded-2xl p-5 border border-white/5 flex flex-col justify-between hover:border-glow-indigo/30 glass-panel-hover min-h-[140px]"
                >
                  <div className="space-y-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 w-fit">
                      {cert.icon}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-4 text-[10px] sm:text-xs font-mono font-medium text-gray-400">
                    <span>{cert.provider}</span>
                    {cert.score && (
                      <span className="text-glow-indigo bg-glow-indigo/5 px-2 py-0.5 rounded-sm border border-glow-indigo/10">
                        {cert.score}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
