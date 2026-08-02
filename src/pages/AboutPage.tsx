import { motion } from 'motion/react';
import { skillClusters } from '../data/skills';
import { SkillCluster } from '../components/SkillCluster';
import { AnimatedPage } from '../components/AnimatedPage';

export function AboutPage() {
  const bio = "Software engineer and data scientist with hands-on experience designing machine learning systems, real-time applications, and analytics products from idea to deployment. I build high-performance APIs, backend services, data workflows, and full-stack tools using Python, TypeScript, FastAPI, React, SQL, Docker, Kubernetes, and cloud platforms. My background includes NLP, retrieval-augmented generation, fraud detection, experimentation, forecasting, quantitative finance, and product analytics, with an emphasis on impact, speed, and reliability.";

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
              className="font-bold mb-5"
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
                color: 'var(--ink-secondary)',
                textAlign: 'center'
              }}
            >
              {bio}
            </p>
          </motion.div>

          {/* Skills Section */}
          <div className="max-w-5xl mx-auto">
            <h2
              className="font-medium mb-10 text-center"
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
              className="p-6 sm:p-8 rounded-lg"
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
                    New York University
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-body)',
                      lineHeight: 'var(--text-body-lh)',
                      color: 'var(--ink-secondary)'
                    }}
                  >
                    M.S. in Computer Science, September 2026 - December 2027
                  </p>
                </div>
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
