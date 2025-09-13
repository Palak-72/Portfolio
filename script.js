       // Rotating Developer Titles
const roles = ["Web Developer", "Full Stack Developer", "Java Developer"];
const roleElement = document.getElementById("animated-role");
let roleIndex = 0;

function typeRole(role) {
  let charIndex = 0;
  roleElement.textContent = '';
  
  function typeChar() {
    if (charIndex < role.length) {
      roleElement.textContent += role.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 80);
    }
  }

  typeChar();
}

function cycleRoles() {
  typeRole(roles[roleIndex]);
  roleIndex = (roleIndex + 1) % roles.length;
}

cycleRoles();
setInterval(cycleRoles, 4000); // Change every 4 seconds

// Initialize animations
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        // Initialize Vanta.js background
        VANTA.GLOBE({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x667eea,
            backgroundColor: 0x764ba2,
            size: 0.8
        });

        // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        };

        // Intersection Observer for skill bars
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.5});

        document.querySelectorAll('#skills').forEach(section => {
            observer.observe(section);
        });

        // Feather icons
        feather.replace();
