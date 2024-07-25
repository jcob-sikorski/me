---
layout: ../../layouts/post.astro
title: Making My Portfolio Accessible (and Why You Should Too)
description: How I used ARIA to make my portfolio more inclusive
dateFormatted: Jul 22nd, 2024
---

Hey everyone! 👋

So, I've been thinking a lot about web accessibility lately. It hit me - why not use this stuff to make my portfolio better? That's when I discovered ARIA (Accessible Rich Internet Applications) and got inspired.

I decided to rebuild my portfolio with accessibility in mind. Not only does it look good, but now it's usable for everyone. It's like showing potential employers that I can make things look nice AND care about all users. Win-win!

You can check it out here: [my-aria-portfolio.dev](https://my-aria-portfolio.dev)

![My accessible portfolio](https://og-image.dev/my-aria-portfolio.png)

Want to make your own portfolio more accessible? Here's how I did it:

1. Used semantic HTML. It's the backbone of accessibility.
2. Added ARIA attributes where needed. They help screen readers understand the page better.
3. Made sure the color contrast was good. Everyone should be able to read the text easily.
4. Added keyboard navigation. Not everyone uses a mouse!
5. Tested it thoroughly. I used screen readers and tried navigating with just a keyboard.

Here's a quick example of how I made my project cards accessible:

```html
<div class="project-grid" role="list">
  <article class="project-card" role="listitem">
    <h3 id="project1">Cool Project</h3>
    <img src="project1.jpg" alt="Screenshot of Cool Project" aria-labelledby="project1">
    <p id="project1-desc">This project does cool things with AI.</p>
    <a href="#" aria-describedby="project1-desc">Learn more</a>
  </article>
  <!-- More project cards -->
</div>