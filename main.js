const toggleTheme = document.querySelector("#toggle-theme");
const toggleMenu = document.querySelector("#toggle-menu");
const logo = document.querySelector("#logo");
const menuButtons = document.querySelectorAll("#menu .btn");

const isValidWindowSize = window.matchMedia("(max-width: 46.5rem)");

function setAreaExpanded(bool) {
  return toggleMenu.setAttribute("aria-expanded", bool);
}

// Set theme based on saved browser settings or OS default settings
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
  // Apply light theme before page loads
  document.documentElement.classList.add("light-theme");
}

// Toggle theme
toggleTheme.addEventListener("click", () =>
  document.documentElement.classList.toggle("light-theme")
);

// Toggle menu
toggleMenu.addEventListener("click", () => {
  const isExpanded = toggleMenu.getAttribute("aria-expanded") === "true";

  setAreaExpanded(!isExpanded);
});

// Close menu by clicking the button
logo.addEventListener(
  "click",
  () => isValidWindowSize.matches && setAreaExpanded(false)
);

for (const btn of menuButtons) {
  btn.addEventListener(
    "click",
    () => isValidWindowSize.matches && setAreaExpanded(false)
  );
}

// Scroll down arrow
document.querySelector("#scroll-down").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector("#about").offsetTop - 100,
  });

  return isValidWindowSize.matches && setAreaExpanded(false);
});
