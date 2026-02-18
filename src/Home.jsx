import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, ExternalLink, FileText, BookOpen, Code } from "lucide-react";

const projects = [
  {
    title: "RoboShop SEO – On-Page & Keyword Engine",
    role: "Lead Software Engineer (Contract)",
    date: "Mar 2025 – Jun 2025",
    summary:
      "Architected a modular, Docker-containerized backend system with an unsupervised ML pipeline (HDBSCAN + OpenAI Embeddings) that semantically clustered 300,000+ keywords — reducing manual research time by ~70% and enabling fully automated, data-driven content strategies for a $12M ARR SEO agency.",
    stack: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "MongoDB",
      "Pydantic",
      "Pandas",
      "HDBSCAN",
      "OpenAI Embeddings",
      "Google Search Console API",
      "DataForSEO API",
      "Docker",
      "ThreadPoolExecutor",
    ],
    contributions: [
      "Built high-throughput parallel processing pipelines with thread-safe exponential-backoff rate limiting",
      "Implemented MongoDB bulk writes + efficient schema design → drastically reduced ingestion latency",
      "Developed time-series Content Decay detection using rolling-window analysis (L90 vs P90)",
      "Automated keyword clustering, topic labeling (via GPT), and prioritized content brief generation",
    ],
    impact:
      "Enabled scalable, automated SEO workflows — slashed manual effort and surfaced high-ROI optimization opportunities",
    links: [
      { url: "https://github.com/jcob-sikorski/growth-shop-robo-seo-on-page-main", text: "Core Engine Repo" },
    ],
  },
  {
    title: "CupidAI – AI Video Generation Platform",
    role: "Software Engineer (Full-time)",
    date: "Aug 2023 – Jul 2024",
    summary:
      "Engineered scalable backend & GPU orchestration for a deepfake/AI video platform serving 300+ paying agencies. Handled 10,000+ monthly generations at 99.9% uptime with 40% faster renders via optimized ComfyUI pipelines, RabbitMQ job flows, and direct S3 uploads.",
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "tRPC",
      "Prisma",
      "TypeScript",
      "Redis (BullMQ)",
      "RabbitMQ",
      "Docker Compose",
      "MongoDB",
      "MinIO/S3",
      "ComfyUI",
      "FaceFusion",
      "Stable Diffusion",
      "ElevenLabs",
    ],
    contributions: [
      "Designed event-driven architecture with job dependencies (image upload → processing → output)",
      "Implemented presigned S3/MinIO URLs + Redis sliding-window rate limiting with tiered quotas",
      "Built programmatic ComfyUI graph injection (prompts, seeds, ControlNet) and unified multi-model abstraction",
      "Containerized full stack (MySQL, dual Redis, RabbitMQ, MinIO) with automated Prisma migrations",
    ],
    impact:
      "Powered high-volume AI video generation for agencies while protecting expensive GPU resources",
    links: [
      { url: "https://github.com/jcob-sikorski/cupidai-main", text: "Main Backend" },
      { url: "https://github.com/jcob-sikorski/cupidai-backend-new", text: "Backend V2" },
      { url: "https://github.com/jcob-sikorski/cupid-gpu", text: "GPU Orchestrator" },
    ],
  },
  {
    title: "LiVE – Location-Based Social Platform",
    role: "Full-Stack Engineer",
    date: "Sep 2022 – Aug 2023",
    summary:
      "Built scalable Golang backend + React Native frontend features for a map-based social app. Enabled real-time chat and geospatial queries, contributing to 30% higher venue engagement through live analytics and messaging.",
    stack: [
      "Golang",
      "MongoDB",
      "Google Cloud",
      "React Native",
      "Socket.io",
      "Geospatial Indexing",
    ],
    contributions: [
      "Designed low-latency geospatial data retrieval and rendering pipeline",
      "Implemented real-time chat & live analytics with socket.io",
      "Owned App Store submission, compliance features, and release process",
    ],
    impact: "Drove meaningful user engagement for small venues via real-time social features",
    links: [
      { url: "https://github.com/EmenikeIsGreat/Live-backend", text: "Backend" },
      { url: "https://github.com/jcob-sikorski/live", text: "Frontend Contributions" },
    ],
  },
  {
    title: "Distributed API Rate Limiter",
    role: "Personal Project",
    summary:
      "High-performance, fault-tolerant rate limiter for distributed systems evaluating Fixed Window, Sliding Window Log, and Token Bucket algorithms. Uses Redis for synchronization and Lua scripts for atomicity.",
    stack: ["Go", "Express", "Redis", "Docker", "Nginx", "Lua"],
    contributions: [
      "Implemented multiple algorithms with atomic Lua operations to prevent race conditions",
      "Designed Redis-backed distributed synchronization across instances",
      "Added dynamic rule updates via cron workers",
    ],
    impact: "Robust foundation for protecting APIs in high-traffic, multi-server environments",
    links: [{ url: "https://github.com/jcob-sikorski/api-rate-limiter", text: "GitHub Repo" }],
  },
  {
    title: "Nand2Tetris Jack Compiler",
    role: "Educational Project",
    summary:
      "Complete Jack-to-VM compiler from the Nand2Tetris course — tokenizer, parser, AST builder, and VM code generator — demonstrating deep understanding of compilers and virtual machines.",
    stack: ["Java"],
    contributions: [
      "Built full lexical analysis and recursive-descent parser",
      "Generated correct VM code from abstract syntax trees",
    ],
    impact: "Successfully compiled high-level Jack programs into executable VM instructions",
    links: [{ url: "https://github.com/jcob-sikorski/JackCompilator", text: "GitHub Repo" }],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl sm:text-5xl font-light mb-3 text-black">Jakub Siekiera</h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 font-light">
            Python • Golang • Cloud AI Backend Engineer
          </p>

          <div className="flex flex-wrap gap-5 sm:gap-8 text-base">
            <a
              href="mailto:jm.siekiera@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <Mail className="w-5 h-5" /> Email
            </a>
            <a
              href="https://github.com/jcob-sikorski"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jcob-sikorski/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/jcob_sikorski/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <Code className="w-5 h-5" /> LeetCode
            </a>
            <a
              href="https://drive.google.com/file/d/1ZjPrh-KqS9_x2mP05g5XD3ODj0ad2JlI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <FileText className="w-5 h-5" /> CV
            </a>
          </div>
        </header>

        {/* Projects */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-light mb-12 text-black">Selected Work</h2>

          <div className="space-y-20">
            {projects.map((project, idx) => (
              <article key={idx} className="border-l-4 border-gray-200 pl-5 sm:pl-8">
                <div className="mb-5">
                  <h3 className="text-2xl sm:text-3xl font-medium text-black mb-1">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-light">
                    {project.role} • {project.date || ""}
                  </p>
                </div>

                <p className="text-gray-700 mb-7 leading-relaxed text-[17px]">
                  {project.summary}
                </p>

                <div className="mb-7">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-7">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Contributions
                  </h4>
                  <ul className="space-y-2.5 text-gray-700">
                    {project.contributions.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-7">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                    Impact
                  </h4>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {project.links?.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
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

        {/* Skills – updated from resume */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-light mb-12 text-black">Core Skills</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-medium text-black mb-5">Languages & Frameworks</h3>
              <ul className="space-y-2.5 text-gray-800 text-[17px]">
                <li>• Python (FastAPI, Uvicorn)</li>
                <li>• Golang</li>
                <li>• Java</li>
                <li>• TypeScript / Node.js (Next.js, tRPC)</li>
                <li>• REST & gRPC APIs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-black mb-5">Infrastructure & Tools</h3>
              <ul className="space-y-2.5 text-gray-800 text-[17px]">
                <li>• AWS (EC2, Lambda, S3, IAM, VPC, CloudWatch)</li>
                <li>• Docker & Container Orchestration</li>
                <li>• Distributed Systems & Concurrency</li>
                <li>• Redis, RabbitMQ, BullMQ</li>
                <li>• MongoDB, SQL / NoSQL design</li>
                <li>• CI/CD, OTEL, Git/Linux/Shell</li>
                <li>• Pandas, HDBSCAN, OpenAI Embeddings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-200 text-center text-gray-600">
          <p className="mb-2">
            Backend Engineer focused on scalable systems, AI integrations & cloud architecture
          </p>
          <p>Expected B.Eng. Computer Science – Military University of Technology (Jan 2027)</p>
        </footer>
      </div>
    </div>
  );
}