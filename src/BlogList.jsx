// src/BlogList.jsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "./blogData";

export default function BlogList() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-8 py-16">
        
        {/* Nav */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl font-light mb-12 text-black">Writing</h1>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <Link to={`/writing/${post.slug}`} className="block">
                <div className="flex items-baseline justify-between mb-2">
                  <h2 className="text-2xl font-medium text-black group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-gray-400 font-mono hidden sm:block">{post.date}</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-3">
                  {post.summary}
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-400">{post.readTime}</span>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}