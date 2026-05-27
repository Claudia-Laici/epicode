# AI Agent Instructions for Epicode Exercises Repository

This repository contains static HTML/CSS exercises from the Epicode frontend development course. Each exercise is a self-contained folder with `index.html`, `style.css`, and optional `Assets/` for images.

## Key Conventions
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`).
- External CSS only; no preprocessors or frameworks.
- Responsive design with Flexbox/Grid and media queries.
- Folder naming: kebab-case (e.g., `esercizio-css/`).
- File naming: kebab-case for HTML (e.g., `val-di-fumo.html`), camelCase for CSS classes/IDs.
- Assets in `Assets/` subfolder (note: some use `assets/` - standardize to `Assets/`).

## Development Workflow
- No build tools required - open `index.html` in browser to test.
- Manual testing: Resize browser for responsiveness, check in multiple browsers.
- For new exercises: Copy an existing folder structure and modify.
- External dependencies: Use CDNs for fonts (Google Fonts) and icons (IonIcons from unpkg.com).

## Common Patterns
- Multi-page sites: Link HTML files together.
- Forms: Basic inputs with inline JS validation (e.g., `onsubmit="alert('...')"`).
- Layouts: Header/main/footer structure with centered content (`max-width` + `margin: 0 auto`).

## Pitfalls to Avoid
- Inconsistent asset folder naming - use `Assets/`.
- Inline styles - prefer external CSS.
- Complex JS - keep minimal and inline for exercises.
- Broken links in root `index.html` - some reference non-existent folders.

## Testing
- Open in browser; use dev tools (F12) for debugging.
- Check responsiveness on mobile/desktop.
- Validate HTML/CSS at validator.w3.org if needed.