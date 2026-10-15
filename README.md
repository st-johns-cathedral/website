# St. John's Cathedral, Nazareth

A static multi-page church website built in plain HTML5, CSS3, and vanilla JavaScript.

## How to run
1. Open the project folder in your browser directly, or
2. Serve it locally using a simple static server:
   - Python:
     `python -m http.server 8000`
   - Then open:
     `http://localhost:8000`
3. Build and run it with Docker:
   - `docker build -t stjohns-cathedral .`
   - `docker run --rm -p 8080:80 stjohns-cathedral`
   - Then open:
     `http://localhost:8080`

## How to change the colours
Edit the CSS variables in:
- `css/variables.css`

Common places:
- `--color-oxblood`
- `--color-gold`
- `--color-ivory`
- `--text`
- `--surface`

## How to change the fonts
Edit the Google Fonts import in each page head tag, or replace the `--font-heading`, `--font-body`, and `--font-tamil` values in:
- `css/variables.css`

## How to change service times
Edit:
- `js/config.js`

Look for:
- `window.churchConfig.serviceTimes`

## How to change events, sermons, news and clergy
Edit:
- `js/data.js`

This file contains arrays for:
- `timeline`
- `relics`
- `ministries`
- `announcements`
- `sermons`
- `events`
- `gallery`
- `verses`

## How to add a new page
1. Copy an existing page in `pages/`
2. Change the title and metadata
3. Update the content in the main section
4. Ensure the page loads the shared CSS and JS files
5. Add the page to the nav in `js/components.js`

## How to switch language
Use the language toggle in the header. The language keys are in:
- `js/i18n.js`

The browser stores the selected language in `localStorage` as:
- `stjohns-lang`

## How to deploy
### GitHub Pages
- Push the project to a GitHub repository
- Open repository settings
- Enable GitHub Pages
- Use the root of the project as the site source

### Netlify
- Import the repository in Netlify
- Set the publish directory to the project root
- Deploy

### cPanel / basic hosting
- Upload the project files to the web root
- Ensure the site is served as static files
- Link domain and SSL as required

## Image guidance
Place new images in:
- `assets/images/`

Use descriptive `alt` text and prefer `loading="lazy"` for gallery images.

## Editable placeholders
Placeholder values such as phone numbers, timings, addresses, and social links are intentionally marked as `[EDIT ME]` in:
- `js/config.js`
