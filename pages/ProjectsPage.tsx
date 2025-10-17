
import React, { useState, useMemo } from 'react';
import { site_bundle } from '../data';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';
import SkillTag from '../components/SkillTag';

const ProjectsPage: React.FC = () => {
  const { title, intro, filters } = site_bundle.pages.projects;
  const { projects } = site_bundle.cms;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [projects]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setCurrentPage(1);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const searchMatch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const tagsMatch =
        selectedTags.length === 0 ||
        selectedTags.every(tag => project.tags.includes(tag));

      return searchMatch && tagsMatch;
    });
  }, [projects, searchQuery, selectedTags]);

  const totalPages = Math.ceil(filteredProjects.length / filters.page_size);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * filters.page_size,
    currentPage * filters.page_size
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headers text-text_primary">{title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text_secondary">{intro}</p>
      </div>

      {/* Filters */}
      <div className="mt-12 max-w-4xl mx-auto">
        {filters.show_search && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by title or keyword..."
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 border border-border rounded-md focus:ring-accent focus:border-accent"
            />
          </div>
        )}
        {filters.show_tag_filters && (
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-accent text-white'
                    : 'bg-surface text-text_secondary hover:bg-border'
                }`}
              >
                {tag}
              </button>
            ))}
             {(searchQuery || selectedTags.length > 0) && (
                <button onClick={clearFilters} className="px-3 py-1 text-sm text-accent hover:underline">
                    Clear Filters
                </button>
            )}
          </div>
        )}
      </div>

      {/* Project Grid */}
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {paginatedProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
          <div className="text-center mt-12 py-16 bg-surface rounded-lg">
              <p className="text-text_secondary">{site_bundle.interactions.search.empty_state}</p>
          </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
