// [BRAND NAME] demo site: sample card gallery behavior (vanilla JS).

/*
  SAMPLE_CARDS: the cards shown in the "Sample cards" gallery.

  To add a card:
    1. Put the image in images/cards/ (portrait, 2.5:3.5 shape, e.g. 750x1050).
       Keep it under 500 KB; resize larger files to 750px wide.
    2. Add an object below with:
         file:   path to the image, starting with "images/cards/"
         name:   the name shown on the card
         role:   their school job
         rarity: a short label, e.g. "Common", "Rare", "Super rare"
         alt:    a description of the card image, shown to screen readers
                 in the modal (include any text printed on the card)
    3. Save and refresh the page.

  Content rules: real staff only with their written consent for the
  website; otherwise imaginary characters with AI-generated faces.
  No students. If the list is empty, the gallery shows
  PLACEHOLDER_TILES "Sample cards coming soon" tiles.
*/
const SAMPLE_CARDS = [
  {
    file: "images/cards/card-mr-atul.jpg",
    name: "Mr. Atul",
    role: "Teacher",
    rarity: "Rare",
    alt:
      "Trading card of Mr. Atul, a teacher who enjoys reading and travel, " +
      "smiling in front of the Golden Gate Bridge with a plane flying overhead. " +
      "Room 200. Hobbies: reading. Fun fact: enjoys traveling. Quote: " +
      "\"Life is like riding a bicycle. To keep your balance, you must keep moving.\"",
  },
  {
    file: "images/cards/card-ms-smruti.jpg",
    name: "Ms. Smruti",
    role: "Teacher",
    rarity: "Rare",
    alt:
      "Trading card of Ms. Smruti, a teacher who enjoys hiking and science, " +
      "smiling among a mountain trail, wildflowers, a teapot, a compass, " +
      "backpacks, and hiking boots. Room 100. Hobbies: hiking. Fun fact: " +
      "likes science. Quote: \"Believe you can and you're halfway there.\"",
  },
  // Template for another card:
  // {
  //   file: "images/cards/your-card.jpg",
  //   name: "Card Name",
  //   role: "School Job",
  //   rarity: "Common",
  //   alt: "Trading card of Card Name, a ... who enjoys ...",
  // },
];

// Number of "coming soon" tiles shown when SAMPLE_CARDS is empty.
const PLACEHOLDER_TILES = 4;

(function () {
  const gallery = document.getElementById("card-gallery");
  if (!gallery) return;

  let modal = null;
  let lastTrigger = null;

  // Builds the image, or a fallback tile if the image is missing or fails to load.
  function createArt(card, alt) {
    const art = document.createElement("div");
    art.className = "card-art";

    const img = document.createElement("img");
    img.src = card.file;
    img.alt = alt;
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", function () {
      art.replaceChildren(createFallback(card));
    });

    art.appendChild(img);
    return art;
  }

  function createFallback(card) {
    const fallback = document.createElement("div");
    fallback.className = "card-fallback";
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", "Image not available for " + card.name);

    const initials = document.createElement("span");
    initials.className = "card-fallback-initials";
    initials.setAttribute("aria-hidden", "true");
    initials.textContent = card.name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (word) { return word[0].toUpperCase(); })
      .join("");

    const note = document.createElement("span");
    note.className = "card-fallback-note";
    note.setAttribute("aria-hidden", "true");
    note.textContent = "Image coming soon";

    fallback.append(initials, note);
    return fallback;
  }

  function createLabel() {
    const label = document.createElement("span");
    label.className = "card-label";
    label.textContent = "Sample card";
    return label;
  }

  function createInfo(card, headingTag) {
    const info = document.createElement("div");
    info.className = "card-info";

    const name = document.createElement(headingTag);
    name.className = "card-name";
    name.textContent = card.name;

    const role = document.createElement("span");
    role.className = "card-role";
    role.textContent = card.role;

    const rarity = document.createElement("span");
    rarity.className = "card-rarity";
    rarity.textContent = card.rarity;

    info.append(name, role, rarity);
    return info;
  }

  function createPlaceholder() {
    const item = document.createElement("li");
    const tile = document.createElement("div");
    tile.className = "card card-placeholder";
    const text = document.createElement("p");
    text.textContent = "Sample cards coming soon";
    tile.appendChild(text);
    item.appendChild(tile);
    return item;
  }

  // Sample cards only; "coming soon" tiles appear only if there are none.
  function renderGallery() {
    const list = document.createElement("ul");
    list.className = "card-grid";

    SAMPLE_CARDS.forEach(function (card) {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "card";
      button.setAttribute("aria-haspopup", "dialog");

      // Text below names the button; the image adds nothing for screen readers here.
      button.append(createArt(card, ""), createInfo(card, "h3"));
      button.addEventListener("click", function () {
        openModal(card, button);
      });

      // Label sits below the tile so it never covers the printed card.
      item.append(button, createLabel());
      list.appendChild(item);
    });

    if (SAMPLE_CARDS.length === 0) {
      for (let i = 0; i < PLACEHOLDER_TILES; i++) {
        list.appendChild(createPlaceholder());
      }
    }

    gallery.replaceChildren(list);
  }

  // ---------- Modal ----------

  function buildModal() {
    const dialog = document.createElement("dialog");
    dialog.className = "card-modal";
    dialog.setAttribute("aria-labelledby", "card-modal-title");

    const close = document.createElement("button");
    close.type = "button";
    close.className = "card-modal-close";
    close.setAttribute("aria-label", "Close");
    close.textContent = "×";
    close.addEventListener("click", closeModal);

    const body = document.createElement("div");
    body.className = "card-modal-body";

    // Label sits below the card so it never covers the printed card.
    dialog.append(close, body, createLabel());

    // Escape: the browser fires "cancel"; close through our own handler
    // so focus always returns to the card that opened the modal.
    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeModal();
    });

    // Keep Tab and Shift+Tab inside the modal.
    dialog.addEventListener("keydown", function (event) {
      if (event.key !== "Tab") return;
      const focusables = Array.from(
        dialog.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])")
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    // Clicking the dark backdrop (outside the card) also closes it.
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeModal();
    });

    document.body.appendChild(dialog);
    return dialog;
  }

  function openModal(card, trigger) {
    if (!modal) modal = buildModal();
    lastTrigger = trigger;

    const body = modal.querySelector(".card-modal-body");
    const info = createInfo(card, "h2");
    info.querySelector(".card-name").id = "card-modal-title";
    body.replaceChildren(
      createArt(card, card.alt || "Sample card of " + card.name + ", " + card.role),
      info
    );

    modal.showModal();
    document.body.classList.add("modal-open");
    modal.querySelector(".card-modal-close").focus();
  }

  function closeModal() {
    if (!modal || !modal.open) return;
    modal.close();
    document.body.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  }

  renderGallery();
})();
