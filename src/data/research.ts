export interface ReviewScore {
  label: string;
  score: string;
  note: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  field: string;
  primaryVenue: string;
  alternateVenues: string[];
  status: string;
  dateSubmitted: string;
  github?: string;
  author: string;
  abstract: string;
  problem: string;
  contributions: {
    title: string;
    body: string;
  }[];
  methodology: string[];
  timingModel?: {
    label: string;
    body: string;
  }[];
  tools: string[];
  findings: {
    title: string;
    body: string;
  }[];
  scores: ReviewScore[];
  keywords: string[];
  jelCodes?: string[];
}

export const researchSummary = {
  title: 'Research Portfolio',
  author: 'Srijan Gupta',
  affiliation: 'Independent Researcher · University of Wisconsin-Madison',
  status: '2 Papers Under Review',
  focus: 'Computational Linguistics & Quantitative Finance'
};

export const researchPapers: ResearchPaper[] = [
  {
    id: 'rag-pareto-frontiers',
    title: 'Latency-Cost-Quality Pareto Frontiers for Retrieval-Augmented Generation',
    field: 'Computational Linguistics',
    primaryVenue: 'TACL - Transactions of the Association for Computational Linguistics (Submission #10761)',
    alternateVenues: ['EMNLP', 'SIGIR'],
    status: 'Under Editorial Review',
    dateSubmitted: 'March 2026',
    github: 'https://github.com/sgupta285/Research-Projects/tree/main/rag-pareto-frontiers',
    author: 'Srijan Gupta, Independent Researcher, United States',
    abstract:
      'This paper introduces an evaluation harness that maps the RAG retrieval design space as Pareto frontiers over Recall@K, latency, and per-query cost, with explicit cold-start versus warm-start latency decomposition. The core empirical finding is a ranking reversal: dense retrieval dominates BM25 on quality and warm-start latency, but BM25 exhibits 75-100x lower cold-start cost. The harness evaluates 36 configurations across HotpotQA and LegalBench-RAG and is released as a reproducible open-source Python module with versioned YAML configurations.',
    problem:
      'Existing RAG benchmarks report retrieval quality in isolation while ignoring latency and cost constraints that determine deployment viability. Reported latency often conflates cold-start overhead with steady-state per-query time, which is especially misleading for serverless and low-traffic deployments. Grid-search benchmark harnesses can also reuse in-process model caches across hundreds of configurations, measuring warm latency while attributing results to cold-start conditions. This paper addresses both gaps.',
    contributions: [
      {
        title: 'Decomposed Timing Model',
        body:
          'Separated retrieval latency into model load time, index build time, cold-start retrieval time, and warm-start mean retrieval time. A SHA256-keyed artifact cache records artifact costs independently of execution order so timing measurements remain reproducible and uncontaminated by evaluation sequence.'
      },
      {
        title: 'Pareto Frontier Reporting',
        body:
          'Reports each configuration as a tuple of Recall@K, warm-start latency, and mean per-query cost, then identifies Pareto-dominant configurations across constraint profiles instead of selecting a single universal retriever.'
      },
      {
        title: 'Multi-Domain Evaluation',
        body:
          'Evaluates HotpotQA and LegalBench-RAG, two domains with different corpus statistics and precision requirements. This reveals domain-dependent reversals that single-benchmark studies would miss.'
      },
      {
        title: 'Reproducible Harness & Checklist',
        body:
          'Packages all configurations as versioned YAML files and ships an installable Python module with Makefile automation, hardware specifications, library versions, and timing methodology documentation.'
      }
    ],
    methodology: [
      'Fully factorial design across retriever type (BM25, dense using all-MiniLM-L6-v2, and hybrid), chunk size, overlap parameters, and top-k values, yielding 36 configurations.',
      'Canonical cold-start caching protocol with SHA256-keyed artifact cache and fresh-process evaluation to prevent warm-cache contamination.',
      'Wilson confidence intervals for recall estimates and block bootstrap for latency distributions.',
      'Corpus-scale analysis using synthetic duplication from 1K to 50K passages to characterize cold-start growth curves.',
      'LLM generation pilot stage with n=5 for preliminary end-to-end RAG system cost estimation.',
      'Cross-domain validation across HotpotQA and LegalBench-RAG to test whether findings generalize across corpus types.'
    ],
    timingModel: [
      { label: 'T_model', body: 'Time to load the embedding model into memory. Zero for BM25 and significant for dense retrievers.' },
      { label: 'T_index', body: 'Time to construct the retrieval index, including FAISS for dense retrieval and inverted index construction for BM25.' },
      { label: 'T_cold', body: 'First-query latency including initialization overhead.' },
      { label: 'T_warm', body: 'Steady-state per-query latency with cached model and index after initialization.' }
    ],
    tools: ['Python', 'FAISS', 'BM25/Pyserini', 'sentence-transformers', 'all-MiniLM-L6-v2', 'HotpotQA', 'LegalBench-RAG', 'YAML configs', 'Makefile automation'],
    findings: [
      {
        title: 'Ranking Reversal',
        body:
          'Dense retrieval dominates BM25 on Recall@12 and warm-start latency (8.9ms vs 10.7ms), but BM25 has 85-108x lower cold-start cost (133ms vs 11.5-14.3s). The best retriever changes depending on whether warm-start or cold-start performance is measured.'
      },
      {
        title: 'BM25 Pareto Dominance',
        body:
          'BM25 sits on or near the Pareto frontier for latency-constrained deployments with recall requirements below 0.84, challenging the assumption that it is only a baseline to surpass.'
      },
      {
        title: 'Hybrid Retrieval Sweet Spot',
        body:
          'Hybrid retrieval occupies the upper-right region of the quality-latency frontier and becomes the recommended default when warm query constraints are relaxed beyond 19ms.'
      },
      {
        title: 'Cold-Start Scaling',
        body:
          'Dense retrieval cold-start grows linearly with corpus size, reaching 96 seconds at 50K passages, with direct implications for serverless RAG deployments.'
      },
      {
        title: 'Domain-Dependent Reversal',
        body:
          'On LegalBench-RAG, dense retrieval reaches 0.791 Recall@12 versus BM25 at 0.282, a much wider gap than on HotpotQA and evidence that retriever selection must be domain-aware.'
      },
      {
        title: 'Cost Decomposition',
        body:
          'Roughly 90-92% of dense retrieval per-query cost comes from corpus encoding, while generation latency exceeds retrieval latency by about two orders of magnitude.'
      }
    ],
    scores: [
      { label: 'Overall', score: '7.0/10', note: 'Strong contribution with reproducible harness and actionable Pareto framework; fixable weaknesses in statistical power interpretation and corpus-scale methodology.' },
      { label: 'Novelty', score: '8.5/10', note: 'Cold/warm separation is genuinely novel for RAG benchmarking, and the Pareto framework is a meaningful methodological contribution.' },
      { label: 'Technical Correctness', score: '6.5/10', note: 'Core timing model, Wilson intervals, and Pareto analysis are sound, with deductions for statistical power mismatch and synthetic corpus scaling.' },
      { label: 'Experimental Rigor', score: '7.0/10', note: 'Fully factorial design, canonical caching, reproducible harness, confidence intervals, and corpus-scale analysis are present; missing overlap ablation and RRF baseline.' },
      { label: 'Clarity & Writing', score: '7.5/10', note: 'Clear structure, precise metric definitions, and transparent limitations.' },
      { label: 'Reproducibility', score: '9.0/10', note: 'Versioned YAML configs, GitHub repo, hardware specs, library versions, and timing methodology are documented.' },
      { label: 'Venue Fit', score: '7.0/10', note: 'Strong fit for SIGIR, EMNLP, or ACL findings track.' }
    ],
    keywords: ['Retrieval-Augmented Generation', 'Cold-Start Latency', 'Dense Retrieval', 'BM25', 'Hybrid Retrieval', 'Reproducibility', 'Benchmarking']
  },
  {
    id: 'backtest-engineering',
    title: 'Backtest Engineering: A Modular Execution-Realism Framework for Credible Strategy Evaluation',
    field: 'Quantitative Finance',
    primaryVenue: 'Risk Journals (MS 5152)',
    alternateVenues: ['Review of Financial Studies (RFS)', 'Journal of Financial Economics (JFE)', 'Journal of Finance (JF)'],
    status: 'Under Editorial Review',
    dateSubmitted: 'March 2026',
    github: 'https://github.com/sgupta285/Research-Projects/tree/main/backtest-engine-paper',
    author: 'Srijan Gupta, Independent Researcher, United States',
    jelCodes: ['G12', 'G14', 'G23', 'C63'],
    abstract:
      'This paper presents a modular, open-source, event-driven backtesting engine with formal correctness invariants and a six-tier execution realism ladder (M0-M5). Applied to three canonical daily equity strategies on ten liquid US sector ETFs from 2005-2025, the framework quantifies how reported Sharpe ratios inflate under naive execution assumptions. The headline finding is a 21x Sharpe inflation ratio for TSMOM-60 between naive fills and impact-constrained execution, with CSMOM-60 collapsing under M4 and MeanRev-z1 sign-flipping at the first cost tier.',
    problem:
      'The gap between backtested and live strategy performance is well documented, but the specific distortion caused by each execution simplification remains poorly characterized in academic backtesting literature. Existing work emphasizes statistical bias, multiple testing, data snooping, and deflated Sharpe ratios, while the mechanical execution channel is under-modeled. This paper attributes Sharpe degradation to commissions, spreads, slippage, market impact, and delayed execution separately.',
    contributions: [
      {
        title: 'Formally Verified Event-Driven Engine',
        body:
          'Built a minimal engine centered on strict causality enforcement, double-entry accounting invariants, and a deterministic four-stage event queue. Unit tests cover causality, accounting identity, fill-quantity bounds, and cost monotonicity.'
      },
      {
        title: 'Six-Level Execution Realism Ladder',
        body:
          'Implements M0 naive next-open fills, M1 commissions, M2 bid-ask spread, M3 volatility-scaled slippage, M4 square-root market impact with participation cap, and M5 delayed execution as composable auditable modules.'
      },
      {
        title: 'Three Canonical Strategy Test Cases',
        body:
          'Evaluates TSMOM-60, CSMOM-60, and MeanRev-z1 to cover trend-following, cross-sectional momentum, and cost-fragile mean reversion mechanisms.'
      },
      {
        title: 'Per-Tier Sharpe Attribution & Bootstrap Inference',
        body:
          'Reports moving-block bootstrap 95% confidence intervals under block lengths 10, 20, and 30, plus participation-rate and impact-parameter sweeps around the M4 market-impact tier.'
      }
    ],
    methodology: [
      'Universe of 10 liquid US equity sector ETFs: SPY, QQQ, IWM, DIA, XLF, XLK, XLE, XLV, XLY, and XLP over 2005-2025.',
      'Event-driven architecture with deterministic four-stage event queue and engine-level look-ahead bias prevention.',
      'Double-entry accounting identity verified at every timestep to prevent phantom P&L.',
      'Moving-block bootstrap with b=10, 20, and 30 for Sharpe inference under autocorrelated returns.',
      'Cross-source data validation against Stooq/CRSP secondary price source.',
      'Maximum drawdown audit diagnostic with arithmetic verification and tier-level drawdown decomposition.',
      'Sensitivity sweeps over impact parameter k_imp in {0, 0.1, 0.25, 0.5, 0.75, 1.0, 1.5, 2.0} and participation rate rho in {0.05, 0.10, 0.20, 0.30}.',
      'Period-split analysis, including GFC sub-period, and lookback sensitivity checks to reduce cherry-picking risk.'
    ],
    tools: ['Python', 'Custom event-driven backtesting engine', 'Moving-block bootstrap', 'Yahoo Finance', 'Stooq', 'CRSP', 'US sector ETFs', 'Formal unit-test suite'],
    findings: [
      {
        title: 'TSMOM-60: 21x Sharpe Inflation',
        body:
          'Sharpe falls from 0.53 at M0 to 0.025 at M4, with M4 confidence interval spanning zero. Pre-cost signal is real, but execution costs destroy viability.'
      },
      {
        title: 'CSMOM-60: Collapse Under Market Impact',
        body:
          'CSMOM-60 has statistically positive pre-cost Sharpe under b=20 bootstrap inference, but collapses at M4 to Sharpe -0.230 and CAGR -5.7%.'
      },
      {
        title: 'MeanRev-z1: Immediate Sign Flip',
        body:
          'Naive Sharpe of 0.149 flips to -0.52 after commissions alone at M1, with confidence intervals entirely negative from M1 onward.'
      },
      {
        title: 'M3 to M4 Dominates Momentum Erosion',
        body:
          'Market impact is the largest source of Sharpe erosion for both momentum strategies, making impact modeling a primary viability determinant rather than an optional refinement.'
      },
      {
        title: 'Cost Monotonicity Verified Programmatically',
        body:
          'Invariant tests confirm that each successive realism layer can only reduce or maintain performance, and violations are treated as engine bugs.'
      },
      {
        title: 'Robust Across Blocks and Parameters',
        body:
          'Headline findings hold across bootstrap block lengths and show smooth monotonic degradation across impact-parameter and participation-rate sweeps.'
      }
    ],
    scores: [
      { label: 'Overall', score: '7.5/10', note: 'Strong infrastructure contribution with methodological novelty in tiered attribution and formal verification.' },
      { label: 'Novelty', score: '7.0/10', note: 'Per-tier attribution, MDD diagnostic, and invariant tests differentiate it from open-source alternatives.' },
      { label: 'Technical Correctness', score: '7.0/10', note: 'Core methodology is sound and engine correctness is verified by formal tests.' },
      { label: 'Experimental Rigor', score: '8.0/10', note: 'Cross-source validation, multiple block lengths, sensitivity sweeps, period splits, and invariant testing are included.' },
      { label: 'Clarity & Writing', score: '7.5/10', note: 'Well-structured with precise definitions and transparent scope limitations.' },
      { label: 'Reproducibility', score: '8.5/10', note: 'Open-source engine release, documented parameters, cross-source validation, and formal test suite.' },
      { label: 'Venue Fit', score: '7.5/10', note: 'Good fit for Risk Journals and competitive for top finance venues with expanded empirical scope.' }
    ],
    keywords: ['Backtesting', 'Execution Realism', 'Transaction Costs', 'Market Impact', 'Event-Driven Simulation', 'Time-Series Momentum', 'Cross-Sectional Momentum', 'Sharpe Ratio Inference', 'Bootstrap']
  }
];
