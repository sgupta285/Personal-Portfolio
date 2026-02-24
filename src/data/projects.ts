export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack & Real-Time' | 'Mobile' | 'ML & AI Systems' | 'Quantitative Finance' | 'Product Analytics' | 'Data Science' | 'Econometrics';
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
  highlights: string[];
  links: {
    tableau?: string;
    report?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'clearclause',
    title: 'ClearClause — Production Legal RAG Search',
    subtitle: 'Contracts / Legal Docs',
    category: 'ML & AI Systems',
    stack: ['Python', 'FastAPI', 'pgvector', 'Redis', 'Docker', 'Kubernetes'],
    problem: 'Legal documents are long, high-stakes, and full of edge cases—basic keyword search misses critical clauses, and naïve LLM Q&A hallucinates without reliable grounding. I needed a system that could retrieve the right passages consistently and generate answers that remain traceable to the source.',
    approach: 'Built an end-to-end RAG pipeline using hybrid retrieval (semantic + lexical/BM25) with reranking to improve relevance in tricky legal phrasing. Implemented Redis semantic caching and response streaming to cut tail latency, and deployed the system on Kubernetes with HPA to keep performance stable under load. Added production guardrails like PII redaction, structured validation, and observability instrumentation to detect regressions across latency, retrieval quality, and uptime.',
    outcome: 'Shipped a production-grade legal retrieval system achieving 0.87 precision@10 and a 93% p95 latency reduction (4.3s → 300ms) while supporting 200+ QPS with autoscaling and robust monitoring.',
    highlights: [
      'Hybrid retrieval + reranking for high-precision legal passage selection',
      'p95 latency improved 93% (4.3s → 300ms) using caching + streaming',
      'Kubernetes autoscaling (HPA) + observability for stable production operation'
    ],
    links: {}
  },
  {
    id: 'buckyconnect',
    title: 'BuckyConnect — Real-Time Collaboration Platform',
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
    links: {}
  },
  {
    id: 'ai-trend-radar',
    title: 'AI Trend Radar — Social Trend Detection & Marketing Insights',
    subtitle: 'LLM + Multi-Source Signal Fusion',
    category: 'ML & AI Systems',
    stack: ['Python', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    problem: 'Online trends move faster than traditional analytics dashboards. Teams miss early signals because data is fragmented across platforms, noisy (spam/reposts), and hard to interpret quickly. I needed a system that could (1) detect emerging trends early, (2) explain why something is trending, and (3) translate raw signals into actionable "what should we do next?" insights—without relying on manual monitoring.',
    approach: 'Built an end-to-end trend intelligence pipeline that continuously ingests content from multiple public sources (social posts, headlines, and community discussions), normalizes text + metadata, and generates trend candidates via time-windowed frequency/velocity scoring. To reduce noise, I added deduping and clustering so near-duplicate posts and re-shares don\'t inflate signal strength, then used embeddings to group semantically similar mentions into a single "trend cluster." On top of clustering, I added an LLM summarization + labeling layer that produces: a one-paragraph explanation of the trend, key entities (brands/people/products), sentiment direction, and "what content angles are working." Finally, I implemented a dashboard view that ranks trends by momentum, novelty, and persistence, with drill-down into example posts so users can verify the signal themselves.',
    outcome: 'Delivered a working "trend radar" experience that surfaces emerging topics earlier than manual monitoring, consolidates scattered mentions into coherent clusters, and produces stakeholder-ready summaries with evidence links so marketing/product teams can move from "signal" → "narrative" → "next actions" quickly.',
    highlights: [
      'Multi-source ingestion → normalization → clustering → trend ranking → LLM insight generation',
      'Early-signal scoring using time-window velocity + novelty + persistence heuristics',
      'Semantic clustering to reduce noise and group similar mentions into a single trend story',
      'Evidence-backed summaries with drill-down into representative posts for human verification'
    ],
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
  },
  {
    id: 'demand-elasticity',
    title: 'Retail Demand Elasticity',
    subtitle: 'ARIMA/VAR + Cointegration + Structural Break Testing',
    category: 'Data Science',
    stack: ['Python', 'statsmodels', 'R', 'forecast', 'vars'],
    problem: 'Elasticity estimates can be misleading if time-series dynamics, structural breaks, or long-run relationships aren\'t modeled correctly—especially when using results to simulate pricing counterfactuals.',
    approach: 'Modeled demand dynamics using ARIMA + VAR, validated long-run relationships with cointegration, and tested stability with Chow tests for structural breaks. Used impulse response functions to simulate counterfactual paths and communicate how shocks or pricing changes propagate through demand over time.',
    outcome: 'Delivered a rigorous elasticity framework grounded in time-series diagnostics and counterfactual simulation, suitable for scenario analysis rather than single-point estimates.',
    highlights: [
      'ARIMA/VAR modeling + cointegration validation',
      'Structural break detection (Chow tests)',
      'Counterfactual simulation via impulse response functions'
    ],
    links: {}
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
    links: {}
  },
  {
    id: 'product-metrics',
    title: 'Product Metrics & Analytics Framework',
    subtitle: 'Funnel + Health Metrics + Faster Insight Loop',
    category: 'Product Analytics',
    stack: ['SQL', 'Python', 'Tableau'],
    problem: 'Without a consistent metrics layer, product decisions become slow and inconsistent—teams spend days recreating the same analyses and arguing about definitions rather than improving the product.',
    approach: 'Built a product analytics framework tracking 15+ health metrics across 10K+ users, including funnel views and onboarding breakdowns. Standardized metric definitions and built dashboards to accelerate repeat analysis. Used the framework to identify onboarding drop-offs and prioritize roadmap changes based on adoption and engagement signals.',
    outcome: 'Reduced time-to-insight from 3 days → 10 minutes, identified low-value features to sunset, and drove a measurable +15% engagement lift after focused iteration.',
    highlights: [
      '15+ metrics, 10K+ users tracked in a consistent framework',
      '3 days → 10 minutes time-to-insight improvement',
      'Funnel + onboarding diagnostics → roadmap actions → +15% engagement'
    ],
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
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
    links: {}
  },
  {
    id: 'suicide-rates',
    title: 'Death Rates by Suicide Analysis',
    subtitle: 'Large-scale Hypothesis Testing & Predictive Risk Modeling',
    category: 'Data Science',
    stack: ['R', 'ggplot2', 'TensorFlow', 'Apache Spark'],
    problem: 'Large-scale suicide rate data required efficient processing, statistical testing, and predictive risk modeling across demographics.',
    approach: 'Conducted large-scale hypothesis testing modeling suicide and fatal datasets, uncovering key demographic trends using hypothesis testing and clustering algorithms. Implemented Apache Spark for distributed processing, reducing data transformation time by 50% on massive datasets. Designed predictive risk assessment models using TensorFlow, enabling data-driven policy recommendations.',
    outcome: 'Achieved 50% reduction in data transformation time through Spark. Delivered statistically rigorous hypothesis tests, clustering insights, and exploratory risk predictions with clear visual communication for policy recommendations.',
    highlights: [
      'Hypothesis testing uncovering key demographic trends',
      'Apache Spark reduced data transformation time by 50%',
      'TensorFlow predictive risk models for policy recommendations'
    ],
    links: {}
  }
];