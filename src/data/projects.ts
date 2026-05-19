export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack & Real-Time' | 'Mobile' | 'ML & AI Systems' | 'Quantitative Finance' | 'Product Analytics' | 'Data Science' | 'Econometrics' | 'Cloud & Infrastructure';
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
  highlights: string[];
  links: {
    github?: string;
    tableau?: string;
    report?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'clearclause',
    title: 'ClearClause - Production Legal RAG Search',
    subtitle: 'Contracts / Legal Docs',
    category: 'ML & AI Systems',
    stack: ['Python', 'FastAPI', 'pgvector', 'Redis', 'Docker', 'Kubernetes'],
    problem: 'Legal documents are long, high-stakes, and full of edge cases - basic keyword search misses critical clauses, and naïve LLM Q&A hallucinates without reliable grounding. I needed a system that could retrieve the right passages consistently and generate answers that remain traceable to the source.',
    approach: 'Built an end-to-end RAG pipeline using hybrid retrieval (semantic + lexical/BM25) with reranking to improve relevance in tricky legal phrasing. Implemented Redis semantic caching and response streaming to cut tail latency, and deployed the system on Kubernetes with HPA to keep performance stable under load. Added production guardrails like PII redaction, structured validation, and observability instrumentation to detect regressions across latency, retrieval quality, and uptime.',
    outcome: 'Shipped a production-grade legal retrieval system achieving 0.87 precision@10 and a 93% p95 latency reduction (4.3s → 300ms) while supporting 200+ QPS with autoscaling and robust monitoring.',
    highlights: [
      'Hybrid retrieval + reranking for high-precision legal passage selection',
      'p95 latency improved 93% (4.3s → 300ms) using caching + streaming',
      'Kubernetes autoscaling (HPA) + observability for stable production operation'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/ClearClause' }
  },
  {
    id: 'buckyconnect',
    title: 'BuckyConnect - Real-Time Collaboration Platform',
    subtitle: 'WebSockets + GraphQL',
    category: 'Full-Stack & Real-Time',
    stack: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'WebSockets', 'Redis', 'AWS'],
    problem: 'Real-time collaboration is hard because you\'re balancing concurrency, event ordering, burst traffic, and frontend responsiveness. I needed a platform where multiple users could interact simultaneously with consistent state updates and low perceived latency.',
    approach: 'Designed a real-time architecture using WebSockets for streaming updates and GraphQL for structured queries, backed by Redis Pub/Sub to fan out events across instances. Deployed cloud-native infrastructure on AWS ECS with edge acceleration via CloudFront and persistence in DynamoDB, then optimized frontend performance with code splitting, lazy loading, and Web Workers. Iterated using usability testing and user interviews to improve activation and engagement signals, not just raw performance.',
    outcome: 'Delivered a scalable collaboration system handling 280+ concurrent users, sustaining 1,000+ events/sec, and maintaining <500ms latency targets, alongside product improvements like 85% Day-1 retention and a 2.1× engagement lift after iterative UX work.',
    highlights: [
      'Dual API design: WebSockets (real-time) + GraphQL (structured data)',
      '280+ concurrent users, 1,000+ events/sec, <500ms latency',
      'Frontend bundle reduced 40%; improved time-to-interactive'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/BuckyConnect' }
  },
  {
    id: 'ai-trend-radar',
    title: 'AI Trend Radar - Social Trend Detection & Marketing Insights',
    subtitle: 'LLM + Multi-Source Signal Fusion',
    category: 'ML & AI Systems',
    stack: ['Python', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    problem: 'Online trends move faster than traditional analytics dashboards. Teams miss early signals because data is fragmented across platforms, noisy (spam/reposts), and hard to interpret quickly. I needed a system that could (1) detect emerging trends early, (2) explain why something is trending, and (3) translate raw signals into actionable "what should we do next?" insights - without relying on manual monitoring.',
    approach: 'Built an end-to-end trend intelligence pipeline that continuously ingests content from multiple public sources (social posts, headlines, and community discussions), normalizes text + metadata, and generates trend candidates via time-windowed frequency/velocity scoring. To reduce noise, I added deduping and clustering so near-duplicate posts and re-shares don\'t inflate signal strength, then used embeddings to group semantically similar mentions into a single "trend cluster." On top of clustering, I added an LLM summarization + labeling layer that produces: a one-paragraph explanation of the trend, key entities (brands/people/products), sentiment direction, and "what content angles are working." Finally, I implemented a dashboard view that ranks trends by momentum, novelty, and persistence, with drill-down into example posts so users can verify the signal themselves.',
    outcome: 'Delivered a working "trend radar" experience that surfaces emerging topics earlier than manual monitoring, consolidates scattered mentions into coherent clusters, and produces stakeholder-ready summaries with evidence links so marketing/product teams can move from "signal" → "narrative" → "next actions" quickly.',
    highlights: [
      'Multi-source ingestion → normalization → clustering → trend ranking → LLM insight generation',
      'Early-signal scoring using time-window velocity + novelty + persistence heuristics',
      'Semantic clustering to reduce noise and group similar mentions into a single trend story',
      'Evidence-backed summaries with drill-down into representative posts for human verification'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/AITrendRadar' }
  },
  {
    id: 'fraud-detection',
    title: 'Real-Time Fraud Detection API',
    subtitle: 'Low-Latency ML Inference + Drift Monitoring',
    category: 'ML & AI Systems',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'XGBoost', 'Redis', 'Kubernetes', 'Prometheus'],
    problem: 'Fraud detection systems must be fast, stable under sudden load, and resilient to data drift. The challenge was delivering high-precision detection while maintaining strict p95 latency and safe production behavior.',
    approach: 'Trained a fraud classifier on 284K transactions, addressing class imbalance with SMOTE and using a voting ensemble to improve robustness. Served predictions via FastAPI, used Redis caching for hot-path optimization, and deployed on Kubernetes with autoscaling. Added reliability patterns like circuit breakers, deep observability with Prometheus/Grafana and tracing (Jaeger in the SWE build), plus drift signals to trigger automated retraining workflows.',
    outcome: 'Achieved 96% precision / 89% recall, sustained 500+ QPS, and kept p95 latency around 80–100ms under production-style loads with autoscaling and instrumentation for fast debugging.',
    highlights: [
      '96% precision / 89% recall on 284K transactions',
      '500+ QPS with ~80–100ms p95 latency',
      'Autoscaling + circuit breakers + tracing/monitoring for reliability'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Fraud-Detection-Api' }
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend System',
    subtitle: 'REST API Performance + Concurrency Testing',
    category: 'Full-Stack & Real-Time',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'pytest', 'Locust'],
    problem: 'Backend APIs often fail at scale due to inefficient database reads, uncontrolled traffic, and insufficient load testing. I wanted a backend that remained stable under high concurrency while keeping latency predictable.',
    approach: 'Implemented a FastAPI REST backend backed by PostgreSQL, then improved read performance with indexing and connection pooling. Added Redis cache-aside for frequently accessed endpoints, integrated rate limiting to handle abusive/accidental spikes, and built a testing workflow combining unit/integration suites with Locust to simulate 1,000+ concurrent users. Containerized services for consistent local-to-prod deployments.',
    outcome: 'Reduced latency by ~35%, decreased database load by ~60%, and validated reliability through repeatable load tests at 1,000+ concurrent users.',
    highlights: [
      'Postgres indexing + pooling + Redis cache-aside for hot reads',
      'Load tested at 1,000+ concurrent users',
      '35% latency reduction, 60% DB load reduction'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/E-Commerce%20Backend%20System' }
  },
  {
    id: 'algorithmic-trading',
    title: 'Algorithmic Trading Strategy Backtest',
    subtitle: 'Momentum + Walk-Forward Validation',
    category: 'Quantitative Finance',
    stack: ['C++', 'Python', 'NumPy', 'pandas', 'PostgreSQL', 'OpenMP', 'SIMD'],
    problem: 'Backtests are often misleading without realistic execution assumptions and out-of-sample validation. I wanted a research-quality backtesting setup that could run large simulation grids quickly and avoid overfitting.',
    approach: 'Built a backtesting engine in C++ with analysis tooling in Python (NumPy/pandas) and data storage in PostgreSQL. Implemented walk-forward validation, incorporated realistic controls like slippage and volatility-adaptive position sizing, and optimized compute throughput using OpenMP and SIMD to make large parameter sweeps feasible.',
    outcome: 'Produced a validated strategy with 18.2% annualized return and 1.47 Sharpe on historical data, while accelerating simulation throughput 3× (15s → 5s) for 100K+ simulations, enabling faster iteration and tighter research loops.',
    highlights: [
      'Walk-forward validation + realism controls (slippage, vol sizing)',
      '3× speedup using OpenMP + SIMD for large simulation sweeps',
      'Strong performance reporting with Sharpe-based evaluation'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Algorithmic%20Trading%20Strategy' }
  },
  {
    id: 'options-pricing',
    title: 'Options Pricing & Greeks Engine',
    subtitle: 'Fast, Accurate Risk Computation',
    category: 'Quantitative Finance',
    stack: ['C++', 'Eigen', 'Boost', 'Python', 'NumPy', 'SciPy'],
    problem: 'Options risk systems require both accuracy and speed: you need reliable prices/Greeks plus a calibration method to reflect changing volatility conditions without long runtimes.',
    approach: 'Implemented a pricing engine supporting Black–Scholes, Monte Carlo (10K paths), and Greeks via finite differences, using C++ (Eigen/Boost) for performance and Python (NumPy/SciPy) for validation and analysis. Added Newton–Raphson routines to calibrate volatility surfaces, then applied SIMD and variance reduction techniques to improve runtime without sacrificing accuracy.',
    outcome: 'Matched 99.8% accuracy vs Bloomberg with Greeks under 0.1% error and <2s runtimes, while achieving an 85% performance optimization through vectorization and simulation improvements.',
    highlights: [
      'Multi-method pricing: analytic + Monte Carlo + FD Greeks',
      'Calibration with Newton–Raphson for volatility surfaces',
      '<2s runtime, high accuracy benchmarks, major performance optimization'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Options%20Pricing%20and%20Greeks%20Engine' }
  },
  {
    id: 'pairs-trading',
    title: 'Statistical Arbitrage Pairs Trading',
    subtitle: 'Cointegration + Kalman Hedge Ratio',
    category: 'Quantitative Finance',
    stack: ['Python', 'statsmodels', 'R', 'PostgreSQL', 'TimescaleDB', 'Redis'],
    problem: 'Pairs trading requires stable statistical relationships and a low-latency signal pipeline. The challenge is discovering robust pairs, adapting hedge ratios over time, and executing signals quickly from high-frequency data.',
    approach: 'Built a research and execution pipeline using Johansen cointegration to identify candidate pairs and Kalman filtering to estimate dynamic hedge ratios. Implemented z-score monitoring and signal generation backed by PostgreSQL/TimescaleDB with Redis for fast state access. Engineered the data path to handle high tick throughput and integrated automated degradation alerts to detect performance or data quality issues.',
    outcome: 'Validated the strategy across 200+ equity pairs with a 65% win rate and supported live-style processing at 50K+ ticks/sec with <100ms signal-to-order latency.',
    highlights: [
      'Cointegration discovery + adaptive hedge ratios (Kalman)',
      '50K+ ticks/sec throughput, <100ms signal-to-order latency',
      'Robust monitoring for pipeline degradation'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Statistical%20Arbitrage%20Pairs%20Trading%20Cointegration%20%2B%20Kalman%20Filters.' }
  },
  {
    id: 'healthcare-spending',
    title: 'Healthcare Spending and Life-Expectancy Modeling',
    subtitle: 'Econometric Analysis & Interactive Dashboards',
    category: 'Econometrics',
    stack: ['Python', 'Pandas', 'Statsmodels', 'R/Stata', 'Tableau'],
    problem: 'Understanding complex relationships between healthcare spending and life expectancy across U.S. regions required integrating multiple datasets and controlling for geographic confounders.',
    approach: 'Built a reproducible data pipeline ingesting 150+ state-level indicators from CMS, CDC, and Gallup (2020-23), shrinking data-prep time from two days to two hours. Fitted and validated multivariate models using region-fixed effects; each $100 gain in per-capita health spending predicts a +0.05-year longevity rise, with Northeast states showing 1.3× higher elasticity.',
    outcome: 'Published an interactive Tableau storybook and side-by-side coefficient plots that let stakeholders drill down by region, income quintile, and mortality-based high-impact care in the final policy.',
    highlights: [
      'Reduced data prep time from 2 days to 2 hours',
      'Multivariate OLS with region fixed-effects showing significant correlations',
      'Interactive Tableau dashboards with regional drill-downs for policy insights'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Healthcare%20Spending%20vs%20Life%20Expectancy' }
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction & Intervention',
    subtitle: 'Explainable ML + Operational Playbook',
    category: 'ML & AI Systems',
    stack: ['SQL', 'Python', 'XGBoost', 'scikit-learn', 'SHAP', 'Tableau', 'R'],
    problem: 'Teams struggle with churn because predictions alone aren\'t actionable: you need explanations, prioritization, and a fast intervention loop that doesn\'t take weeks to respond to behavior changes.',
    approach: 'Built a churn modeling pipeline across 500K+ customers using XGBoost/scikit-learn, then layered SHAP explainability to turn model outputs into interpretable drivers (e.g., early inactivity signals). In consulting-style variants, used Cox proportional hazards to model time-to-churn and guide intervention timing. Packaged results into dashboards and a workflow that shortened time-to-intervention from 14 days → 2 days.',
    outcome: 'Achieved 87% precision / 82% recall and reduced churn from 12% → 7% with a system that supports both prediction and operational execution.',
    highlights: [
      '500K+ customers, 87% precision / 82% recall',
      'Explainability via SHAP + hazard modeling (Cox) for timing',
      'Faster operational loop: 14 days → 2 days'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/customer-churn-prediction-intervention' }
  },
  {
    id: 'retail-forecasting',
    title: 'Retail Demand Forecasting',
    subtitle: 'SKU-Level Forecasts + Uncertainty Bands',
    category: 'Data Science',
    stack: ['Python', 'Prophet', 'ARIMA', 'XGBoost', 'R', 'Tableau'],
    problem: 'Retail planning breaks when forecasts are brittle and don\'t communicate uncertainty. The challenge was producing stable SKU-level forecasts that incorporate external drivers and can support inventory decisions.',
    approach: 'Built forecasting models across 50+ SKUs using Prophet/ARIMA and an ensemble approach, incorporating external regressors like holidays, promotions, and weather. Validated performance against baselines and published dashboards showing both point forecasts and uncertainty bands, enabling scenario planning and safety stock tuning.',
    outcome: 'Achieved 8.2% MAPE (≈40% better than baseline) and produced a decision-ready forecasting view with uncertainty-aware planning outputs.',
    highlights: [
      '50+ SKUs, external regressors (holidays/promotions/weather)',
      '8.2% MAPE, ~40% better than baseline',
      'Forecast + uncertainty band dashboards for operations planning'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Retail%20Demand%20Forecasting%20System%20' }
  },
  {
    id: 'demand-elasticity',
    title: 'Retail Demand Elasticity',
    subtitle: 'ARIMA/VAR + Cointegration + Structural Break Testing',
    category: 'Data Science',
    stack: ['Python', 'statsmodels', 'R', 'forecast', 'vars'],
    problem: 'Elasticity estimates can be misleading if time-series dynamics, structural breaks, or long-run relationships aren\'t modeled correctly - especially when using results to simulate pricing counterfactuals.',
    approach: 'Modeled demand dynamics using ARIMA + VAR, validated long-run relationships with cointegration, and tested stability with Chow tests for structural breaks. Used impulse response functions to simulate counterfactual paths and communicate how shocks or pricing changes propagate through demand over time.',
    outcome: 'Delivered a rigorous elasticity framework grounded in time-series diagnostics and counterfactual simulation, suitable for scenario analysis rather than single-point estimates.',
    highlights: [
      'ARIMA/VAR modeling + cointegration validation',
      'Structural break detection (Chow tests)',
      'Counterfactual simulation via impulse response functions'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Retail%20Demand%20Elasticity%20Analysis' }
  },
  {
    id: 'ab-testing',
    title: 'E-Commerce Conversion Optimization',
    subtitle: 'A/B Testing with Power + Segmentation',
    category: 'Data Science',
    stack: ['Python', 'SciPy', 'SQL', 'Tableau'],
    problem: 'Product changes can look "good" in aggregate but fail within key segments. I needed an experimentation workflow that is statistically rigorous, transparent, and repeatable from design through reporting.',
    approach: 'Designed and executed an A/B test over 50K+ users, performing power analysis and covariate balance checks before interpreting results. Evaluated heterogeneity by device segment (mobile vs desktop), and created reporting automation plus dashboarding so stakeholders could track lift, confidence intervals, and segment effects without manual analysis.',
    outcome: 'Measured a 2.2% conversion lift (p < 0.05, 95% CI) and identified stronger gains in mobile segments (3.5% lift), with a reporting setup that reduced repetitive manual work by 95%.',
    highlights: [
      '50K+ users, statistically rigorous A/B workflow',
      'Lift: 2.2% overall; 3.5% mobile segment',
      'Automated reporting pipeline (major reduction in manual analysis)'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/ecommerce-conversion-optimization' }
  },
  {
    id: 'product-metrics',
    title: 'Product Metrics & Analytics Framework',
    subtitle: 'Funnel + Health Metrics + Faster Insight Loop',
    category: 'Product Analytics',
    stack: ['SQL', 'Python', 'Tableau'],
    problem: 'Without a consistent metrics layer, product decisions become slow and inconsistent - teams spend days recreating the same analyses and arguing about definitions rather than improving the product.',
    approach: 'Built a product analytics framework tracking 15+ health metrics across 10K+ users, including funnel views and onboarding breakdowns. Standardized metric definitions and built dashboards to accelerate repeat analysis. Used the framework to identify onboarding drop-offs and prioritize roadmap changes based on adoption and engagement signals.',
    outcome: 'Reduced time-to-insight from 3 days → 10 minutes, identified low-value features to sunset, and drove a measurable +15% engagement lift after focused iteration.',
    highlights: [
      '15+ metrics, 10K+ users tracked in a consistent framework',
      '3 days → 10 minutes time-to-insight improvement',
      'Funnel + onboarding diagnostics → roadmap actions → +15% engagement'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Product%20Metrics%20%26%20Analytics%20Framework' }
  },
  {
    id: 'rct-evaluation',
    title: 'Randomized Controlled Trial Evaluation',
    subtitle: 'Stratified Design + LATE via 2SLS + Heterogeneity',
    category: 'Data Science',
    stack: ['Python', 'statsmodels', 'R', 'estimatr', 'randomizr'],
    problem: 'Policy evaluation needs causal estimates that remain valid under imperfect compliance and reveal heterogeneous effects, not just average treatment impact.',
    approach: 'Designed a stratified RCT analysis for 50K+ participants, including power calculations (MDE=1.5%) and compliance-aware estimation using LATE via 2SLS with clustered standard errors. Extended analysis with heterogeneity methods (e.g., causal forests) to quantify segment-specific impacts and communicate who benefits most.',
    outcome: 'Measured a 2.2% causal effect (p < 0.05) and quantified meaningful heterogeneity (e.g., 3.5% mobile vs 1.1% desktop) with a methodology that is defensible, reproducible, and policy-ready.',
    highlights: [
      '50K+ participants, power + stratification for credible evaluation',
      'LATE via 2SLS, clustered SE for robust inference',
      'Heterogeneity via causal forests (mobile vs desktop differences)'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Randomized%20Controlled%20Trial%20Evaluation' }
  },
  {
    id: 'minimum-wage',
    title: 'Minimum Wage Employment Effects',
    subtitle: 'Modern DID + Event Study Validation',
    category: 'Data Science',
    stack: ['R', 'did', 'fixest', 'Stata'],
    problem: 'Minimum wage effects are controversial because naïve DID can break under heterogeneous treatment timing and violated assumptions. The challenge was running a defensible modern DID analysis and communicating it clearly.',
    approach: 'Analyzed employment impacts using Callaway–Sant\'Anna DID with an event study to validate parallel trends and visualize pre/post dynamics. Worked with BLS microdata, tested subgroup heterogeneity (e.g., food service), and translated results into a structured policy brief format suitable for decision-makers.',
    outcome: 'Produced a 15-page policy brief with validated DID estimates and clear heterogeneity reporting, including subgroup effects like -2.1% in food service.',
    highlights: [
      'Modern DID: Callaway–Sant\'Anna + event study validation',
      'Heterogeneity reporting (food service effect)',
      'Clear, publishable policy brief (15 pages)'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/Minimum%20Wage%20Employment%20Effects' }
  },
  {
    id: 'badgerhub',
    title: 'BadgerHub: Cross-Platform AI-Powered Chat Application',
    subtitle: 'Multi-platform Real-time Messaging',
    category: 'Full-Stack & Real-Time',
    stack: ['React', 'React Native', 'Wit.AI', 'Redux', 'REST APIs'],
    problem: 'Students needed a unified chat platform across web and mobile with intelligent navigation and secure authentication.',
    approach: 'Developed a multi-platform chat app with JWT authentication and secure token storage using Expo Secure Store. Integrated Wit AI NLP for intelligent features like voice commands, chatroom navigation, and real-time messaging, optimizing RESTful API performance and database schemas.',
    outcome: 'Designed a highly responsive and interactive UI/UX with React Native and React-Bootstrap, leveraging Redux for seamless state synchronization across web and mobile platforms.',
    highlights: [
      'Secure JWT auth with Expo Secure Store',
      'NLP voice commands and chatroom navigation via Wit.AI',
      'Real-time messaging with Redux state management',
      'Responsive UI/UX across web and mobile'
    ],
    links: {}
  },
  {
    id: 'virtual-study-group',
    title: 'Virtual Study Group Manager',
    subtitle: 'High-performance Real-time Collaboration Platform',
    category: 'Full-Stack & Real-Time',
    stack: ['React.js', 'JavaScript', 'WebSocket', 'AWS Lambda', 'GraphQL'],
    problem: 'Remote students needed a scalable platform for live collaboration with video, real-time updates, and media sharing supporting 200+ concurrent users.',
    approach: 'Developed a Full stack high-performance real-time collaboration platform for 200+ concurrent users, using WebSockets and WebRTC to facilitate live interactions. Optimized Redux state management and implemented GraphQL-based data retrieval, improving response times by 40% and reducing server load. Integrated AWS S3 for media storage, enabling scalable file-sharing and persistence across study groups.',
    outcome: 'Successfully scaled to ~200+ concurrent users with live WebRTC interactions. GraphQL + Redux optimizations improved response times by 40% and reduced server load. S3 provided reliable, scalable media storage.',
    highlights: [
      'Scaled to 200+ concurrent users with WebRTC and WebSockets',
      'GraphQL + Redux optimization improved response times by 40%',
      'AWS S3 integration for scalable file-sharing and persistence'
    ],
    links: {}
  },
  {
    id: 'connectech',
    title: 'ConnecTech App',
    subtitle: 'Full Stack AI-Enhanced B2B Matchmaking Platform',
    category: 'Mobile',
    stack: ['Kotlin', 'Java', 'Android Studio', 'Postman', 'Firebase'],
    problem: 'B2B companies struggled to find relevant business partners efficiently, requiring intelligent matchmaking with real-time notifications.',
    approach: 'Developed an Full stack AI-Enhanced B2B matchmaking platform, leveraging machine learning-based ranking algorithms to improve vendor-client pairing accuracy by 60%. Integrated a RESTful API with Firebase backend, enabling automated real-time updates, in-app messaging, and AI-powered email automation, improving user retention. Implemented caching mechanisms and offline mode, reducing network dependency.',
    outcome: 'Created an intuitive matchmaking platform with 60% improved pairing accuracy, secure authentication, real-time notifications, and offline capabilities.',
    highlights: [
      'ML-based ranking improved pairing accuracy by 60%',
      'RESTful API with Firebase for real-time updates and messaging',
      'Caching mechanisms and offline mode for reduced network dependency'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/ConnecTech' }
  },
  {
    id: 'spotify-popularity',
    title: 'Analysis of Factors Influencing Song Popularity on Spotify',
    subtitle: 'ML Pipeline with Hyperparameter Optimization',
    category: 'ML & AI Systems',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'AWS', 'Docker'],
    problem: 'Predicting song popularity from audio features required building high-accuracy models, efficient feature engineering, and scalable hyperparameter tuning.',
    approach: 'Engineered a high-accuracy prediction model using Random Forest, Gradient Boosting, and Linear Regression, improving song popularity prediction accuracy by 45%. Optimized data pipelines for handling millions of records, reducing preprocessing time by 30% via parallelized feature extraction and AWS Lambda functions. Implemented automated hyperparameter tuning with Optuna, improving model performance and generalization.',
    outcome: 'Achieved 45% improvement in prediction accuracy through ensemble methods. Parallelized AWS pipelines reduced preprocessing time by 30%. Automated HPO with Optuna improved model performance and generalization.',
    highlights: [
      'Random Forest, Gradient Boosting, Linear Regression with 45% accuracy improvement',
      'Optimized data pipelines reduced preprocessing time by 30%',
      'Automated hyperparameter tuning with Optuna'
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/SpotifySongPopularity' }
  },
  {
    id: 'specme-ai-product-copilot',
    title: "SpecMe - AI Product Copilot",
    subtitle: "Agentic AI + Product Tools",
    category: 'ML & AI Systems',
    stack: ["TypeScript", "Next.js", "React", "Python", "FastAPI", "Claude API", "pgvector"],
    problem: "Co-founded SpecMe, a B2B SaaS copilot that converts unstructured PM inputs into engineering-ready specifications through a multi-agent workflow. The core insight was that PMs describe features in natural language (\"we need a dashboard showing user activity with filters\"), but engineers need structured specs with data models, API contracts, component hierarchies, edge cases, and implementation guidance. SpecMe bridges this gap using AI-powered spec generation with context-aware templates that adapt based on feature classification. The system has processed 50+ real PM briefs from actual product teams.",
    approach: "Built multi-agent architecture where specialist agents handle feature classification, technical architecture design, edge case enumeration, and implementation guidance, coordinated by orchestration layer - Designed prompt system with few-shot examples of high-quality specs for different feature types, tuned based on engineer feedback about actionability - Created React + TypeScript frontend with dynamic markdown rendering, syntax highlighting for code blocks, collapsible sections, and inline editing for refinement - Implemented FastAPI backend calling Claude API with streaming responses, structured output parsing, and retry logic for API failures - Built evaluation pipeline comparing generated specs against hand-written gold standards on dimensions like completeness, clarity, technical accuracy, and actionability",
    outcome: "Reduced spec creation time from 4 hours to 15 minutes through automated generation with human-in-the-loop refinement, allowing PMs to iterate on specs 10x faster Built dynamic UI that adapts spec sections based on feature type detection: dashboards get component breakdown and state management guidance, APIs get request/response schemas and error handling patterns",
    highlights: [
      "Reduced spec creation time from 4 hours to 15 minutes through automated generation with human-in-the-loop refinement, allowing PMs to iterate on specs 10x faster",
      "Built dynamic UI that adapts spec sections based on feature type detection: dashboards get component breakdown and state management guidance, APIs get request/response schemas and error handling patterns",
      "Implemented versioning system tracking spec evolution through feedback cycles, allowing teams to reference previous iterations and understand how requirements changed over time"
    ],
    links: {}
  },
  {
    id: 'production-ml-serving-infrastructure',
    title: "Production ML Serving Infrastructure",
    subtitle: "ML Infrastructure + Model Serving",
    category: 'ML & AI Systems',
    stack: ["Python", "PyTorch", "FastAPI", "Kubernetes", "Docker", "Redis", "PostgreSQL"],
    problem: "Built end-to-end ML serving infrastructure supporting real-time and batch predictions at scale, with comprehensive monitoring, model deployment automation, and operational excellence systems. The platform powers personalized experiences across multiple use cases including fraud detection, recommendations, and content moderation, serving millions of requests daily with sub-300ms p95 latency. Focus on production-ready deployment practices, observability, and reliability rather than just model accuracy.",
    approach: "Architected serving layer with FastAPI exposing REST endpoints for real-time predictions and batch processing endpoints for high-throughput offline scoring - Implemented dynamic batching accumulating requests for up to 500ms before inference, reducing per-request overhead and improving GPU utilization for neural network models - Built two-tier caching with Redis for frequent prediction requests and in-memory LRU cache for model artifacts, achieving 40% cache hit rate on production traffic - Designed feature store with online and offline components, ensuring training-serving consistency and reducing feature computation latency - Created model registry tracking experiments, hyperparameters, training data versions, and performance metrics using MLflow for reproducibility - Deployed on Kubernetes with horizontal pod autoscaling based on request queue depth, CPU utilization, and custom latency metrics - Implemented circuit breakers preventing cascading failures when downstream services are degraded, with fallback to cached predictions or simpler baseline models",
    outcome: "Deployed models serving 500K+ requests/day with 99.5% uptime through Kubernetes orchestration, health checks, graceful degradation, and automated rollback capabilities Reduced inference latency 93% from 4.3s to 300ms p95 through model optimization, request batching, response caching, and parallel prediction pipelines",
    highlights: [
      "Deployed models serving 500K+ requests/day with 99.5% uptime through Kubernetes orchestration, health checks, graceful degradation, and automated rollback capabilities",
      "Reduced inference latency 93% from 4.3s to 300ms p95 through model optimization, request batching, response caching, and parallel prediction pipelines",
      "Built comprehensive monitoring tracking model performance metrics (precision, recall, latency distribution), infrastructure metrics (CPU, memory, GPU utilization), and business metrics (conversion rates, user engagement)"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/production-ml-serving-infrastructure' }
  },
  {
    id: 'llm-eval-inference-stack',
    title: "LLM Evaluation Inference Stack",
    subtitle: "LLM Evaluation + Model Serving",
    category: 'ML & AI Systems',
    stack: ["Python", "vLLM", "FastAPI", "MLflow", "PostgreSQL", "Redis", "Docker"],
    problem: "Built comprehensive evaluation and serving infrastructure for large language models, supporting benchmarking, performance optimization, and production deployment. The system enables rapid experimentation with different models, prompts, and serving configurations while maintaining reproducibility and cost efficiency.",
    approach: "Established reproducible evaluation framework testing models across multiple benchmarks with automated scoring, statistical significance testing, and cost tracking Reduced inference costs 40% through vLLM serving optimization, request batching, and intelligent routing between model sizes based on query complexity",
    outcome: "Established reproducible evaluation framework testing models across multiple benchmarks with automated scoring, statistical significance testing, and cost tracking Reduced inference costs 40% through vLLM serving optimization, request batching, and intelligent routing between model sizes based on query complexity",
    highlights: [
      "Established reproducible evaluation framework testing models across multiple benchmarks with automated scoring, statistical significance testing, and cost tracking",
      "Reduced inference costs 40% through vLLM serving optimization, request batching, and intelligent routing between model sizes based on query complexity",
      "Built async inference pipelines processing 10K+ requests/hour with proper error handling, retry logic, and rate limiting"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/llm_eval_inference_stack' }
  },
  {
    id: 'recommendation-system-infrastructure',
    title: "Recommendation System Infrastructure",
    subtitle: "Recommendation Systems + Personalization",
    category: 'ML & AI Systems',
    stack: ["Python", "PyTorch", "FastAPI", "FAISS", "Redis", "PostgreSQL", "Kubernetes"],
    problem: "Built ML platform powering personalized recommendations with model serving infrastructure, feature stores, and experimentation framework. The system generates recommendations across multiple surfaces (home feed, search results, related items) using collaborative filtering, content-based methods, and neural ranking models, serving millions of users daily.",
    approach: "Implemented candidate generation using approximate nearest neighbor search with FAISS for fast similarity lookups from millions of items - Built two-stage ranking architecture where fast first-stage model scores thousands of candidates and expensive second-stage model re-ranks top 100 for quality - Designed feature engineering pipeline computing user engagement signals (clicks, time spent, purchases), item popularity metrics, and contextual features (time of day, device type) - Created A/B testing infrastructure with proper randomization, statistical significance testing, and metric tracking across treatment groups - Implemented position bias correction in training data accounting for presentation effects in historical data",
    outcome: "Deployed recommendation models serving 500K+ requests/day with sub-300ms p95 latency through optimized inference pipelines, caching strategies, and parallel model scoring Improved engagement metrics 18% through A/B testing framework comparing recommendation algorithms, ranking strategies, and personalization approaches",
    highlights: [
      "Deployed recommendation models serving 500K+ requests/day with sub-300ms p95 latency through optimized inference pipelines, caching strategies, and parallel model scoring",
      "Improved engagement metrics 18% through A/B testing framework comparing recommendation algorithms, ranking strategies, and personalization approaches",
      "Built feature store with online and offline components ensuring training-serving consistency, reducing feature computation latency 60% through pre-computation and caching"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/recommendation-system-infrastructure' }
  },
  {
    id: 'browser-agent-runtime',
    title: "Browser Agent Runtime",
    subtitle: "AI Agents + Browser Automation",
    category: 'ML & AI Systems',
    stack: ["Python", "Playwright", "CDP", "FastAPI", "Redis", "Docker"],
    problem: "Built a browser-native agent runtime for navigating authenticated web flows using tool calls, background execution, and permission-aware action planning. The system enables agents to interact with complex websites, handle authentication, fill forms, extract data, and complete multi-step workflows while respecting security boundaries and handling edge cases gracefully.",
    approach: "Reduced end-to-end task completion time by 46% through robust Playwright-based tool use, context engineering, and retry-aware execution Implemented permission checks, payload filtering, and fallback behavior so agents could interact with complex websites safely and consistently",
    outcome: "Reduced end-to-end task completion time by 46% through robust Playwright-based tool use, context engineering, and retry-aware execution Implemented permission checks, payload filtering, and fallback behavior so agents could interact with complex websites safely and consistently",
    highlights: [
      "Reduced end-to-end task completion time by 46% through robust Playwright-based tool use, context engineering, and retry-aware execution",
      "Implemented permission checks, payload filtering, and fallback behavior so agents could interact with complex websites safely and consistently",
      "Built context management system tracking page state, action history, and intermediate results enabling multi-turn interactions and error recovery"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/browser-agent-runtime' }
  },
  {
    id: 'layout-aware-document-intelligence-platform',
    title: "Layout-Aware Document Intelligence Platform",
    subtitle: "Multimodal AI + Document Intelligence",
    category: 'ML & AI Systems',
    stack: ["Python", "Rust", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"],
    problem: "Built a multimodal document intelligence platform that parses complex files into deterministic, machine-readable representations using layout-aware extraction and structured outputs. The system handles PDFs, scanned documents, and images with sophisticated layout understanding, table extraction, and entity recognition.",
    approach: "Improved extraction accuracy by 47% through layout-aware parsing, schema-guided outputs, and async processing pipelines Took the system from prototype to production with Docker and Kubernetes, enabling enterprise-style workloads across cloud and on-prem environments",
    outcome: "Improved extraction accuracy by 47% through layout-aware parsing, schema-guided outputs, and async processing pipelines Took the system from prototype to production with Docker and Kubernetes, enabling enterprise-style workloads across cloud and on-prem environments",
    highlights: [
      "Improved extraction accuracy by 47% through layout-aware parsing, schema-guided outputs, and async processing pipelines",
      "Took the system from prototype to production with Docker and Kubernetes, enabling enterprise-style workloads across cloud and on-prem environments",
      "Built evaluation framework comparing extraction quality across document types, tracking precision/recall for different entity types and table structures"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/layout-aware-document-intelligence-platform' }
  },
  {
    id: 'multimodal-agent-evaluation-stack',
    title: "Multimodal Agent Evaluation Stack",
    subtitle: "Agent Evaluation + Multimodal Systems",
    category: 'ML & AI Systems',
    stack: ["Python", "TypeScript", "MLflow", "PostgreSQL", "Docker", "Structured Logging"],
    problem: "Built an evaluation stack for multimodal agents covering tool-use accuracy, latency, failure recovery, and trajectory quality across open-ended workflows. The system enables systematic testing of agent capabilities, comparison across model architectures, and identification of failure modes.",
    approach: "Improved measurable task success by 45% through automated benchmarking, trace analysis, and iterative model/tool refinement Designed data representations for browser state, user intent, and action traces to improve observability and post-deployment debugging",
    outcome: "Improved measurable task success by 45% through automated benchmarking, trace analysis, and iterative model/tool refinement Designed data representations for browser state, user intent, and action traces to improve observability and post-deployment debugging",
    highlights: [
      "Improved measurable task success by 45% through automated benchmarking, trace analysis, and iterative model/tool refinement",
      "Designed data representations for browser state, user intent, and action traces to improve observability and post-deployment debugging",
      "Created benchmark suite with diverse task types, difficulty levels, and success criteria enabling comprehensive agent evaluation"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/multimodal-agent-evaluation-stack' }
  },
  {
    id: 'clinical-prompt-evaluation-suite',
    title: "Clinical Prompt Evaluation Suite",
    subtitle: "Prompt Engineering + LLM Evaluation",
    category: 'ML & AI Systems',
    stack: ["Python", "OpenAI", "Anthropic", "Excel", "PostgreSQL", "MLflow"],
    problem: "Built a prompt evaluation suite for healthcare-style workflows using structured testing datasets, rubric-based scoring, and versioned prompt experiments. The system ensures LLM outputs meet clinical accuracy, safety, and consistency requirements before deployment.",
    approach: "Improved response consistency by 46% through prompt restructuring, benchmark-driven iteration, and explicit failure-mode analysis Documented reusable prompt templates, scoring rubrics, and testing procedures to support repeatable evaluation and safer operational rollouts",
    outcome: "Improved response consistency by 46% through prompt restructuring, benchmark-driven iteration, and explicit failure-mode analysis Documented reusable prompt templates, scoring rubrics, and testing procedures to support repeatable evaluation and safer operational rollouts",
    highlights: [
      "Improved response consistency by 46% through prompt restructuring, benchmark-driven iteration, and explicit failure-mode analysis",
      "Documented reusable prompt templates, scoring rubrics, and testing procedures to support repeatable evaluation and safer operational rollouts",
      "Built automated evaluation pipeline comparing prompt variants across accuracy, safety, consistency, and compliance dimensions"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/clinical-prompt-evaluation-suite' }
  },
  {
    id: 'human-data-collection-platform',
    title: "Human Data Collection Platform",
    subtitle: "Human-in-the-Loop + Data Collection",
    category: 'ML & AI Systems',
    stack: ["Python", "React", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    problem: "Built a full-stack labeling platform for preference, ranking, and annotation data with strong validation, admin tooling, and quality-control workflows. The platform supports human-in-the-loop ML workflows for reward modeling, RLHF, and model evaluation.",
    approach: "Improved task completion accuracy by 47% through clearer interfaces, validation logic, and operator workflow tooling Added collection pipelines, quality checks, and review controls that balanced rapid iteration with maintainability as requirements evolved",
    outcome: "Improved task completion accuracy by 47% through clearer interfaces, validation logic, and operator workflow tooling Added collection pipelines, quality checks, and review controls that balanced rapid iteration with maintainability as requirements evolved",
    highlights: [
      "Improved task completion accuracy by 47% through clearer interfaces, validation logic, and operator workflow tooling",
      "Added collection pipelines, quality checks, and review controls that balanced rapid iteration with maintainability as requirements evolved",
      "Built admin dashboard for task assignment, quality monitoring, and worker performance tracking"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/human-data-collection-platform' }
  },
  {
    id: 'reward-modeling-and-preference-data-lab',
    title: "Reward Modeling and Preference Data Lab",
    subtitle: "Reward Modeling + RLHF",
    category: 'ML & AI Systems',
    stack: ["Python", "PostgreSQL", "MLflow", "Jupyter", "Pandas"],
    problem: "Built a lab for collecting, evaluating, and versioning preference data used in reward model experiments and RLHF-style workflows. The system enables rapid experimentation with different data collection strategies, ranking methods, and model training approaches.",
    approach: "Enabled rapid comparison of prompts, ranking methods, and collection strategies through structured evaluation pipelines and experiment tracking Built data versioning system tracking collection methodology, annotator guidelines, and quality metrics for reproducible experiments",
    outcome: "Enabled rapid comparison of prompts, ranking methods, and collection strategies through structured evaluation pipelines and experiment tracking Built data versioning system tracking collection methodology, annotator guidelines, and quality metrics for reproducible experiments",
    highlights: [
      "Enabled rapid comparison of prompts, ranking methods, and collection strategies through structured evaluation pipelines and experiment tracking",
      "Built data versioning system tracking collection methodology, annotator guidelines, and quality metrics for reproducible experiments",
      "Created analysis tools identifying patterns in preference data, inter-annotator agreement, and potential biases"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/reward-modeling-and-preference-data-lab' }
  },
  {
    id: 'ml-data-preparation-pipeline',
    title: "ML Data Preparation Pipeline",
    subtitle: "Data Engineering + ML Pipelines",
    category: 'ML & AI Systems',
    stack: ["Python", "Pandas", "NumPy", "scikit-learn", "Great Expectations", "PostgreSQL"],
    problem: "Built data preparation pipeline supporting machine learning workflows by handling data validation, quality checks, transformation, and feature engineering. The system ensures clean, consistent data feeding model training and evaluation pipelines.",
    approach: "Reduced data quality issues 60% through automated validation checks, schema enforcement, and anomaly detection Built transformation pipelines handling missing values, outlier treatment, encoding, and scaling with proper train-test separation",
    outcome: "Reduced data quality issues 60% through automated validation checks, schema enforcement, and anomaly detection Built transformation pipelines handling missing values, outlier treatment, encoding, and scaling with proper train-test separation",
    highlights: [
      "Reduced data quality issues 60% through automated validation checks, schema enforcement, and anomaly detection",
      "Built transformation pipelines handling missing values, outlier treatment, encoding, and scaling with proper train-test separation",
      "Created data quality dashboards monitoring completeness, distribution shifts, and feature correlations"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/ml-data-preparation-pipeline' }
  },
  {
    id: 'usage-analytics-dashboard',
    title: "Usage Analytics Dashboard",
    subtitle: "Analytics Dashboards + Data Visualization",
    category: 'Product Analytics',
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Recharts"],
    problem: "Built customer-facing analytics dashboard showing usage metrics, trends, and insights with interactive visualizations and export capabilities. The platform serves 10K+ users with real-time data updates, custom date ranges, and drill-down analysis. Designed for usage-based billing companies where customers need transparency into consumption patterns.",
    approach: "Implemented React frontend with TypeScript using Recharts for visualizations, supporting line charts, bar charts, heatmaps, and custom metrics - Built Python backend with FastAPI serving aggregated data from PostgreSQL with proper query optimization and pagination - Designed data pipeline pre-computing common aggregations (daily usage, monthly trends, percentiles) to avoid expensive real-time calculations - Created materialized views refreshed incrementally as new data arrives, balancing freshness with query performance - Implemented export functionality generating PDFs with branded headers, charts, and summary tables for customer reporting - Built caching layer with Redis storing frequently accessed date ranges and metric combinations - Used AI tools for rapid prototyping of chart components, layout variations, and styling, achieving polished design in days rather than weeks",
    outcome: "Delivered intuitive visualization interface receiving 8.9/10 user satisfaction through thoughtful UX design, responsive layouts, and clear data presentation Reduced time-to-insight 95% from 3 days to 2 hours through pre-computed aggregations, materialized views, and intelligent caching",
    highlights: [
      "Delivered intuitive visualization interface receiving 8.9/10 user satisfaction through thoughtful UX design, responsive layouts, and clear data presentation",
      "Reduced time-to-insight 95% from 3 days to 2 hours through pre-computed aggregations, materialized views, and intelligent caching",
      "Built flexible API supporting various aggregation levels (hourly, daily, monthly), filtering, and export formats (CSV, PDF, API)"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/usage-analytics-dashboard' }
  },
  {
    id: 'real-time-service-platform',
    title: "Real-Time Service Platform",
    subtitle: "Backend Engineering + Production Systems",
    category: 'Full-Stack & Real-Time',
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kubernetes", "Docker", "Prometheus"],
    problem: "Built production service platform handling high-throughput, low-latency requests with comprehensive monitoring, error handling, and deployment automation. The system demonstrates production-grade engineering practices including observability, reliability patterns, and operational excellence.",
    approach: "Implemented REST API with FastAPI supporting both synchronous and asynchronous endpoints depending on operation characteristics - Built authentication and authorization system with JWT tokens, role-based access control, and secure session management - Designed rate limiting protecting against abuse using token bucket algorithm with per-user and per-IP limits - Created circuit breaker pattern preventing cascading failures when downstream dependencies are degraded - Implemented request tracing with correlation IDs flowing through distributed system for debugging production issues - Deployed on Kubernetes with horizontal pod autoscaling, readiness probes, liveness probes, and rolling updates - Built CI/CD pipeline with automated testing, security scanning, and deployment to staging/production environments",
    outcome: "Handled 280+ concurrent users and 1,000+ events/sec with sub-500ms p95 latency through optimized request handling, connection pooling, and efficient resource utilization Achieved 99.5% uptime through health checks, graceful degradation, circuit breakers, and automated recovery from transient failures",
    highlights: [
      "Handled 280+ concurrent users and 1,000+ events/sec with sub-500ms p95 latency through optimized request handling, connection pooling, and efficient resource utilization",
      "Achieved 99.5% uptime through health checks, graceful degradation, circuit breakers, and automated recovery from transient failures",
      "Built comprehensive monitoring with Prometheus/Grafana tracking request rates, error rates, latency distribution, and resource utilization"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/real-time-service-platform' }
  },
  {
    id: 'production-service-api-platform',
    title: "Production Service API Platform",
    subtitle: "API Design + Backend Engineering",
    category: 'Full-Stack & Real-Time',
    stack: ["Python", "Java", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    problem: "Built scalable API platform with end-to-end ownership from design through deployment, supporting both internal services and external integrations. The platform emphasizes clean API design, comprehensive documentation, versioning, and operational excellence.",
    approach: "Designed RESTful API following best practices for resource naming, HTTP methods, status codes, and pagination - Implemented API versioning supporting multiple versions simultaneously during migration periods - Built request validation with Pydantic models ensuring type safety and clear error messages for invalid inputs - Created authentication system supporting API keys, OAuth, and service-to-service tokens - Implemented rate limiting and quota management preventing abuse while allowing legitimate high-volume usage - Built monitoring tracking API usage patterns, error rates by endpoint, and client-specific metrics - Created automated tests covering happy paths, edge cases, error conditions, and performance benchmarks",
    outcome: "Served 200+ internal users and external partners with 99.7% uptime through robust error handling, retry logic, and fallback mechanisms Reduced API response time 65% through query optimization, caching strategies, and efficient data serialization",
    highlights: [
      "Served 200+ internal users and external partners with 99.7% uptime through robust error handling, retry logic, and fallback mechanisms",
      "Reduced API response time 65% through query optimization, caching strategies, and efficient data serialization",
      "Built comprehensive API documentation with OpenAPI specs, usage examples, and integration guides"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/production-service-api-platform' }
  },
  {
    id: 'interactive-agent-orchestration-platform',
    title: "Interactive Agent Orchestration Platform",
    subtitle: "Agent Infrastructure + Document Workflows",
    category: 'Cloud & Infrastructure',
    stack: ["TypeScript", "Node.js", "Redis", "Terraform", "AWS", "Docker"],
    problem: "Built distributed services that let agents read, write, and validate large document workflows across cloud-backed and enterprise-style environments. The system enables automation of document processing tasks while respecting access controls, audit requirements, and compliance constraints.",
    approach: "Handled 500+ concurrent jobs through low-latency task execution, resilient retries, and queue-backed orchestration Established CI/CD, tracing, and infrastructure-as-code workflows that improved deployment consistency, maintainability, and recovery time",
    outcome: "Handled 500+ concurrent jobs through low-latency task execution, resilient retries, and queue-backed orchestration Established CI/CD, tracing, and infrastructure-as-code workflows that improved deployment consistency, maintainability, and recovery time",
    highlights: [
      "Handled 500+ concurrent jobs through low-latency task execution, resilient retries, and queue-backed orchestration",
      "Established CI/CD, tracing, and infrastructure-as-code workflows that improved deployment consistency, maintainability, and recovery time",
      "Built comprehensive access control system with role-based permissions, audit logging, and compliance reporting"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/interactive-agent-orchestration-platform' }
  },
  {
    id: 'mobile-health-tracker-react-native',
    title: "Mobile Health Tracker (React Native)",
    subtitle: "Mobile Development + React Native",
    category: 'Mobile',
    stack: ["React Native", "TypeScript", "Redux", "SQLite", "HealthKit", "Google Fit"],
    problem: "Built cross-platform mobile health tracking app using React Native, enabling users to log workouts, track nutrition, monitor progress, and set fitness goals. The app demonstrates mobile development skills, offline-first design, and integration with device sensors and health APIs.",
    approach: "Built intuitive mobile interface with smooth navigation, animations, and responsive layouts following platform-specific design guidelines Implemented offline-first architecture with local data persistence, background sync, and conflict resolution for reliable experience without constant connectivity",
    outcome: "Built intuitive mobile interface with smooth navigation, animations, and responsive layouts following platform-specific design guidelines Implemented offline-first architecture with local data persistence, background sync, and conflict resolution for reliable experience without constant connectivity",
    highlights: [
      "Built intuitive mobile interface with smooth navigation, animations, and responsive layouts following platform-specific design guidelines",
      "Implemented offline-first architecture with local data persistence, background sync, and conflict resolution for reliable experience without constant connectivity",
      "Integrated with device health APIs (HealthKit, Google Fit) for automatic activity tracking and data synchronization"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/mobile-health-tracker-react-native' }
  },
  {
    id: 'restaurant-discovery-platform',
    title: "Restaurant Discovery Platform",
    subtitle: "Full-Stack Development + Search",
    category: 'Full-Stack & Real-Time',
    stack: ["React", "Node.js", "Express", "MongoDB", "ElasticSearch", "Google Maps API"],
    problem: "Built restaurant discovery and reservation platform with search, filtering, reviews, and booking integration. The system demonstrates full-stack development, third-party API integration, and user-generated content management.",
    approach: "Implemented advanced search with filters for cuisine, price range, location, rating, and availability Built review system with moderation, rating aggregation, and helpful vote tracking",
    outcome: "Implemented advanced search with filters for cuisine, price range, location, rating, and availability Built review system with moderation, rating aggregation, and helpful vote tracking",
    highlights: [
      "Implemented advanced search with filters for cuisine, price range, location, rating, and availability",
      "Built review system with moderation, rating aggregation, and helpful vote tracking",
      "Integrated with reservation APIs enabling direct booking from platform"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/restaurant-discovery-platform' }
  },
  {
    id: 'event-management-system',
    title: "Event Management System",
    subtitle: "Event Management + Ticketing",
    category: 'Full-Stack & Real-Time',
    stack: ["React", "TypeScript", "Python", "Django", "PostgreSQL", "Stripe", "SendGrid"],
    problem: "Built event management platform for organizing conferences, meetups, and workshops with registration, ticketing, attendee management, and check-in functionality. The system handles multiple event types, ticket tiers, and capacity management.",
    approach: "Processed 1000+ registrations with payment integration, confirmation emails, and ticket generation Built admin dashboard for event creation, attendee management, check-in tracking, and analytics",
    outcome: "Processed 1000+ registrations with payment integration, confirmation emails, and ticket generation Built admin dashboard for event creation, attendee management, check-in tracking, and analytics",
    highlights: [
      "Processed 1000+ registrations with payment integration, confirmation emails, and ticket generation",
      "Built admin dashboard for event creation, attendee management, check-in tracking, and analytics",
      "Implemented waitlist management with automated notifications when spots become available"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/event-management-system' }
  },
  {
    id: 'habit-tracker-with-social-features',
    title: "Habit Tracker with Social Features",
    subtitle: "Habit Tracking + Gamification",
    category: 'Mobile',
    stack: ["React Native", "Node.js", "PostgreSQL", "Redis", "Firebase Cloud Messaging"],
    problem: "Built habit tracking app with social accountability features including friend challenges, streak tracking, and achievement badges. The system demonstrates gamification, social features, and push notification integration.",
    approach: "Improved habit completion rates 40% through social accountability, streak tracking, and achievement systems Built notification system with smart timing based on user behavior patterns",
    outcome: "Improved habit completion rates 40% through social accountability, streak tracking, and achievement systems Built notification system with smart timing based on user behavior patterns",
    highlights: [
      "Improved habit completion rates 40% through social accountability, streak tracking, and achievement systems",
      "Built notification system with smart timing based on user behavior patterns",
      "Implemented friend system with challenge creation, progress sharing, and competitive leaderboards"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/habit-tracker-social-features' }
  },
  {
    id: 'low-latency-matching-engine-and-market-data-feed',
    title: "Low-Latency Matching Engine and Market Data Feed",
    subtitle: "Low-Latency Systems + Trading Infrastructure",
    category: 'Quantitative Finance',
    stack: ["C++", "Linux", "RDMA", "Lock-Free Data Structures", "FIX Protocol", "Python", "Profiling Tools"],
    problem: "Built systems-level trading infrastructure including order matching engine and market data feed handler optimized for microsecond-level latency. The system processes market data, matches orders using price-time priority, and generates execution reports with strict timing guarantees. Focus on performance optimization, lock-free data structures, and zero-copy networking.",
    approach: "Implemented order book using custom data structure with O(1) insert, O(1) cancel, O(1) best price lookup through hash map + linked list hybrid - Used lock-free SPSC queues for passing orders between threads avoiding contention and context switches - Optimized for cache locality by grouping related fields, aligning structures, and prefetching next cache lines - Implemented custom allocators with memory pooling for order objects, avoiding heap allocations during order processing - Built market data parser handling binary protocols with zero-copy parsing directly from socket buffers - Used kernel bypass techniques (DPDK-style) for network I/O reducing latency from network stack overhead - Profiled extensively with perf, flamegraphs, and hardware counters identifying bottlenecks in instruction cache misses and branch mispredictions",
    outcome: "Achieved sub-microsecond median latency for order matching through lock-free queue implementations, cache-aware data structures, and careful memory layout Processed 100K+ orders/sec with deterministic latency distribution through efficient C++ implementation avoiding allocations in hot paths",
    highlights: [
      "Achieved sub-microsecond median latency for order matching through lock-free queue implementations, cache-aware data structures, and careful memory layout",
      "Processed 100K+ orders/sec with deterministic latency distribution through efficient C++ implementation avoiding allocations in hot paths",
      "Built market data feed handler parsing binary protocols (FIX, ITCH) with zero-copy techniques reducing processing overhead"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/low-latency-matching-engine-market-data-feed' }
  },
  {
    id: 'backtest-engineering-framework',
    title: "Backtest Engineering Framework",
    subtitle: "Backtesting + Execution Modeling",
    category: 'Quantitative Finance',
    stack: ["C++", "Python", "NumPy", "Pandas", "Statistical Libraries"],
    problem: "Built rigorous backtesting framework emphasizing execution realism, transaction costs, and proper statistical evaluation of trading strategies. The system implements six-tier mathematical model (M0-M5) formalizing execution costs, sequential optimization, and asymptotic estimator properties.",
    approach: "Tested 100K+ strategy variations across US equity ETFs from 2005-2025 with comprehensive execution cost modeling Built framework preventing overfitting through proper train-test splits, walk-forward analysis, and multiple testing corrections",
    outcome: "Tested 100K+ strategy variations across US equity ETFs from 2005-2025 with comprehensive execution cost modeling Built framework preventing overfitting through proper train-test splits, walk-forward analysis, and multiple testing corrections",
    highlights: [
      "Tested 100K+ strategy variations across US equity ETFs from 2005-2025 with comprehensive execution cost modeling",
      "Built framework preventing overfitting through proper train-test splits, walk-forward analysis, and multiple testing corrections",
      "Implemented execution simulators modeling market microstructure, order routing, and realistic fill prices"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/backtest-engineering-framework' }
  },
  {
    id: 'portfolio-rebalancing-and-risk-management',
    title: "Portfolio Rebalancing and Risk Management",
    subtitle: "Portfolio Management + Risk Management",
    category: 'Quantitative Finance',
    stack: ["Python", "cvxpy", "Pandas", "NumPy", "Jupyter", "PostgreSQL"],
    problem: "Built portfolio management system with automated rebalancing, risk monitoring, and optimization. The system tracks positions, calculates risk metrics, and generates rebalancing recommendations maintaining target allocations and risk constraints.",
    approach: "Managed portfolio with target allocations across asset classes with automated drift monitoring and rebalancing triggers Calculated portfolio-level risk metrics including VaR, CVaR, and correlation structure with daily updates",
    outcome: "Managed portfolio with target allocations across asset classes with automated drift monitoring and rebalancing triggers Calculated portfolio-level risk metrics including VaR, CVaR, and correlation structure with daily updates",
    highlights: [
      "Managed portfolio with target allocations across asset classes with automated drift monitoring and rebalancing triggers",
      "Calculated portfolio-level risk metrics including VaR, CVaR, and correlation structure with daily updates",
      "Built optimization engine finding efficient frontier balancing return expectations against risk constraints"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/portfolio-rebalancing-risk-management' }
  },
  {
    id: 'accounting-operations-platform',
    title: "Accounting Operations Platform",
    subtitle: "Data Engineering + ETL Pipelines",
    category: 'Data Science',
    stack: ["Python", "pandas", "SQL", "PostgreSQL", "Airflow", "Great Expectations", "Prometheus"],
    problem: "Built ETL pipeline extracting data from multiple sources, transforming for analytics consumption, and loading into data warehouse with strong attention to data quality and reliability. The system supports downstream analytics, reporting, and machine learning workflows.",
    approach: "Implemented extraction from diverse sources including APIs, databases, CSV files, and third-party platforms with proper error handling - Built transformation layer handling data cleansing, type conversions, deduplication, and business logic with pandas and SQL - Designed dimensional model in PostgreSQL with fact and dimension tables following Kimball methodology - Created incremental loading strategy processing only changed records using timestamps and change data capture - Implemented data quality framework with Great Expectations defining expectations for completeness, uniqueness, and validity - Built orchestration with Airflow managing task dependencies, retries, and failure notifications - Created monitoring tracking row counts, processing time, and data quality metrics with Prometheus and Grafana",
    outcome: "Processed 500K+ records daily with automated data quality checks, schema validation, and anomaly detection preventing bad data propagation Reduced analysis time 65% from 8 hours to 2.5 hours through optimized transformations, incremental processing, and materialized views",
    highlights: [
      "Processed 500K+ records daily with automated data quality checks, schema validation, and anomaly detection preventing bad data propagation",
      "Reduced analysis time 65% from 8 hours to 2.5 hours through optimized transformations, incremental processing, and materialized views",
      "Built monitoring dashboard tracking pipeline health, data freshness, and quality metrics with automated alerting"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/accounting-operations-platform' }
  },
  {
    id: 'cloud-native-production-platform',
    title: "Cloud Native Production Platform",
    subtitle: "Data Engineering + Cloud Architecture",
    category: 'Cloud & Infrastructure',
    stack: ["Python", "PySpark", "AWS S3", "AWS EMR", "AWS Glue", "PostgreSQL", "Airflow"],
    problem: "Built scalable data processing platform on cloud infrastructure handling batch and streaming workloads with PySpark, leveraging managed services for storage, compute, and orchestration. The system demonstrates cloud-native architecture, distributed processing, and data modeling practices.",
    approach: "Implemented PySpark jobs with optimized partition strategies balancing parallelism with overhead - Built data lake on S3 with organized folder structure (bronze/silver/gold) representing processing stages - Created dimensional model with slowly changing dimensions, fact tables, and proper surrogate keys - Designed batch processing with incremental updates avoiding full reprocessing of historical data - Built monitoring tracking cluster utilization, job performance, and cost metrics - Implemented access control with IAM roles, bucket policies, and encryption at rest",
    outcome: "Processed large-scale datasets with PySpark achieving 2.1× throughput improvement through partition optimization, broadcast joins, and efficient transformations Built data modeling with proper schemas, normalization, and dimensional models supporting analytics queries",
    highlights: [
      "Processed large-scale datasets with PySpark achieving 2.1× throughput improvement through partition optimization, broadcast joins, and efficient transformations",
      "Built data modeling with proper schemas, normalization, and dimensional models supporting analytics queries",
      "Deployed on AWS using S3 for storage, EMR for Spark clusters, and Glue for metadata management"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/cloud-native-production-platform' }
  },
  {
    id: 'multi-source-data-integration',
    title: "Multi-Source Data Integration",
    subtitle: "Data Integration + ETL",
    category: 'Data Science',
    stack: ["Python", "SQL", "PostgreSQL", "Redis", "Airflow", "Kafka"],
    problem: "Built data integration platform consolidating data from heterogeneous sources with different schemas, formats, and update frequencies. The system handles schema evolution, conflict resolution, and maintains data lineage for regulatory compliance.",
    approach: "Implemented source adapters for different systems with standardized interfaces and error handling - Built schema registry managing schema versions, mappings, and evolution over time - Created conflict resolution engine handling duplicate records, missing values, and inconsistent data with configurable rules - Designed audit logging tracking all data changes with timestamps, source systems, and transformation logic - Built data quality dashboard showing source data quality metrics, transformation success rates, and consumer data quality - Implemented master data management resolving entity identities across systems",
    outcome: "Integrated 8 data sources including APIs, databases, files, and third-party platforms with automated schema mapping and validation Reduced manual data reconciliation 80% through automated conflict detection, resolution rules, and audit logging",
    highlights: [
      "Integrated 8 data sources including APIs, databases, files, and third-party platforms with automated schema mapping and validation",
      "Reduced manual data reconciliation 80% through automated conflict detection, resolution rules, and audit logging",
      "Built data lineage tracking showing data flow from source through transformations to consumption"
    ],
    links: {}
  },
  {
    id: 'marketing-attribution-response-modeling',
    title: "Marketing Attribution Response Modeling",
    subtitle: "Marketing Analytics + Attribution Modeling",
    category: 'Product Analytics',
    stack: ["Python", "R", "PyMC3", "cvxpy", "Pandas", "Plotly"],
    problem: "Built attribution models allocating credit across marketing touchpoints and marketing mix models quantifying channel effectiveness. The system handles multi-touch attribution, incrementality testing, and budget optimization.",
    approach: "Built Markov chain attribution model showing that email had 2× higher conversion contribution than previously estimated by last-touch attribution Implemented marketing mix model with adstock effects quantifying long-term impact of brand advertising",
    outcome: "Built Markov chain attribution model showing that email had 2× higher conversion contribution than previously estimated by last-touch attribution Implemented marketing mix model with adstock effects quantifying long-term impact of brand advertising",
    highlights: [
      "Built Markov chain attribution model showing that email had 2× higher conversion contribution than previously estimated by last-touch attribution",
      "Implemented marketing mix model with adstock effects quantifying long-term impact of brand advertising",
      "Created budget optimization recommending reallocation improving projected ROI 18%"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/marketing-attribution-response-modeling' }
  },
  {
    id: 'causal-inference-with-difference-in-differences',
    title: "Causal Inference with Difference-in-Differences",
    subtitle: "Causal Inference + Panel Data",
    category: 'Econometrics',
    stack: ["Python", "R", "statsmodels", "fixest", "Pandas", "Matplotlib"],
    problem: "Built difference-in-differences analysis framework estimating causal effects of policy interventions using panel data. The system handles parallel trends testing, synthetic controls, and event study designs.",
    approach: "Estimated causal effect of intervention with proper parallel trends validation and placebo tests Implemented synthetic control method when parallel trends assumption was violated",
    outcome: "Estimated causal effect of intervention with proper parallel trends validation and placebo tests Implemented synthetic control method when parallel trends assumption was violated",
    highlights: [
      "Estimated causal effect of intervention with proper parallel trends validation and placebo tests",
      "Implemented synthetic control method when parallel trends assumption was violated",
      "Built event study analysis showing treatment effect evolution over time"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/causal-inference-difference-in-differences' }
  },
  {
    id: 'experimental-design-and-power-analysis-tool',
    title: "Experimental Design and Power Analysis Tool",
    subtitle: "Experimental Design + Power Analysis",
    category: 'Econometrics',
    stack: ["Python", "statsmodels", "SciPy", "Streamlit", "Plotly"],
    problem: "Built tool for experimental design helping determine sample sizes, randomization strategies, and analysis plans. The system computes statistical power, minimum detectable effects, and optimal allocation ratios.",
    approach: "Created power calculator for various experimental designs (between-subjects, within-subjects, clustered) Built sample size recommendations balancing statistical power with cost constraints",
    outcome: "Created power calculator for various experimental designs (between-subjects, within-subjects, clustered) Built sample size recommendations balancing statistical power with cost constraints",
    highlights: [
      "Created power calculator for various experimental designs (between-subjects, within-subjects, clustered)",
      "Built sample size recommendations balancing statistical power with cost constraints",
      "Implemented optimal allocation finding best treatment-control split maximizing power given budget"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/experimental-design-power-analysis-tool' }
  },
  {
    id: 'census-data-analytics-and-visualization',
    title: "Census Data Analytics and Visualization",
    subtitle: "Demographic Analysis + Data Visualization",
    category: 'Data Science',
    stack: ["Python", "Pandas", "GeoPandas", "Plotly", "Dash", "Census API"],
    problem: "Built analytics platform exploring US Census data with interactive visualizations, demographic trends, and geographic analysis. The system demonstrates data processing, statistical analysis, and effective visualization design.",
    approach: "Processed census data covering 330M+ people with proper sampling weight handling and margin of error calculation Built interactive dashboards exploring demographic trends, income distribution, and housing patterns by geography",
    outcome: "Processed census data covering 330M+ people with proper sampling weight handling and margin of error calculation Built interactive dashboards exploring demographic trends, income distribution, and housing patterns by geography",
    highlights: [
      "Processed census data covering 330M+ people with proper sampling weight handling and margin of error calculation",
      "Built interactive dashboards exploring demographic trends, income distribution, and housing patterns by geography",
      "Created choropleth maps visualizing metrics at county, state, and national levels"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/census-data-analytics-visualization' }
  },
  {
    id: 'high-performance-storage-infrastructure',
    title: "High Performance Storage Infrastructure",
    subtitle: "Distributed Systems + Performance Optimization",
    category: 'Cloud & Infrastructure',
    stack: ["C++", "Python", "Redis", "Prometheus", "Grafana", "Docker", "Kubernetes"],
    problem: "Built distributed system optimized for performance and scalability using C++ and Python, with focus on profiling, bottleneck identification, and architectural optimization. The system demonstrates understanding of distributed systems concepts, performance engineering, and production reliability practices.",
    approach: "Profiled system using perf, valgrind, and flamegraphs identifying hot paths in CPU time, memory allocations, and I/O operations - Optimized critical paths with cache-friendly data layouts, prefetching, and branch prediction hints - Implemented lock-free data structures for shared state reducing contention and improving scalability - Built distributed coordination using consensus protocols for leader election and state replication - Designed partitioning strategy distributing load evenly across nodes with minimal cross-node communication - Created monitoring with SLOs/SLIs tracking latency distribution, throughput, error rates, and resource utilization - Implemented graceful degradation handling node failures, network partitions, and resource exhaustion",
    outcome: "Optimized performance achieving 3× throughput improvement through profiling-driven optimizations including cache-aware data structures, SIMD instructions, and reduced allocations Reduced latency 93% from 4.3s to 300ms p95 through bottleneck elimination, parallel processing, and efficient resource management",
    highlights: [
      "Optimized performance achieving 3× throughput improvement through profiling-driven optimizations including cache-aware data structures, SIMD instructions, and reduced allocations",
      "Reduced latency 93% from 4.3s to 300ms p95 through bottleneck elimination, parallel processing, and efficient resource management",
      "Handled 100K+ operations with linear scalability through partitioning, load balancing, and horizontal scaling"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/high-performance-storage-infrastructure' }
  },
  {
    id: 'real-time-data-processing-platform',
    title: "Real-Time Data Processing Platform",
    subtitle: "Stream Processing + Real-Time Systems",
    category: 'Cloud & Infrastructure',
    stack: ["Python", "Kafka", "AWS Lambda", "DynamoDB", "SQS", "CloudWatch", "Terraform"],
    problem: "Built streaming data platform processing high-volume event streams with low latency using Kafka-like technologies, AWS Lambda, and DynamoDB. The system handles 1,000+ events/sec with comprehensive monitoring and operational excellence.",
    approach: "Implemented event ingestion with Kafka-like streaming handling backpressure, partitioning, and consumer groups - Built processing pipeline with AWS Lambda functions triggered by stream events with proper error handling and retries - Designed DynamoDB schema with efficient access patterns, proper indexing, and capacity management - Created dead-letter queue handling failed messages with monitoring and manual intervention workflows - Implemented idempotency keys preventing duplicate processing of retried messages - Built monitoring tracking message throughput, processing latency, error rates, and queue depths - Designed scaling strategy with auto-scaling based on queue depth and processing latency",
    outcome: "Processed 1,000+ events/sec with sub-500ms end-to-end latency from ingestion through processing to storage Built fault-tolerant architecture with exactly-once semantics preventing data loss and duplicate processing",
    highlights: [
      "Processed 1,000+ events/sec with sub-500ms end-to-end latency from ingestion through processing to storage",
      "Built fault-tolerant architecture with exactly-once semantics preventing data loss and duplicate processing",
      "Achieved 99.8% uptime through automated recovery, health checks, and circuit breakers"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/real-time-data-processing-platform' }
  },
  {
    id: 'secure-data-processing-service',
    title: "Secure Data Processing Service",
    subtitle: "Security + Compliance",
    category: 'Cloud & Infrastructure',
    stack: ["Python", "C++", "PostgreSQL", "AWS KMS", "AWS Secrets Manager", "Docker", "Kubernetes"],
    problem: "Built data processing service with strong security and compliance controls including encryption, access management, auditing, and secrets handling. The system processes 500K+ sensitive records meeting regulatory requirements for data protection.",
    approach: "Implemented encryption at rest using AWS KMS with customer-managed keys and rotation policies - Built secure authentication with OAuth 2.0, JWT tokens, and multi-factor authentication support - Designed authorization system with fine-grained permissions at row and column levels - Created secrets management using AWS Secrets Manager with automatic rotation and access controls - Implemented input validation and sanitization preventing injection attacks and data corruption - Built audit logging capturing all data operations with immutable log storage - Designed compliance reporting generating evidence for auditors showing access patterns and control effectiveness",
    outcome: "Implemented least-privilege access with role-based permissions, audit logging, and compliance reporting meeting security requirements Reduced security incidents 100% through secure coding practices, input validation, and defense-in-depth architecture",
    highlights: [
      "Implemented least-privilege access with role-based permissions, audit logging, and compliance reporting meeting security requirements",
      "Reduced security incidents 100% through secure coding practices, input validation, and defense-in-depth architecture",
      "Built audit system tracking all data access with timestamps, user identity, and operation details for compliance"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/secure-data-processing-service' }
  },
  {
    id: 'kubernetes-monitoring-and-autoscaling-stack',
    title: "Kubernetes Monitoring and Autoscaling Stack",
    subtitle: "Kubernetes + Monitoring",
    category: 'Cloud & Infrastructure',
    stack: ["Kubernetes", "Prometheus", "Grafana", "Jaeger", "Helm", "Terraform", "Python"],
    problem: "Built comprehensive monitoring and autoscaling infrastructure for Kubernetes workloads using Prometheus, Grafana, and custom metrics. The system provides observability into cluster health, application performance, and resource utilization with automated scaling based on demand.",
    approach: "Deployed Prometheus with service discovery automatically scraping metrics from all pods and services - Built custom metrics exporters for application-specific metrics beyond standard resource utilization - Created Grafana dashboards with drill-down from cluster overview to pod-level details - Implemented horizontal pod autoscaling based on custom metrics (request queue depth, processing latency) beyond CPU/memory - Built vertical pod autoscaling adjusting resource requests/limits based on historical usage patterns - Designed cluster autoscaling adding/removing nodes based on pending pods and resource pressure - Created alerting rules with proper severity levels, routing, and on-call escalation policies - Implemented distributed tracing with Jaeger showing request flow across microservices",
    outcome: "Reduced infrastructure costs 30% through intelligent autoscaling responding to actual load patterns rather than peak capacity provisioning Improved incident detection time 60% through comprehensive alerting covering application errors, resource exhaustion, and infrastructure issues",
    highlights: [
      "Reduced infrastructure costs 30% through intelligent autoscaling responding to actual load patterns rather than peak capacity provisioning",
      "Improved incident detection time 60% through comprehensive alerting covering application errors, resource exhaustion, and infrastructure issues",
      "Built dashboards providing unified view of cluster health, application metrics, and business KPIs"
    ],
    links: {}
  },
  {
    id: 'multimodal-ocr-and-vlm-serving-stack',
    title: "Multimodal OCR and VLM Serving Stack",
    subtitle: "OCR + Vision Models",
    category: 'Cloud & Infrastructure',
    stack: ["Python", "C++", "Redis", "Helm", "Docker", "Kubernetes", "CUDA"],
    problem: "Built serving stack for OCR, vision models, and GPU-heavy inference workflows with queue-backed workers and memory-aware caching. The system handles document processing, image analysis, and multimodal understanding at scale.",
    approach: "Reduced end-to-end latency by 45% through batching, queue-backed workers, and more efficient GPU-serving workflows Added deployment tooling and service-level observability that improved debugging speed, production reliability, and operational visibility",
    outcome: "Reduced end-to-end latency by 45% through batching, queue-backed workers, and more efficient GPU-serving workflows Added deployment tooling and service-level observability that improved debugging speed, production reliability, and operational visibility",
    highlights: [
      "Reduced end-to-end latency by 45% through batching, queue-backed workers, and more efficient GPU-serving workflows",
      "Added deployment tooling and service-level observability that improved debugging speed, production reliability, and operational visibility",
      "Achieved 95% GPU utilization through intelligent batching and request scheduling"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/multimodal-ocr-vlm-serving-stack' }
  },
  {
    id: 'linux-latency-diagnostics-and-scheduler-profiler',
    title: "Linux Latency Diagnostics and Scheduler Profiler",
    subtitle: "Linux Internals + Latency Profiling",
    category: 'Cloud & Infrastructure',
    stack: ["Python", "Bash", "perf", "Grafana", "Linux", "eBPF-style tooling"],
    problem: "Built diagnostics for tracking syscall latency, context switches, scheduler delays, and interrupt behavior in performance-sensitive Linux services. The system helps debug tail latency issues, identify performance regressions, and understand system behavior under load.",
    approach: "Improved root-cause analysis speed by 45% across latency-sensitive systems through trace pipelines and scheduler-aware profiling Surfaced race conditions, CPU hot spots, and tail-latency regressions through dashboards and targeted analysis workflows",
    outcome: "Improved root-cause analysis speed by 45% across latency-sensitive systems through trace pipelines and scheduler-aware profiling Surfaced race conditions, CPU hot spots, and tail-latency regressions through dashboards and targeted analysis workflows",
    highlights: [
      "Improved root-cause analysis speed by 45% across latency-sensitive systems through trace pipelines and scheduler-aware profiling",
      "Surfaced race conditions, CPU hot spots, and tail-latency regressions through dashboards and targeted analysis workflows",
      "Built automated detection of performance regressions comparing latency distributions across releases"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/linux-latency-diagnostics-scheduler-profiler' }
  },
  {
    id: 'device-telemetry-sdk-and-recorder',
    title: "Device Telemetry SDK and Recorder",
    subtitle: "Telemetry + SDK Development",
    category: 'Cloud & Infrastructure',
    stack: ["C++", "Python", "Linux", "PostgreSQL", "Git", "Protocol Buffers"],
    problem: "Built a Linux-first telemetry SDK and recorder for structured event ingestion, binary parsing, and reliable buffering in device-adjacent workflows. The system collects diagnostic data from embedded devices with minimal overhead.",
    approach: "Reduced processing latency by 42% through efficient binary parsing, async pipelines, and better buffering strategies Added Python diagnostics for log collection, replay, and verification that improved defect reproduction speed and operational repeatability",
    outcome: "Reduced processing latency by 42% through efficient binary parsing, async pipelines, and better buffering strategies Added Python diagnostics for log collection, replay, and verification that improved defect reproduction speed and operational repeatability",
    highlights: [
      "Reduced processing latency by 42% through efficient binary parsing, async pipelines, and better buffering strategies",
      "Added Python diagnostics for log collection, replay, and verification that improved defect reproduction speed and operational repeatability",
      "Built compression reducing telemetry data size 70% lowering storage and transmission costs"
    ],
    links: {}
  },
  {
    id: 'distributed-data-acquisition-system',
    title: "Distributed Data Acquisition System",
    subtitle: "Data Acquisition + Streaming Systems",
    category: 'Cloud & Infrastructure',
    stack: ["C++", "Python", "Linux", "Concurrent Data Structures", "Real-Time Systems"],
    problem: "Built a high-rate data acquisition and storage system handling streaming sensor data at scale with lock-free structures and zero-copy networking. The system collects data from distributed sensors with microsecond-level timing accuracy.",
    approach: "Developed a production-grade C++ system with profiling-driven tuning, strong error handling, and automated testing Optimized throughput and latency using efficient resource management and concurrency-aware design",
    outcome: "Developed a production-grade C++ system with profiling-driven tuning, strong error handling, and automated testing Optimized throughput and latency using efficient resource management and concurrency-aware design",
    highlights: [
      "Developed a production-grade C++ system with profiling-driven tuning, strong error handling, and automated testing",
      "Optimized throughput and latency using efficient resource management and concurrency-aware design",
      "Achieved million+ samples/sec throughput with deterministic latency distribution"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/distributed-data-acquisition-system' }
  },
  {
    id: 'real-time-control-system',
    title: "Real-Time Control System",
    subtitle: "Embedded Systems + Real-Time Processing",
    category: 'Cloud & Infrastructure',
    stack: ["C++", "Python", "Linux", "RTOS", "Embedded Systems"],
    problem: "Developed real-time control algorithms and data acquisition systems processing high-rate sensor data with deterministic timing and concurrent execution constraints. The system demonstrates embedded systems knowledge and real-time programming skills.",
    approach: "Implemented testing, deployment, and monitoring workflows to support reliability under sustained workloads Focused on efficient data structures, concurrency, and debugging for performance-sensitive runtime environments",
    outcome: "Implemented testing, deployment, and monitoring workflows to support reliability under sustained workloads Focused on efficient data structures, concurrency, and debugging for performance-sensitive runtime environments",
    highlights: [
      "Implemented testing, deployment, and monitoring workflows to support reliability under sustained workloads",
      "Focused on efficient data structures, concurrency, and debugging for performance-sensitive runtime environments",
      "Met hard real-time constraints with <100us worst-case latency through careful design and testing"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/real-time-control-system' }
  },
  {
    id: 'geometry-processing-pipeline',
    title: "Geometry Processing Pipeline",
    subtitle: "Computational Geometry + Mesh Processing",
    category: 'Cloud & Infrastructure',
    stack: ["C++", "Python", "SIMD", "Parallel Computing", "Numerical Algorithms", "OpenMP"],
    problem: "Architected a geometry processing pipeline that converts complex 3D models into optimized machine instructions using efficient mesh processing, path planning, and collision detection. The system handles CAD models, generates toolpaths, and optimizes for manufacturing constraints.",
    approach: "Optimized performance through C++ metaprogramming, SIMD instructions, and parallelization Maintained high throughput while preserving numerical precision and geometric robustness",
    outcome: "Optimized performance through C++ metaprogramming, SIMD instructions, and parallelization Maintained high throughput while preserving numerical precision and geometric robustness",
    highlights: [
      "Optimized performance through C++ metaprogramming, SIMD instructions, and parallelization",
      "Maintained high throughput while preserving numerical precision and geometric robustness",
      "Reduced processing time 60% through algorithm optimization and parallel computation"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/geometry-processing-pipeline' }
  },
  {
    id: 'firmware-build-and-verification-tooling',
    title: "Firmware Build and Verification Tooling",
    subtitle: "Build Tooling + Verification",
    category: 'Cloud & Infrastructure',
    stack: ["C", "Python", "Bash", "Docker", "CI/CD", "Make"],
    problem: "Developed build and verification tooling for device software packages using scripted validation, deterministic artifacts, and command-line automation. The system ensures firmware quality, reproducibility, and proper integration with hardware.",
    approach: "Improved release consistency by 38% through scripted validation, reproducible build artifacts, and better operational automation Simplified root-cause analysis through debug utilities, automated tests, and verification scripts for hardware-software integration workflows",
    outcome: "Improved release consistency by 38% through scripted validation, reproducible build artifacts, and better operational automation Simplified root-cause analysis through debug utilities, automated tests, and verification scripts for hardware-software integration workflows",
    highlights: [
      "Improved release consistency by 38% through scripted validation, reproducible build artifacts, and better operational automation",
      "Simplified root-cause analysis through debug utilities, automated tests, and verification scripts for hardware-software integration workflows",
      "Reduced firmware build time 50% through incremental compilation and caching"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/firmware-build-and-verification-tooling' }
  },
  {
    id: 'infrastructure-automation-framework',
    title: "Infrastructure Automation Framework",
    subtitle: "Automation + GitOps",
    category: 'Cloud & Infrastructure',
    stack: ["Python", "Go", "Terraform", "Ansible", "Helm", "Git", "Kubernetes"],
    problem: "Built automation platform using GitOps principles for infrastructure management, deployment, and operations. The system uses Terraform for infrastructure-as-code, Helm for application deployment, and Git as source of truth.",
    approach: "Reduced deployment time 75% from manual processes to automated GitOps workflows Eliminated configuration drift through declarative infrastructure and automated reconciliation",
    outcome: "Reduced deployment time 75% from manual processes to automated GitOps workflows Eliminated configuration drift through declarative infrastructure and automated reconciliation",
    highlights: [
      "Reduced deployment time 75% from manual processes to automated GitOps workflows",
      "Eliminated configuration drift through declarative infrastructure and automated reconciliation",
      "Improved audit trail with all infrastructure changes tracked in Git with proper review process"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/infrastructure-automation-framework' }
  },
  {
    id: 'ads-integrity-content-moderation-platform',
    title: "Ads Integrity Content Moderation Platform",
    subtitle: "Trust & Safety + Real-Time Review",
    category: 'ML & AI Systems',
    stack: ["Python", "FastAPI", "PyTorch", "Redis", "PostgreSQL", "Docker"],
    problem: "Ad platforms need to block unsafe, low-quality, or policy-violating content quickly without overwhelming reviewers or slowing down campaign approval.",
    approach: "Built a moderation pipeline combining rule-based checks, NLP classifiers, and reviewer escalation workflows so high-risk content could be triaged automatically while preserving auditability and policy consistency.",
    outcome: "Delivered a production-minded trust and safety workflow that improves moderation speed, reduces manual review burden, and gives teams clearer evidence for enforcement decisions.",
    highlights: [
      "Hybrid moderation stack with automated policy checks and model-based risk scoring",
      "Reviewer escalation path with traceable decisions and audit-friendly logging",
      "Low-latency screening flow designed for real-time ad review operations"
    ],
    links: { github: 'https://github.com/sgupta285/Personal-Projects/tree/main/ads_integrity_content_moderation_platform' }
  }
];
