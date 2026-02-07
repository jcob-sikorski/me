---
slug: "from-zero-to-hello-world-spring-boot"
title: "From Zero to Hello World: A Spring Boot Deep Dive"
date: "February 7, 2026"
readTime: "30 min read"
tags: ["Java 25", "Spring Boot 4", "Backend", "Maven", "Developer Productivity"]
summary: "In this blog post, we're going to learn what Java Spring Boot is, why it's dope, and how to create a new project from scratch."
---

If you’ve spent any time in the Java ecosystem, you’ve likely heard of **Spring Boot**. But to understand why it’s so popular, you first have to understand the "Spring Framework" it’s built upon.

For years, the original Spring Framework was known for being powerful but notoriously difficult to configure. Developers would spend hours (sometimes days) writing complex XML files just to get a basic web server running. **Spring Boot** was created to fix that.

### The Core Philosophy: "Opinionated" Defaults

The Spring Platform is a massive, modular ecosystem designed to handle everything a modern application needs—from database security to cloud integration. Think of it as a giant toolbox where every tool is designed to work together perfectly. In this post, we’re going to get our hands dirty and actually add our own libraries to a project to see this ecosystem in action. (Exciting, isn't it?)

To make this work, we use dependencies, which are simply external code libraries your project relies on to function. In the world of Spring Boot, these are managed and configured within a file called `pom.xml` (Project Object Model). This XML file acts as a manifest, telling the build tool exactly which versions of which libraries to download and include.

Before the `pom.xml` became the standard via Maven, developers had to manage libraries manually. This often meant downloading `.jar` files from websites, dragging them into a "lib" folder, and manually ensuring that Library A didn't conflict with Library B—a process affectionately known as "Dependency Hell."

One of the coolest things the `pom.xml` enables is the use of an **embedded server**. In traditional Java development, you had to install a standalone web server (like Apache Tomcat) on your computer or server first, then "deploy" your code onto it. With an embedded server, the server itself is just another library inside your project. When you run your application, the server starts up automatically from within your code, making your app a completely self-contained unit that can run anywhere.

Spring Boot takes an "opinionated" view of the Spring platform. It makes assumptions about what you need based on the libraries you add. For example, if you add the `spring-boot-starter-web` dependency, Spring Boot assumes you want to build a web application and automatically configures an embedded server for you.

All we have to do is write a simple Java class to handle the request. Here is our `HelloController.java`:

```java
// Defines the namespace (package) for this class to organize code and avoid naming conflicts
package com.example.my-app.controller;

// Imports the GetMapping annotation to handle HTTP GET requests
import org.springframework.web.bind.annotation.GetMapping;
// Imports the RestController annotation to mark this class as a web request handler
import org.springframework.web.bind.annotation.RestController;
// Imports the LocalDateTime class to capture the current date and time
import java.time.LocalDateTime;
// Imports the Map interface to return data as key-value pairs
import java.util.Map;

// Marks this class as a Controller where every method returns a domain object instead of a view (JSON by default)
@RestController
public class HelloController {

    // Maps HTTP GET requests for the "/hello" URL path to this specific method
    @GetMapping("/hello")
    // Defines a public method that returns a Map, which Spring will automatically convert to a JSON object
    public Map<String, Object> sayHello() {
        // Creates and returns an immutable Map containing three key-value pairs
        return Map.of(
            // A simple status message indicating the service is active
            "message", "IAM Service is up and running!",
            // A hardcoded string representing the Java version being used
            "runtime", "Java 25",
            // Generates the current system timestamp at the moment the request is processed
            "timestamp", LocalDateTime.now()
        );
    }
}
```

When we run the application, the embedded server spins up instantly. We can verify it’s working by sending a simple HTTP GET request to our new endpoint.

```json
// The response from our curl command:
{
  "message": "IAM Service is up and running!",
  "runtime": "Java 25",
  "timestamp": "2026-02-07T12:36:39.430449"
}
```

### Setting Up the Environment

We've seen the result, but how do we get there? Let's configure our project to achieve the same functionality. We're going to set up a cutting-edge environment with **Spring Boot 4.0.2** and **Java 25 (LTS)** on macOS. Since these versions represent the absolute latest in the ecosystem, this is a great move for future-proofing your stack.

We’ll skip the website UI and use the terminal-heavy approach. It’s faster, cleaner, and honestly, it looks cooler.

Before creating the project, ensure your macOS has the correct versions installed. If you don't have Java 25 yet, the easiest way to manage it is via **SDKMAN!**.

```bash
# Downloads the SDKMAN installation script silently (-s) and pipes it directly into bash for execution
curl -s "https://get.sdkman.io" | bash

# "Source" (executes) the init script to initialize SDKMAN in your current terminal session 
# This makes the 'sdk' command immediately available without needing to restart the terminal
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Uses SDKMAN to download and install version 25 of the Temurin (Eclipse) distribution of Java
sdk install java 25-tem

# Sets the current shell's active Java version to 25
sdk use java 25
```

To generate projects directly from the terminal, we can use Homebrew:

```bash
# Adds the official Spring IO repository (a "tap") to your Homebrew configuration 
# so your system knows where to find Spring-specific packages
brew tap spring-io/tap

# Downloads and installs the Spring Boot CLI, which gives you access to the 'spring' command
brew install spring-boot
```

Instead of clicking around on a website, we will use the Spring Initializr API via `curl` to generate a project tailored for our specific stack. This command hits the API, defines our dependencies (Web, Lombok, Actuator), and downloads the zipped project.

```bash
# Downloads a project zip file from the Spring Initializr API
curl https://start.spring.io/starter.zip \
    # Specifies the Spring Boot version (assuming 4.x is the current major version in 2026)
    -d bootVersion=4.0.2 \
    # Sets the Java version to 25 (matching your SDKMAN setup)
    -d javaVersion=25 \
    # Configures the project to use Maven as the build tool
    -d type=maven-project \
    # Adds starter dependencies: Web (REST), Lombok (boilerplate reduction), and Actuator (monitoring)
    -d dependencies=web,lombok,actuator \
    # Sets the display name of the project
    -d name=my-app \
    # Sets the Maven artifact ID (the name of the generated jar/war file)
    -d artifactId=my-app \
    # Saves the resulting stream as a file named 'my-app.zip' instead of printing to the terminal
    -o my-app.zip
```

Once downloaded, unzip it and clean up the zip file:

```bash
# Extracts the contents of 'my-app.zip' into a new directory named 'my-app'
unzip my-app.zip -d my-app

# Changes the current terminal directory to the newly created 'my-app' folder
cd my-app

# Removes the original .zip file to keep your workspace clean since the files are now extracted
rm my-app.zip
```

Now, let's bridge the terminal work into your IDE.

```bash
# Opens the current directory (.) in Visual Studio Code
code .
```

To get the best experience (IntelliSense, debugging, etc.), ensure you have the **Extension Pack for Java** and **Spring Boot Extension Pack** installed. You can install them via the UI or run:

```bash
# Installs the "Extension Pack for Java" by Microsoft
# This is a bundle including Language Support (Red Hat), Debugger, Maven, and Gradle tools
code --install-extension vscjava.vscode-java-pack

# Installs "Spring Boot Tools" by VMware
# This provides specialized support for Spring files, including smart autocomplete 
# for 'application.properties' and 'application.yml'
code --install-extension vmware.vscode-spring-boot
```

Once the project opens, check your `pom.xml` file. This is the manifest we talked about earlier.

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>4.0.2</version>
</parent>
<properties>
    <java.version>25</java.version>
</properties>
```

You can run the app directly from the VS Code terminal using the Maven Wrapper (`mvnw`). This script ensures you run the build with the correct Maven version, even if you don't have Maven installed globally.

```bash
# Executes the Maven Wrapper script in the current directory
# 'spring-boot:run' is a specific goal that compiles your code, 
# packages it, and starts the embedded web server (Tomcat)
./mvnw spring-boot:run
```

### What the Heck am I Looking At?

Now that we’ve generated the project, you’re probably staring at a folder full of files wondering what they all do. It can look intimidating at first, but Spring Boot follows a **Standard Directory Layout**. This means once you understand this structure, you can navigate *any* Spring Boot project.

Let’s look at the tree structure (you can use `tree -L 6` to see a tree-like structure of the current directory):

```text
% tree -L 6
.
├── HELP.md                                      <-- Documentation, links, and guides for this project
├── mvnw                                         <-- Maven Wrapper executable (for Linux/macOS)
├── mvnw.cmd                                     <-- Maven Wrapper executable (for Windows)
├── pom.xml                                      <-- "The Brain": Dependencies, plugins, and build configuration
├── src                                          <-- Source code root directory
│   ├── main                                     <-- Main application code and resources
│   │   ├── java                                 <-- Java source files live here
│   │   │   └── com
│   │   │       └── example
│   │   │           └── my-app                   <-- Your unique package
│   │   └── resources                            <-- Non-code assets (configs, static files)
│   │       ├── application.properties           <-- Main config (Database URL, Server Port, Secrets)
│   │       ├── static                           <-- Public assets (CSS, JS, Images - if a web app)
│   │       └── templates                        <-- Server-side HTML templates (e.g., Thymeleaf)
│   └── test                                     <-- Test source root
│       └── java                                 <-- Unit and Integration tests location
│           └── com
│               └── example
│                   └── my-app                   <-- Test package mirroring the main package
└── target                                       <-- Build Artifacts (Generated automatically, safe to delete)
    ├── classes                                  <-- Compiled bytecode (.class files) & copied resources
    │   ├── application.properties               <-- The config file copied ready for the classpath
    │   └── com
    │       └── example
    │           └── my-app
    │               ├── MyAppApplication.class   <-- The compiled Main Entry Point
    │               └── controller               <-- Compiled Controller classes (REST endpoints)
    ├── generated-sources                        <-- Source code created by tools (e.g., Lombok, MapStruct)
    │   └── annotations
    ├── generated-test-sources                   <-- Generated sources specific for testing
    │   └── test-annotations
    ├── maven-status                             <-- Internal Maven metadata to track build changes
    │   └── maven-compiler-plugin                <-- Data specific to the Java Compiler
    │       ├── compile                          <-- Metadata for the main compilation step
    │       │   └── default-compile
    │       │       ├── createdFiles.lst         <-- Log of files created during last compile
    │       │       └── inputFiles.lst           <-- Log of source files read during last compile
    │       └── testCompile                      <-- Metadata for the test compilation step
    │           └── default-testCompile
    │               ├── createdFiles.lst
    │               └── inputFiles.lst
    └── test-classes                             <-- Compiled bytecode for your tests
        └── com
            └── example
                └── my-app
                    └── MyAppApplicationTests.class <-- The compiled main test class
```

Let's break down the most important parts:

#### 1. The Build Tools (`mvnw`, `mvnw.cmd`, `pom.xml`)

* **pom.xml:** We talked about this earlier. This is the manifest that tells Maven which dependencies (libraries) to download and how to build your project. It’s the single most important file for configuration.
* **mvnw & mvnw.cmd:** These are the Maven Wrappers. They allow you (or anyone else who clones your repo) to run the project without having Maven installed on their machine. It automatically downloads the correct version of Maven for you. Use `mvnw` on Mac/Linux and `mvnw.cmd` on Windows.

#### 2. The Source Code (`src/main/java`)

This is where 99% of your work will happen.

* **com.example.my-app:** This is your package structure. Java uses reverse domain names (e.g., `com.google`, `com.facebook`) to ensure class names don't conflict. Inside here, you’ll find `IamServiceApplication.java`. This is the entry point—the file with the `public static void main` method that is the root of the program.

#### 3. The Resources (`src/main/resources`)

This folder holds everything that isn't Java code.

* **application.properties:** This is where you configure your app settings (e.g., `server.port=8081` or database passwords).
* **static:** For serving static web files like CSS, JavaScript, or images.
* **templates:** Used if you are building server-side rendered HTML (like with Thymeleaf), though modern apps often use a separate frontend (React/Vue/Angular).

#### 4. The Build Output (`target`)

You might not see this folder immediately. It is created after you run or build your application. Maven takes your code from `src`, compiles it, and dumps the results here.

* **classes:** The compiled `.class` files that the JVM actually runs.
* **generated-sources:** Code generated by libraries (like Lombok) during the build process.

> **Note:** Never edit files inside `target` manually; they will be overwritten the next time you build!

### Where to Place Your First Controller
Remember that `HelloController.java` code we looked at earlier? You might be wondering where exactly to save that file within this structure. In Spring Boot, file location is crucial because of Component Scanning. Your main application class (likely `MyAppApplication.java` living in the root package) automatically scans its own package and any sub-packages for components to run.

To get our "Hello World" working properly:

1. Navigate to **src/main/java/com/example/my_app/**.

2. Create a new folder named controller. (While not strictly required, grouping files by function is a best practice).

3. Inside that folder, create a file named `HelloController.java`.

4. Paste the code snippet we discussed at the beginning of this post.

By placing it in a sub-package **(com.example.my_app.controller)**, you ensure that Spring finds your controller, registers it, and starts handling web requests immediately without any complex XML configuration.

---

### Mission Accomplished: You Did It!

Take a moment and give yourself a serious pat on the back. If you’ve been following along, you just went from knowing vaguely about Spring Boot to spinning up an environment on your local machine.

You now have a running application foundation. It might just be an empty shell right now, but it’s a powerful shell.

### What’s Next?

In the next post, we’re going to take that simple `HelloController` concept and blow it wide open. We will explore **Spring MVC**—the engine that powers the web layer.

We'll learn how to:

* Handle different HTTP methods (GET, POST, PUT, DELETE).
* Accept data from users (Path Variables and Request Bodies).
* Return proper JSON responses.

So keep that terminal open and stay tuned. You're officially a Spring Boot developer now.