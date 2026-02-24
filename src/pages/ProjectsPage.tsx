import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { projects, type Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { AnimatedPage } from '../components/AnimatedPage';

type FilterType = 'All' | 'Full-Stack & Real-Time' | 'Mobile' | 'ML & AI Systems' | 'Quantitative Finance' | 'Product Analytics' | 'Data Science' | 'Econometrics';

export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: FilterType[] = ['All', 'Full-Stack & Real-Time', 'Mobile', 'ML & AI Systems', 'Quantitative Finance', 'Product Analytics', 'Data Science', 'Econometrics'];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects;
    return projects.filter(p => p.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container">
          {/* Header */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-bold"
              style={{
                fontSize: 'var(--text-display)',
                lineHeight: 'var(--text-display-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              Projects
            </h1>
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 rounded-full transition-all"
                style={{
                  backgroundColor: selectedFilter === filter ? 'transparent' : 'white',
                  color: selectedFilter === filter ? 'white' : 'var(--ink-primary)',
                  boxShadow: selectedFilter === filter ? 'none' : 'var(--shadow-sm)',
                  border: '1px solid var(--muted)',
                  fontWeight: selectedFilter === filter ? '500' : '400'
                }}
              >
                {selectedFilter === filter && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'var(--gradient-accent)', zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--text-body-lh)',
                color: 'var(--ink-secondary)'
              }}
            >
              No projects found in this category
            </p>
          </div>
        )}
      </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </AnimatedPage>
  );
}