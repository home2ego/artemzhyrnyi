const toggleTheme = document.querySelector("#toggle-theme");

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

// Scroll down arrow
document.querySelector("#scroll-down").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector("#about").offsetTop - 95,
    });
});
