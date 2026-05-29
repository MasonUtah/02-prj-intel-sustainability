// Header slide transition script - moves with page scrolling
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const section = document.querySelector('section');
  
  if (!header || !section) return;
  
  // Get header height
  const headerHeight = header.offsetHeight;
  
  // Listen for scroll events to trigger minimization
  window.addEventListener('scroll', function() {
    // Check if section is in view (user scrolled past header)
    const sectionTop = section.getBoundingClientRect().top;
    
    // If section is near top of viewport, minimized the header
    if (sectionTop <= window.innerHeight) {
      header.classList.add('minimized');
    } else {
      header.classList.remove('minimized');
    }
  });
  
  // Trigger scroll event on load to set initial state
  window.dispatchEvent(new Event('scroll'));
});
