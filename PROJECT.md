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

- No personal info beyond what is printed on a consented card.
- **Real staff cards** (real name and likeness) are allowed only when that person has given **written consent** for their card to appear on the website. Otherwise, no real staff names or photos.
- No student photos.
- No references to existing brands or trading card games.
- Cards without consent use **imaginary characters with AI-generated faces**.
- Every card in the gallery, real or imaginary, is labeled **"Sample card."**

## 5. File structure

```
index.html          The single demo page (all sections live here)
css/styles.css      All site styles, mobile-first
js/cards.js         Sample card gallery behavior (vanilla JS)
images/cards/       Card images (consented real staff or imaginary characters)
images/favicon.svg  Site favicon (tilted card in brand colors)
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
- **2026-10-11, Step 3 (Styling):** Styled the site in `css/styles.css`, mobile-first. Google Font: **Nunito** (loaded via `@import` in the CSS so `index.html` content is unchanged). All colors, fonts, radii, and spacing are CSS variables in `:root`. Look: warm white background, violet primary with yellow/mint/coral accents, rounded cards and pill buttons. Sticky header; on mobile the nav collapses to one swipeable row of pills (no hamburger, since that would need new HTML and JS), and from 1024px it sits on one line beside the logo. Numbered step cards, colored stat cards, check-mark care cards, footer in dark navy. All text color pairs checked for WCAG AA (lowest is 6.0:1). Verified at 375px and 1280px in headless Chrome: no sideways scrolling and the header stays on top while scrolling. Sample card gallery layout is left for Step 4.
- **2026-10-11, Step 4 (Sample card gallery):** Built the gallery in `js/cards.js` from a `SAMPLE_CARDS` array (`file`, `name`, `role`, `rarity`), rendered into `#card-gallery` as a list of card buttons. The array is empty for now, so the gallery shows 4 dashed "Sample cards coming soon" placeholder tiles. One commented-out example entry ("Captain Compass", an imaginary character) shows how to add a card, with how-to notes above the array. All tiles keep the 2.5:3.5 shape (2 columns on mobile, 4 from 768px). Each card shows a yellow "Sample card" label, name, role, and rarity. If an image is missing or fails to load, a fallback tile with initials and "Image coming soon" appears instead. Clicking a card opens a modal (native `<dialog>`): the close button gets focus, Tab/Shift+Tab stay inside, Escape, the close button, or clicking the backdrop closes it, and focus returns to the card. Styles added to `css/styles.css`. Verified in headless Chrome at 375px and 1280px: placeholders correct with no sideways scrolling. With the example uncommented, the fallback tile shows and the modal opens and closes as described. The only console messages are the expected "file not found" for the example image. No real images yet: I still need to give you the AI-generated character images.
- **2026-10-11, Step 4b (Two always-on sample cards):** In `js/cards.js`, uncommented the "Captain Compass" example (Geography Teacher, Rare) and added a second imaginary character, **"Chef Marigold Crumb"** (Cafeteria Chef, Super rare). Both image files (`images/cards/captain-compass.webp`, `images/cards/chef-marigold-crumb.webp`) don't exist yet, so both show the fallback tile. The gallery now shows **2 sample entries plus "Sample cards coming soon" tiles**, so there are always at least 4 tiles (`MIN_TILES`). *(Changed in Step 4c: the filler tiles were removed.)* A commented-out template in `SAMPLE_CARDS` shows how to add another card. Verified in headless Chrome at 375px and 1280px: 2 sample cards with the "Sample card" label and fallback tile, 2 coming-soon tiles, no sideways scrolling. Clicking either card opens the modal, and Escape closes it and returns focus to the card. The only console messages are the expected 404s for the 2 missing images.
- **2026-10-11, Step 4c (Remove filler tiles):** The gallery now shows **only the 2 sample cards** (Captain Compass and Chef Marigold Crumb), with no "coming soon" filler tiles. If `SAMPLE_CARDS` is ever empty, it still shows 4 "Sample cards coming soon" tiles (`MIN_TILES` renamed to `PLACEHOLDER_TILES`). In `css/styles.css`, `.card-grid` switched from CSS grid to a centered, wrapping flex row, so the 2 cards sit in the middle on wide screens. Each card keeps the same size as before (one column of a 2-column grid on mobile, 4-column from 768px) and the 2.5:3.5 shape. "Sample card" label, fallback tile, modal, and the commented-out template are unchanged. Verified in headless Chrome at 375px (2 cards, 160x223px) and 1280px (2 cards, 254x356px, centered with equal side gaps): no sideways scrolling. Clicking either card opens the modal, and Escape closes it and returns focus to the card. With an empty array, 4 coming-soon tiles show at both widths. The only console messages are the expected 404s for the 2 missing images (plus favicon).
- **2026-10-11, Step 5 (Polish):** Title and meta description were already in place, so I left them as they were. Added Open Graph tags to `index.html` (`og:type`, `og:title`, `og:description`, `og:image` with `og:image:alt`, plus `twitter:card`). `og:image` uses the placeholder path `images/og-image.png`, which doesn't exist yet. At Step 8 it needs to become a full `https://` URL, and `og:url` should be added. Added `images/favicon.svg`, a tilted coral-to-yellow card that matches the logo mark, linked as an SVG icon. The skip link already existed, and there is still only one. It now uses `position: fixed` so it shows even when the page is scrolled down. `<main>` got `tabindex="-1"` so pressing Enter on the skip link moves focus into the main content, and no outline is drawn around `<main>` itself. Focus outlines: the global `:focus-visible` rule no longer sets `border-radius: 4px`, which had been squaring off pill buttons and cards on focus. The outline color changed from amber `#ffb000` (about 1.9:1, below the 3:1 AA minimum) to violet `#4529b8` (8.6:1 on white). Outlines are yellow on the skip link, inside the modal (over the dark backdrop), and on the nav pills. Nav pills use an inset outline because the scrolling mobile nav row clipped the outside one. Every hover style (nav, "Contact us", sample cards, modal close, email link) now also applies on keyboard focus. Reduced motion: added a global rule that makes all transitions and animations near-instant, and the button/card hover lift is off. Smooth scrolling was already off. No content or layout changes. Verified with a script driving headless Chrome at 1280px and narrow width. Tab reaches the skip link, the logo, all 6 nav links, "Contact us", both sample cards, and the email link, each with a visible outline. Enter on the skip link moves focus to `<main>`, and the next Tab goes to "Contact us". Enter or Space on a card opens the modal with focus on the close button. Tab and Shift+Tab stay inside the modal. Escape or Enter on the close button closes it and returns focus to the card. With reduced motion emulated, smooth scrolling and the card lift are off. The favicon loads (HTTP 200) and renders correctly at 16, 32, and 200px. No sideways scrolling. The only console messages are the expected 404s for the 2 missing card images.
- **2026-10-12, Add first two real staff cards:** Content rules updated: real staff cards are now allowed when the person has given written consent for the website. In `js/cards.js`, replaced the two imaginary sample cards (Captain Compass, Chef Marigold Crumb) with **Mr. Atul** (`images/cards/card-mr-atul.jpg`) and **Ms. Smruti** (`images/cards/card-ms-smruti.jpg`), both Teacher, Rare. Both images are 728x1024 JPEGs (186 KB and 243 KB), under the 500 KB limit, so they were not resized. Each card now has an `alt` field with a description of the card, including the text printed on it (room, hobby, fun fact, quote). The modal uses it, and cards without `alt` fall back to the old "Sample card of Name, Role". In the gallery the image stays `alt=""` because the button text already names the card. The how-to comment and the commented-out template now include `alt`. "Sample card" label, fallback tile, and modal behavior are unchanged. Fix in `css/styles.css`: the modal used to fit the whole card (art plus name strip) into the 2.5:3.5 shape, which cropped the top and bottom of the card image. Now the art alone keeps the 2.5:3.5 shape with the name strip below it, and the modal width shrinks to fit the screen height. Verified in headless Chrome at 375px and 1280px: both images load (no fallback tiles), cards are 160x223px and 254x356px, no sideways scrolling. Clicking each card opens the modal with the full card visible (art 335x469px and 352x493px), focus on the close button. Escape closes it and returns focus to the card. No console messages.
- **2026-10-12, Fix sample label overlap:** The yellow "Sample card" label used to sit over the top-left corner of the card image. In the modal that covered the printed name banner, and in the gallery it covered the card frame (and part of Ms. Smruti's name banner and laurel). In both places it now sits outside the card, centered just below it. In `js/cards.js`, the gallery adds the label after the card button inside the list item, and the modal adds it once below `.card-modal-body`. In `css/styles.css`, `.card-label` is no longer absolutely positioned. It is centered with an 8px gap above it. The modal width formula now reserves `14rem` instead of `12rem` of screen height, so the label still fits on short phones. Verified in headless Chrome at 375x667, 375x812, and 1280x800: in the gallery and the modal, for both cards, the label is centered below the card and doesn't overlap it. In the modal it stays on screen. Gallery tiles are unchanged (160x223px and 254x356px). Modal art is unchanged at 375x812 and 1280x800, and slightly narrower at 375x667 (316px wide). No sideways scrolling, focus goes to the close button, no console messages.

## 8. Working agreement

- Every session reads PROJECT.md first.
- Each session stays within its current step. No jumping ahead.
- Each session adds a dated entry to the progress log.
- Each session ends with a git commit.
- Use **[PLACEHOLDER]** tags for any content I haven't provided. Never invent real-world facts (names, stats, schools, quotes, prices).
