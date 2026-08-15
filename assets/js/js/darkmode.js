// Dark Mode Toggle Functionality
function initDarkMode() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlElement = document.documentElement;
  
  if (!darkModeToggle) {
    console.warn('Dark mode toggle button not found');
    return;
  }
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-bs-theme', currentTheme);
  updateToggleIcon(currentTheme);
  
  // Toggle dark mode
  darkModeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });
  
  function updateToggleIcon(theme) {
    let icon = darkModeToggle.querySelector('i');
    if (!icon) {
      // Clear all children (removes <icon> placeholder) and create a real <i>
      darkModeToggle.innerHTML = '';
      icon = document.createElement('i');
      darkModeToggle.appendChild(icon);
    }
    icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
  initDarkMode();
}