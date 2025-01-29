const toggleTheme = document.querySelector("#toggle-theme");

/* Set theme based on saved preference or default OS preference */
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
    /* Apply light theme before page loads */
    document.documentElement.classList.add("light-theme");
}

// Toggle theme and save preference on click
toggleTheme.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");

    const isLightTheme =
        document.documentElement.classList.contains("light-theme");

    // Update aria-label
    toggleTheme.setAttribute(
        "aria-label",
        isLightTheme ? "Toggle to dark mode" : "Toggle to light mode"
    );
});

// Scroll down arrow
document.querySelector("#scroll-down").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector("#projects").offsetTop - 45,
    });
});
