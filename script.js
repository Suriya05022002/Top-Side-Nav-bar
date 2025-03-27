function checkAnswer(element, isCorrect) {
    let explanation = element.parentElement.nextElementSibling;
    
    if (isCorrect) {
        element.style.background = "#d4edda";
        element.style.border = "1px solid #155724";
    } else {
        element.style.background = "#f8d7da";
        element.style.border = "1px solid #721c24";
        explanation.style.display = "block";
    }
}

document.getElementById('sidebarToggle').addEventListener('click', function () {
    let sidebar = document.getElementById('sidebar');
    let content = document.querySelector('.content');
    let overlay = document.querySelector('.overlay');

    sidebar.classList.toggle('active');
    content.classList.toggle('expanded');
    
    // Toggle overlay for mobile
    if (window.innerWidth <= 480) {
        overlay.classList.toggle('active');
    }
});

// Close sidebar when clicking on overlay (mobile only)
document.querySelector('.overlay').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    let overlay = document.querySelector('.overlay');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Handle window resize
window.addEventListener('resize', function() {
    let sidebar = document.getElementById('sidebar');
    let overlay = document.querySelector('.overlay');
    
    // If window is resized larger than 480px and sidebar is open, close overlay
    if (window.innerWidth > 480 && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
    }
});
