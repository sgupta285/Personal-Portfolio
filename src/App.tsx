import { useEffect, useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ResearchPage } from './pages/ResearchPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ResumePage } from './pages/ResumePage';
import { applyPageSeo, pagePaths, type Page } from './seo';

const pages: Page[] = ['home', 'projects', 'experience', 'research', 'about', 'contact', 'resume'];

function getPageFromLocation(): Page {
  const hashPage = window.location.hash.replace('#', '') as Page;
  if (pages.includes(hashPage)) return hashPage;

  const pathPage = Object.entries(pagePaths).find(([, path]) => path === window.location.pathname)?.[0] as Page | undefined;
  return pathPage && pages.includes(pathPage) ? pathPage : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    applyPageSeo(currentPage);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    const nextPage = pages.includes(page as Page) ? (page as Page) : 'home';
    setCurrentPage(nextPage);

    const nextUrl = pagePaths[nextPage];
    window.history.pushState(null, '', nextUrl);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'research':
        return <ResearchPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'resume':
        return <ResumePage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface)' }}>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
