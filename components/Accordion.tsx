
import React, { useState } from 'react';
import { ChevronDownIcon } from './IconComponents';

interface AccordionProps {
  items: { q: string; a: string }[];
}

const AccordionItem: React.FC<{ item: { q: string; a: string } }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          className="flex justify-between items-center w-full py-5 font-medium text-left text-text_primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{item.q}</span>
          <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <div className="pb-5 text-text_secondary leading-relaxed">
              {item.a}
            </div>
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Accordion;
