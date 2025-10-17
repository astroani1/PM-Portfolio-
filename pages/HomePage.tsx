
import React from 'react';
import { Link } from 'react-router-dom';
import { site_bundle } from '../data';
import ProjectCard from '../components/ProjectCard';

const HomePage: React.FC = () => {
  const { hero, highlights, teasers_from_projects } = site_bundle.pages.home;
  const projects = site_bundle.cms.projects.slice(0, teasers_from_projects);

  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="bg-surface">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headers text-text_primary tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text_secondary leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to={hero.primary_cta.href}
              className="px-8 py-3 rounded-md font-medium text-white bg-accent hover:bg-accent_hover transition-colors duration-200"
            >
              {hero.primary_cta.label}
            </Link>
            <Link
              to={hero.secondary_cta.href}
              className="px-8 py-3 rounded-md font-medium text-accent border border-accent hover:bg-accent/10 transition-colors duration-200"
            >
              {hero.secondary_cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {highlights.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-accent">{item.metric}</p>
                <p className="mt-2 text-base text-text_secondary">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Teasers Section */}
      <section className="bg-surface">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-center font-headers text-text_primary">Featured Work</h2>
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
                 <Link to="/projects" className="text-accent hover:text-accent_hover font-medium">
                    View All Projects &rarr;
                 </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
