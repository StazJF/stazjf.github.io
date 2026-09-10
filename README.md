# Personal Portfolio

A modern, responsive personal portfolio website with a dark, minimalist developer-focused design.

## Overview

This is a lightweight, static portfolio built to present projects, technical skills, services, and a contact pathway. It is designed to work well on desktop, tablet, and mobile screens.

## Features

- Responsive desktop and mobile navigation
- Smooth scrolling and active navigation states
- Scroll-reveal animations using the Intersection Observer API
- Expandable project details
- Client-side contact form validation
- Back-to-top control
- Responsive hero portrait treatment
- No frontend frameworks or build process required

## Technology

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
portfolio2/
├── assets/
│   └── 2x2janjan.png
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

No installation is needed. Open `index.html` directly in a modern browser, or serve this folder with any basic static web server.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Because this is a static site, it can be deployed to any static hosting provider. Upload the contents of this folder while keeping the `assets` directory alongside `index.html` so image paths continue to work.

Before publishing, review all page content and links to ensure you are comfortable making them public. Avoid committing credentials, API keys, private documents, or unnecessary personal data to the deployment repository.

## Customization

- Edit `index.html` to update content, projects, links, and page sections.
- Edit `style.css` to adjust colors, typography, spacing, and responsive behavior.
- Edit `script.js` to refine site interactions.
- Replace `assets/2x2janjan.png` with another image using the same filename, or update its path in `index.html`.

## License

This project is intended for personal use. Add a license file if you plan to share, reuse, or accept contributions publicly.
