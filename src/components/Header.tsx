import React, { useState } from 'react';
import { NAV_LINKS, MoonIcon, SunIcon } from '../constants';
import type { NavLink } from '../types';
import mainImage from '../images/main.png';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionName: string) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Glass morphism backdrop with purple tint */}
      <div className="absolute inset-0 backdrop-blur-xl bg-linear-to-r from-purple-500/10 via-white/60 to-purple-500/10 dark:from-purple-900/20 dark:via-slate-900/60 dark:to-purple-900/20 border-b border-purple-200/30 dark:border-purple-700/30 shadow-lg shadow-purple-500/10"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4 flex items-center justify-between">
        {/* Profile Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavClick('About')}
        >
          <img
            src={mainImage}
            alt="Profile"
            className="rounded-full w-10 h-10 border-2 border-primary shadow-md shadow-primary/50 group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Desktop Navigation - Liquid Glass Style with Purple */}
        <nav className="hidden md:flex items-center backdrop-blur-md bg-linear-to-r from-purple-400/20 via-white/30 to-purple-400/20 dark:from-purple-800/30 dark:via-slate-800/30 dark:to-purple-800/30 p-1.5 rounded-full shadow-xl shadow-purple-500/20 border border-purple-300/40 dark:border-purple-700/40">
          {NAV_LINKS.map((link: NavLink) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.name
                ? 'backdrop-blur-sm bg-purple-500/40 dark:bg-purple-600/40 text-white shadow-lg shadow-purple-500/20 border border-purple-400/50 dark:border-purple-500/50'
                : 'text-text-secondary dark:text-slate-300 hover:text-text-primary dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-purple-900/30'
                }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button and Theme Toggle Container */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle - Liquid Glass Style with Purple */}
          <button
            onClick={toggleTheme}
            className="h-10 w-10 backdrop-blur-md bg-linear-to-br from-purple-400/20 to-white/40 dark:from-purple-800/30 dark:to-slate-800/30 rounded-full flex items-center justify-center text-primary shadow-xl shadow-purple-500/20 border border-purple-300/40 dark:border-purple-700/40 hover:scale-110 transition-transform duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden h-10 w-10 backdrop-blur-md bg-linear-to-br from-purple-400/20 to-white/40 dark:from-purple-800/30 dark:to-slate-800/30 rounded-full flex items-center justify-center text-primary shadow-xl shadow-purple-500/20 border border-purple-300/40 dark:border-purple-700/40 hover:scale-110 transition-transform duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border-b border-purple-200/30 dark:border-purple-700/30 shadow-lg shadow-purple-500/10">
          <nav className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link: NavLink) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 text-left ${activeSection === link.name
                    ? 'backdrop-blur-sm bg-purple-500/40 dark:bg-purple-600/40 text-white shadow-lg shadow-purple-500/20 border border-purple-400/50 dark:border-purple-500/50'
                    : 'text-text-secondary dark:text-slate-300 hover:text-text-primary dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-purple-900/30'
                  }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;