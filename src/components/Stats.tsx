import { Code, Award, Calendar, GraduationCap } from 'lucide-react';

export default function Stats() {
  const metrics = [
    {
      label: 'DSA Solved Problems',
      value: '2,300+',
      description: 'Solved across LeetCode, Skillrack, and GeeksforGeeks.',
      icon: <Code className="text-glow-cyan" size={24} />,
      borderColor: 'border-glow-cyan/20',
      glowColor: 'group-hover:shadow-glow-cyan/10',
      href: 'https://leetcode.com/u/murugasamy12/',
    },
    {
      label: 'LeetCode Global Rank',
      value: '189,353',
      description: 'Top tier placement. Earned multiple consistency awards.',
      icon: <Award className="text-glow-indigo" size={24} />,
      borderColor: 'border-glow-indigo/20',
      glowColor: 'group-hover:shadow-glow-indigo/10',
      href: 'https://leetcode.com/u/murugasamy12/',
    },
    {
      label: 'GFG Institutional Rank',
      value: '5th',
      description: 'Active coding competitor in national/institutional contests.',
      icon: <Award className="text-glow-violet" size={24} />,
      borderColor: 'border-glow-violet/20',
      glowColor: 'group-hover:shadow-glow-violet/10',
    },
    {
      label: 'Consistency Badge',
      value: '100+ Days',
      description: 'Consecutive days of problem solving and coding challenges.',
      icon: <Calendar className="text-glow-cyan" size={24} />,
      borderColor: 'border-glow-cyan/20',
      glowColor: 'group-hover:shadow-glow-cyan/10',
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Academic Card */}
        <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 hover:border-glow-cyan/25 transition-all duration-300">
          <div className="space-y-4 text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-glow-cyan text-xs font-semibold uppercase tracking-wider">
              <GraduationCap size={16} />
              <span>Education</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              St. Joseph's College of Engineering
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Pursuing a <span className="text-white font-medium">Bachelor of Engineering in Computer Science and Engineering</span> (2022 - 2026). 
              Gained deep knowledge in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, 
              Operating Systems, and Computer Networks.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center px-8 py-6 rounded-2xl bg-white/2 border border-white/5 min-w-[200px]">
            <span className="text-glow-cyan text-sm font-semibold uppercase tracking-wider">CGPA Score</span>
            <span className="text-5xl font-display font-extrabold text-white mt-1">8.24</span>
            <span className="text-gray-500 text-xs mt-1">Scale of 10.0</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Competitive Programming Dashboard
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-glow-cyan to-glow-indigo mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Demonstrated programming proficiency and analytical thinking through high-speed, scalable problem-solving.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((stat) => {
            const CardContent = (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-left space-y-2">
                  <span className="text-4xl font-display font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed pt-1">
                    {stat.description}
                  </p>
                  {stat.href && (
                    <span className="inline-flex items-center text-[11px] font-semibold text-glow-cyan hover:underline mt-2">
                      View Profile →
                    </span>
                  )}
                </div>
              </>
            );

            if (stat.href) {
              return (
                <a
                  key={stat.label}
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group glass-panel rounded-2xl p-6 border ${stat.borderColor} hover:border-glow-cyan/40 ${stat.glowColor} glass-panel-hover flex flex-col justify-between block`}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div
                key={stat.label}
                className={`group glass-panel rounded-2xl p-6 border ${stat.borderColor} hover:border-white/10 ${stat.glowColor} glass-panel-hover flex flex-col justify-between`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
