// src/BlogPost.jsx
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Markdown from 'react-markdown'; // 1. Import the markdown renderer
import rehypeHighlight from 'rehype-highlight';
import { blogPosts } from "./blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/writing" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-8 py-16">
        
        {/* Navigation */}
        <div className="mb-12">
          <Link to="/writing" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Writing
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-8">
          <div className="flex gap-2 mb-4">
            {/* Added optional chaining (?.) just in case a markdown file is missing tags */}
            {post.tags?.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm font-mono">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>By Jakub Siekiera</span>
          </div>
        </header>

        {/* Content */}
        {/* 2. The prose class must wrap the Markdown component */}
        <article className="prose prose-lg prose-gray max-w-none font-light text-gray-800 leading-loose">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </Markdown>
        </article>

      </div>
    </div>
  );
}