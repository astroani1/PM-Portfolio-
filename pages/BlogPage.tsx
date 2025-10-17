
import React, { useState } from 'react';
import { site_bundle } from '../data';
import type { Post } from '../types';
import Pagination from '../components/Pagination';
import SkillTag from '../components/SkillTag';

const BlogPage: React.FC = () => {
  const { title, intro } = site_bundle.pages.blog;
  const { posts } = site_bundle.cms;
  const pageSize = site_bundle.pages.blog.pagination.page_size;

  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(posts.length / pageSize);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headers text-text_primary">{title}</h1>
        <p className="mt-4 text-lg text-text_secondary">{intro}</p>
      </div>

      <div className="mt-12 space-y-10">
        {paginatedPosts.map((post: Post) => (
          <article key={post.slug} className="bg-white p-6 rounded-lg border border-border shadow-sm">
            <div className="flex items-center justify-between text-sm text-text_secondary">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <h2 className="mt-2 text-2xl font-bold font-headers text-text_primary">
              <a href={`#/blog/${post.slug}`} className="hover:underline">{post.title}</a>
            </h2>
            <p className="mt-3 text-base text-text_secondary">{post.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => <SkillTag key={tag} label={tag} />)}
            </div>
          </article>
        ))}
      </div>

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

export default BlogPage;
