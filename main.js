const toggleTheme = document.querySelector('#toggle-theme');
const themeIcon = document.querySelector('#theme-icon');

// Function to update the icon and aria-label
function updateThemeIcon() {
  const isLightTheme = document.documentElement.classList.contains('light-theme');

  themeIcon.setAttribute('src', isLightTheme ? '/assets/moon.svg' : '/assets/sun.svg');
  toggleTheme.setAttribute('aria-label', isLightTheme ? 'Toggle to dark mode' : 'Toggle to light mode');
}

// Set theme based on the default OS preferences
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (prefersLight) {
  document.documentElement.classList.add('light-theme'); // Apply system light-theme

  // Update the icon and aria-label
  updateThemeIcon();
}

// Toggle theme and save preference on click
toggleTheme.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');

  // Update the icon and aria-label
  updateThemeIcon();
});
