import { Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 mt-24 border-t"
      style={{
        borderColor: 'var(--muted)',
        backgroundColor: 'var(--surface)'
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div style={{ color: 'var(--ink-secondary)' }}>
            <p>© {currentYear} Srijan Gupta. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--ink-secondary)' }}
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
              style={{ color: 'var(--ink-secondary)' }}
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}