import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { blogPosts } from "./blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/writing" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* CHANGED:
         1. Removed 'w-full' (block elements fill width by default).
         2. Added 'mx-6' (small margin on mobile).
         3. Added 'md:mx-20' (larger margin on desktop) so it's not glued to the edge.
      */}
      <div className="mx-4 md:mx-20 py-8 md:py-16">
        
        {/* Navigation */}
        <div className="mb-12">
          <Link to="/writing" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Writing
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-8">
          <div className="flex gap-2 mb-4">
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

        {/* Content - 'max-w-none' ensures the text fills the space defined by the margins above */}
        <article className="prose prose-lg prose-gray max-w-none font-light text-gray-800 leading-loose">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </Markdown>
        </article>

      </div>
    </div>
  );
}