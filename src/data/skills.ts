export interface SkillCluster {
  category: string;
  skills: Array<{
    name: string;
    proficiency?: string;
  }>;
}

export const skillClusters: SkillCluster[] = [
  {
    category: 'Languages & Libraries',
    skills: [
      { name: 'Python', proficiency: 'Advanced: Pandas, NumPy, scikit-learn, Statsmodels, FastAPI' },
      { name: 'JavaScript (ES6+)', proficiency: 'Advanced: React.js, Next.js, Redux' },
      { name: 'TypeScript', proficiency: 'Advanced: Full-stack development' },
      { name: 'Java', proficiency: 'Intermediate: Android, backend services' },
      { name: 'C++', proficiency: 'Advanced: Systems programming, HPC, Quant Finance' },
      { name: 'Kotlin', proficiency: 'Intermediate: Native Android development' },
      { name: 'SQL', proficiency: 'Advanced: PostgreSQL, BigQuery, database design' },
      { name: 'HTML', proficiency: 'Advanced: Semantic markup' },
      { name: 'CSS', proficiency: 'Advanced: Responsive design' },
      { name: 'R', proficiency: 'Advanced: tidyverse, ggplot2, statsmodels, econometrics' }
    ]
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'React.js', proficiency: 'Advanced: Complex SPAs, hooks' },
      { name: 'Next.js', proficiency: 'Advanced: SSR, SSG applications' },
      { name: 'Redux', proficiency: 'Advanced: State management' },
      { name: 'GraphQL', proficiency: 'Advanced: Query optimization, real-time data' },
      { name: 'Node.js', proficiency: 'Advanced: Backend services' },
      { name: 'Express.js', proficiency: 'Advanced: RESTful APIs' },
      { name: 'FastAPI', proficiency: 'Advanced: High-performance Python APIs' },
      { name: 'REST APIs', proficiency: 'Advanced: Design and implementation' },
      { name: 'Tailwind CSS', proficiency: 'Advanced: Rapid UI development' },
      { name: 'React Native', proficiency: 'Intermediate: Cross-platform mobile' },
      { name: 'Docker', proficiency: 'Advanced: Containerization' },
      { name: 'Kubernetes', proficiency: 'Intermediate: Container orchestration, HPA' },
      { name: 'Firebase', proficiency: 'Advanced: Auth, Realtime DB' },
      { name: 'MongoDB', proficiency: 'Intermediate: NoSQL databases' },
      { name: 'PostgreSQL', proficiency: 'Advanced: Relational databases, indexing, pooling' },
      { name: 'Redis', proficiency: 'Advanced: Caching, Pub/Sub, state management' },
      { name: 'WebSockets', proficiency: 'Advanced: Real-time communication' }
    ]
  },
  {
    category: 'ML, Analytics & Visualization',
    skills: [
      { name: 'Linear/Logistic Regression', proficiency: 'Advanced: Statistical modeling' },
      { name: 'Tree-Based Models', proficiency: 'Advanced: Random Forest, XGBoost, LightGBM' },
      { name: 'Cross-Validation', proficiency: 'Advanced: Model evaluation' },
      { name: 'Hyper-parameter Tuning', proficiency: 'Advanced: Optuna, Grid Search' },
      { name: 'A/B Testing', proficiency: 'Advanced: Hypothesis testing, power analysis' },
      { name: 'SHAP', proficiency: 'Intermediate: Model explainability' },
      { name: 'NLP & Embeddings', proficiency: 'Advanced: Semantic search, clustering' },
      { name: 'RAG (Retrieval-Augmented Generation)', proficiency: 'Advanced: Hybrid retrieval, reranking' },
      { name: 'LLMs', proficiency: 'Intermediate: Summarization, labeling, prompt engineering' },
      { name: 'Power BI', proficiency: 'Intermediate: Business dashboards' },
      { name: 'Statistical Hypothesis Testing', proficiency: 'Advanced: Econometrics' },
      { name: 'Scalable Distributed ML', proficiency: 'Intermediate: Apache Spark' },
      { name: 'Time Series Forecasting', proficiency: 'Advanced: Prophet, ARIMA, VAR' }
    ]
  },
  {
    category: 'Data and Analysis',
    skills: [
      { name: 'pandas', proficiency: 'Advanced: Data manipulation' },
      { name: 'NumPy', proficiency: 'Advanced: Numerical computing' },
      { name: 'SciPy', proficiency: 'Intermediate: Scientific computing' },
      { name: 'statsmodels', proficiency: 'Advanced: Statistical modeling, econometrics' },
      { name: 'scikit-learn', proficiency: 'Advanced: ML pipelines' },
      { name: 'Stata', proficiency: 'Advanced: Econometric analysis, DID, causal inference' },
      { name: 'Tableau', proficiency: 'Advanced: Interactive dashboards' },
      { name: 'Power BI', proficiency: 'Intermediate: Business intelligence' },
      { name: 'Statistics', proficiency: 'Advanced: Hypothesis testing, regression, causal inference' },
      { name: 'Qualitative Analysis', proficiency: 'Intermediate: Research methods' },
      { name: 'TimescaleDB', proficiency: 'Intermediate: Time-series databases' },
      { name: 'Locust', proficiency: 'Intermediate: Load testing' },
      { name: 'pytest', proficiency: 'Advanced: Unit/integration testing' }
    ]
  },
  {
    category: 'Quantitative Finance',
    skills: [
      { name: 'Options Pricing', proficiency: 'Advanced: Black-Scholes, Monte Carlo, Greeks' },
      { name: 'Algorithmic Trading', proficiency: 'Advanced: Backtesting, walk-forward validation' },
      { name: 'Statistical Arbitrage', proficiency: 'Advanced: Pairs trading, cointegration' },
      { name: 'Kalman Filtering', proficiency: 'Intermediate: Dynamic hedge ratios' },
      { name: 'Monte Carlo Simulation', proficiency: 'Advanced: Risk modeling, variance reduction' },
      { name: 'SIMD & OpenMP', proficiency: 'Intermediate: High-performance computing' },
      { name: 'Eigen & Boost', proficiency: 'Intermediate: C++ numerical libraries' },
      { name: 'Risk Metrics', proficiency: 'Advanced: Sharpe, volatility, Greeks' },
      { name: 'Excel (VBA)', proficiency: 'Advanced: Financial modeling' },
      { name: 'DCF', proficiency: 'Intermediate: Valuation models' }
    ]
  },
  {
    category: 'Econometrics & Causal Inference',
    skills: [
      { name: 'Difference-in-Differences (DID)', proficiency: 'Advanced: Callaway-Sant\'Anna, event studies' },
      { name: 'Instrumental Variables (2SLS)', proficiency: 'Advanced: LATE estimation' },
      { name: 'Fixed Effects Models', proficiency: 'Advanced: Panel data analysis' },
      { name: 'Randomized Controlled Trials', proficiency: 'Advanced: Experimental design, power analysis' },
      { name: 'Cointegration', proficiency: 'Advanced: Johansen test, VAR models' },
      { name: 'Structural Break Testing', proficiency: 'Intermediate: Chow tests' },
      { name: 'Causal Forests', proficiency: 'Intermediate: Heterogeneity analysis' },
      { name: 'Cox Proportional Hazards', proficiency: 'Intermediate: Survival analysis' },
      { name: 'R Packages', proficiency: 'Advanced: did, fixest, estimatr, randomizr, vars' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React.js', proficiency: 'Advanced: Production applications' },
      { name: 'Node.js', proficiency: 'Advanced: Server-side JavaScript' },
      { name: 'FastAPI', proficiency: 'Advanced: High-performance APIs' },
      { name: 'LangChain', proficiency: 'Intermediate: LLM applications' },
      { name: 'TensorFlow', proficiency: 'Intermediate: Deep learning' },
      { name: 'React Native', proficiency: 'Intermediate: Mobile development' },
      { name: 'XGBoost & LightGBM', proficiency: 'Advanced: Gradient boosting' },
      { name: 'Prophet & ARIMA', proficiency: 'Advanced: Time series forecasting' }
    ]
  },
  {
    category: 'Cloud and DevOps',
    skills: [
      { name: 'AWS', proficiency: 'Advanced: Lambda, S3, EC2, ECS, CloudFront, DynamoDB' },
      { name: 'GCP (BigQuery, Vertex AI)', proficiency: 'Intermediate: ML platforms' },
      { name: 'Docker', proficiency: 'Advanced: Containerization' },
      { name: 'Kubernetes', proficiency: 'Intermediate: HPA, production deployment' },
      { name: 'Git', proficiency: 'Advanced: Version control' },
      { name: 'VS Code', proficiency: 'Advanced: Development environment' },
      { name: 'Linux', proficiency: 'Intermediate: System administration' },
      { name: 'Postman', proficiency: 'Advanced: API testing' },
      { name: 'Android Studio', proficiency: 'Intermediate: Android development' },
      { name: 'Prometheus & Grafana', proficiency: 'Intermediate: Monitoring & observability' },
      { name: 'Jaeger', proficiency: 'Basic: Distributed tracing' },
      { name: 'GitHub Actions', proficiency: 'Intermediate: CI/CD pipelines' }
    ]
  },
  {
    category: 'Specialized Libraries & Tools',
    skills: [
      { name: 'pgvector', proficiency: 'Intermediate: Vector similarity search' },
      { name: 'MLflow', proficiency: 'Intermediate: Model versioning & tracking' },
      { name: 'SMOTE', proficiency: 'Intermediate: Class imbalance handling' },
      { name: 'HDBSCAN', proficiency: 'Intermediate: Clustering algorithms' },
      { name: 'OpenTelemetry', proficiency: 'Basic: Observability instrumentation' },
      { name: 'Circuit Breakers', proficiency: 'Intermediate: Resilience patterns' },
      { name: 'Wit.AI', proficiency: 'Intermediate: NLP & voice commands' },
      { name: 'WebRTC', proficiency: 'Intermediate: Real-time video/audio' }
    ]
  }
];