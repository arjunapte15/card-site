# PROJECT.md: [BRAND NAME] Demo Site

> Every session starts by reading this file. See **8. Working agreement**.

## 1. Overview

[BRAND NAME] makes custom trading cards of school staff and sells them as a school fundraiser.

- **The school/PTA** handles sales and keeps a percentage of the money raised.
- **I** handle card design and production.
- The idea started as a freshman class project.

## 2. Site goal

One demo page used to pitch [BRAND NAME] to schools. Sections, in order:

1. **Hero**: brand name, one-line pitch, call to action
2. **How it works**: 3 steps
3. **First-run results**: 3 stats
4. **Sample cards gallery**
5. **Built with care**: quality and safety commitments
6. **Contact**: `mailto:` link
7. **Footer**

## 3. Tech rules

- Plain HTML, CSS, and vanilla JavaScript only.
- No frameworks, build tools, or npm.
- One Google Font max.
- Hosted on GitHub Pages.
- Mobile-first; test at **375px** and **1280px** widths.
- Accessibility: meet **WCAG AA** (color contrast, alt text, keyboard navigation, semantic HTML).

## 4. Content rules (strict)

- No personal info.
- No real teacher names or photos.
- No student photos.
- No references to existing brands or trading card games.
- Sample cards use **imaginary characters with AI-generated faces**, and each is labeled **"Sample card."**

## 5. File structure

```
index.html          The single demo page (all sections live here)
css/styles.css      All site styles, mobile-first
js/cards.js         Sample card gallery behavior (vanilla JS)
images/cards/       Sample card images (imaginary characters only)
README.md           Short project description and local preview instructions
.gitignore          Ignores OS and editor junk (.DS_Store, Thumbs.db, .vscode/)
PROJECT.md          This file: project rules, plan, and progress log
```

## 6. Step plan

1. **Setup**: folders, starter files, PROJECT.md, git repo
2. **HTML structure and copy**: all sections in semantic HTML with draft copy and [PLACEHOLDER] tags
3. **Styling**: mobile-first layout, colors, typography (one Google Font max)
4. **Sample card gallery**: card layout, sample images, JS behavior
5. **Polish**: spacing, hover/focus states, small details
6. **Fill real content**: replace [PLACEHOLDER] tags with content I provide
7. **Quality check**: 375px and 1280px, WCAG AA, console errors, content rules
8. **Publish to GitHub Pages**

## 7. Progress log

Newest entries at the bottom.

- **2026-10-11, Step 1 (Setup):** Created folder structure, `index.html` skeleton, empty `css/styles.css` and `js/cards.js`, `images/cards/.gitkeep`, `README.md`, `.gitignore`, and this `PROJECT.md`. Initialized git on `main` with the first commit. Brand name is still undecided ([BRAND NAME]).
- **2026-10-11, Step 2 (HTML structure and copy):** Built all sections in `index.html` with semantic tags: header (logo text + nav), hero with "Contact us" button, how it works (3 steps), first-run results (3 [PLACEHOLDER] stats), sample cards (empty `#card-gallery`), built with care, contact (`mailto:[PLACEHOLDER EMAIL]`), and footer. Added a skip link and section `aria-labelledby` headings for accessibility. Draft copy aimed at principals and PTA parents. No styling yet. Still needed from me: brand name, the 3 stats, and contact email.

## 8. Working agreement

- Every session reads PROJECT.md first.
- Each session stays within its current step. No jumping ahead.
- Each session adds a dated entry to the progress log.
- Each session ends with a git commit.
- Use **[PLACEHOLDER]** tags for any content I haven't provided. Never invent real-world facts (names, stats, schools, quotes, prices).
