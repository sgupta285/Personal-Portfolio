export type Page = 'home' | 'projects' | 'experience' | 'research' | 'about' | 'contact' | 'resume';

export const siteUrl = 'https://personal-website-srijan.vercel.app';
export const siteName = 'Srijan Gupta';

export const pagePaths: Record<Page, string> = {
  home: '/',
  projects: '/projects',
  experience: '/experience',
  research: '/research',
  about: '/about',
  contact: '/contact',
  resume: '/resume',
};

export const pageSeo: Record<Page, { title: string; description: string; keywords: string }> = {
  home: {
    title: 'Srijan Gupta | Software Engineer, Data Scientist & ML Systems Builder',
    description:
      'Srijan Gupta is a software engineer, data scientist, UW-Madison graduate, and incoming NYU master’s student building production ML systems, backend platforms, RAG applications, analytics tools, and quantitative finance projects.',
    keywords:
      'Srijan Gupta, software engineer, data scientist, machine learning engineer, UW-Madison, NYU, React, FastAPI, Python, RAG, backend engineer',
  },
  projects: {
    title: 'Projects | Srijan Gupta',
    description:
      'Explore Srijan Gupta’s engineering, machine learning, full-stack, quantitative finance, data science, and cloud infrastructure projects.',
    keywords:
      'Srijan Gupta projects, ML systems projects, FastAPI projects, React projects, quantitative finance projects, data science portfolio',
  },
  experience: {
    title: 'Experience | Srijan Gupta',
    description:
      'Professional experience for Srijan Gupta across software engineering, AI systems, backend infrastructure, analytics, and research technology.',
    keywords:
      'Srijan Gupta experience, software engineer intern, data scientist, UW-Madison, SpecMe, Digivate Labs, backend infrastructure',
  },
  research: {
    title: 'Research | Srijan Gupta',
    description:
      'Research by Srijan Gupta on retrieval-augmented generation benchmarking, quantitative finance backtesting, latency, cost, and production evaluation.',
    keywords:
      'Srijan Gupta research, RAG benchmarking, backtesting research, retrieval augmented generation, quantitative finance research',
  },
  about: {
    title: 'About | Srijan Gupta',
    description:
      'Learn about Srijan Gupta’s background in computer science, data science, economics, ML systems, backend engineering, analytics, quantitative tools, and upcoming NYU master’s studies.',
    keywords:
      'about Srijan Gupta, UW-Madison computer science, NYU master’s, data science, economics, software engineering skills',
  },
  contact: {
    title: 'Contact | Srijan Gupta',
    description:
      'Contact Srijan Gupta for software engineering, machine learning, data science, backend systems, research, and product analytics opportunities.',
    keywords:
      'contact Srijan Gupta, hire Srijan Gupta, software engineer contact, machine learning engineer contact',
  },
  resume: {
    title: 'Resume | Srijan Gupta',
    description:
      'View Srijan Gupta’s resume, including software engineering, machine learning, data science, backend systems, and analytics experience.',
    keywords:
      'Srijan Gupta resume, software engineer resume, data scientist resume, ML engineer resume, UW-Madison resume',
  },
};

export function canonicalUrlForPage(page: Page) {
  return `${siteUrl}${pagePaths[page]}`;
}

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function applyPageSeo(page: Page) {
  const seo = pageSeo[page];
  const canonical = canonicalUrlForPage(page);

  document.title = seo.title;

  upsertMeta('meta[name="description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    return meta;
  }, seo.description);

  upsertMeta('meta[name="keywords"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'keywords');
    return meta;
  }, seo.keywords);

  upsertMeta('meta[property="og:title"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    return meta;
  }, seo.title);

  upsertMeta('meta[property="og:description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:description');
    return meta;
  }, seo.description);

  upsertMeta('meta[property="og:url"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:url');
    return meta;
  }, canonical);

  upsertMeta('meta[name="twitter:title"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:title');
    return meta;
  }, seo.title);

  upsertMeta('meta[name="twitter:description"]', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:description');
    return meta;
  }, seo.description);

  upsertLink('canonical', canonical);
}
