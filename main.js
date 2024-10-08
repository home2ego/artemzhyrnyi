const toggleTheme = document.querySelector('#toggle-theme');

// Set theme based on the default OS preferences
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (prefersLight) {
  document.documentElement.classList.add('light-theme'); // Apply system light-theme

  // Update aria-label
  toggleTheme.setAttribute('aria-label', 'Toggle to dark mode');
}

// Toggle theme and save preference on click
toggleTheme.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');

  // Update aria-label
  const isLightTheme = document.documentElement.classList.contains('light-theme');

  toggleTheme.setAttribute('aria-label', isLightTheme ? 'Toggle to dark mode' : 'Toggle to light mode');
});
