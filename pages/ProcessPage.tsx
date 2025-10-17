
import React from 'react';
import { site_bundle } from '../data';
import Accordion from '../components/Accordion';

const ProcessPage: React.FC = () => {
  const { headline, steps, faq } = site_bundle.pages.process;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-headers text-text_primary">{headline}</h1>
      </div>

      {/* Steps Section */}
      <div className="mt-16">
        <ol className="relative border-l border-border ml-4">
          {steps.map((step, index) => (
            <li key={step.title} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-surface rounded-full -left-4 ring-8 ring-white">
                <span className="text-accent font-bold">{index + 1}</span>
              </span>
              <h3 className="flex items-center mb-1 text-xl font-semibold text-text_primary font-headers">{step.title}</h3>
              <p className="text-base font-normal text-text_secondary">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center font-headers text-text_primary">Frequently Asked Questions</h2>
        <div className="mt-8">
          <Accordion items={faq} />
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
