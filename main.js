// set the light-heme if the user's operating system or browser has the light-theme by default

const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (prefersLight) {
  document.documentElement.classList.add('light-theme');
}

// toggle the light-theme

document.querySelector('#toggle-theme').addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');
});
