import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { Project } from '../data/projects';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative w-full text-left p-6 rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--muted)'
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'var(--gradient-accent)',
          opacity: 0.03
        }}
      />

      {/* Decorative corner */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100"
        style={{
          background: 'var(--gradient-accent)',
          opacity: 0.1
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3
              className="font-semibold mb-1 group-hover:text-[var(--accent)] transition-colors"
              style={{
                fontSize: 'var(--text-h3)',
                lineHeight: 'var(--text-h3-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--text-small-lh)',
                color: 'var(--ink-secondary)'
              }}
            >
              {project.subtitle}
            </p>
          </div>
          <motion.div
            className="flex-shrink-0 mt-1"
            style={{ color: 'var(--accent)' }}
            whileHover={{ x: 4 }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            variant="secondary"
            style={{
              background: 'var(--gradient-accent)',
              color: 'white',
              borderRadius: 'var(--r-sm)',
              border: 'none'
            }}
          >
            {project.category}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full"
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--text-small-lh)',
                backgroundColor: 'var(--surface)',
                color: 'var(--ink-secondary)',
                border: '1px solid var(--muted)'
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'var(--accent-glow)',
                color: 'var(--accent)'
              }}
            >
              {tech}
            </motion.span>
          ))}
          {project.stack.length > 4 && (
            <span
              className="px-3 py-1 rounded-full"
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--text-small-lh)',
                backgroundColor: 'var(--surface)',
                color: 'var(--ink-secondary)',
                border: '1px solid var(--muted)'
              }}
            >
              +{project.stack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}
