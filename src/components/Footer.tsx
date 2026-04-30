import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const handleNavClick = (sectionName: string) => {
    setActiveSection(sectionName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="w-full border-t border-border-color dark:border-violet-800 mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-8 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {NAV_LINKS.map((link: NavLink) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.name)}
              className="text-text-secondary dark:text-slate-400 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
        <p className="text-sm text-text-secondary dark:text-slate-400 text-center">&copy; {new Date().getFullYear()} Tharindu Devinda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;