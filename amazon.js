
document.addEventListener('DOMContentLoaded', () => {
    // Handle menu toggle
    const menuIcon = document.querySelector('.panel-all i');
    const panelOptions = document.querySelectorAll('.panel-option');
    
    menuIcon.addEventListener('click', () => {
        panelOptions.forEach(option => {
            option.classList.toggle('active');
        });
    });

        // Scroll to top functionality
    const backToTopBtn = document.querySelector('.foot-panel1');
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
