
// document.addEventListener("DOMContentLoaded", function() {
//   // Menu toggle functionality
//   const menuToggle = document.querySelector('.menu-toggle');
//   const navMenu = document.querySelector('nav ul');

//   if (menuToggle) {
//     menuToggle.addEventListener('click', function() {
//       navMenu.classList.toggle('active');
//       const icon = menuToggle.querySelector('i');
//       icon.classList.toggle('fa-bars');
//       icon.classList.toggle('fa-times');
//     });
//   }

//   // Close menu when clicking nav links
//   document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', function() {
//       navMenu.classList.remove('active');
//       const icon = menuToggle.querySelector('i');
//       icon.classList.add('fa-bars');
//       icon.classList.remove('fa-times');
//     });
//   });

//   // Fixed Typing Animation
//   function initTypingAnimation() {
//     const texts = ["Web Developer", "backend developer", "Java developer"];
//     const typingElement = document.querySelector('.typing-text');
    
//     if (!typingElement) {
//       console.error('Typing element not found!');
//       return;
//     }

//     let textIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     let typingSpeed = 100;

//     function type() {
//       const currentText = texts[textIndex];
      
//       if (isDeleting) {
//         // Remove character
//         typingElement.textContent = currentText.substring(0, charIndex - 1);
//         charIndex--;
//         typingSpeed = 50; // Faster when deleting
//       } else {
//         // Add character
//         typingElement.textContent = currentText.substring(0, charIndex + 1);
//         charIndex++;
//         typingSpeed = 100; // Normal typing speed
//       }

//       // Check if we've finished typing the current word
//       if (!isDeleting && charIndex === currentText.length) {
//         // Pause at the end of the word
//         typingSpeed = 1500;
//         isDeleting = true;
//       } else if (isDeleting && charIndex === 0) {
//         // Finished deleting, move to next word
//         isDeleting = false;
//         textIndex = (textIndex + 1) % texts.length;
//         typingSpeed = 500; // Pause before starting next word
//       }

//       setTimeout(type, typingSpeed);
//     }

//     // Start the animation after a brief delay
//     setTimeout(type, 1000);
//   }

//   // Initialize typing animation
//   initTypingAnimation();

//   // Smooth scrolling
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href');

//       if (targetId === "#") return;

//       const targetElement = document.querySelector(targetId);
//       if (targetElement) {
//         window.scrollTo({
//           top: targetElement.offsetTop - 80,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
// });



document.addEventListener("DOMContentLoaded", function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close menu when clicking nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Typing Animation (for homepage only)
    if (document.querySelector('.typing-text')) {
        const texts = ["Web Developer", "Backend Developer", "Java Developer"];
        const typingElement = document.querySelector('.typing-text');
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typingSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 1000);
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});