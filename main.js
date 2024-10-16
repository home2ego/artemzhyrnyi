const toggleTheme = document.querySelector("#toggle-theme");

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

    // Save the user's preference in localStorage
    localStorage.setItem("isLightTheme", isLightTheme);
});
