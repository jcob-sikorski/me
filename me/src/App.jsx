import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CupidAI",
    role: "Backend Engineer",
    summary: "Built scalable backend infrastructure for a leading AI-powered deepfake video generation platform.",
    stack: ["Golang", "FastAPI", "Docker", "GPU orchestration", "AWS", "PostgreSQL"],
    contributions: [
      "Designed and optimized RESTful APIs for real-time video rendering",
      "Implemented GPU job orchestration and task queueing",
      "Improved backend performance, cutting render time by 40%",
    ],
    impact: "Enabled 10K+ video generations/month with 99.9% uptime",
    link: "#"
  },
  {
    title: "TaskLeap",
    role: "Founder / Automation Engineer", 
    summary: "Engineered automation systems for agencies and enterprises, improving revenue and scalability.",
    stack: ["Golang", "Python", "Docker", "AWS Lambda", "SQL/NoSQL"],
    contributions: [
      "Built cold outreach engines generating $12K+ MRR",
      "Automated legal doc classification saving 400+ hours/quarter",
      "Tripled agency client capacity through SEO process automation",
    ],
    impact: "Used by 8+ clients with 6- and 7-figure ARR",
    link: "#"
  },
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
            Backend Engineer & Automation Architect specializing in scalable infrastructure and process optimization
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
              href="https://github.com/jakub-siekiera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/jakub-siekiera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
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
                
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-black font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
              <h3 className="text-lg font-medium text-black mb-4">Languages & Frameworks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Golang (Expert)</li>
                <li>• Python (Advanced)</li>
                <li>• FastAPI (Advanced)</li>
                <li>• RESTful API Design</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-black mb-4">Infrastructure & Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Docker & Containerization</li>
                <li>• AWS Cloud Services</li>
                <li>• PostgreSQL & Database Design</li>
                <li>• GPU Orchestration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            Available for consulting and full-time opportunities
          </p>
        </footer>
      </div>
    </div>
  );
}