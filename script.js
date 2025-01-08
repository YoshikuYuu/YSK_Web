// Function to enable hover animations only on desktop screens
function applyHoverEffect() {
    const buttons = document.querySelectorAll('.icon-button');
  
    // Check if the screen is desktop-sized
    if (window.innerWidth > 961) {
      buttons.forEach(button => {
        // Add hover effects
        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
      });
    } else {
      // Remove hover effects for non-desktop screens
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
        button.style.paddingRight = '0'; // Reset padding if resizing
      });
    }
  }
  
  // Hover effect handlers
  function handleMouseEnter(event) {
    const button = event.currentTarget;
    const text = button.getAttribute('data-text');
    button.style.paddingRight = `${text.length * 18}px`; // Adjust padding based on text length
  }
  
  function handleMouseLeave(event) {
    const button = event.currentTarget;
    button.style.paddingRight = '0'; // Reset padding
  }
  
  // Initial application of hover effect
  applyHoverEffect();
  
  // Reapply the logic when the window is resized
  window.addEventListener('resize', applyHoverEffect);
  