document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            console.log(`Navigating to: ${section}`);
            alert(`You clicked on ${section.charAt(0).toUpperCase() + section.slice(1)}`);
            nav.classList.remove('active');
        });
    });

    // Read more button
    const readMoreBtn = document.getElementById('readMoreBtn');
    readMoreBtn.addEventListener('click', function() {
        console.log('Read more clicked');
        alert('Opening full article: The Bright Future of Web 3.0?');
    });

    // Article click handlers
    const articles = document.querySelectorAll('[data-article]');
    articles.forEach(article => {
        article.addEventListener('click', function() {
            const articleId = this.getAttribute('data-article');
            console.log(`Opening article: ${articleId}`);
            const articleTitle = this.querySelector('h3').textContent;
            alert(`Opening article: ${articleTitle}`);
        });
    });

    // Add hover effects to articles
    articles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
            nav.classList.remove('active');
        }
    });
});