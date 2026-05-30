   (function() {
        // Page Loader
        const loader = document.getElementById('pageLoader');
        if (loader) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    loader.classList.add('hidden');
                }, 500);
            });
        }

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
            // Close menu when clicking a link
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                });
            });
        }

        // Back to Top button
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        if (backToTop) {
            backToTop.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        
        function checkReveal() {
            const windowHeight = window.innerHeight;
            const revealThreshold = 100;
            
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - revealThreshold) {
                    element.classList.add('revealed');
                }
            });
        }
        
        window.addEventListener('scroll', checkReveal);
        window.addEventListener('load', checkReveal);
        checkReveal();

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });

        // Image lazy loading with fade-in effect
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            if (img.complete) {
                img.classList.add('loaded');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === "#" || href === "") return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar link active state on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === current) {
                    link.classList.add('active');
                }
            });
        });

        // Add hover animation to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
            });
        });

        // Animate skill cards on hover
        const skillCards = document.querySelectorAll('.skill-card, .service-card');
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Process steps stagger animation
        const steps = document.querySelectorAll('.step');
        if (steps.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 150);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            steps.forEach(step => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(30px)';
                step.style.transition = 'all 0.6s ease';
                observer.observe(step);
            });
        }

        // Prevent FAQ items from being closed when clicking answer (no action needed, just keeping behavior)
        console.log('Portfolio with animations loaded — Full Stack SEO Developer');
    })();