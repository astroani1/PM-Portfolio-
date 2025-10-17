
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { site_bundle } from '../data';
import NotFoundPage from './NotFoundPage';
import SkillTag from '../components/SkillTag';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = site_bundle.cms.projects.find(p => p.id === id);

  if (!project) {
    return <NotFoundPage />;
  }
  
  const renderTextSection = (title: string, content: string) => {
    if (!content) return null;
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold font-headers capitalize">{title}</h2>
            <p className="mt-4 text-text_secondary leading-relaxed whitespace-pre-line">{content}</p>
        </div>
    );
  };

  const renderSection = (section: string) => {
    switch(section) {
        case 'problem':
            return renderTextSection(section, project.problem);
        case 'research':
            return renderTextSection(section, project.research);
        case 'solution':
            return renderTextSection(section, project.solution);
        case 'prioritization':
            return renderTextSection(section, project.prioritization);
        case 'learnings':
            return renderTextSection(section, project.learnings);
        case 'impact_metrics':
            return (
                <div key={section} className="mt-12">
                    <h2 className="text-2xl font-bold font-headers">Impact & Metrics</h2>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-text_secondary">
                        {project.impact_metrics.map((metric, i) => <li key={i}>{metric}</li>)}
                    </ul>
                </div>
            );
        case 'gallery':
            return (
                <div key={section} className="mt-12">
                    <h2 className="text-2xl font-bold font-headers">Gallery</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.gallery.map((img, i) => <img key={i} src={img} alt={`${project.title} gallery image ${i+1}`} className="rounded-lg border border-border shadow-sm" loading="lazy" />)}
                    </div>
                </div>
            );
        default:
            return null;
    }
  }


  return (
    <div>
      {/* Hero */}
      <div className="bg-surface">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base font-semibold text-accent uppercase tracking-wide">{project.role} | {project.timeframe}</p>
              <h1 className="mt-2 text-4xl font-bold font-headers text-text_primary">{project.title}</h1>
              <p className="mt-4 text-xl text-text_secondary">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {project.tags.map(tag => <SkillTag key={tag} label={tag} />)}
              </div>
            </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <img src={project.hero_image} alt={project.hero_image_alt} className="rounded-lg shadow-lg border border-border" />
        
        {site_bundle.pages.project_detail_template.sections.filter(s => s !== 'hero').map(renderSection)}

        <div className="mt-12 pt-8 border-t border-border">
            <Link to="/projects" className="text-accent hover:text-accent_hover">&larr; Back to all projects</Link>
        </div>
      </div>

    </div>
  );
};

export default ProjectDetailPage;
