import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, ExternalLink, FileText, BookOpen, Code } from "lucide-react";

const projects = [
  {
    title: "SEO On-Page Engine",
    role: "Lead Software Engineer",
    summary: "Built an automated SEO tool using Python, FastAPI, Docker, RESTful APIs and MongoDB. It uses keyword data, semantic clustering, and GPT-powered AI to proactively identify on-page content opportunities, generate prioritized content briefs, and improve search engine performance.",
    stack: ["Python", "FastAPI", "MongoDB", "Docker", "GPT/OpenAI", "DataForSEO", "Google Search Console API"],
    contributions: [
      "Engineered automated pipelines for keyword mining and semantic clustering",
      "Developed a GPT-powered brief generator to automate content strategy",
      "Implemented decay detection and competitor gap analysis for prioritized opportunities",
      "Created a robust API rate limiter to manage requests to third-party services"
    ],
    impact: "Used by a $12M ARR SEO agency to generate content briefs and strategies at scale",
    links: [
      { url: "https://github.com/jcob-sikorski/growth-shop-robo-seo-on-page-main", text: "GitHub Repo" }
    ]
  },
  {
    title: "CupidAI",
    role: "Software Engineer",
    summary: "Developed the backend for a market-leading AI deepfake video platform (300+ paying agencies) using Python, FastAPI, MongoDB, and GPU orchestration with Docker & RabbitMQ. Integrated Bark, ComfyUI, and Face Fusion to cut render times by 40%, enabling 10K+ monthly video generations with 99.9% uptime.",
    stack: ["Next.js", "Prisma", "Tailwind", "tRPC", "RabbitMQ", "Docker", "Shell", "TypeScript", "Python", "Bark", "ComfyUI", "Face Fusion", "Ngrok", "FastAPI", "MongoDB"],
    contributions: [
      "Designed and optimized RESTful APIs for real-time video rendering",
      "Implemented a GPU job orchestration system to manage resource-intensive tasks",
      "Improved backend performance, cutting render time by 40%",
      "Engineered a scalable system that handled over 10K video generations per month"
    ],
    impact: "Attracted 300+ paying modeling agencies and enabled 10K+ video generations/month with 99.9% uptime",
    links: [ // Added 5 placeholder links for CupidAI
      { url: "https://github.com/jcob-sikorski/cupidai-main", text: "Client Facing Code" },
      { url: "https://github.com/jcob-sikorski/cupid-gpu", text: "GPU Orchestrator" },
      { url: "https://github.com/jcob-sikorski/cupidai-frontend", text: "Frontend V1" },
      { url: "https://github.com/jcob-sikorski/cupidai-landing-page", text: "Landing Page" },
      { url: "https://github.com/jcob-sikorski/runpod_server", text: "GPU Orchestrator V1" }
    ]
  },
  {
    title: "LiVE",
    role: "Software Engineer",
    summary: "Developed the core backend features for a location-based, real-time social messaging platform.",
    stack: ["FastAPI", "MongoDB", "RabbitMQ", "Docker", "AWS", "Google Maps API"],
    contributions: [
      "Implemented a real-time, Telegram-like messaging system",
      "Engineered a full-text search engine across locations' databases",
      "Integrated Google and Apple Maps with cluster-based segmentation"
    ],
    impact: "Enabled core social functionality and user engagement for the platform",
    links: [
      { url: "https://github.com/EmenikeIsGreat/Live-backend", text: "App's Backend" },
      { url: "https://github.com/jcob-sikorski/live", text: "App's Frontend" }
    ]
  },
  {
    title: "API Rate Limiter",
    role: "Side Project",
    summary: "A server-side API rate limiter for distributed environments. It evaluates several algorithms and uses a configurable system to enforce throttle rules, ensuring low latency and high fault tolerance.",
    stack: ["Express", "Go", "Nginx", "Docker", "Redis"],
    contributions: [
      "Implemented multiple rate-limiting algorithms, including Fixed Window Counter and Sliding Window Log",
      "Designed a distributed system using Redis to synchronize limits across multiple servers",
      "Used Lua scripts to ensure atomic operations and prevent race conditions in a concurrent environment",
      "Configured cron jobs and workers to update rate-limiting rules in the cache for dynamic control"
    ],
    impact: "Created a scalable and fault-tolerant system to protect APIs from excessive requests.",
    links: [
      {
        "url": "https://github.com/jcob-sikorski/api-rate-limiter",
        "text": "GitHub Repo"
      }
    ]
  },
  {
    title: "Nand2Tetris: Jack Compiler",
    role: "Side Project",
    summary: "Full implementation of a Jack-to-VM compiler as part of the Nand2Tetris course, demonstrating a deep understanding of computer architecture and language design.",
    stack: ["Java"],
    contributions: [
      "Developed a syntax analyzer (tokenizer and parser) to create an abstract syntax tree",
      "Implemented a code generation stage to translate the syntax tree into VM code"
    ],
    impact: "Successfully translated high-level Jack code into a working virtual machine language",
    links: [
      { url: "https://github.com/jcob-sikorski/JackCompilator", text: "GitHub Repo" }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-8 py-16">
        
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl font-light mb-4 text-black">
            Jakub Siekiera
          </h1>
          <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
            Java Spring Boot SWE | Cloud, AI, Automation | Consulting
          </p>
          
          <div className="flex gap-8">
            <a
              href="mailto:jm.siekiera@gmail.com"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/jcob-sikorski"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jcob-sikorski/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/jcob_sikorski/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Code className="w-4 h-4" />
              LeetCode
            </a>
            <Link to="/writing" className="flex items-center gap-2 text-gray-700 font-medium hover:text-black transition-colors">
              <BookOpen className="w-4 h-4" /> Writing
            </Link>
            <a
              href="https://drive.google.com/file/d/1tAkPMLi4nzbLmkAf8LFDTkEN2evlP8mQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <FileText className="w-4 h-4" />
              CV
            </a>
          </div>
        </header>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-light mb-12 text-black">Selected Work</h2>
          
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <article key={idx} className="border-l-2 border-gray-200 pl-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-black mb-1">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-light">
                    {project.role}
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.summary}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {project.contributions.map((point, i) => (
                      <li key={i} className="text-gray-700 leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                    Impact
                  </h4>
                  <p className="text-gray-700 font-medium">
                    {project.impact}
                  </p>
                </div>
                
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="inline-flex items-center gap-2 text-black font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-light mb-12 text-black">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-black mb-4">
                Backend & Frameworks
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Java</li>
                <li>• Spring Boot (Spring MVC, Spring Data JPA)</li>
                <li>• RESTful API Design</li>
                <li>• SQL & Data Modeling</li>
                <li>• Event-Driven Architecture</li>
                <li>• Backend System Design</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-black mb-4">
                Cloud, DevOps & Automation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AWS (Core Services)</li>
                <li>• Docker & Containerization</li>
                <li>• CI/CD (GitHub Actions, Jenkins)</li>
                <li>• PostgreSQL & MongoDB</li>
                <li>• Redis & Caching</li>
                <li>• RabbitMQ / Kafka</li>
                <li>• Nginx</li>
                <li>• Git & Version Control</li>
                <li>• Linux / UNIX</li>
                <li>• AI & Automation (LLMs, API Integrations)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            Backend Software Engineer specializing in Java & Spring Boot | Cloud-native systems, AI-driven automation & CI/CD | Open to backend and consulting roles | AWS Certified Cloud Practitioner candidate
          </p>
        </footer>
      </div>
    </div>
  );
}