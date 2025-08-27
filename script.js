// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple contact form handler
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    this.reset();
});
