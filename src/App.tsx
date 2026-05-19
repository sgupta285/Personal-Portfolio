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

type Page = 'home' | 'projects' | 'experience' | 'research' | 'about' | 'contact' | 'resume';

const pages: Page[] = ['home', 'projects', 'experience', 'research', 'about', 'contact', 'resume'];

function getPageFromHash(): Page {
  const page = window.location.hash.replace('#', '') as Page;
  return pages.includes(page) ? page : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleNavigate = (page: string) => {
    const nextPage = pages.includes(page as Page) ? (page as Page) : 'home';
    setCurrentPage(nextPage);

    const nextHash = nextPage === 'home' ? '' : `#${nextPage}`;
    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
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
