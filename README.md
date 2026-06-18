# AWAG Leadership — Static Site

A static website built with plain HTML, CSS, and jQuery. No build step. No frameworks.

## Structure

```
index.html              — All page markup
assets/
  css/styles.css        — All styles
  js/main.js            — All interactivity (jQuery)
  images/               — Photos, logo
```

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploying

Designed for GitHub Pages. The workflow at `.github/workflows/static.yml`
uploads the repository root and publishes it.
