import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--muted)' : '1px solid transparent'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-center h-20">
          {/* Desktop Nav - Centered */}
          <motion.div 
            className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full"
            style={{
              backgroundColor: isScrolled ? 'var(--surface-elevated)' : 'rgba(255, 255, 255, 0.9)',
              boxShadow: isScrolled ? 'var(--shadow-sm)' : '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid var(--muted)'
            }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="relative px-5 py-2.5 rounded-full transition-colors"
                style={{
                  color: currentPage === item.id ? 'white' : 'var(--ink-primary)',
                  fontWeight: currentPage === item.id ? '500' : '400'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentPage === item.id && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: 'var(--gradient-accent)',
                      zIndex: -1
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ 
              color: 'var(--ink-primary)',
              backgroundColor: 'var(--surface-elevated)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              style={{
                borderTop: '1px solid var(--muted)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)'
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-1 px-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className="block w-full text-left px-4 py-3 rounded-lg transition-all"
                    style={{
                      color: currentPage === item.id ? 'white' : 'var(--ink-primary)',
                      background: currentPage === item.id ? 'var(--gradient-accent)' : 'transparent',
                      fontWeight: currentPage === item.id ? '500' : '400'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
