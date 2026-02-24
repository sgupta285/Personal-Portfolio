import { motion } from 'motion/react';
import { skillClusters } from '../data/skills';
import { SkillCluster } from '../components/SkillCluster';
import { AnimatedPage } from '../components/AnimatedPage';

export function AboutPage() {
  const bio = "Software engineer and data scientist building production-grade ML systems, real-time platforms, and quantitative tools. I specialize in end-to-end development—from infrastructure optimization and API design to data pipelines and user-facing products. My work spans scalable backends (Node.js, Python, FastAPI), AI/ML systems (NLP, RAG, fraud detection), quantitative finance (algorithmic trading, options pricing), and product analytics. I focus on measurable impact: reduced latency, higher precision, better reliability.";

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1
            className="font-medium mb-4"
            style={{
              fontSize: 'var(--text-display)',
              lineHeight: 'var(--text-display-lh)',
              color: 'var(--ink-primary)'
            }}
          >
            About
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: 'var(--text-body)',
              lineHeight: 'var(--text-body-lh)',
              color: 'var(--ink-secondary)'
            }}
          >
            {bio}
          </p>
        </div>

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-medium mb-8 text-center"
            style={{
              fontSize: 'var(--text-h1)',
              lineHeight: 'var(--text-h1-lh)',
              color: 'var(--ink-primary)'
            }}
          >
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillClusters.map((cluster) => (
              <SkillCluster
                key={cluster.category}
                category={cluster.category}
                skills={cluster.skills}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-20">
          <div
            className="p-8 rounded-lg"
            style={{
              backgroundColor: 'white',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--r-lg)'
            }}
          >
            <h3
              className="font-medium mb-4"
              style={{
                fontSize: 'var(--text-h2)',
                lineHeight: 'var(--text-h2-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <p
                  className="font-medium"
                  style={{
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--text-body-lh)',
                    color: 'var(--ink-primary)'
                  }}
                >
                  University of Wisconsin–Madison
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--text-body-lh)',
                    color: 'var(--ink-secondary)'
                  }}
                >
                  B.S. in Computer Science, Data Science & Economics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}