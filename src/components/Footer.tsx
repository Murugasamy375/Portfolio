export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--bg)] border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>Designed & Built by </span>
          <strong className="text-[var(--accent)]">Murugasamy P</strong>
          <span> © {currentYear}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/Murugasamy375"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/murugasamy12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] font-semibold hover:underline transition-colors"
          >
            LeetCode
          </a>
          <a
            href="https://linkedin.com/in/murugasamy-p-b99a8233a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="hover:text-[var(--accent)] transition-colors text-[var(--accent)]"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
