
import React from 'react';

interface SkillTagProps {
  label: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ label }) => {
  return (
    <span className="inline-block bg-surface text-text_secondary text-xs font-medium px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
};

export default SkillTag;
