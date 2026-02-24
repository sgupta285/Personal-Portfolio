export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'uw-madison',
    company: 'Institute on Aging (UW–Madison)',
    role: 'Student IT Support Specialist',
    period: 'February 2024 – Present',
    startDate: '2024-02',
    endDate: 'present',
    bullets: [
      'Built and maintained the MIDUS research website (midus.wisc.edu) on WordPress, delivering a modern accessible UI and shipping custom PHP + SQL modules to streamline publications and data access.',
      'Modernized backend/research infrastructure for 200+ researchers, improving performance by 35% via REST API redesign, PostgreSQL optimization, and Redis caching.',
      'Automated recurring updates and data operations with Python tooling, including a BeautifulSoup-based scraper to keep the national holiday calendar current—eliminating manual entry and reducing system/query load.',
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
