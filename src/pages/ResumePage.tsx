import { Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedPage } from '../components/AnimatedPage';

export function ResumePage() {
  const handleDownload = () => {
    // Open Google Drive link in new tab
    window.open('https://drive.google.com/file/d/115kCtAogHBBvzMCeM9AJweOjp7ctP1nx/view', '_blank');
  };
  
  const resume = {
    id: 'cs',
    title: 'My Resume',
    description: 'Download my complete resume showcasing software engineering, data science, and economics background',
    gradient: 'var(--gradient-accent)'
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div 
              className="mb-12 text-center"
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
                Resume
              </h1>
            </motion.div>

            {/* Resume Card */}
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="relative p-8 rounded-2xl overflow-hidden group"
                style={{
                  backgroundColor: 'var(--surface-elevated)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--muted)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: resume.gradient,
                    opacity: 0.05
                  }}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-xl"
                    style={{
                      background: resume.gradient
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FileText size={40} style={{ color: 'white' }} />
                  </motion.div>

                  <h2
                    className="font-semibold mb-8"
                    style={{
                      fontSize: 'var(--text-h2)',
                      lineHeight: 'var(--text-h2-lh)',
                      color: 'var(--ink-primary)'
                    }}
                  >
                    {resume.title}
                  </h2>

                  <motion.button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl cursor-pointer"
                    style={{
                      background: resume.gradient,
                      color: 'white',
                      fontWeight: '500',
                      border: 'none'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={24} />
                    <span>View Resume</span>
                  </motion.button>
                </div>

                {/* Decorative corner */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: resume.gradient,
                    opacity: 0.1
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
