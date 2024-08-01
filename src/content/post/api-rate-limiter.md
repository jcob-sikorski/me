---
layout: ../../layouts/post.astro
title: "Building a Distributed API Rate Limiter"
description: "An in-depth look at building a high-performance rate limiter using Golang, Redis, Docker, Nginx, and RabbitMQ."
dateFormatted: "2024-07-31"
image: https://ucarecdn.com/5671caa5-5927-4c26-8b62-79b14eff72ef/-/preview/1000x536/
---

So in today's post I'll share my work on Distributed Rate Limiter which is able to handle 10M+ requests per second on my MBP M1.

## The Evolution: From Simple Middleware to Distributed System

Initially, I developed a basic rate limiter as middleware for an Express server. However, this approach proved insufficient for a distributed environment. This realization led to a complete architectural overhaul.

## The Architecture: A Microservices Approach

The new system comprises four main components:

![Rate Limiter Architecture](https://ucarecdn.com/5671caa5-5927-4c26-8b62-79b14eff72ef/-/preview/1000x536/)

1. **Golang Server (Middleware)**:
   - Why Golang? It offers 10x faster performance compared to Node.js, crucial for our high-throughput needs.
   - Implements a leaky bucket algorithm:
     - Assigns a unique identifier (UID) to each request.
     - Validates requests against a specified threshold.
     - Utilizes Redis for request count monitoring with time-based expiration.

2. **Express API Server**:
   - Remains the core component for handling application logic.

3. **Redis Database**:
   - Acts as a high-speed, in-memory data store for the leaky bucket algorithm.
   - Enables fast, distributed request tracking.

4. **Nginx Reverse-Proxy**:
   - Routes requests from localhost/api to the Golang rate limiter (localhost:3001).
   - Forwards validated requests to the Express API server (localhost:3000).

## Containerization with Docker

To ensure scalability and ease of deployment, I containerized the entire stack:

1. Created a custom Docker network for enhanced isolation and security.
2. Packaged each component into separate containers for optimal resource management.
3. Implemented a Redis volume for data persistence across sessions.
4. Configured Nginx container port binding for seamless host communication.
5. Utilized Docker Compose for streamlined orchestration and management.

## Scaling and Load Balancing

To handle high concurrency:

1. Scaled up the API server cluster to 10 instances.
2. Implemented the Competing Consumers pattern using RabbitMQ:
   - Each API server acts as a consumer.
   - RabbitMQ serves as the message broker, distributing requests in round-robin fashion.
   - Achieved impressively low latency, with messages typically held for only milliseconds.

## Real-Time Configuration: The Technical Deep Dive

The system's ability to update rate limiting rules in real-time is a key feature. Here's how it works:

![Rate Limiter Lock](https://ucarecdn.com/f951b49a-3d35-49cc-9309-d2ab6bfc5261/-/preview/1000x697/)

1. **Concurrent Go Routine**:
   - Runs alongside the rate limiter.
   - Reads config.yaml from a mounted volume every 500ms.
   - Uses mutex locking to safely update a global configuration store.

2. **Rate Limiter Execution**:
   - Acquires a lock on the global store.
   - Copies the latest configuration.
   - Releases the lock and processes requests.

3. **Configuration Update Mechanism**:
   - A bash script outside the Docker environment:
     - Atomically copies config.yaml to config-tmp.yaml.
     - Opens a nano editor for user modifications.
     - Renames the edited file to config.yaml and places it in the config volume.

## YAML Configuration

The rule-based configuration, inspired by Lyft, looks like this:

```yaml
domain: auth
descriptors:
  - key: auth_type
    value: login
    rate_limit:
      unit: minute
      requests_per_unit: 5
```

Currently, the rate limiter only considers unit and requests_per_unit during initialization, with plans to incorporate remaining rules soon.

## Future Optimizations
To address the potential I/O overhead of reading from disk, the next step is to implement worker processes that will:
  1. Fetch config.yaml from the volume.
  2. Cache the configuration in Redis.
  3. Allow the Go routine to read from Redis instead of disk.

## Conclusion
This distributed rate limiter project showcases the power of combining multiple technologies:
  - Golang for high-performance middleware
  - Redis for fast, distributed data storage
  - Docker for containerization and easy deployment
  - Nginx for intelligent request routing
  - RabbitMQ for efficient load balancing
  - YAML for flexible configuration

We've created a system that's not only highly performant but also flexible and scalable.
Feel free to dm me on X if you found it cool.