import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import { Badge } from './ui/badge';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg animate-in fade-in zoom-in duration-200"
        style={{
          backgroundColor: 'white',
          boxShadow: 'var(--shadow-lg)',
          borderRadius: 'var(--r-lg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 flex items-start justify-between p-6 border-b"
          style={{
            borderColor: 'var(--muted)',
            backgroundColor: 'white',
            borderTopLeftRadius: 'var(--r-lg)',
            borderTopRightRadius: 'var(--r-lg)'
          }}
        >
          <div className="flex-1">
            <h2
              className="font-medium mb-2"
              style={{
                fontSize: 'var(--text-h2)',
                lineHeight: 'var(--text-h2-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--text-body-lh)',
                color: 'var(--ink-secondary)'
              }}
            >
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'white',
                  borderRadius: 'var(--r-sm)'
                }}
              >
                {project.category}
              </Badge>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-4 p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
            aria-label="Close modal"
          >
            <X size={24} style={{ color: 'var(--ink-secondary)' }} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Problem */}
          <section>
            <h3
              className="font-medium mb-2"
              style={{
                fontSize: 'var(--text-h3)',
                lineHeight: 'var(--text-h3-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              Problem
            </h3>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--text-body-lh)',
                color: 'var(--ink-secondary)'
              }}
            >
              {project.problem}
            </p>
          </section>

          {/* Approach */}
          <section>
            <h3
              className="font-medium mb-2"
              style={{
                fontSize: 'var(--text-h3)',
                lineHeight: 'var(--text-h3-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              Approach
            </h3>
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--text-body-lh)',
                color: 'var(--ink-secondary)'
              }}
            >
              {project.approach}
            </p>
          </section>

          {/* Outcome */}
          <section>
            <h3
              className="font-medium mb-2"
              style={{
                fontSize: 'var(--text-h3)',
                lineHeight: 'var(--text-h3-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              Outcome
            </h3>
            <p
              className="mb-3"
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--text-body-lh)',
                color: 'var(--ink-secondary)'
              }}
            >
              {project.outcome}
            </p>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  style={{
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--text-body-lh)',
                    color: 'var(--ink-secondary)'
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section>
            <h3
              className="font-medium mb-3"
              style={{
                fontSize: 'var(--text-h3)',
                lineHeight: 'var(--text-h3-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded"
                  style={{
                    fontSize: 'var(--text-small)',
                    lineHeight: 'var(--text-small-lh)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--ink-primary)',
                    borderRadius: 'var(--r-sm)',
                    border: '1px solid var(--muted)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          {(project.links.tableau || project.links.report) && (
            <section>
              <h3
                className="font-medium mb-3"
                style={{
                  fontSize: 'var(--text-h3)',
                  lineHeight: 'var(--text-h3-lh)',
                  color: 'var(--ink-primary)'
                }}
              >
                Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.links.tableau && (
                <a
                  href={project.links.tableau !== '(placeholder)' ? project.links.tableau : '#'}
                  target={project.links.tableau !== '(placeholder)' ? '_blank' : undefined}
                  rel={project.links.tableau !== '(placeholder)' ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-[var(--accent)]/90"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    borderRadius: 'var(--r-md)'
                  }}
                >
                  <ExternalLink size={18} />
                  <span>Tableau Dashboard</span>
                </a>
              )}
              {project.links.report && (
                <a
                  href={project.links.report !== '(placeholder)' ? project.links.report : '#'}
                  target={project.links.report !== '(placeholder)' ? '_blank' : undefined}
                  rel={project.links.report !== '(placeholder)' ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-[var(--accent)]/90"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                    borderRadius: 'var(--r-md)'
                  }}
                >
                  <ExternalLink size={18} />
                  <span>View Report</span>
                </a>
              )}
            </div>
          </section>
          )}
        </div>
      </div>
    </div>
  );
}