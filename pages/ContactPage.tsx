
import React from 'react';
import { site_bundle } from '../data';
import { LinkedInIcon, EmailIcon, LocationIcon } from '../components/IconComponents';

const ContactPage: React.FC = () => {
  const { headline, subtext, methods, calendar_cta } = site_bundle.pages.contact;
  const { email, linkedin, location } = site_bundle.cms.contact;

  const contactData = {
    'cms.contact.email': { value: email, icon: <EmailIcon />, href: `mailto:${email}` },
    'cms.contact.linkedin': { value: linkedin, icon: <LinkedInIcon />, href: linkedin },
    'cms.contact.location': { value: location, icon: <LocationIcon />, href: '#' },
  };

  return (
    <div className="bg-surface">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-4xl font-bold font-headers text-text_primary">{headline}</h1>
          <p className="mt-4 text-lg text-text_secondary">{subtext}</p>
        </div>

        <div className="mt-12 max-w-sm mx-auto bg-white p-8 rounded-lg shadow-sm border border-border">
          <div className="space-y-6">
            {methods.map((method) => {
              const data = contactData[method.value_from as keyof typeof contactData];
              if (!data) return null;
              
              const isLink = method.type === 'link' || method.type === 'email';
              const content = (
                 <div className="flex items-center">
                   {data.icon}
                   <div>
                       <p className="text-sm text-text_secondary">{method.label}</p>
                       <p className="font-medium text-text_primary">{method.type === 'link' ? data.value.split('/').slice(-2).join('/') : data.value}</p>
                   </div>
                 </div>
              );

              return isLink ? (
                <a key={method.label} href={data.href} target="_blank" rel="noopener noreferrer" className="block p-2 rounded-md hover:bg-surface">
                  {content}
                </a>
              ) : (
                <div key={method.label} className="p-2">
                  {content}
                </div>
              );
            })}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <a 
              href={calendar_cta.href} 
              className="w-full inline-block text-center px-6 py-3 rounded-md font-medium text-white bg-accent hover:bg-accent_hover transition-colors duration-200"
            >
              {calendar_cta.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
