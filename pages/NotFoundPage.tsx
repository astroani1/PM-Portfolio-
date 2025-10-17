
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-9xl font-bold text-accent">404</h1>
      <h2 className="mt-4 text-3xl font-bold font-headers text-text_primary">Page Not Found</h2>
      <p className="mt-4 text-lg text-text_secondary">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="px-6 py-3 rounded-md font-medium text-white bg-accent hover:bg-accent_hover transition-colors duration-200"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
