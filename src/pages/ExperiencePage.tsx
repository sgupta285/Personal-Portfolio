import { experiences } from '../data/experience';
import { motion } from 'motion/react';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { AnimatedPage } from '../components/AnimatedPage';

export function ExperiencePage() {
  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16 text-center"
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
            Experience
          </h1>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ExperienceTimeline experiences={experiences} />
        </motion.div>
      </div>
    </div>
    </AnimatedPage>
  );
}