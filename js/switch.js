// Check if a saved theme preference exists
const savedTheme = localStorage.getItem('theme');

// Set the initial theme based on the saved preference
if (savedTheme) {
  document.getElementById('theme-style').setAttribute('href', savedTheme);
}

// Add event listener to the mode switcher button
document.getElementById('mode-switcher').addEventListener('click', function() {
  const currentTheme = document.getElementById('theme-style').getAttribute('href');

  // Determine the new theme based on the current theme
  const newTheme = (currentTheme === 'css/style.css') ? 'css/dark.css' : 'css/style.css';
    
  // Update the theme style sheet
  document.getElementById('theme-style').setAttribute('href', newTheme);

  // Save the theme preference in local storage
  localStorage.setItem('theme', newTheme);
});
