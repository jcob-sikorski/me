export const blogPosts = [
  {
    slug: "optimizing-fastapi-docker",
    title: "Optimizing FastAPI Performance with Docker",
    date: "October 24, 2023",
    readTime: "5 min read",
    summary: "A deep dive into reducing container size and handling concurrent requests efficiently using Python and Docker.",
    content: (
      <>
        <p className="mb-4">
          When deploying Python applications, image size and build times are often overlooked. 
          In this post, we explore multi-stage builds...
        </p>
        <h3 className="text-xl font-medium text-black mt-8 mb-4">The Multi-Stage Approach</h3>
        <p className="mb-4">
          By separating the build environment from the runtime environment, we can significantly
          reduce the final image size. Here is an example configuration...
        </p>
        {/* You can add code blocks, images, or more paragraphs here */}
      </>
    ),
    tags: ["DevOps", "Python", "Docker"]
  },
  {
    slug: "go-vs-python-backend",
    title: "Migrating High-Throughput Services from Python to Go",
    date: "January 12, 2024",
    readTime: "7 min read",
    summary: "Why we rewrote our rate-limiter service in Golang and the performance gains we observed.",
    content: (
      <>
        <p className="mb-4">
          Python is fantastic for rapid development, but when we hit 10k requests per second 
          on our rate limiter, the GIL became a bottleneck.
        </p>
        <p className="mb-4">
          Go's goroutines offered a lightweight alternative to Python's threading model...
        </p>
      </>
    ),
    tags: ["Golang", "Architecture"]
  }
];