export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  website?: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'specme',
    company: 'SpecMe',
    role: 'Co-Founder',
    period: 'November 2025 - Present',
    startDate: '2025-11',
    endDate: 'present',
    website: 'https://specme.ai',
    bullets: [
      'Building an AI-powered specification engine that ingests unstructured product input from Slack, GitHub, Jira, and meeting transcripts and outputs versioned, engineer-ready technical specs.',
      'Architected the core system: NLP parsing for multi-source ingestion, diff generation with semantic versioning, and automated next-step recommendation logic.',
      'Built production infrastructure including OAuth 2.0/SSO authentication flows, Stripe billing across four pricing tiers, GitHub API integration for PR-level spec delivery, and SSR/SSG migration for performance and SEO.',
      'Designed an event-driven backend using Next.js serverless functions, PostgreSQL for persistent state, and webhook-based real-time sync across connected platforms.',
      'Shipping MVP with early design partners across mid-market and enterprise product teams; actively onboarding pilot users.'
    ]
  },
  {
    id: 'venture-build-lab',
    company: 'Venture Build Technology Exploration Lab, Wisconsin School of Business',
    role: 'Founder',
    period: 'September 2025 - December 2025',
    startDate: '2025-09',
    endDate: '2025-12',
    website: 'https://clearclause.net',
    bullets: [
      "Selected as 1 of 20 founders from 300+ applicants into UW-Madison's competitive venture creation program under Sandra Bradley at the Wisconsin School of Business.",
      'Designed and built two production-grade AI systems from zero: an NLP-powered contract analysis platform and a real-time trend intelligence engine, both serving live users.',
      'Engineered full-stack architecture using React, AWS Lambda, API Gateway, Terraform IaC, PostgreSQL, and LangChain-based RAG pipelines with custom embedding models.',
      'Implemented CI/CD workflows, containerized microservices, Redis caching layers, and observability infrastructure including metrics dashboards, automated alerting, and canary deployments.',
      'Ran 30+ structured customer discovery sessions with engineering and product leaders at Fortune 500 companies to validate technical feasibility and product-market fit.'
    ]
  },
  {
    id: 'uw-madison',
    company: 'Institute on Aging (UW–Madison)',
    role: 'Student IT Support Specialist',
    period: 'February 2024 – Present',
    startDate: '2024-02',
    endDate: 'present',
    website: 'https://midus.wisc.edu/',
    bullets: [
      'Built and maintained the MIDUS research website (midus.wisc.edu) on WordPress, delivering a modern accessible UI and shipping custom PHP + SQL modules to streamline publications and data access.',
      'Modernized backend/research infrastructure for 200+ researchers, improving performance by 35% via REST API redesign, PostgreSQL optimization, and Redis caching.',
      'Automated recurring updates and data operations with Python tooling, including a BeautifulSoup-based scraper to keep the national holiday calendar current, eliminating manual entry and reducing system/query load.',
      'Implemented production guardrails (validation + auth/security controls like OAuth2/RBAC/JWT, rate limiting, audit-friendly workflows) to keep data pipelines reliable and maintainable.'
    ]
  },
  {
    id: 'augmented',
    company: 'Augmented Transformations Pvt. Ltd.',
    role: 'Software Engineer Intern',
    period: 'July 2025 – August 2025',
    startDate: '2025-07',
    endDate: '2025-08',
    bullets: [
      'Designed a high-performance Node.js/TypeScript API Gateway consolidating 5+ microservices, improving cross-service latency and response consistency via intelligent routing + connection pooling.',
      'Introduced Redis caching with sane invalidation patterns to cut read latency and reduce load on PostgreSQL (p95 improvement reflected across endpoints).',
      'Containerized legacy services with Docker multi-stage builds, shrinking images significantly and enabling cleaner CI/CD and future Kubernetes migration readiness.',
      'Added tracing/observability (e.g., Jaeger) to debug distributed request paths and reduce time-to-diagnosis for production issues.'
    ]
  },
  {
    id: 'jk-cement',
    company: 'JK Cement',
    role: 'Financial Analyst Intern',
    period: 'June 2025 – July 2025',
    startDate: '2025-06',
    endDate: '2025-07',
    bullets: [
      'Built executive-ready KPI reporting and Power BI dashboards (incl. DAX) to track operational performance with self-serve drilldowns and anomaly-style monitoring.',
      'Conducted competitor/market research, synthesizing 10+ competitor reports into structured datasets and executive insights for strategy and benchmarking.',
      'Performed rigorous finance/strategy analysis (e.g., DCF + Monte Carlo, scenario/sensitivity analysis) to quantify uncertainty and support decision-making.',
      'Delivered stakeholder-facing artifacts (dashboards + concise summaries) that made reporting faster and more repeatable.'
    ]
  },
  {
    id: 'digivate',
    company: 'Digivate Labs',
    role: 'Data Processing Engineer Intern',
    period: 'June 2024 – August 2024',
    startDate: '2024-06',
    endDate: '2024-08',
    bullets: [
      'Architected and deployed scalable AI document processing pipelines on GCP using Vertex AI (plus TensorFlow / AutoML), covering classification, OCR, document splitting, and high-throughput processing.',
      'Improved retrieval quality and speed by building a modern embedding + chunking workflow (incl. LangChain + vector stores) and reworking indexing/search design for real-time querying.',
      'Drove major performance gains: p95 latency down ~40% (pipeline/indexing refactor + semantic caching) and throughput scaling to 500K+ documents/day with robust monitoring.',
      'Productionized with observability and release safety: Prometheus/Grafana/OpenTelemetry, plus deployment hygiene (canary/rollback patterns) and reliability improvements via validation + testing.'
    ]
  }
];
