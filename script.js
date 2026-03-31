// Multi-Agent Portfolio Website Script

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll animation to agent cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const agentCards = document.querySelectorAll('.agent-card');
    agentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add agent-specific colors
    const agents = {
        laude: '#667eea',
        codex: '#4CAF50',
        clarity: '#FF6B6B',
        sentinel: '#FFA726',
        nexus: '#26C6DA'
    };
    
    // Update agent card borders with agent colors
    Object.keys(agents).forEach(agentId => {
        const card = document.querySelector(`#${agentId} .agent-card`);
        if (card) {
            card.style.borderLeft = `4px solid ${agents[agentId]}`;
        }
    });
    
    // Add page load animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Performance optimization: Lazy load images if added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console greeting for developers
console.log('🚀 Multi-Agent Portfolio Website loaded successfully!');
console.log('🎭 Built with coordination from Laude and specialized agents');
console.log('💻 Codex: Development & Structure');
console.log('🎨 Clarity: Design & Styling');
console.log('🛡️ Sentinel: Security & Optimization');
console.log('🔗 Nexus: Deployment & Integration');