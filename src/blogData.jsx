// src/blogData.jsx
import frontMatter from 'front-matter';

const modules = import.meta.glob('./posts/*.md', { as: 'raw', eager: true });

export const blogPosts = Object.keys(modules).map((path) => {
  const content = modules[path];
  const { attributes, body } = frontMatter(content);

  return {
    ...attributes,
    content: body,
    filePath: path,
  };
// Add this sort function ↓
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};