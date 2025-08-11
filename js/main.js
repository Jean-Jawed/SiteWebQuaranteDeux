// Main JavaScript for Quarante-Deux Le Jeu website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Animate dice on hover
    const diceElements = document.querySelectorAll('.dice');
    diceElements.forEach(dice => {
        dice.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(15deg)';
        });
        
        dice.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to cards when they come into view
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.feature-card, .tip-card, .testimonial-card, .project-card, .contact-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated cards
    const cards = document.querySelectorAll('.feature-card, .tip-card, .testimonial-card, .project-card, .contact-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Add hover effect to special rules
    const specialRules = document.querySelectorAll('.special-rule');
    specialRules.forEach(rule => {
        rule.addEventListener('mouseenter', function() {
            if (!this.classList.contains('highlight')) {
                this.style.borderColor = '#4285f4';
            }
        });
        
        rule.addEventListener('mouseleave', function() {
            if (!this.classList.contains('highlight')) {
                this.style.borderColor = '#e8e8e8';
            }
        });
    });
});