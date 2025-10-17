
import React from 'react';
import { Link } from 'react-router-dom';
import { site_bundle } from '../data';
import { LinkedInIcon } from './IconComponents';

const Footer: React.FC = () => {
  const { name, brand_line } = site_bundle.site;
  const { linkedin } = site_bundle.cms.contact;

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-text_primary">{name}</h3>
            <p className="mt-1 text-sm text-text_secondary">{brand_line}</p>
          </div>
          <div className="mt-8 flex justify-start space-x-6 md:mt-0 md:ml-10">
            <Link to="/projects" className="text-sm text-text_secondary hover:text-text_primary">Projects</Link>
            <Link to="/about" className="text-sm text-text_secondary hover:text-text_primary">About</Link>
            <Link to="/contact" className="text-sm text-text_secondary hover:text-text_primary">Contact</Link>
          </div>
          <div className="mt-8 flex justify-start space-x-6 md:mt-0 md:ml-10">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-text_secondary hover:text-accent">
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-text_secondary">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
