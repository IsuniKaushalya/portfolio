import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Certifications from './components/Services';
import Projects from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('About');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for global navigation events dispatched from child components
  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const custom = e as CustomEvent<string>;
        if (custom && custom.detail) {
          setActiveSection(custom.detail);
        }
      } catch (err) {
        // ignore malformed events
      }
    };

    window.addEventListener('navigateToSection', handler as EventListener);
    return () => window.removeEventListener('navigateToSection', handler as EventListener);
  }, []);

  // Scroll to top when active section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <Home />;
      case 'Certifications':
        return <Certifications />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black text-text-primary dark:text-slate-50 transition-colors duration-300">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-8">
        {renderSection()}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;