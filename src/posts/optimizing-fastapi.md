---
slug: "optimizing-fastapi-docker"
title: "Optimizing FastAPI Performance with Docker"
date: "October 24, 2023"
readTime: "5 min read"
tags: ["DevOps", "Python", "Docker"]
summary: "A deep dive into reducing container size and handling concurrent requests efficiently."
---

When deploying Python applications, image size and build times are often overlooked. In this post, we explore **multi-stage builds**.

### The Multi-Stage Approach

By separating the build environment from the runtime environment, we can significantly reduce the final image size. Here is a standard `Dockerfile` using a multi-stage strategy:

```dockerfile
# Stage 1: Build
FROM python:3.11-slim as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Stage 2: Runtime
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .

ENV PATH=/root/.local/bin:$PATH
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]