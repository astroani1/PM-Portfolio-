
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site_bundle } from '../data';
import { MenuIcon, XIcon } from './IconComponents';

const NavBar: React.FC = () => {
  const { name } = site_bundle.site;
  const { top_nav, cta, sticky } = site_bundle.navigation;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = top_nav.map(item => {
    const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
    return { label: item, path };
  });

  const navClass = sticky ? 'sticky top-0 z-50' : '';

  return (
    <header className={`${navClass} bg-background/80 backdrop-blur-sm border-b border-border`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold font-headers text-text_primary">{name}</Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === path
                      ? 'text-accent'
                      : 'text-text_secondary hover:text-text_primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-accent hover:bg-accent_hover transition-colors duration-200"
              >
                {cta.label}
              </a>
            </nav>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text_secondary hover:text-text_primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === path
                    ? 'text-accent bg-surface'
                    : 'text-text_secondary hover:text-text_primary hover:bg-surface'
                }`}
              >
                {label}
              </Link>
            ))}
             <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left mt-2 px-4 py-2 rounded-md text-base font-medium text-white bg-accent hover:bg-accent_hover transition-colors duration-200"
              >
                {cta.label}
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
