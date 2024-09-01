



// Function to highlight the current page's navbar item
function highlightCurrentNavItem() {
    // Get the current page path
    const currentPage = window.location.pathname;  
    // Map the paths to the corresponding navbar items
    const navItems = {
      '/home.html': document.getElementById('nav-home'),
      '/profile.html': document.getElementById('nav-profile'),
    };
  
    // Remove the leading slash to match paths correctly
    const page = currentPage.substring(currentPage.lastIndexOf('/'));  
    // Add 'active' class (Bootstrap's class for bold text) to the current page's navbar item
    if (navItems[page]) {
      navItems[page].classList.add('fw-bold'); // Adding Bootstrap's 'fw-bold' class for bold text
    }
  }
  
  // Run the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', highlightCurrentNavItem);


