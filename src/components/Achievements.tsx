import { Award, GraduationCap, CheckCircle2, Flame, Trophy, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: '2300+ DSA Problems Solved',
      platform: 'LeetCode, Skillrack, GeeksforGeeks',
      desc: 'Extensive problem solving in Data Structures and Algorithms covering Dynamic Programming, Graphs, Trees, Arrays, and Advanced Algorithms.',
      link: 'https://leetcode.com/u/murugasamy12/',
      icon: <Trophy className="text-[var(--accent)]" size={20} />,
    },
    {
      title: 'LeetCode Global Rank 189,353',
      platform: 'LeetCode Profile',
      desc: '500+ Problems Solved. Earned 100 Days of Consistency badge with active participation in weekly DSA challenges.',
      link: 'https://leetcode.com/u/murugasamy12/',
      icon: <Flame className="text-[var(--accent)]" size={20} />,
    },
    {
      title: 'Rank 5th Institutionally',
      platform: 'GeeksforGeeks',
      desc: 'Secured 5th position among institutional peers in competitive coding challenges.',
      link: null,
      icon: <Award className="text-[var(--accent)]" size={20} />,
    },
  ];

  const education = [
    {
      institution: 'St. Joseph’s College of Engineering',
      degree: 'Bachelor of Engineering – Computer Science and Engineering',
      cgpa: 'CGPA: 8.23 / 10',
      location: 'Chennai, Tamil Nadu',
      period: 'Nov 2022 – May 2026',
    },
  ];

  const certifications = [
    { name: 'Java Full Stack Development', provider: 'Wipro Talent Next' },
    { name: 'Python for Data Science', provider: 'NPTEL – Elite (Score: 72%)' },
    { name: 'Software Conceptual Design', provider: 'NPTEL (Score: 65%)' },
    { name: 'Data Structures and Algorithms Using Java', provider: 'Infosys Springboard' },
  ];

  return (
    <section id="achievements" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="section-label">
          <span>05 // ACHIEVEMENTS & EDUCATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Achievements & Certifications */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider font-semibold">
              Competitive Programming & Honors
            </h3>

            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-[var(--border)] bg-[var(--bg2)]/70 hover:border-[var(--accent-border)] transition-colors flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded border border-[var(--accent-border)] bg-[var(--accent-dim)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[0.62rem] text-[var(--accent)] px-2 py-0.5 rounded border border-[var(--accent-border)]">
                          {item.platform}
                        </span>
                      </div>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1 flex-shrink-0"
                          title="View LeetCode Profile"
                        >
                          <span>Profile</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="pt-4 space-y-4">
              <h3 className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider font-semibold">
                Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-start gap-3 hover:border-[var(--accent-border)] transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-sans text-xs font-semibold text-[var(--text)]">
                        {cert.name}
                      </h5>
                      <span className="font-mono text-[0.62rem] text-[var(--text-muted)] block">
                        {cert.provider}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider font-semibold">
              Education
            </h3>

            {education.map((edu, eIdx) => (
              <div
                key={eIdx}
                className="p-6 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-dim)] space-y-4"
              >
                <div className="flex items-center gap-2 text-[var(--accent)] font-mono text-xs font-semibold">
                  <GraduationCap size={18} />
                  <span>{edu.period}</span>
                </div>

                <div className="space-y-1 font-sans">
                  <h4 className="font-display font-bold text-xl text-[var(--text)]">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-[var(--text-sub)]">
                    {edu.degree}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] font-mono text-xs">
                  <span className="text-[var(--accent)] font-bold">{edu.cgpa}</span>
                  <span className="text-[var(--text-muted)]">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
