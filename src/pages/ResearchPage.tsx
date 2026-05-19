import { BookOpen, CheckCircle2, FlaskConical, Github, LineChart } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedPage } from '../components/AnimatedPage';
import { researchPapers, researchSummary, type ResearchPaper } from '../data/research';

const conciseResearchCopy: Record<string, { summary: string; highlights: string[] }> = {
  'rag-pareto-frontiers': {
    summary:
      'A reproducible RAG benchmarking harness that compares retrieval quality, warm latency, cold-start latency, and per-query cost across BM25, dense, and hybrid retrieval.',
    highlights: [
      'Identifies a ranking reversal: dense retrieval wins on quality and warm latency, while BM25 is 85-108x cheaper on cold start.',
      'Evaluates 36 configurations across HotpotQA and LegalBench-RAG with Pareto frontier reporting.',
      'Separates model load, index build, cold query, and warm query timing for deployment-aware evaluation.'
    ]
  },
  'backtest-engineering': {
    summary:
      'An open-source event-driven backtesting engine that measures how execution realism changes reported strategy performance across transaction-cost tiers.',
    highlights: [
      'Finds 21x Sharpe inflation for TSMOM-60 between naive fills and impact-constrained execution.',
      'Implements a six-tier realism ladder covering commissions, spread, slippage, market impact, and delayed execution.',
      'Uses formal invariant tests and moving-block bootstrap confidence intervals for credible evaluation.'
    ]
  }
};

export function ResearchPage() {
  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container">
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
              Research
            </h1>
            <div
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--muted)',
                color: 'var(--accent)',
                boxShadow: 'var(--shadow-sm)',
                fontSize: 'var(--text-small)'
              }}
            >
              <BookOpen size={16} />
              <span>{researchSummary.status}</span>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-x-10 gap-y-14 lg:gap-x-12 lg:gap-y-16 max-w-6xl mx-auto"
            style={{ alignItems: 'stretch' }}
            layout
          >
            {researchPapers.map((paper, index) => (
              <ResearchCard key={paper.id} paper={paper} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
}

function ResearchCard({ paper, index }: { paper: ResearchPaper; index: number }) {
  const Icon = paper.field === 'Quantitative Finance' ? LineChart : FlaskConical;
  const conciseCopy = conciseResearchCopy[paper.id];

  return (
    <motion.article
      className="group relative flex h-full flex-col p-6 sm:p-7 lg:p-8 rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--muted)',
        boxShadow: 'var(--shadow-sm)',
        minHeight: '520px'
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.24) }}
      whileHover={{ y: -4, borderColor: 'var(--accent)' }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'var(--gradient-accent)',
          opacity: 0.03
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-wrap gap-2 mb-5">
          <Pill icon={<Icon size={16} />} label={paper.field} />
          <Pill icon={<CheckCircle2 size={16} />} label={paper.status} />
        </div>

        <h2
          className="font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors"
          style={{
            fontSize: 'var(--text-h2)',
            lineHeight: 'var(--text-h2-lh)',
            color: 'var(--ink-primary)'
          }}
        >
          {paper.title}
        </h2>

        <p
          className="mb-6"
          style={{
            fontSize: 'var(--text-body)',
            lineHeight: 'var(--text-body-lh)',
            color: 'var(--ink-secondary)'
          }}
        >
          {conciseCopy.summary}
        </p>

        <div className="mb-6">
          <h3
            className="font-medium mb-3"
            style={{
              fontSize: 'var(--text-body)',
              lineHeight: 'var(--text-body-lh)',
              color: 'var(--ink-primary)'
            }}
          >
            Highlights
          </h3>
          <ul className="space-y-3">
            {conciseCopy.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3"
                style={{
                  fontSize: 'var(--text-small)',
                  lineHeight: 'var(--text-small-lh)',
                  color: 'var(--ink-secondary)'
                }}
              >
                <span className="mt-1.5 flex-shrink-0" style={{ color: 'var(--accent)' }}>•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            {paper.keywords.slice(0, 5).map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 rounded-full"
                style={{
                  fontSize: 'var(--text-small)',
                  lineHeight: 'var(--text-small-lh)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--ink-secondary)',
                  border: '1px solid var(--muted)'
                }}
              >
                {keyword}
              </span>
            ))}
          </div>

          <div
            className="flex flex-wrap items-center gap-3"
            style={{
              fontSize: 'var(--text-small)',
              lineHeight: 'var(--text-small-lh)'
            }}
          >
            {paper.github && (
              <a
                href={paper.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-[var(--accent)]/90"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'white',
                  borderRadius: 'var(--r-md)',
                  fontWeight: 500
                }}
              >
                <Github size={17} />
                <span>GitHub Repo</span>
              </a>
            )}
            <span
              style={{
                color: 'var(--accent)',
                fontWeight: 500
              }}
            >
              Paper under review
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--muted)',
        color: 'var(--ink-secondary)',
        fontSize: 'var(--text-small)'
      }}
    >
      <span style={{ color: 'var(--accent)' }}>{icon}</span>
      {label}
    </span>
  );
}
