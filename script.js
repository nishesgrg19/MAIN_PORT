
window.onload = function() {
    // Get all FAQ items
    var faqItems = document.querySelectorAll('.faq-item');
    console.log(faqItems)
    // Loop through each FAQ item
    for (var i = 0; i < faqItems.length; i++) {
        var question = faqItems[i].querySelector('.faq-question');
        
        // Use a closure to capture the current item
        (function(index) {
            question.onclick = function() {
                console.log('hello'); // This should now work
                
                // Get the parent faq-item using the captured index
                var currentItem = faqItems[index];
                
                // Check if current item is active
                var isActive = currentItem.classList.contains('active');
                
                // Close all FAQ items
                for (var j = 0; j < faqItems.length; j++) {
                    faqItems[j].classList.remove('active');
                }
                
                // If current wasn't active, open it
                if (!isActive) {
                    currentItem.classList.add('active');
                }
            };
        })(i);
    }
};


// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link (mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});