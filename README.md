# Moosefox Consulting

A fast, static one-page site for GitHub Pages. No build step, no npm dependencies — just HTML, CSS, and a tiny bit of JavaScript.

## Publish to GitHub Pages

1. Create a new GitHub repository and push this folder.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder.
5. Save. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Before you go live

- Update the contact email in `index.html` (`hello@moosefox.com` is a placeholder).
- Optionally add a custom domain under **Settings → Pages → Custom domain**.

## Local preview

Open `index.html` in a browser, or run a simple local server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Structure

```
index.html      Page content
css/styles.css  Styles
js/main.js      Mobile nav + footer year
favicon.svg     Tab icon
```
