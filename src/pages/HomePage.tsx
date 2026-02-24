import { useRef } from 'react';
import { ArrowRight, Download, Code2, Briefcase } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { AnimatedPage } from '../components/AnimatedPage';
import profilePic from 'figma:asset/0cf11c76192416317c97ea111baa7976101b16f9.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const bio = "Software engineer and data scientist building production-grade ML systems, real-time platforms, and quantitative tools. I specialize in end-to-end development—from infrastructure optimization and API design to data pipelines and user-facing products. My work spans scalable backends (Node.js, Python, FastAPI), AI/ML systems (NLP, RAG, fraud detection), quantitative finance (algorithmic trading, options pricing), and product analytics. I focus on measurable impact: reduced latency, higher precision, better reliability.";

  return (
    <AnimatedPage>
      <div className="min-h-screen overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'var(--gradient-1)',
            borderRadius: '50%'
          }} />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute top-60 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: 'var(--gradient-2)',
            borderRadius: '50%'
          }} />
        </motion.div>

        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 relative">
          <motion.div style={{ opacity }} className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                {/* Profile Picture */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mb-8 md:mb-0 flex-shrink-0 mx-auto md:mx-0"
                >
                  <div
                    className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden"
                    style={{
                      boxShadow: 'var(--shadow-lg)'
                    }}
                  >
                    <img
                      src={profilePic}
                      alt="Srijan Gupta"
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: 'top center'
                      }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'var(--gradient-accent)',
                        opacity: 0
                      }}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  {/* Name with gradient effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                  >
                    <h1
                      className="font-bold mb-2 bg-clip-text text-transparent text-center md:text-left"
                      style={{
                        fontSize: 'clamp(48px, 8vw, 88px)',
                        lineHeight: '1.1',
                        backgroundImage: 'var(--gradient-accent)',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      Srijan Gupta
                    </h1>
                    <motion.div 
                      className="h-1.5 rounded-full mt-4 mx-auto md:mx-0"
                      style={{ 
                        background: 'var(--gradient-accent)',
                        width: '0%',
                      }}
                      animate={{ width: '240px' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-8 text-center md:text-left"
                  >
                    <h2
                      style={{
                        fontSize: 'var(--text-h2)',
                        lineHeight: 'var(--text-h2-lh)',
                        color: 'var(--ink-primary)',
                        fontWeight: '500'
                      }}
                    >
                      CS/DS/Econ @ UW–Madison
                    </h2>
                  </motion.div>

                  {/* Bio */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16 text-center md:text-left"
                  >
                    <p
                      className="leading-relaxed max-w-3xl"
                      style={{
                        fontSize: 'var(--text-body)',
                        lineHeight: '1.8',
                        color: 'var(--ink-secondary)'
                      }}
                    >
                      {bio}
                    </p>
                  </motion.div>

                  {/* CTAs with unique styling */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start"
                  >
                    <motion.button
                      onClick={() => onNavigate('projects')}
                      className="group relative px-8 py-4 rounded-xl overflow-hidden"
                      style={{
                        background: 'var(--gradient-accent)',
                        color: 'white',
                        fontWeight: '500'
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => onNavigate('resume')}
                      className="group px-8 py-4 rounded-xl relative overflow-hidden"
                      style={{
                        backgroundColor: 'var(--surface-elevated)',
                        color: 'var(--ink-primary)',
                        border: '2px solid var(--muted)',
                        fontWeight: '500'
                      }}
                      whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Download size={20} />
                        Download Resume
                      </span>
                    </motion.button>

                    <motion.button
                      onClick={() => onNavigate('contact')}
                      className="group px-8 py-4 rounded-xl"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--accent)',
                        border: '2px solid var(--accent)',
                        fontWeight: '500'
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-glow)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Connect
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Feature Cards Section - Asymmetric Grid */}
        <section className="py-32 relative">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Large featured card */}
                <FeatureCard
                  icon={<Code2 size={32} />}
                  title="Projects"
                  onClick={() => onNavigate('projects')}
                  featured
                  delay={0}
                />
                
                {/* Smaller cards */}
                <div className="grid gap-6">
                  <FeatureCard
                    icon={<Briefcase size={24} />}
                    title="Experience"
                    onClick={() => onNavigate('experience')}
                    delay={0.1}
                  />
                  <FeatureCard
                    icon={<ArrowRight size={24} />}
                    title="Connect"
                    onClick={() => onNavigate('contact')}
                    delay={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  featured?: boolean;
  delay?: number;
}

function FeatureCard({ icon, title, onClick, featured, delay = 0 }: FeatureCardProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className="group relative text-left p-8 rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--muted)',
        minHeight: featured ? '400px' : '180px'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, borderColor: 'var(--accent)' }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'var(--gradient-accent)',
          opacity: 0.03
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          className="inline-flex p-4 rounded-xl mb-6"
          style={{
            backgroundColor: 'var(--accent-glow)',
            color: 'var(--accent)'
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>

        <h3
          className="font-semibold"
          style={{
            fontSize: featured ? 'var(--text-h1)' : 'var(--text-h2)',
            lineHeight: featured ? 'var(--text-h1-lh)' : 'var(--text-h2-lh)',
            color: 'var(--ink-primary)'
          }}
        >
          {title}
        </h3>
      </div>

      {/* Decorative corner element */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'var(--gradient-accent)',
          opacity: 0.1
        }}
      />
    </motion.button>
  );
}