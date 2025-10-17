
import React from 'react';
import { site_bundle } from '../data';
import SkillTag from '../components/SkillTag';

const AboutPage: React.FC = () => {
  const { headline, summary, panels } = site_bundle.pages.about;
  const { profile, skills, tools, frameworks, education } = site_bundle.cms;

  const renderPanelContent = (panel: { title: string; list_from?: string; content_from?: string }) => {
    if (panel.list_from) {
      let items: string[] = [];
      if (panel.list_from === 'cms.skills') items = skills;
      if (panel.list_from === 'cms.tools') items = tools;
      if (panel.list_from === 'cms.frameworks') items = frameworks;
      return (
        <div className="flex flex-wrap gap-2">
          {items.map(item => <SkillTag key={item} label={item} />)}
        </div>
      );
    }
    if (panel.content_from === 'cms.education') {
      return <p className="text-text_secondary">{education}</p>;
    }
    return null;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Profile */}
        <div className="lg:col-span-1 text-center lg:text-left">
          <img 
            className="w-40 h-40 rounded-full mx-auto lg:mx-0" 
            src={`https://picsum.photos/seed/${profile.avatar}/200`} 
            alt="Arnab Das headshot" 
          />
          <h1 className="mt-6 text-3xl font-bold font-headers text-text_primary">{profile.name}</h1>
          <p className="mt-2 text-lg text-accent">{profile.role_target}</p>
          <p className="mt-4 text-text_secondary leading-relaxed">{profile.summary}</p>
        </div>

        {/* Right Column: Panels */}
        <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold font-headers text-text_primary">{headline}</h2>
            <p className="text-lg text-text_secondary leading-relaxed">{summary}</p>
            {panels.map((panel) => (
            <div key={panel.title} className="bg-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold font-headers text-text_primary">{panel.title}</h3>
              <div className="mt-4">{renderPanelContent(panel)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
