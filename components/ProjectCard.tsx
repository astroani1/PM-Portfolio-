
import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import SkillTag from './SkillTag';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col">
      <img className="h-48 w-full object-cover" src={project.hero_image} alt={project.hero_image_alt} loading="lazy" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold font-headers text-text_primary">{project.title}</h3>
        <p className="mt-2 text-sm text-text_secondary flex-grow">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map(tag => <SkillTag key={tag} label={tag} />)}
        </div>
      </div>
      <div className="p-6 bg-surface">
        <Link to={`/project/${project.id}`} className="text-sm font-medium text-accent hover:text-accent_hover">
          View Case Study &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
